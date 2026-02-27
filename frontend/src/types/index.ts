export interface Author {
  id: number;
  name: string;
  slug: string;
  song_count?: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  song_count?: number;
}

export interface ChordPosition {
  fret: number;
  string: number;
  finger: number;
}

export interface Chord {
  id: number;
  name: string;
  type: string;
  root_note: string;
  positions: ChordPosition[];
  open_strings?: number[];
  muted_strings?: number[];
  barre?: { fret: number; from_string: number; to_string: number } | null;
  start_fret?: number;
}

export interface Song {
  id: number;
  title: string;
  slug: string;
  content: string;
  author: Author;
  author_id?: number;
  categories: Category[];
  chords: string[];
  views?: number;
  created_at?: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  songIds: number[];
  createdAt: string;
  updatedAt: string;
}

export interface SearchResult {
  songs: Song[];
  authors: Author[];
}
