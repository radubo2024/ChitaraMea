<?php
/**
 * Songs API Endpoint
 * 
 * GET /api/songs.php - List all songs (with search, filter by category/author)
 * GET /api/songs.php?id=X - Get single song with details
 * GET /api/songs.php?slug=X - Get single song by slug
 */

require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../config/database.php';

$db = getDB();

// Single song by ID or slug
if (isset($_GET['id']) || isset($_GET['slug'])) {
    $song = null;
    
    if (isset($_GET['id'])) {
        $stmt = $db->prepare("
            SELECT s.*, a.name as author_name, a.slug as author_slug
            FROM songs s
            JOIN authors a ON s.author_id = a.id
            WHERE s.id = ?
        ");
        $stmt->execute([(int)$_GET['id']]);
    } else {
        $stmt = $db->prepare("
            SELECT s.*, a.name as author_name, a.slug as author_slug
            FROM songs s
            JOIN authors a ON s.author_id = a.id
            WHERE s.slug = ?
        ");
        $stmt->execute([$_GET['slug']]);
    }
    
    $song = $stmt->fetch();
    
    if (!$song) {
        http_response_code(404);
        echo json_encode(['error' => 'Song not found']);
        exit;
    }
    
    // Get categories for this song
    $catStmt = $db->prepare("
        SELECT c.id, c.name, c.slug
        FROM categories c
        JOIN song_categories sc ON c.id = sc.category_id
        WHERE sc.song_id = ?
    ");
    $catStmt->execute([$song['id']]);
    $song['categories'] = $catStmt->fetchAll();
    
    // Get chords used in this song
    $chordStmt = $db->prepare("
        SELECT ch.id, ch.name, ch.type, ch.root_note, ch.positions, ch.fingers, ch.open_strings
        FROM chords ch
        JOIN song_chords sc ON ch.id = sc.chord_id
        WHERE sc.song_id = ?
        ORDER BY ch.name
    ");
    $chordStmt->execute([$song['id']]);
    $chords = $chordStmt->fetchAll();
    
    // Parse JSON fields
    foreach ($chords as &$chord) {
        $chord['positions'] = json_decode($chord['positions'], true);
        $chord['fingers'] = json_decode($chord['fingers'], true);
        $chord['open_strings'] = json_decode($chord['open_strings'], true);
    }
    $song['chords'] = $chords;
    
    echo json_encode($song, JSON_UNESCAPED_UNICODE);
    exit;
}

// List songs with filters
$where = [];
$params = [];
$joins = "";

// Search filter
if (!empty($_GET['search'])) {
    $search = '%' . $_GET['search'] . '%';
    $where[] = "(s.title LIKE ? OR a.name LIKE ? OR s.content LIKE ?)";
    $params[] = $search;
    $params[] = $search;
    $params[] = $search;
}

// Category filter
if (!empty($_GET['category'])) {
    $joins .= " JOIN song_categories sc ON s.id = sc.song_id JOIN categories c ON sc.category_id = c.id";
    $where[] = "c.slug = ?";
    $params[] = $_GET['category'];
}

// Author filter
if (!empty($_GET['author'])) {
    $where[] = "a.slug = ?";
    $params[] = $_GET['author'];
}

// Letter filter
if (!empty($_GET['letter'])) {
    $where[] = "s.title LIKE ?";
    $params[] = $_GET['letter'] . '%';
}

$whereClause = count($where) > 0 ? 'WHERE ' . implode(' AND ', $where) : '';

// Pagination
$page = max(1, (int)($_GET['page'] ?? 1));
$limit = min(100, max(1, (int)($_GET['limit'] ?? 20)));
$offset = ($page - 1) * $limit;

// Count total
$countSql = "SELECT COUNT(DISTINCT s.id) as total FROM songs s JOIN authors a ON s.author_id = a.id {$joins} {$whereClause}";
$countStmt = $db->prepare($countSql);
$countStmt->execute($params);
$total = (int)$countStmt->fetch()['total'];

// Get songs
$sql = "
    SELECT DISTINCT s.id, s.title, s.slug, s.contributor, s.created_at,
           a.name as author_name, a.slug as author_slug
    FROM songs s
    JOIN authors a ON s.author_id = a.id
    {$joins}
    {$whereClause}
    ORDER BY s.title ASC
    LIMIT {$limit} OFFSET {$offset}
";

$stmt = $db->prepare($sql);
$stmt->execute($params);
$songs = $stmt->fetchAll();

// Add categories to each song
foreach ($songs as &$song) {
    $catStmt = $db->prepare("
        SELECT c.id, c.name, c.slug
        FROM categories c
        JOIN song_categories sc ON c.id = sc.category_id
        WHERE sc.song_id = ?
    ");
    $catStmt->execute([$song['id']]);
    $song['categories'] = $catStmt->fetchAll();
}

echo json_encode([
    'data' => $songs,
    'pagination' => [
        'page' => $page,
        'limit' => $limit,
        'total' => $total,
        'pages' => ceil($total / $limit)
    ]
], JSON_UNESCAPED_UNICODE);
