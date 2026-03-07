import { useMemo, useState, useRef, useCallback, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ListPlus, Printer, ArrowLeft, Music, Play, Pause, Minus, Plus } from 'lucide-react';
import { songsData, chordsData } from '@/data';
import { useFavorites } from '@/context/FavoritesContext';
import SongContent from '@/components/SongContent';
import ChordDiagram from '@/components/ChordDiagram';
import ChordTag from '@/components/ChordTag';
import StrummingPattern from '@/components/StrummingPattern';
import AddToPlaylistModal from '@/components/AddToPlaylistModal';

export default function SongDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(10); // pixels per second
  const scrollRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const accumulatedScrollRef = useRef<number>(0);
  const delayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const songContentRef = useRef<HTMLDivElement | null>(null);

  const song = useMemo(() => songsData.find((s) => s.slug === slug), [slug]);

  const songChords = useMemo(() => {
    if (!song) return [];
    return song.chords
      .map((name) => chordsData.find((c) => c.name === name))
      .filter((c): c is NonNullable<typeof c> => c !== undefined);
  }, [song]);

  const relatedSongs = useMemo(() => {
    if (!song) return [];
    return songsData
      .filter((s) => s.id !== song.id && s.author.id === song.author.id)
      .slice(0, 5);
  }, [song]);

  const stopAutoScroll = useCallback(() => {
    if (scrollRef.current !== null) {
      cancelAnimationFrame(scrollRef.current);
      scrollRef.current = null;
    }
    if (delayTimerRef.current !== null) {
      clearTimeout(delayTimerRef.current);
      delayTimerRef.current = null;
    }
    lastTimestampRef.current = null;
    accumulatedScrollRef.current = 0;
    setIsAutoScrolling(false);
  }, []);

  const startAutoScroll = useCallback(() => {
    setIsAutoScrolling(true);
  }, []);

  const toggleAutoScroll = useCallback(() => {
    if (isAutoScrolling) {
      stopAutoScroll();
    } else {
      startAutoScroll();
    }
  }, [isAutoScrolling, stopAutoScroll, startAutoScroll]);

  const runScrollLoop = useCallback(() => {
    lastTimestampRef.current = null;
    accumulatedScrollRef.current = 0;

    const scroll = (timestamp: number) => {
      if (lastTimestampRef.current !== null) {
        const delta = (timestamp - lastTimestampRef.current) / 1000;
        accumulatedScrollRef.current += scrollSpeed * delta;

        const pixels = Math.floor(accumulatedScrollRef.current);
        if (pixels >= 1) {
          window.scrollBy(0, pixels);
          accumulatedScrollRef.current -= pixels;
        }

        if (songContentRef.current) {
          const rect = songContentRef.current.getBoundingClientRect();
          if (rect.bottom <= window.innerHeight) {
            stopAutoScroll();
            return;
          }
        }
      }
      lastTimestampRef.current = timestamp;
      scrollRef.current = requestAnimationFrame(scroll);
    };

    scrollRef.current = requestAnimationFrame(scroll);
  }, [scrollSpeed, stopAutoScroll]);

  useEffect(() => {
    if (isAutoScrolling) {
      // Cancel any existing loop/timer first
      if (scrollRef.current !== null) cancelAnimationFrame(scrollRef.current);
      if (delayTimerRef.current !== null) clearTimeout(delayTimerRef.current);

      // Wait 30 seconds, then start scrolling
      delayTimerRef.current = setTimeout(() => {
        runScrollLoop();
      }, 30000);
    }
  }, [isAutoScrolling, scrollSpeed, runScrollLoop]);

  useEffect(() => {
    return () => {
      if (scrollRef.current !== null) cancelAnimationFrame(scrollRef.current);
      if (delayTimerRef.current !== null) clearTimeout(delayTimerRef.current);
    };
  }, []);

  if (!song) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-gray-400 text-lg">Cântecul nu a fost găsit</p>
        <Link to="/songs" className="text-blue-600 hover:underline mt-4 inline-block">
          Înapoi la cântece
        </Link>
      </div>
    );
  }

  const favorite = isFavorite(song.id);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2 sm:mb-3">
        <Link to="/songs" className="hover:text-blue-600 flex items-center gap-1">
          <ArrowLeft size={14} /> Cântece
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium truncate">{song.title}</span>
      </div>

      {/* Header - compact & mobile-friendly */}
      <div className="mb-2 sm:mb-3">
        <div className="flex items-start justify-between gap-2 sm:gap-4 flex-wrap">
          <div className="min-w-0 flex-1">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">{song.title}</h1>
            <div className="flex items-center gap-2 flex-wrap mt-0.5">
              <Link
                to={`/authors/${song.author.slug}`}
                className="text-gray-500 hover:text-blue-600 flex items-center gap-1.5 text-sm"
              >
                <Music size={14} />
                {song.author.name}
              </Link>
              {song.categories.length > 0 && (
                <>
                  <span className="text-gray-300">|</span>
                  {song.categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/categories/${cat.slug}`}
                      className="text-xs text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full hover:bg-purple-100"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>

          {/* Actions - icon-only on mobile */}
          <div className="flex items-center gap-1 sm:gap-1.5 no-print">
            <button
              onClick={() => toggleFavorite(song.id)}
              className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                favorite
                  ? 'bg-red-50 text-red-600 hover:bg-red-100'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              title={favorite ? 'Favorit' : 'Favorite'}
            >
              <Heart size={14} fill={favorite ? 'currentColor' : 'none'} />
              <span className="hidden sm:inline">{favorite ? 'Favorit' : 'Favorite'}</span>
            </button>
            <button
              onClick={() => setShowPlaylistModal(true)}
              className="flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              title="Playlist"
            >
              <ListPlus size={14} />
              <span className="hidden sm:inline">Playlist</span>
            </button>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              title="Print"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sticky bar: Chords + Auto-scroll Play button */}
      {song.chords.length > 0 && (
        <div className="sticky top-16 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-200 -mx-3 sm:-mx-6 lg:-mx-8 px-3 sm:px-6 lg:px-8 py-2 mb-2 sm:mb-3 shadow-sm">
          <div className="flex items-center justify-between gap-2 max-w-7xl mx-auto">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap hidden sm:inline">
                Acorduri:
              </span>
              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {song.chords.map((chord) => (
                  <ChordTag key={chord} name={chord} />
                ))}
              </div>
            </div>
            {/* Auto-scroll controls */}
            <div className="flex items-center gap-1 sm:gap-2 no-print shrink-0">
              <button
                onClick={() => setScrollSpeed((s) => Math.max(1, s - 2))}
                className="p-1 sm:p-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                title="Mai incet"
              >
                <Minus size={14} />
              </button>
              <button
                onClick={toggleAutoScroll}
                className={`flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  isAutoScrolling
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
                title={isAutoScrolling ? 'Pauza' : 'Reda'}
              >
                {isAutoScrolling ? <Pause size={14} /> : <Play size={14} />}
                <span className="hidden sm:inline">{isAutoScrolling ? 'Pauza' : 'Reda'}</span>
              </button>
              <button
                onClick={() => setScrollSpeed((s) => Math.min(60, s + 2))}
                className="p-1 sm:p-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                title="Mai repede"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
        {/* Main Content - Song lyrics */}
        <div className="lg:col-span-2" ref={songContentRef}>
          <SongContent content={song.content} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 no-print space-y-3 sm:space-y-4">
          {/* Strumming Pattern */}
          {song.strumming && song.strumming.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-3">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Ritm (Strumming)</h3>
              <StrummingPattern patterns={song.strumming} />
            </div>
          )}

          {/* Chord Diagrams */}
          {songChords.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-3">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Diagrame Acorduri</h3>
              <div className="grid grid-cols-3 sm:grid-cols-2 gap-2">
                {songChords.map((chord) => (
                  <div key={chord.id} className="text-center">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-xs font-bold text-blue-600 mb-0.5">{chord.name}</span>
                      <ChordDiagram chord={chord} size="sm" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Songs */}
          {relatedSongs.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-3">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                Alte cântece de {song.author.name}
              </h3>
              <div className="space-y-1">
                {relatedSongs.map((s) => (
                  <Link
                    key={s.id}
                    to={`/songs/${s.slug}`}
                    className="block p-1.5 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <p className="text-sm font-medium text-gray-900 line-clamp-1">{s.title}</p>
                    <div className="flex flex-wrap gap-1 mt-0.5">
                      {s.chords.slice(0, 4).map((c) => (
                        <span key={c} className="text-xs text-gray-400">{c}</span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Playlist Modal */}
      {showPlaylistModal && (
        <AddToPlaylistModal
          songId={song.id}
          songTitle={song.title}
          onClose={() => setShowPlaylistModal(false)}
        />
      )}
    </div>
  );
}
