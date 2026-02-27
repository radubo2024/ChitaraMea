<?php
/**
 * Chords Dictionary API Endpoint
 * 
 * GET /api/chords.php - List all chords
 * GET /api/chords.php?name=Am - Get specific chord
 * GET /api/chords.php?root=A - Filter by root note
 * GET /api/chords.php?type=minor - Filter by type
 */

require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../config/database.php';

$db = getDB();

// Single chord by name
if (isset($_GET['name'])) {
    $stmt = $db->prepare("SELECT * FROM chords WHERE name = ?");
    $stmt->execute([$_GET['name']]);
    $chord = $stmt->fetch();
    
    if (!$chord) {
        http_response_code(404);
        echo json_encode(['error' => 'Chord not found']);
        exit;
    }
    
    $chord['positions'] = json_decode($chord['positions'], true);
    $chord['fingers'] = json_decode($chord['fingers'], true);
    $chord['open_strings'] = json_decode($chord['open_strings'], true);
    
    // Get songs that use this chord
    $songStmt = $db->prepare("
        SELECT s.id, s.title, s.slug, a.name as author_name, a.slug as author_slug
        FROM songs s
        JOIN authors a ON s.author_id = a.id
        JOIN song_chords sc ON s.id = sc.song_id
        WHERE sc.chord_id = ?
        ORDER BY s.title ASC
    ");
    $songStmt->execute([$chord['id']]);
    $chord['songs'] = $songStmt->fetchAll();
    
    echo json_encode($chord, JSON_UNESCAPED_UNICODE);
    exit;
}

// Filter by root note or type
$where = [];
$params = [];

if (!empty($_GET['root'])) {
    $where[] = "root_note = ?";
    $params[] = $_GET['root'];
}

if (!empty($_GET['type'])) {
    $where[] = "type = ?";
    $params[] = $_GET['type'];
}

$whereClause = count($where) > 0 ? 'WHERE ' . implode(' AND ', $where) : '';

$sql = "SELECT * FROM chords {$whereClause} ORDER BY root_note ASC, name ASC";
$stmt = $db->prepare($sql);
$stmt->execute($params);
$chords = $stmt->fetchAll();

foreach ($chords as &$chord) {
    $chord['positions'] = json_decode($chord['positions'], true);
    $chord['fingers'] = json_decode($chord['fingers'], true);
    $chord['open_strings'] = json_decode($chord['open_strings'], true);
}

echo json_encode($chords, JSON_UNESCAPED_UNICODE);
