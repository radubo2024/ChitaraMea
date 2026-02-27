import { useMemo } from 'react';

interface SongContentProps {
  content: string;
}

export default function SongContent({ content }: SongContentProps) {
  const formattedLines = useMemo(() => {
    const lines = content.split('\n');
    const result: { type: 'chord' | 'lyric' | 'empty'; text: string }[] = [];

    for (const line of lines) {
      if (line.trim() === '') {
        result.push({ type: 'empty', text: '' });
      } else if (isChordLine(line)) {
        result.push({ type: 'chord', text: line });
      } else {
        result.push({ type: 'lyric', text: line });
      }
    }
    return result;
  }, [content]);

  return (
    <div className="song-content bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
      {formattedLines.map((line, i) => {
        if (line.type === 'empty') {
          return <div key={i} className="h-4" />;
        }
        if (line.type === 'chord') {
          return (
            <div key={i} className="chord-line text-blue-600 font-bold select-all">
              {line.text}
            </div>
          );
        }
        return (
          <div key={i} className="lyric-line text-gray-800">
            {line.text}
          </div>
        );
      })}
    </div>
  );
}

function isChordLine(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed) return false;

  // Chord patterns: A, Am, A7, Am7, Amaj7, Asus2, A#m, Bb, F#, etc.
  const chordPattern = /^[A-G][#b]?(m|maj|min|dim|aug|sus|add|7|9|11|13|6)*[0-9]*/;
  const parts = trimmed.split(/\s+/);

  // If most parts look like chords, it's a chord line
  const chordParts = parts.filter((p) => chordPattern.test(p));
  return chordParts.length > 0 && chordParts.length >= parts.length * 0.5;
}
