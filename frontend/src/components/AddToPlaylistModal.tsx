import { useState } from 'react';
import { X, Plus, Check, ListMusic } from 'lucide-react';
import { usePlaylists } from '@/context/PlaylistsContext';

interface AddToPlaylistModalProps {
  songId: number;
  songTitle: string;
  onClose: () => void;
}

export default function AddToPlaylistModal({ songId, songTitle, onClose }: AddToPlaylistModalProps) {
  const { playlists, createPlaylist, addSongToPlaylist, removeSongFromPlaylist, isSongInPlaylist } = usePlaylists();
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const handleCreate = () => {
    if (newName.trim()) {
      const playlist = createPlaylist(newName.trim(), newDesc.trim());
      addSongToPlaylist(playlist.id, songId);
      setNewName('');
      setNewDesc('');
      setShowCreate(false);
    }
  };

  const handleToggle = (playlistId: string) => {
    if (isSongInPlaylist(playlistId, songId)) {
      removeSongFromPlaylist(playlistId, songId);
    } else {
      addSongToPlaylist(playlistId, songId);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-96 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div>
            <h3 className="font-semibold text-gray-900">Adaugă la playlist</h3>
            <p className="text-xs text-gray-500 mt-0.5 truncate max-w-64">{songTitle}</p>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-gray-100 text-gray-400">
            <X size={20} />
          </button>
        </div>

        <div className="p-4 overflow-y-auto max-h-60">
          {playlists.length === 0 && !showCreate && (
            <div className="text-center py-6 text-gray-500">
              <ListMusic size={32} className="mx-auto mb-2 text-gray-300" />
              <p className="text-sm">Nu ai niciun playlist încă</p>
            </div>
          )}

          {playlists.map((pl) => {
            const inPlaylist = isSongInPlaylist(pl.id, songId);
            return (
              <button
                key={pl.id}
                onClick={() => handleToggle(pl.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors mb-1 ${
                  inPlaylist ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${
                    inPlaylist ? 'bg-blue-600 border-blue-600' : 'border-gray-300'
                  }`}
                >
                  {inPlaylist && <Check size={14} className="text-white" />}
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm truncate">{pl.name}</p>
                  <p className="text-xs text-gray-400">{pl.songIds.length} cântece</p>
                </div>
              </button>
            );
          })}

          {showCreate ? (
            <div className="mt-2 p-3 border border-gray-200 rounded-lg bg-gray-50">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Numele playlistului"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                autoFocus
              />
              <input
                type="text"
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                placeholder="Descriere (opțional)"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleCreate}
                  disabled={!newName.trim()}
                  className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Creează
                </button>
                <button
                  onClick={() => setShowCreate(false)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
                >
                  Anulează
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowCreate(true)}
              className="w-full flex items-center gap-2 p-3 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors text-sm font-medium mt-1"
            >
              <Plus size={18} />
              Playlist nou
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
