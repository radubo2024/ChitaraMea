import type { StrumPattern } from '@/types';

interface StrummingPatternProps {
  patterns: StrumPattern[];
}

export default function StrummingPattern({ patterns }: StrummingPatternProps) {
  return (
    <div className="space-y-4">
      {patterns.map((pattern, idx) => (
        <div key={idx} className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            {pattern.name && (
              <span className="text-sm font-semibold text-gray-700">{pattern.name}</span>
            )}
            {pattern.timeSignature && (
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-mono">
                {pattern.timeSignature}
              </span>
            )}
            {pattern.bpm && (
              <span className="text-xs text-gray-400">{pattern.bpm} BPM</span>
            )}
          </div>

          {/* Visual rhythm display */}
          <div className="flex items-end gap-1">
            {pattern.pattern.map((stroke, i) => (
              <div key={i} className="flex flex-col items-center" style={{ minWidth: '28px' }}>
                {stroke === 'D' && (
                  <>
                    <svg width="24" height="32" viewBox="0 0 24 32" className="text-blue-600">
                      <line x1="12" y1="2" x2="12" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      <polygon points="5,20 12,30 19,20" fill="currentColor" />
                    </svg>
                    <span className="text-xs font-bold text-blue-600 mt-0.5">J</span>
                  </>
                )}
                {stroke === 'U' && (
                  <>
                    <svg width="24" height="32" viewBox="0 0 24 32" className="text-orange-500">
                      <line x1="12" y1="30" x2="12" y2="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      <polygon points="5,12 12,2 19,12" fill="currentColor" />
                    </svg>
                    <span className="text-xs font-bold text-orange-500 mt-0.5">S</span>
                  </>
                )}
                {stroke === 'x' && (
                  <>
                    <svg width="24" height="32" viewBox="0 0 24 32" className="text-red-400">
                      <line x1="6" y1="8" x2="18" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="18" y1="8" x2="6" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    <span className="text-xs font-bold text-red-400 mt-0.5">X</span>
                  </>
                )}
                {stroke === '-' && (
                  <>
                    <svg width="24" height="32" viewBox="0 0 24 32" className="text-gray-300">
                      <circle cx="12" cy="16" r="4" fill="currentColor" />
                    </svg>
                    <span className="text-xs text-gray-300 mt-0.5">&middot;</span>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 mt-3 pt-3 border-t border-gray-200">
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <span className="inline-block w-3 h-3 bg-blue-600 rounded-sm" />
              J = Jos (down)
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <span className="inline-block w-3 h-3 bg-orange-500 rounded-sm" />
              S = Sus (up)
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <span className="inline-block w-3 h-3 bg-red-400 rounded-sm" />
              X = Mut
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <span className="inline-block w-3 h-3 bg-gray-300 rounded-full" />
              Pauza
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
