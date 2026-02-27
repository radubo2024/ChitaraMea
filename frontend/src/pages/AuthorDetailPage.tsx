import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users } from 'lucide-react';
import { songsData, authorsData } from '@/data';
import SongCard from '@/components/SongCard';

export default function AuthorDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const author = useMemo(() => authorsData.find((a) => a.slug === slug), [slug]);

  const authorSongs = useMemo(() => {
    if (!author) return [];
    return songsData.filter((s) => s.author.id === author.id);
  }, [author]);

  if (!author) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-gray-400 text-lg">Artistul nu a fost găsit</p>
        <Link to="/authors" className="text-blue-600 hover:underline mt-4 inline-block">
          Înapoi la artiști
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/authors" className="hover:text-blue-600 flex items-center gap-1">
          <ArrowLeft size={14} /> Artiști
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{author.name}</span>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
          <Users size={28} className="text-green-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{author.name}</h1>
          <p className="text-sm text-gray-400 mt-1">{authorSongs.length} cântece</p>
        </div>
      </div>

      {authorSongs.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">Nu am găsit cântece de la acest artist</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {authorSongs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      )}
    </div>
  );
}
