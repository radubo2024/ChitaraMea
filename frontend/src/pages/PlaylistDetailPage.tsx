import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ListMusic, Trash2 } from 'lucide-react';
import { songsData } from '@/data';
import { usePlaylists } from '@/context/PlaylistsContext';
import SongCard from '@/components/SongCard';

export default function PlaylistDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { playlists, removeSongFromPlaylist } = usePlaylists();

  const playlist = useMemo(() => playlists.find((p) => p.id === id), [playlists, id]);

  const playlistSongs = useMemo(() => {
    if (!playlist) return [];
    return playlist.songIds
      .map((songId) => songsData.find((s) => s.id === songId))
      .filter((s): s is NonNullable<typeof s> => s !== undefined);
  }, [playlist]);

  if (!playlist) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-gray-400 text-lg">Playlistul nu a fost găsit</p>
        <Link to="/playlists" className="text-blue-600 hover:underline mt-4 inline-block">
          Înapoi la playlisturi
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/playlists" className="hover:text-blue-600 flex items-center gap-1">
          <ArrowLeft size={14} /> Playlisturi
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{playlist.name}</span>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
          <ListMusic size={28} className="text-purple-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{playlist.name}</h1>
          {playlist.description && (
            <p className="text-gray-500 mt-1">{playlist.description}</p>
          )}
          <p className="text-sm text-gray-400 mt-1">{playlistSongs.length} cântece</p>
        </div>
      </div>

      {playlistSongs.length === 0 ? (
        <div className="text-center py-16">
          <ListMusic size={48} className="mx-auto mb-4 text-gray-200" />
          <p className="text-gray-400 text-lg mb-2">Playlistul este gol</p>
          <p className="text-gray-400 text-sm mb-4">
            Adaugă cântece din pagina unui cântec
          </p>
          <Link
            to="/songs"
            className="inline-flex px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700"
          >
            Explorează cântece
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {playlistSongs.map((song, index) => (
            <div key={song.id} className="flex items-start gap-4">
              <span className="text-lg font-bold text-gray-300 mt-4 w-8 text-right shrink-0">
                {index + 1}
              </span>
              <div className="flex-1">
                <SongCard song={song} />
              </div>
              <button
                onClick={() => removeSongFromPlaylist(playlist.id, song.id)}
                className="mt-4 p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors shrink-0"
                title="Elimină din playlist"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
