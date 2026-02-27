import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { songsData } from '@/data';
import { useFavorites } from '@/context/FavoritesContext';
import SongCard from '@/components/SongCard';

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  const favoriteSongs = useMemo(
    () => songsData.filter((s) => favorites.includes(s.id)),
    [favorites]
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center gap-3 mb-2">
        <Heart size={28} className="text-red-500" fill="currentColor" />
        <h1 className="text-3xl font-bold text-gray-900">Favorite</h1>
      </div>
      <p className="text-gray-500 mb-6">{favoriteSongs.length} cântece favorite</p>

      {favoriteSongs.length === 0 ? (
        <div className="text-center py-16">
          <Heart size={48} className="mx-auto mb-4 text-gray-200" />
          <p className="text-gray-400 text-lg mb-2">Nu ai cântece favorite încă</p>
          <p className="text-gray-400 text-sm mb-4">
            Apasă pe inima de lângă un cântec pentru a-l adăuga la favorite
          </p>
          <Link
            to="/songs"
            className="inline-flex px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700"
          >
            Explorează cântece
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoriteSongs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      )}
    </div>
  );
}
