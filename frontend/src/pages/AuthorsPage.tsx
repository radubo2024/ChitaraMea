import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Users, Search } from 'lucide-react';
import { authorsData } from '@/data';

export default function AuthorsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAuthors = useMemo(() => {
    let authors = [...authorsData].sort((a, b) => a.name.localeCompare(b.name, 'ro'));
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      authors = authors.filter((a) => a.name.toLowerCase().includes(q));
    }
    return authors;
  }, [searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Artiști</h1>
      <p className="text-gray-500 mb-6">{authorsData.length} artiști</p>

      {/* Search */}
      <div className="relative max-w-md mb-6">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Caută artiști..."
          className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAuthors.map((author) => (
          <Link
            key={author.id}
            to={`/authors/${author.slug}`}
            className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-200 transition-colors">
                <Users size={18} className="text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                  {author.name}
                </h3>
                <p className="text-sm text-gray-500">{author.song_count || 0} cântece</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredAuthors.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">Nu am găsit artiști</p>
        </div>
      )}
    </div>
  );
}
