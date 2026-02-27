import { Music } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-bold text-lg mb-3">
              <Music size={20} />
              Acorduri.ro
            </div>
            <p className="text-sm text-gray-500">
              Acorduri și tabulaturi pentru chitară. Cântece românești cu versuri și acorduri.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Navigare</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/songs" className="text-gray-500 hover:text-blue-600">Cântece</Link></li>
              <li><Link to="/categories" className="text-gray-500 hover:text-blue-600">Categorii</Link></li>
              <li><Link to="/authors" className="text-gray-500 hover:text-blue-600">Artiști</Link></li>
              <li><Link to="/chords" className="text-gray-500 hover:text-blue-600">Dicționar Acorduri</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Colecția ta</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/favorites" className="text-gray-500 hover:text-blue-600">Favorite</Link></li>
              <li><Link to="/playlists" className="text-gray-500 hover:text-blue-600">Playlisturi</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Acorduri.ro - Toate drepturile rezervate
        </div>
      </div>
    </footer>
  );
}
