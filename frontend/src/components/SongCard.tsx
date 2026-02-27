import { Link } from 'react-router-dom';
import { Heart, Music } from 'lucide-react';
import type { Song } from '@/types';
import { useFavorites } from '@/context/FavoritesContext';
import ChordTag from './ChordTag';

interface SongCardProps {
  song: Song;
}

export default function SongCard({ song }: SongCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(song.id);

  return (
    <div className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow p-4">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <Link
            to={`/songs/${song.slug}`}
            className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-1"
          >
            {song.title}
          </Link>
          <Link
            to={`/authors/${song.author.slug}`}
            className="text-sm text-gray-500 hover:text-gray-700 mt-0.5 block"
          >
            <span className="flex items-center gap-1">
              <Music size={12} />
              {song.author.name}
            </span>
          </Link>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(song.id);
          }}
          className={`shrink-0 p-1.5 rounded-lg transition-colors ${
            favorite ? 'text-red-500 hover:bg-red-50' : 'text-gray-300 hover:text-red-400 hover:bg-red-50'
          }`}
          title={favorite ? 'Elimină de la favorite' : 'Adaugă la favorite'}
        >
          <Heart size={18} fill={favorite ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Chord tags */}
      {song.chords.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {song.chords.slice(0, 8).map((chord) => (
            <ChordTag key={chord} name={chord} />
          ))}
          {song.chords.length > 8 && (
            <span className="text-xs text-gray-400 self-center">+{song.chords.length - 8}</span>
          )}
        </div>
      )}

      {/* Categories */}
      {song.categories.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {song.categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/categories/${cat.slug}`}
              className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full hover:bg-gray-200 transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
