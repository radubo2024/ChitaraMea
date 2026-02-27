import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Music, Users, FolderOpen, Guitar, ArrowRight, TrendingUp } from 'lucide-react';
import { songsData, authorsData, categoriesData, chordsData } from '@/data';
import SongCard from '@/components/SongCard';

export default function HomePage() {
  const stats = [
    { label: 'Cântece', value: songsData.length, icon: Music, color: 'blue', link: '/songs' },
    { label: 'Artiști', value: authorsData.length, icon: Users, color: 'green', link: '/authors' },
    { label: 'Categorii', value: categoriesData.length, icon: FolderOpen, color: 'purple', link: '/categories' },
    { label: 'Acorduri', value: chordsData.length, icon: Guitar, color: 'yellow', link: '/chords' },
  ];

  const popularSongs = songsData.slice(0, 6);

  // Compute category song counts dynamically from songs data
  const topCategories = useMemo(() => {
    const countMap = new Map<number, number>();
    songsData.forEach((song) => {
      song.categories.forEach((cat) => {
        countMap.set(cat.id, (countMap.get(cat.id) || 0) + 1);
      });
    });
    return categoriesData
      .map((cat) => ({ ...cat, song_count: countMap.get(cat.id) || 0 }))
      .filter((c) => c.song_count > 0)
      .slice(0, 6);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Acorduri și Tabulaturi pentru Chitară
          </h1>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Descoperă cântece românești cu versuri, acorduri și diagrame pentru chitară.
            Caută, salvează și creează playlisturi cu cântecele tale preferate.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/songs"
              className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Explorează Cântecele
            </Link>
            <Link
              to="/chords"
              className="px-6 py-3 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors border border-blue-500"
            >
              Dicționar Acorduri
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            const colorClasses: Record<string, string> = {
              blue: 'bg-blue-50 text-blue-600 border-blue-100',
              green: 'bg-green-50 text-green-600 border-green-100',
              purple: 'bg-purple-50 text-purple-600 border-purple-100',
              yellow: 'bg-yellow-50 text-yellow-600 border-yellow-100',
            };
            return (
              <Link
                key={stat.label}
                to={stat.link}
                className={`${colorClasses[stat.color]} border rounded-xl p-4 text-center hover:shadow-md transition-shadow`}
              >
                <Icon size={24} className="mx-auto mb-2" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-75">{stat.label}</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Categorii</h2>
          <Link to="/categories" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
            Vezi toate <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {topCategories.map((cat) => (
            <Link
              key={cat.id}
              to={`/categories/${cat.slug}`}
              className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FolderOpen size={20} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{cat.name}</h3>
                  <p className="text-xs text-gray-500">{cat.song_count} cântece</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Songs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <TrendingUp size={24} className="text-blue-600" />
            Cântece Populare
          </h2>
          <Link to="/songs" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
            Vezi toate <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularSongs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </section>
    </div>
  );
}
