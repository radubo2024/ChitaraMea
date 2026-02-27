/**
 * Chord Diagram Renderer
 * Draws guitar chord diagrams as SVG
 */

const ChordDiagram = {
    /**
     * Generate SVG chord diagram
     * @param {Object} chord - Chord data with positions, fingers, open_strings
     * @param {number} width - SVG width (default 120)
     * @param {number} height - SVG height (default 140)
     * @returns {string} SVG HTML string
     */
    render(chord, width = 120, height = 150) {
        if (!chord || !chord.positions) return '';
        
        const positions = chord.positions || [];
        const fingers = chord.fingers || [];
        const openStrings = chord.open_strings || [];
        
        const padding = { top: 30, left: 20, right: 20, bottom: 15 };
        const stringSpacing = (width - padding.left - padding.right) / 5;
        const fretSpacing = (height - padding.top - padding.bottom) / 4;
        const numFrets = 4;
        const numStrings = 6;
        
        // Find min fret to determine if we need a position marker
        const fretPositions = positions.filter(p => p > 0);
        const minFret = fretPositions.length > 0 ? Math.min(...fretPositions) : 0;
        const maxFret = fretPositions.length > 0 ? Math.max(...fretPositions) : 0;
        const startFret = (maxFret <= 4) ? 1 : minFret;
        
        let svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;
        
        // Background
        svg += `<rect width="${width}" height="${height}" fill="white" rx="8"/>`;
        
        // Nut (thick line at top if starting from fret 1)
        if (startFret === 1) {
            svg += `<rect x="${padding.left - 2}" y="${padding.top - 3}" width="${stringSpacing * 5 + 4}" height="5" fill="#1f2937" rx="1"/>`;
        } else {
            // Position marker
            svg += `<text x="${padding.left - 14}" y="${padding.top + fretSpacing / 2 + 4}" font-size="10" fill="#6b7280" font-weight="600" text-anchor="middle">${startFret}</text>`;
        }
        
        // Fret lines
        for (let i = 0; i <= numFrets; i++) {
            const y = padding.top + i * fretSpacing;
            svg += `<line x1="${padding.left}" y1="${y}" x2="${padding.left + stringSpacing * 5}" y2="${y}" stroke="#d1d5db" stroke-width="${i === 0 ? 2 : 1}"/>`;
        }
        
        // String lines
        for (let i = 0; i < numStrings; i++) {
            const x = padding.left + i * stringSpacing;
            svg += `<line x1="${x}" y1="${padding.top}" x2="${x}" y2="${padding.top + numFrets * fretSpacing}" stroke="#9ca3af" stroke-width="1.5"/>`;
        }
        
        // Open/Muted string markers
        for (let i = 0; i < numStrings; i++) {
            const x = padding.left + i * stringSpacing;
            const y = padding.top - 12;
            
            if (openStrings[i] === 'x' || openStrings[i] === 'X') {
                // Muted string - X marker
                svg += `<text x="${x}" y="${y + 4}" font-size="11" fill="#ef4444" font-weight="700" text-anchor="middle">X</text>`;
            } else if (openStrings[i] === 'o' || openStrings[i] === 'O' || openStrings[i] === '0' || positions[i] === 0) {
                // Open string - O marker
                svg += `<circle cx="${x}" cy="${y}" r="4" fill="none" stroke="#059669" stroke-width="1.5"/>`;
            }
        }
        
        // Finger positions (dots)
        for (let i = 0; i < numStrings; i++) {
            if (positions[i] > 0) {
                const fretNum = positions[i] - startFret + 1;
                if (fretNum >= 1 && fretNum <= numFrets) {
                    const x = padding.left + i * stringSpacing;
                    const y = padding.top + (fretNum - 0.5) * fretSpacing;
                    
                    // Filled circle
                    svg += `<circle cx="${x}" cy="${y}" r="7" fill="#0074c5"/>`;
                    
                    // Finger number
                    if (fingers[i] && fingers[i] > 0) {
                        svg += `<text x="${x}" y="${y + 3.5}" font-size="9" fill="white" font-weight="600" text-anchor="middle">${fingers[i]}</text>`;
                    }
                }
            }
        }
        
        svg += `</svg>`;
        return svg;
    },
    
    /**
     * Get chord type class for styling
     */
    getChordClass(chordName) {
        if (!chordName) return 'chord-tag-other';
        if (chordName.includes('m') && !chordName.includes('maj')) return 'chord-tag-minor';
        if (chordName.includes('7') || chordName.includes('9')) return 'chord-tag-7';
        if (chordName.length <= 2 && !chordName.includes('m')) return 'chord-tag-major';
        return 'chord-tag-other';
    },
    
    /**
     * Create a chord tag HTML element
     */
    createTag(chordName, clickable = true) {
        const cls = this.getChordClass(chordName);
        const onclick = clickable ? `onclick="showChordDetail('${chordName}')"` : '';
        return `<span class="chord-tag ${cls}" ${onclick} title="Acord ${chordName}">${chordName}</span>`;
    }
};
