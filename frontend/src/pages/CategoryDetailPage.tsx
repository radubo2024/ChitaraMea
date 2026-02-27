import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FolderOpen } from 'lucide-react';
import { songsData, categoriesData } from '@/data';
import SongCard from '@/components/SongCard';

export default function CategoryDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const category = useMemo(() => categoriesData.find((c) => c.slug === slug), [slug]);

  const categorySongs = useMemo(() => {
    if (!category) return [];
    return songsData.filter((s) => s.categories.some((c) => c.id === category.id));
  }, [category]);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-gray-400 text-lg">Categoria nu a fost găsită</p>
        <Link to="/categories" className="text-blue-600 hover:underline mt-4 inline-block">
          Înapoi la categorii
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/categories" className="hover:text-blue-600 flex items-center gap-1">
          <ArrowLeft size={14} /> Categorii
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{category.name}</span>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
          <FolderOpen size={28} className="text-purple-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
          {category.description && (
            <p className="text-gray-500 mt-1">{category.description}</p>
          )}
          <p className="text-sm text-gray-400 mt-1">{categorySongs.length} cântece</p>
        </div>
      </div>

      {categorySongs.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">Nu am găsit cântece în această categorie</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categorySongs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      )}
    </div>
  );
}
