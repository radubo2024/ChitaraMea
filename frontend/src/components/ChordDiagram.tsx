import type { Chord } from '@/types';

interface ChordDiagramProps {
  chord: Chord;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export default function ChordDiagram({ chord, size = 'md', onClick }: ChordDiagramProps) {
  const dims = {
    sm: { width: 80, height: 100, fretH: 16, stringGap: 12, topPad: 20, dotR: 4, fontSize: 8, titleSize: 10 },
    md: { width: 120, height: 150, fretH: 24, stringGap: 18, topPad: 28, dotR: 6, fontSize: 10, titleSize: 13 },
    lg: { width: 160, height: 200, fretH: 32, stringGap: 24, topPad: 36, dotR: 8, fontSize: 13, titleSize: 16 },
  };
  const d = dims[size];
  const numFrets = 5;
  const numStrings = 6;
  const gridLeft = (d.width - (numStrings - 1) * d.stringGap) / 2;
  const gridTop = d.topPad;
  const gridWidth = (numStrings - 1) * d.stringGap;
  const gridHeight = numFrets * d.fretH;

  const startFret = chord.start_fret || 1;

  const getChordColor = (): string => {
    if (chord.type === 'minor') return '#22c55e';
    if (chord.type.includes('7')) return '#eab308';
    if (chord.type.includes('sus')) return '#a855f7';
    return '#3b82f6';
  };
  const color = getChordColor();

  return (
    <svg
      width={d.width}
      height={d.height}
      viewBox={`0 0 ${d.width} ${d.height}`}
      onClick={onClick}
      className={onClick ? 'cursor-pointer' : ''}
    >
      {/* Nut or start fret indicator */}
      {startFret === 1 ? (
        <rect x={gridLeft - 1} y={gridTop - 2} width={gridWidth + 2} height={3} fill="#1f2937" rx={1} />
      ) : (
        <text x={gridLeft - 10} y={gridTop + d.fretH / 2 + 4} fontSize={d.fontSize} fill="#6b7280" textAnchor="end">
          {startFret}
        </text>
      )}

      {/* Fret lines */}
      {Array.from({ length: numFrets + 1 }).map((_, i) => (
        <line
          key={`fret-${i}`}
          x1={gridLeft}
          y1={gridTop + i * d.fretH}
          x2={gridLeft + gridWidth}
          y2={gridTop + i * d.fretH}
          stroke="#d1d5db"
          strokeWidth={1}
        />
      ))}

      {/* String lines */}
      {Array.from({ length: numStrings }).map((_, i) => (
        <line
          key={`string-${i}`}
          x1={gridLeft + i * d.stringGap}
          y1={gridTop}
          x2={gridLeft + i * d.stringGap}
          y2={gridTop + gridHeight}
          stroke="#9ca3af"
          strokeWidth={1}
        />
      ))}

      {/* Open/Muted string indicators */}
      {(chord.open_strings || []).map((s) => (
        <circle
          key={`open-${s}`}
          cx={gridLeft + (s - 1) * d.stringGap}
          cy={gridTop - 10}
          r={d.dotR - 1}
          fill="none"
          stroke="#6b7280"
          strokeWidth={1.5}
        />
      ))}
      {(chord.muted_strings || []).map((s) => (
        <text
          key={`muted-${s}`}
          x={gridLeft + (s - 1) * d.stringGap}
          y={gridTop - 6}
          fontSize={d.fontSize}
          fill="#ef4444"
          textAnchor="middle"
        >
          ×
        </text>
      ))}

      {/* Barre */}
      {chord.barre && (
        <rect
          x={gridLeft + (chord.barre.from_string - 1) * d.stringGap - d.dotR}
          y={gridTop + (chord.barre.fret - startFret) * d.fretH + d.fretH / 2 - d.dotR}
          width={(chord.barre.to_string - chord.barre.from_string) * d.stringGap + d.dotR * 2}
          height={d.dotR * 2}
          rx={d.dotR}
          fill={color}
          opacity={0.8}
        />
      )}

      {/* Finger positions */}
      {chord.positions.map((pos, i) => (
        <g key={`pos-${i}`}>
          <circle
            cx={gridLeft + (pos.string - 1) * d.stringGap}
            cy={gridTop + (pos.fret - startFret) * d.fretH + d.fretH / 2}
            r={d.dotR}
            fill={color}
          />
          {pos.finger > 0 && (
            <text
              x={gridLeft + (pos.string - 1) * d.stringGap}
              y={gridTop + (pos.fret - startFret) * d.fretH + d.fretH / 2 + (d.fontSize / 3)}
              fontSize={d.fontSize - 2}
              fill="white"
              textAnchor="middle"
              fontWeight="bold"
            >
              {pos.finger}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}
