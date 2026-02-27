import { Guitar, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm">
            <Guitar size={16} className="text-blue-400" />
            <span>Chitara Mea</span>
            <span className="text-gray-600">|</span>
            <span>Acorduri și tabulaturi pentru chitară</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <span>Făcut cu</span>
            <Heart size={12} className="text-red-400" fill="currentColor" />
            <span>pentru iubitorii de muzică</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
