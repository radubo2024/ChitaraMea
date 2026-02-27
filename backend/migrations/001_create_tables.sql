-- Guitar Tabs Application - Database Schema
-- MySQL compatible for cPanel hosting

SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;

-- Authors table
CREATE TABLE IF NOT EXISTS `authors` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NOT NULL UNIQUE,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_authors_slug` (`slug`),
    INDEX `idx_authors_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Categories table
CREATE TABLE IF NOT EXISTS `categories` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NOT NULL UNIQUE,
    `description` TEXT,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_categories_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Chords dictionary table
CREATE TABLE IF NOT EXISTS `chords` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(20) NOT NULL UNIQUE,
    `type` VARCHAR(50) DEFAULT NULL COMMENT 'major, minor, 7th, etc.',
    `root_note` VARCHAR(5) NOT NULL COMMENT 'A, B, C, D, E, F, G',
    `positions` JSON DEFAULT NULL COMMENT 'Fret positions for guitar diagram',
    `fingers` JSON DEFAULT NULL COMMENT 'Finger positions',
    `open_strings` JSON DEFAULT NULL COMMENT 'Open/muted strings',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_chords_name` (`name`),
    INDEX `idx_chords_root` (`root_note`),
    INDEX `idx_chords_type` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Songs table
CREATE TABLE IF NOT EXISTS `songs` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(500) NOT NULL,
    `slug` VARCHAR(500) NOT NULL,
    `author_id` INT NOT NULL,
    `content` TEXT NOT NULL COMMENT 'Full song content with chord positions (pre-formatted)',
    `source_url` VARCHAR(500) DEFAULT NULL,
    `contributor` VARCHAR(255) DEFAULT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`author_id`) REFERENCES `authors`(`id`) ON DELETE CASCADE,
    INDEX `idx_songs_slug` (`slug`(191)),
    INDEX `idx_songs_title` (`title`(191)),
    INDEX `idx_songs_author` (`author_id`),
    FULLTEXT INDEX `idx_songs_fulltext` (`title`, `content`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Song-Category relationship (many-to-many)
CREATE TABLE IF NOT EXISTS `song_categories` (
    `song_id` INT NOT NULL,
    `category_id` INT NOT NULL,
    PRIMARY KEY (`song_id`, `category_id`),
    FOREIGN KEY (`song_id`) REFERENCES `songs`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Song-Chord relationship (which chords are used in each song)
CREATE TABLE IF NOT EXISTS `song_chords` (
    `song_id` INT NOT NULL,
    `chord_id` INT NOT NULL,
    PRIMARY KEY (`song_id`, `chord_id`),
    FOREIGN KEY (`song_id`) REFERENCES `songs`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`chord_id`) REFERENCES `chords`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
