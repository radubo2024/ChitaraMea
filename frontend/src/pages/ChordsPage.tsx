import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { chordsData } from '@/data';
import ChordDiagram from '@/components/ChordDiagram';
import type { Chord } from '@/types';

const ROOT_NOTES = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const CHORD_TYPES = ['major', 'minor', 'dominant 7th', 'sus2', 'sus4', 'minor 7th', 'major 7th'];

export default function ChordsPage() {
  const [searchParams] = useSearchParams();
  const highlight = searchParams.get('highlight') || '';

  const [activeRoot, setActiveRoot] = useState('');
  const [activeType, setActiveType] = useState('');
  const [selectedChord, setSelectedChord] = useState<Chord | null>(null);

  const filteredChords = useMemo(() => {
    let chords = [...chordsData];
    if (activeRoot) {
      chords = chords.filter((c) => c.root_note === activeRoot);
    }
    if (activeType) {
      chords = chords.filter((c) => c.type === activeType);
    }
    return chords;
  }, [activeRoot, activeType]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Dicționar de Acorduri</h1>
      <p className="text-gray-500 mb-6">Toate acordurile pentru chitară cu diagrame și poziții</p>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-8">
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-600 mb-2">Notă de bază:</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveRoot('')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                !activeRoot ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Toate
            </button>
            {ROOT_NOTES.map((note) => (
              <button
                key={note}
                onClick={() => setActiveRoot(activeRoot === note ? '' : note)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  activeRoot === note ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {note}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600 mb-2">Tip acord:</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveType('')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                !activeType ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Toate
            </button>
            {CHORD_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(activeType === type ? '' : type)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  activeType === type ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chords Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredChords.map((chord) => (
          <div
            key={chord.id}
            className={`bg-white rounded-xl border p-4 text-center cursor-pointer hover:shadow-md transition-all ${
              highlight === chord.name ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'
            }`}
            onClick={() => setSelectedChord(chord)}
          >
            <ChordTag name={chord.name} type={chord.type} />
            <p className="text-xs text-gray-400 mt-1">{chord.type}</p>
            <div className="mt-2 flex justify-center">
              <ChordDiagram chord={chord} size="sm" />
            </div>
          </div>
        ))}
      </div>

      {filteredChords.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">Nu am găsit acorduri cu aceste filtre</p>
        </div>
      )}

      {/* Chord Detail Modal */}
      {selectedChord && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedChord(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{selectedChord.name}</h2>
            <p className="text-sm text-gray-500 mb-4">{selectedChord.type}</p>
            <div className="flex justify-center mb-4">
              <ChordDiagram chord={selectedChord} size="lg" />
            </div>
            <div className="text-sm text-gray-600">
              <p>Notă de bază: <strong>{selectedChord.root_note}</strong></p>
              {selectedChord.positions.length > 0 && (
                <p className="mt-1">
                  Poziții: {selectedChord.positions.map((p) => `S${p.string}F${p.fret}`).join(', ')}
                </p>
              )}
            </div>
            <button
              onClick={() => setSelectedChord(null)}
              className="mt-4 px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium"
            >
              Închide
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ChordTag({ name, type }: { name: string; type: string }) {
  const getColor = () => {
    if (type === 'minor' || type === 'minor 7th') return 'bg-green-100 text-green-700';
    if (type.includes('7')) return 'bg-yellow-100 text-yellow-700';
    if (type.includes('sus')) return 'bg-purple-100 text-purple-700';
    return 'bg-blue-100 text-blue-700';
  };

  return (
    <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full text-sm font-bold ${getColor()}`}>
      {name}
    </span>
  );
}
