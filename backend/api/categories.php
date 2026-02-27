<?php
/**
 * Categories API Endpoint
 * 
 * GET /api/categories.php - List all categories with song counts
 * GET /api/categories.php?slug=X - Get category with its songs
 */

require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../config/database.php';

$db = getDB();

if (isset($_GET['slug'])) {
    $stmt = $db->prepare("SELECT * FROM categories WHERE slug = ?");
    $stmt->execute([$_GET['slug']]);
    $category = $stmt->fetch();
    
    if (!$category) {
        http_response_code(404);
        echo json_encode(['error' => 'Category not found']);
        exit;
    }
    
    echo json_encode($category, JSON_UNESCAPED_UNICODE);
    exit;
}

// List all categories with song counts
$stmt = $db->query("
    SELECT c.*, COUNT(sc.song_id) as song_count
    FROM categories c
    LEFT JOIN song_categories sc ON c.id = sc.category_id
    GROUP BY c.id
    ORDER BY song_count DESC, c.name ASC
");

echo json_encode($stmt->fetchAll(), JSON_UNESCAPED_UNICODE);
