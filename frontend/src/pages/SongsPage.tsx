import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { songsData } from '@/data';
import SongCard from '@/components/SongCard';

const ITEMS_PER_PAGE = 12;
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function SongsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialLetter = searchParams.get('letter') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [activeLetter, setActiveLetter] = useState(initialLetter);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredSongs = useMemo(() => {
    let songs = [...songsData];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      songs = songs.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.author.name.toLowerCase().includes(q) ||
          s.chords.some((c) => c.toLowerCase().includes(q))
      );
    }

    if (activeLetter) {
      songs = songs.filter((s) => s.title.toUpperCase().startsWith(activeLetter));
    }

    return songs.sort((a, b) => a.title.localeCompare(b.title, 'ro'));
  }, [searchQuery, activeLetter]);

  const totalPages = Math.ceil(filteredSongs.length / ITEMS_PER_PAGE);
  const paginatedSongs = filteredSongs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleLetterClick = (letter: string) => {
    const newLetter = activeLetter === letter ? '' : letter;
    setActiveLetter(newLetter);
    setCurrentPage(1);
    if (newLetter) {
      setSearchParams({ letter: newLetter });
    } else {
      setSearchParams({});
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Cântece</h1>
      <p className="text-gray-500 mb-6">
        {filteredSongs.length} cântece {searchQuery && `pentru "${searchQuery}"`}{' '}
        {activeLetter && `începând cu "${activeLetter}"`}
      </p>

      {/* Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Caută după titlu, artist sau acord..."
            className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        {(searchQuery || activeLetter) && (
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveLetter('');
              setCurrentPage(1);
              setSearchParams({});
            }}
            className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-600 hover:bg-gray-50"
          >
            <Filter size={14} />
            Resetează filtrele
          </button>
        )}
      </div>

      {/* Letter Filter */}
      <div className="flex flex-wrap gap-1 mb-6">
        {LETTERS.map((letter) => (
          <button
            key={letter}
            onClick={() => handleLetterClick(letter)}
            className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors ${
              activeLetter === letter
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Songs Grid */}
      {paginatedSongs.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">Nu am găsit niciun cântec</p>
          <p className="text-gray-400 text-sm mt-1">Încearcă să modifici criteriile de căutare</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedSongs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Anterior
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-lg text-sm font-medium ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Următor
          </button>
        </div>
      )}
    </div>
  );
}
