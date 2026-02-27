import { Link } from 'react-router-dom';
import { FolderOpen } from 'lucide-react';
import { categoriesData } from '@/data';

export default function CategoriesPage() {
  const sortedCategories = [...categoriesData].sort((a, b) => a.name.localeCompare(b.name, 'ro'));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Categorii</h1>
      <p className="text-gray-500 mb-6">{categoriesData.length} categorii de cântece</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedCategories.map((cat) => (
          <Link
            key={cat.id}
            to={`/categories/${cat.slug}`}
            className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-purple-200 transition-colors">
                <FolderOpen size={24} className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                  {cat.name}
                </h3>
                {cat.description && (
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{cat.description}</p>
                )}
                <p className="text-sm text-purple-600 font-medium mt-2">
                  {cat.song_count || 0} cântece
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
