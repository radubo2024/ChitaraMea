import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ListMusic, Plus, Trash2, Edit2, Check, X, Music } from 'lucide-react';
import { usePlaylists } from '@/context/PlaylistsContext';

export default function PlaylistsPage() {
  const { playlists, createPlaylist, deletePlaylist, updatePlaylist } = usePlaylists();
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editDesc, setEditDesc] = useState('');

  const handleCreate = () => {
    if (newName.trim()) {
      createPlaylist(newName.trim(), newDesc.trim());
      setNewName('');
      setNewDesc('');
      setShowCreate(false);
    }
  };

  const handleStartEdit = (id: string, name: string, description: string) => {
    setEditingId(id);
    setEditName(name);
    setEditDesc(description);
  };

  const handleSaveEdit = () => {
    if (editingId && editName.trim()) {
      updatePlaylist(editingId, { name: editName.trim(), description: editDesc.trim() });
      setEditingId(null);
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Ești sigur că vrei să ștergi acest playlist?')) {
      deletePlaylist(id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <ListMusic size={28} className="text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-900">Playlisturi</h1>
          </div>
          <p className="text-gray-500">{playlists.length} playlisturi</p>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-purple-600 text-white rounded-xl text-sm font-medium hover:bg-purple-700 transition-colors"
        >
          <Plus size={16} />
          Playlist nou
        </button>
      </div>

      {/* Create form */}
      {showCreate && (
        <div className="bg-white rounded-xl border border-purple-200 p-4 mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Playlist nou</h3>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Numele playlistului"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2"
            autoFocus
          />
          <input
            type="text"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            placeholder="Descriere (opțional)"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 mb-3"
          />
          <div className="flex gap-2">
            <button
              onClick={handleCreate}
              disabled={!newName.trim()}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Creează
            </button>
            <button
              onClick={() => { setShowCreate(false); setNewName(''); setNewDesc(''); }}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
            >
              Anulează
            </button>
          </div>
        </div>
      )}

      {/* Playlists list */}
      {playlists.length === 0 && !showCreate ? (
        <div className="text-center py-16">
          <ListMusic size={48} className="mx-auto mb-4 text-gray-200" />
          <p className="text-gray-400 text-lg mb-2">Nu ai playlisturi încă</p>
          <p className="text-gray-400 text-sm mb-4">
            Creează un playlist și adaugă cântecele tale preferate
          </p>
          <button
            onClick={() => setShowCreate(true)}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-purple-600 text-white rounded-xl text-sm font-medium hover:bg-purple-700"
          >
            <Plus size={16} />
            Creează primul playlist
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {playlists.map((pl) => (
            <div
              key={pl.id}
              className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow overflow-hidden"
            >
              {editingId === pl.id ? (
                <div className="p-4">
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2"
                    autoFocus
                  />
                  <input
                    type="text"
                    value={editDesc}
                    onChange={(e) => setEditDesc(e.target.value)}
                    placeholder="Descriere"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveEdit}
                      className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                    >
                      <Check size={16} />
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="p-2 text-gray-400 hover:bg-gray-50 rounded-lg"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Link to={`/playlists/${pl.id}`} className="block p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                        <Music size={18} className="text-purple-600" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-gray-900 line-clamp-1">{pl.name}</h3>
                        {pl.description && (
                          <p className="text-sm text-gray-500 line-clamp-1 mt-0.5">{pl.description}</p>
                        )}
                        <p className="text-xs text-gray-400 mt-1">{pl.songIds.length} cântece</p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex items-center gap-1 px-4 pb-3">
                    <button
                      onClick={() => handleStartEdit(pl.id, pl.name, pl.description)}
                      className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Editează"
                    >
                      <Edit2 size={14} />
                    </button>
                    <button
                      onClick={() => handleDelete(pl.id)}
                      className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Șterge"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
