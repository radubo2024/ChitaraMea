<?php
/**
 * Authors API Endpoint
 * 
 * GET /api/authors.php - List all authors with song counts
 * GET /api/authors.php?slug=X - Get author details
 */

require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../config/database.php';

$db = getDB();

if (isset($_GET['slug'])) {
    $stmt = $db->prepare("
        SELECT a.*, COUNT(s.id) as song_count
        FROM authors a
        LEFT JOIN songs s ON a.id = s.author_id
        WHERE a.slug = ?
        GROUP BY a.id
    ");
    $stmt->execute([$_GET['slug']]);
    $author = $stmt->fetch();
    
    if (!$author) {
        http_response_code(404);
        echo json_encode(['error' => 'Author not found']);
        exit;
    }
    
    echo json_encode($author, JSON_UNESCAPED_UNICODE);
    exit;
}

// Search filter
$where = '';
$params = [];
if (!empty($_GET['search'])) {
    $where = 'WHERE a.name LIKE ?';
    $params[] = '%' . $_GET['search'] . '%';
}

// Letter filter
if (!empty($_GET['letter'])) {
    $where = $where ? $where . ' AND a.name LIKE ?' : 'WHERE a.name LIKE ?';
    $params[] = $_GET['letter'] . '%';
}

$sql = "
    SELECT a.*, COUNT(s.id) as song_count
    FROM authors a
    LEFT JOIN songs s ON a.id = s.author_id
    {$where}
    GROUP BY a.id
    ORDER BY a.name ASC
";

$stmt = $db->prepare($sql);
$stmt->execute($params);

echo json_encode($stmt->fetchAll(), JSON_UNESCAPED_UNICODE);
