<?php
/**
 * Search API Endpoint - Fulltext search across songs, authors
 * 
 * GET /api/search.php?q=query - Search songs and authors
 */

require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../config/database.php';

$db = getDB();

$query = $_GET['q'] ?? '';

if (empty($query) || strlen($query) < 2) {
    echo json_encode(['songs' => [], 'authors' => []], JSON_UNESCAPED_UNICODE);
    exit;
}

$searchTerm = '%' . $query . '%';

// Search songs
$songStmt = $db->prepare("
    SELECT s.id, s.title, s.slug, a.name as author_name, a.slug as author_slug
    FROM songs s
    JOIN authors a ON s.author_id = a.id
    WHERE s.title LIKE ? OR a.name LIKE ?
    ORDER BY 
        CASE 
            WHEN s.title LIKE ? THEN 1
            WHEN a.name LIKE ? THEN 2
            ELSE 3
        END,
        s.title ASC
    LIMIT 20
");

$exactTerm = $query . '%';
$songStmt->execute([$searchTerm, $searchTerm, $exactTerm, $exactTerm]);
$songs = $songStmt->fetchAll();

// Search authors
$authorStmt = $db->prepare("
    SELECT a.id, a.name, a.slug, COUNT(s.id) as song_count
    FROM authors a
    LEFT JOIN songs s ON a.id = s.author_id
    WHERE a.name LIKE ?
    GROUP BY a.id
    ORDER BY a.name ASC
    LIMIT 10
");
$authorStmt->execute([$searchTerm]);
$authors = $authorStmt->fetchAll();

echo json_encode([
    'songs' => $songs,
    'authors' => $authors
], JSON_UNESCAPED_UNICODE);
