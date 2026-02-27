import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ListPlus, Printer, ArrowLeft, Music } from 'lucide-react';
import { songsData, chordsData } from '@/data';
import { useFavorites } from '@/context/FavoritesContext';
import SongContent from '@/components/SongContent';
import ChordDiagram from '@/components/ChordDiagram';
import ChordTag from '@/components/ChordTag';
import StrummingPattern from '@/components/StrummingPattern';
import AddToPlaylistModal from '@/components/AddToPlaylistModal';

export default function SongDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);

  const song = useMemo(() => songsData.find((s) => s.slug === slug), [slug]);

  const songChords = useMemo(() => {
    if (!song) return [];
    return song.chords
      .map((name) => chordsData.find((c) => c.name === name))
      .filter((c): c is NonNullable<typeof c> => c !== undefined);
  }, [song]);

  const relatedSongs = useMemo(() => {
    if (!song) return [];
    return songsData
      .filter((s) => s.id !== song.id && s.author.id === song.author.id)
      .slice(0, 5);
  }, [song]);

  if (!song) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-gray-400 text-lg">Cântecul nu a fost găsit</p>
        <Link to="/songs" className="text-blue-600 hover:underline mt-4 inline-block">
          Înapoi la cântece
        </Link>
      </div>
    );
  }

  const favorite = isFavorite(song.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/songs" className="hover:text-blue-600 flex items-center gap-1">
          <ArrowLeft size={14} /> Cântece
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium truncate">{song.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{song.title}</h1>
            <Link
              to={`/authors/${song.author.slug}`}
              className="text-gray-500 hover:text-blue-600 flex items-center gap-1.5 text-sm"
            >
              <Music size={14} />
              {song.author.name}
            </Link>

            {/* Categories */}
            {song.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {song.categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/categories/${cat.slug}`}
                    className="text-xs text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full hover:bg-purple-100"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center gap-2 mt-4 no-print">
              <button
                onClick={() => toggleFavorite(song.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  favorite
                    ? 'bg-red-50 text-red-600 hover:bg-red-100'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Heart size={16} fill={favorite ? 'currentColor' : 'none'} />
                {favorite ? 'Favorit' : 'Adaugă la favorite'}
              </button>
              <button
                onClick={() => setShowPlaylistModal(true)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <ListPlus size={16} />
                Playlist
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <Printer size={16} />
                Printează
              </button>
            </div>
          </div>

          {/* Chords used */}
          {song.chords.length > 0 && (
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Acorduri folosite
              </h2>
              <div className="flex flex-wrap gap-2">
                {song.chords.map((chord) => (
                  <ChordTag key={chord} name={chord} />
                ))}
              </div>
            </div>
          )}

          {/* Strumming Pattern */}
          {song.strumming && song.strumming.length > 0 && (
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Ritm (Strumming)
              </h2>
              <StrummingPattern patterns={song.strumming} />
            </div>
          )}

          {/* Song Content */}
          <SongContent content={song.content} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 no-print">
          {/* Chord Diagrams */}
          {songChords.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Diagrame Acorduri</h3>
              <div className="grid grid-cols-2 gap-4">
                {songChords.map((chord) => (
                  <div key={chord.id} className="text-center">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-sm font-bold text-blue-600 mb-1">{chord.name}</span>
                      <ChordDiagram chord={chord} size="sm" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Songs */}
          {relatedSongs.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-4">
                Alte cântece de {song.author.name}
              </h3>
              <div className="space-y-2">
                {relatedSongs.map((s) => (
                  <Link
                    key={s.id}
                    to={`/songs/${s.slug}`}
                    className="block p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <p className="text-sm font-medium text-gray-900 line-clamp-1">{s.title}</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {s.chords.slice(0, 4).map((c) => (
                        <span key={c} className="text-xs text-gray-400">{c}</span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Playlist Modal */}
      {showPlaylistModal && (
        <AddToPlaylistModal
          songId={song.id}
          songTitle={song.title}
          onClose={() => setShowPlaylistModal(false)}
        />
      )}
    </div>
  );
}
