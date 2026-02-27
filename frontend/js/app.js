/**
 * Main Application - Guitar Tabs SPA
 * Romanian guitar chords and tabs application
 */

// ============================================
// LOCAL DATA (embedded for demo / no-MySQL mode)
// ============================================

const LOCAL_DATA = {
    chords: [],
    songs: [],
    authors: [],
    categories: []
};

// Will be populated from data files
let APP_DATA = null;

// ============================================
// STATE MANAGEMENT
// ============================================
let currentPage = 'home';
let currentParams = {};
let searchTimeout = null;

// ============================================
// NAVIGATION
// ============================================
function navigate(page, params = {}) {
    currentPage = page;
    currentParams = params;
    const app = document.getElementById('app');
    app.style.opacity = '0';
    
    setTimeout(() => {
        renderPage(page, params);
        app.style.opacity = '1';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);
}

function renderPage(page, params) {
    const app = document.getElementById('app');
    
    switch (page) {
        case 'home':
            app.innerHTML = renderHomePage();
            break;
        case 'songs':
            app.innerHTML = renderSongsPage(params);
            break;
        case 'song':
            app.innerHTML = renderSongPage(params.id || params.slug);
            break;
        case 'categories':
            app.innerHTML = renderCategoriesPage();
            break;
        case 'category':
            app.innerHTML = renderCategoryPage(params.slug);
            break;
        case 'authors':
            app.innerHTML = renderAuthorsPage();
            break;
        case 'author':
            app.innerHTML = renderAuthorPage(params.slug);
            break;
        case 'chords':
            app.innerHTML = renderChordDictionaryPage(params);
            break;
        default:
            app.innerHTML = renderHomePage();
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// ============================================
// SEARCH
// ============================================
function handleGlobalSearch(query) {
    clearTimeout(searchTimeout);
    const results = document.getElementById('searchResults');
    
    if (query.length < 2) {
        results.classList.add('hidden');
        return;
    }
    
    searchTimeout = setTimeout(() => {
        const q = query.toLowerCase();
        const matchingSongs = APP_DATA.songs.filter(s => 
            s.title.toLowerCase().includes(q) || 
            s.author_name.toLowerCase().includes(q)
        ).slice(0, 8);
        
        const matchingAuthors = APP_DATA.authors.filter(a => 
            a.name.toLowerCase().includes(q)
        ).slice(0, 4);
        
        let html = '';
        
        if (matchingAuthors.length > 0) {
            html += '<div class="px-4 py-2 bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wider">Artiști</div>';
            matchingAuthors.forEach(a => {
                html += `<a href="#" onclick="navigate('author', {slug: '${a.slug}'}); document.getElementById('searchResults').classList.add('hidden'); document.getElementById('globalSearch').value='';" class="block px-4 py-2.5 hover:bg-brand-50 transition-colors">
                    <div class="font-medium text-gray-900 text-sm">${a.name}</div>
                    <div class="text-xs text-gray-500">${a.song_count} cântece</div>
                </a>`;
            });
        }
        
        if (matchingSongs.length > 0) {
            html += '<div class="px-4 py-2 bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wider">Cântece</div>';
            matchingSongs.forEach(s => {
                html += `<a href="#" onclick="navigate('song', {id: ${s.id}}); document.getElementById('searchResults').classList.add('hidden'); document.getElementById('globalSearch').value='';" class="block px-4 py-2.5 hover:bg-brand-50 transition-colors">
                    <div class="font-medium text-gray-900 text-sm">${highlightMatch(s.title, query)}</div>
                    <div class="text-xs text-gray-500">${highlightMatch(s.author_name, query)}</div>
                </a>`;
            });
        }
        
        if (!html) {
            html = '<div class="px-4 py-6 text-center text-sm text-gray-500">Niciun rezultat găsit</div>';
        }
        
        results.innerHTML = html;
        results.classList.remove('hidden');
    }, 200);
}

function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span class="bg-yellow-200 rounded">$1</span>');
}

// Close search results when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('#globalSearch') && !e.target.closest('#searchResults')) {
        document.getElementById('searchResults').classList.add('hidden');
    }
});

// ============================================
// HOME PAGE
// ============================================
function renderHomePage() {
    const recentSongs = APP_DATA.songs.slice(0, 6);
    const topCategories = APP_DATA.categories.slice(0, 6);
    
    return `
    <!-- Hero Section -->
    <div class="hero-gradient rounded-2xl p-8 md:p-12 mb-10 text-white">
        <div class="max-w-2xl">
            <h1 class="text-3xl md:text-4xl font-bold mb-4">Acorduri și Tabulaturi pentru Chitară</h1>
            <p class="text-blue-100 text-lg mb-6">Colecție de cântece românești cu acorduri, versuri și diagrame pentru chitară. Caută, învață și cântă!</p>
            <div class="flex flex-wrap gap-3">
                <button onclick="navigate('songs')" class="px-6 py-3 bg-white text-brand-700 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg">
                    Explorează cântecele
                </button>
                <button onclick="navigate('chords')" class="px-6 py-3 bg-brand-800 bg-opacity-50 text-white rounded-xl font-semibold hover:bg-opacity-70 transition-colors border border-blue-400">
                    Dicționar de acorduri
                </button>
            </div>
        </div>
    </div>
    
    <!-- Stats -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div class="bg-white rounded-xl p-5 border border-gray-200 text-center">
            <div class="text-2xl font-bold text-brand-600">${APP_DATA.songs.length}</div>
            <div class="text-sm text-gray-500">Cântece</div>
        </div>
        <div class="bg-white rounded-xl p-5 border border-gray-200 text-center">
            <div class="text-2xl font-bold text-brand-600">${APP_DATA.authors.length}</div>
            <div class="text-sm text-gray-500">Artiști</div>
        </div>
        <div class="bg-white rounded-xl p-5 border border-gray-200 text-center">
            <div class="text-2xl font-bold text-brand-600">${APP_DATA.categories.length}</div>
            <div class="text-sm text-gray-500">Categorii</div>
        </div>
        <div class="bg-white rounded-xl p-5 border border-gray-200 text-center">
            <div class="text-2xl font-bold text-brand-600">${APP_DATA.chords.length}</div>
            <div class="text-sm text-gray-500">Acorduri</div>
        </div>
    </div>
    
    <!-- Categories -->
    <section class="mb-10">
        <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-gray-900">Categorii</h2>
            <a href="#" onclick="navigate('categories')" class="text-brand-600 hover:text-brand-700 font-medium text-sm">Vezi toate →</a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            ${topCategories.map(cat => `
                <div class="category-card" onclick="navigate('category', {slug: '${cat.slug}'})">
                    <div class="flex items-center justify-between">
                        <h3 class="font-semibold text-gray-900">${cat.name}</h3>
                        <span class="px-2.5 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-semibold">${cat.song_count}</span>
                    </div>
                    ${cat.description ? `<p class="text-sm text-gray-500 mt-2">${cat.description}</p>` : ''}
                </div>
            `).join('')}
        </div>
    </section>
    
    <!-- Recent Songs -->
    <section class="mb-10">
        <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-gray-900">Cântece populare</h2>
            <a href="#" onclick="navigate('songs')" class="text-brand-600 hover:text-brand-700 font-medium text-sm">Vezi toate →</a>
        </div>
        <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
            ${recentSongs.map((song, i) => `
                <div class="song-row flex items-center justify-between px-5 py-3.5 ${i < recentSongs.length - 1 ? 'border-b border-gray-100' : ''} cursor-pointer" onclick="navigate('song', {id: ${song.id}})">
                    <div class="flex-1 min-w-0">
                        <div class="font-medium text-gray-900 truncate">${song.title}</div>
                        <div class="text-sm text-gray-500">${song.author_name}</div>
                    </div>
                    <div class="flex items-center gap-2 ml-4 flex-shrink-0">
                        ${(song.chords || []).slice(0, 4).map(c => ChordDiagram.createTag(typeof c === 'string' ? c : c.name, false)).join('')}
                        ${(song.chords || []).length > 4 ? `<span class="text-xs text-gray-400">+${song.chords.length - 4}</span>` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
    </section>
    `;
}

// ============================================
// SONGS LIST PAGE
// ============================================
function renderSongsPage(params = {}) {
    const page = params.page || 1;
    const search = params.search || '';
    const letter = params.letter || '';
    const category = params.category || '';
    
    let filtered = [...APP_DATA.songs];
    
    if (search) {
        const q = search.toLowerCase();
        filtered = filtered.filter(s => 
            s.title.toLowerCase().includes(q) || 
            s.author_name.toLowerCase().includes(q)
        );
    }
    
    if (letter) {
        filtered = filtered.filter(s => s.title.toUpperCase().startsWith(letter.toUpperCase()));
    }
    
    if (category) {
        filtered = filtered.filter(s => 
            s.categories && s.categories.some(c => c.slug === category)
        );
    }
    
    const total = filtered.length;
    const perPage = CONFIG.ITEMS_PER_PAGE;
    const totalPages = Math.ceil(total / perPage);
    const start = (page - 1) * perPage;
    const pageSongs = filtered.slice(start, start + perPage);
    
    const letters = 'AĂBCDEFGHIJKLMNOPQRSȘTȚUVWXYZ'.split('');
    
    return `
    <div class="mb-6">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Cântece</h1>
        <p class="text-gray-500">Toate cântecele din colecție, cu acorduri și versuri</p>
    </div>
    
    <!-- Search & Filters -->
    <div class="bg-white rounded-xl border border-gray-200 p-5 mb-6">
        <div class="flex flex-col md:flex-row gap-4">
            <div class="relative flex-1">
                <input type="text" id="songSearch" placeholder="Caută după titlu sau artist..." value="${search}"
                       class="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 text-sm outline-none"
                       oninput="navigate('songs', {...currentParams, search: this.value, page: 1})">
                <svg class="absolute left-3 top-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
            </div>
        </div>
        
        <!-- Letter filter -->
        <div class="flex flex-wrap gap-1 mt-4">
            <button class="letter-btn ${!letter ? 'active' : ''}" onclick="navigate('songs', {...currentParams, letter: '', page: 1})">Toate</button>
            ${letters.map(l => `
                <button class="letter-btn ${letter === l ? 'active' : ''}" onclick="navigate('songs', {...currentParams, letter: '${l}', page: 1})">${l}</button>
            `).join('')}
        </div>
    </div>
    
    <!-- Results count -->
    <div class="text-sm text-gray-500 mb-4">${total} cântece găsite</div>
    
    <!-- Song list -->
    <div class="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <table class="w-full">
            <thead>
                <tr class="bg-gray-50 border-b border-gray-200">
                    <th class="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Titlu</th>
                    <th class="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Artist</th>
                    <th class="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Acorduri</th>
                </tr>
            </thead>
            <tbody>
                ${pageSongs.length === 0 ? `
                    <tr><td colspan="3" class="px-5 py-8 text-center text-gray-500">Niciun cântec găsit</td></tr>
                ` : pageSongs.map((song, i) => `
                    <tr class="song-row cursor-pointer ${i < pageSongs.length - 1 ? 'border-b border-gray-100' : ''}" onclick="navigate('song', {id: ${song.id}})">
                        <td class="px-5 py-3.5">
                            <div class="font-medium text-gray-900">${highlightMatch(song.title, search)}</div>
                            <div class="text-sm text-gray-500 md:hidden">${highlightMatch(song.author_name, search)}</div>
                        </td>
                        <td class="px-5 py-3.5 hidden md:table-cell">
                            <span class="text-sm text-gray-700">${highlightMatch(song.author_name, search)}</span>
                        </td>
                        <td class="px-5 py-3.5 hidden lg:table-cell">
                            <div class="flex flex-wrap gap-1">
                                ${(song.chords || []).slice(0, 5).map(c => ChordDiagram.createTag(typeof c === 'string' ? c : c.name, false)).join('')}
                            </div>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    </div>
    
    <!-- Pagination -->
    ${totalPages > 1 ? `
    <div class="flex justify-center gap-2">
        <button class="page-btn" ${page <= 1 ? 'disabled' : ''} onclick="navigate('songs', {...currentParams, page: ${page - 1}})">← Înapoi</button>
        ${generatePagination(page, totalPages)}
        <button class="page-btn" ${page >= totalPages ? 'disabled' : ''} onclick="navigate('songs', {...currentParams, page: ${page + 1}})">Înainte →</button>
    </div>
    ` : ''}
    `;
}

function generatePagination(current, total) {
    let pages = [];
    const delta = 2;
    
    for (let i = 1; i <= total; i++) {
        if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
            pages.push(i);
        } else if (pages[pages.length - 1] !== '...') {
            pages.push('...');
        }
    }
    
    return pages.map(p => {
        if (p === '...') return '<span class="px-2 text-gray-400">...</span>';
        return `<button class="page-btn ${p === current ? 'active' : ''}" onclick="navigate('songs', {...currentParams, page: ${p}})">${p}</button>`;
    }).join('');
}

// ============================================
// SONG DETAIL PAGE
// ============================================
function renderSongPage(songId) {
    const song = APP_DATA.songs.find(s => s.id === songId || s.slug === songId);
    if (!song) {
        return '<div class="text-center py-12"><h2 class="text-xl text-gray-500">Cântecul nu a fost găsit</h2></div>';
    }
    
    const songChords = (song.chords || []).map(c => {
        if (typeof c === 'string') {
            return APP_DATA.chords.find(ch => ch.name === c) || { name: c };
        }
        return c;
    });
    
    // Parse content into formatted HTML
    const formattedContent = formatSongContent(song.content);
    
    return `
    <!-- Breadcrumb -->
    <nav class="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        <a href="#" onclick="navigate('home')" class="hover:text-brand-600">Acasă</a>
        <span>/</span>
        <a href="#" onclick="navigate('songs')" class="hover:text-brand-600">Cântece</a>
        <span>/</span>
        <a href="#" onclick="navigate('author', {slug: '${song.author_slug}'})" class="hover:text-brand-600">${song.author_name}</a>
        <span>/</span>
        <span class="text-gray-900">${song.title}</span>
    </nav>
    
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Main content -->
        <div class="lg:col-span-3">
            <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <!-- Header -->
                <div class="px-6 py-5 border-b border-gray-200">
                    <h1 class="text-2xl md:text-3xl font-bold text-gray-900">${song.title}</h1>
                    <div class="flex items-center gap-3 mt-2">
                        <a href="#" onclick="navigate('author', {slug: '${song.author_slug}'})" class="text-brand-600 hover:text-brand-700 font-medium">${song.author_name}</a>
                        ${song.contributor ? `<span class="text-gray-400">|</span><span class="text-sm text-gray-500">Contribuție: ${song.contributor}</span>` : ''}
                    </div>
                    <!-- Categories -->
                    ${song.categories && song.categories.length > 0 ? `
                    <div class="flex flex-wrap gap-2 mt-3">
                        ${song.categories.map(c => `
                            <a href="#" onclick="navigate('category', {slug: '${c.slug}'})" class="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-xs font-medium text-gray-600 transition-colors">${c.name}</a>
                        `).join('')}
                    </div>
                    ` : ''}
                </div>
                
                <!-- Chords used -->
                ${songChords.length > 0 ? `
                <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
                    <div class="text-sm font-semibold text-gray-500 mb-3">Acorduri folosite:</div>
                    <div class="flex flex-wrap gap-2">
                        ${songChords.map(c => ChordDiagram.createTag(c.name)).join('')}
                    </div>
                </div>
                ` : ''}
                
                <!-- Chord diagrams -->
                ${songChords.filter(c => c.positions).length > 0 ? `
                <div class="px-6 py-4 border-b border-gray-200">
                    <div class="flex flex-wrap gap-4 justify-center">
                        ${songChords.filter(c => c.positions).map(c => `
                            <div class="chord-diagram text-center">
                                <div class="font-bold text-brand-700 mb-2">${c.name}</div>
                                ${ChordDiagram.render(c)}
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                
                <!-- Song content -->
                <div class="px-6 py-6">
                    <div class="song-content">${formattedContent}</div>
                </div>
            </div>
        </div>
        
        <!-- Sidebar -->
        <div class="lg:col-span-1">
            <!-- Actions -->
            <div class="bg-white rounded-xl border border-gray-200 p-5 mb-6">
                <h3 class="font-semibold text-gray-900 mb-3">Acțiuni</h3>
                <button onclick="window.print()" class="w-full px-4 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors mb-2 flex items-center justify-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
                    Printează
                </button>
            </div>
            
            <!-- Other songs by same author -->
            <div class="bg-white rounded-xl border border-gray-200 p-5">
                <h3 class="font-semibold text-gray-900 mb-3">Alte cântece de ${song.author_name}</h3>
                <div class="space-y-2">
                    ${APP_DATA.songs.filter(s => s.author_slug === song.author_slug && s.id !== song.id).slice(0, 5).map(s => `
                        <a href="#" onclick="navigate('song', {id: ${s.id}})" class="block text-sm text-gray-700 hover:text-brand-600 truncate">${s.title}</a>
                    `).join('') || '<div class="text-sm text-gray-400">Niciun alt cântec</div>'}
                </div>
            </div>
        </div>
    </div>
    `;
}

function formatSongContent(content) {
    if (!content) return '';
    
    const lines = content.split('\n');
    let html = '';
    
    const chordPattern = /^[\s]*([A-G][#b]?(?:m|min|maj|dim|aug|sus[24]|add[0-9])?(?:7|9|11|13)?(?:\/[A-G][#b]?)?\s*)+$/;
    const sectionPattern = /^(Refren|Strofa|Intro|Outro|Bridge|Vers|Chorus|Pre-chorus|Solo|Interludiu|Coda)[\s:.]*/i;
    
    lines.forEach(line => {
        if (line.trim() === '') {
            html += '\n';
        } else if (sectionPattern.test(line.trim())) {
            html += `<span class="section-marker">${escapeHtml(line)}</span>\n`;
        } else if (isChordLine(line)) {
            // Color chord names in chord lines
            html += `<span class="chord-line">${colorChords(escapeHtml(line))}</span>\n`;
        } else {
            html += `<span class="lyric-line">${escapeHtml(line)}</span>\n`;
        }
    });
    
    return html;
}

function isChordLine(line) {
    if (line.trim() === '') return false;
    const words = line.trim().split(/\s+/);
    const chordRegex = /^[A-G][#b]?(?:m|min|maj|dim|aug|sus[24]|add[0-9])?(?:7|9|11|13)?(?:\/[A-G][#b]?)?$/;
    const chordCount = words.filter(w => chordRegex.test(w)).length;
    return words.length > 0 && chordCount / words.length >= 0.5;
}

function colorChords(text) {
    return text.replace(/([A-G][#b]?(?:m|min|maj|dim|aug|sus[24]|add[0-9])?(?:7|9|11|13)?(?:\/[A-G][#b]?)?)/g, 
        '<span class="font-bold cursor-pointer hover:underline" onclick="showChordDetail(\'$1\')">$1</span>');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
// CATEGORIES PAGE
// ============================================
function renderCategoriesPage() {
    return `
    <div class="mb-6">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Categorii</h1>
        <p class="text-gray-500">Explorează cântecele pe categorii</p>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        ${APP_DATA.categories.map(cat => `
            <div class="category-card" onclick="navigate('category', {slug: '${cat.slug}'})">
                <div class="flex items-center justify-between">
                    <h3 class="font-semibold text-gray-900">${cat.name}</h3>
                    <span class="px-2.5 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-semibold">${cat.song_count}</span>
                </div>
                ${cat.description ? `<p class="text-sm text-gray-500 mt-2">${cat.description}</p>` : ''}
            </div>
        `).join('')}
    </div>
    `;
}

function renderCategoryPage(slug) {
    const cat = APP_DATA.categories.find(c => c.slug === slug);
    if (!cat) return '<div class="text-center py-12"><h2 class="text-xl text-gray-500">Categoria nu a fost găsită</h2></div>';
    
    const songs = APP_DATA.songs.filter(s => s.categories && s.categories.some(c => c.slug === slug));
    
    return `
    <nav class="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        <a href="#" onclick="navigate('home')" class="hover:text-brand-600">Acasă</a>
        <span>/</span>
        <a href="#" onclick="navigate('categories')" class="hover:text-brand-600">Categorii</a>
        <span>/</span>
        <span class="text-gray-900">${cat.name}</span>
    </nav>
    
    <div class="mb-6">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">${cat.name}</h1>
        <p class="text-gray-500">${songs.length} cântece în această categorie</p>
    </div>
    
    <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
        ${songs.map((song, i) => `
            <div class="song-row flex items-center justify-between px-5 py-3.5 ${i < songs.length - 1 ? 'border-b border-gray-100' : ''} cursor-pointer" onclick="navigate('song', {id: ${song.id}})">
                <div class="flex-1 min-w-0">
                    <div class="font-medium text-gray-900">${song.title}</div>
                    <div class="text-sm text-gray-500">${song.author_name}</div>
                </div>
                <div class="flex items-center gap-2 ml-4 flex-shrink-0">
                    ${(song.chords || []).slice(0, 3).map(c => ChordDiagram.createTag(typeof c === 'string' ? c : c.name, false)).join('')}
                </div>
            </div>
        `).join('')}
        ${songs.length === 0 ? '<div class="px-5 py-8 text-center text-gray-500">Niciun cântec în această categorie</div>' : ''}
    </div>
    `;
}

// ============================================
// AUTHORS PAGE
// ============================================
function renderAuthorsPage() {
    const sortedAuthors = [...APP_DATA.authors].sort((a, b) => a.name.localeCompare(b.name, 'ro'));
    
    // Group by first letter
    const grouped = {};
    sortedAuthors.forEach(a => {
        const letter = a.name.charAt(0).toUpperCase();
        if (!grouped[letter]) grouped[letter] = [];
        grouped[letter].push(a);
    });
    
    return `
    <div class="mb-6">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Artiști</h1>
        <p class="text-gray-500">${APP_DATA.authors.length} artiști în colecție</p>
    </div>
    
    ${Object.keys(grouped).sort().map(letter => `
        <div class="mb-6">
            <h2 class="text-lg font-bold text-brand-600 mb-3 px-2">${letter}</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                ${grouped[letter].map(a => `
                    <a href="#" onclick="navigate('author', {slug: '${a.slug}'})" class="bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-brand-300 hover:shadow-sm transition-all flex items-center justify-between">
                        <span class="font-medium text-gray-900">${a.name}</span>
                        <span class="text-sm text-gray-400">${a.song_count} cântece</span>
                    </a>
                `).join('')}
            </div>
        </div>
    `).join('')}
    `;
}

function renderAuthorPage(slug) {
    const author = APP_DATA.authors.find(a => a.slug === slug);
    if (!author) return '<div class="text-center py-12"><h2 class="text-xl text-gray-500">Artistul nu a fost găsit</h2></div>';
    
    const songs = APP_DATA.songs.filter(s => s.author_slug === slug);
    
    return `
    <nav class="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        <a href="#" onclick="navigate('home')" class="hover:text-brand-600">Acasă</a>
        <span>/</span>
        <a href="#" onclick="navigate('authors')" class="hover:text-brand-600">Artiști</a>
        <span>/</span>
        <span class="text-gray-900">${author.name}</span>
    </nav>
    
    <div class="mb-6">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">${author.name}</h1>
        <p class="text-gray-500">${songs.length} cântece</p>
    </div>
    
    <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
        ${songs.map((song, i) => `
            <div class="song-row flex items-center justify-between px-5 py-3.5 ${i < songs.length - 1 ? 'border-b border-gray-100' : ''} cursor-pointer" onclick="navigate('song', {id: ${song.id}})">
                <div class="flex-1 min-w-0">
                    <div class="font-medium text-gray-900">${song.title}</div>
                </div>
                <div class="flex items-center gap-2 ml-4 flex-shrink-0">
                    ${(song.chords || []).slice(0, 4).map(c => ChordDiagram.createTag(typeof c === 'string' ? c : c.name, false)).join('')}
                </div>
            </div>
        `).join('')}
    </div>
    `;
}

// ============================================
// CHORD DICTIONARY PAGE
// ============================================
function renderChordDictionaryPage(params = {}) {
    const rootFilter = params.root || '';
    const typeFilter = params.type || '';
    
    let filtered = [...APP_DATA.chords];
    
    if (rootFilter) {
        filtered = filtered.filter(c => c.root_note === rootFilter);
    }
    if (typeFilter) {
        filtered = filtered.filter(c => c.type === typeFilter);
    }
    
    const rootNotes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const types = [...new Set(APP_DATA.chords.map(c => c.type).filter(Boolean))];
    
    return `
    <div class="mb-6">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Dicționar de Acorduri</h1>
        <p class="text-gray-500">Toate acordurile pentru chitară cu diagrame și poziții</p>
    </div>
    
    <!-- Filters -->
    <div class="bg-white rounded-xl border border-gray-200 p-5 mb-6">
        <div class="mb-4">
            <div class="text-sm font-semibold text-gray-500 mb-2">Notă de bază:</div>
            <div class="flex flex-wrap gap-2">
                <button class="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${!rootFilter ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}" 
                        onclick="navigate('chords', {...currentParams, root: ''})">Toate</button>
                ${rootNotes.map(n => `
                    <button class="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${rootFilter === n ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
                            onclick="navigate('chords', {...currentParams, root: '${n}'})">${n}</button>
                `).join('')}
            </div>
        </div>
        <div>
            <div class="text-sm font-semibold text-gray-500 mb-2">Tip acord:</div>
            <div class="flex flex-wrap gap-2">
                <button class="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${!typeFilter ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
                        onclick="navigate('chords', {...currentParams, type: ''})">Toate</button>
                ${types.map(t => `
                    <button class="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${typeFilter === t ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
                            onclick="navigate('chords', {...currentParams, type: '${t}'})">${t}</button>
                `).join('')}
            </div>
        </div>
    </div>
    
    <!-- Chord grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        ${filtered.map(chord => `
            <div class="chord-diagram text-center cursor-pointer" onclick="showChordDetail('${chord.name}')">
                <div class="font-bold text-lg mb-1">${ChordDiagram.createTag(chord.name, false)}</div>
                <div class="text-xs text-gray-500 mb-2">${chord.type || ''}</div>
                ${chord.positions ? ChordDiagram.render(chord) : '<div class="text-sm text-gray-400 py-4">Diagramă indisponibilă</div>'}
            </div>
        `).join('')}
    </div>
    
    ${filtered.length === 0 ? '<div class="text-center py-12 text-gray-500">Niciun acord găsit cu aceste filtre</div>' : ''}
    `;
}

function showChordDetail(chordName) {
    const chord = APP_DATA.chords.find(c => c.name === chordName);
    if (!chord) return;
    
    const songs = APP_DATA.songs.filter(s => 
        s.chords && s.chords.some(c => (typeof c === 'string' ? c : c.name) === chordName)
    );
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    modal.innerHTML = `
    <div class="bg-white rounded-2xl max-w-md w-full max-h-[80vh] overflow-y-auto shadow-2xl">
        <div class="p-6">
            <div class="flex items-center justify-between mb-4">
                <div>
                    <h2 class="text-2xl font-bold text-gray-900">Acord ${chord.name}</h2>
                    <p class="text-sm text-gray-500">${chord.type || ''} - Nota: ${chord.root_note}</p>
                </div>
                <button onclick="this.closest('.fixed').remove()" class="p-2 hover:bg-gray-100 rounded-lg">
                    <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            
            <div class="flex justify-center mb-6">
                ${chord.positions ? ChordDiagram.render(chord, 160, 200) : ''}
            </div>
            
            ${songs.length > 0 ? `
            <div>
                <h3 class="font-semibold text-gray-700 mb-2">Cântece cu acest acord (${songs.length}):</h3>
                <div class="space-y-1 max-h-40 overflow-y-auto">
                    ${songs.slice(0, 10).map(s => `
                        <a href="#" onclick="navigate('song', {id: ${s.id}}); this.closest('.fixed').remove();" class="block text-sm text-brand-600 hover:text-brand-700 truncate">${s.author_name} - ${s.title}</a>
                    `).join('')}
                    ${songs.length > 10 ? `<div class="text-sm text-gray-400">... și încă ${songs.length - 10} cântece</div>` : ''}
                </div>
            </div>
            ` : ''}
        </div>
    </div>
    `;
    
    document.body.appendChild(modal);
}

// ============================================
// INITIALIZATION
// ============================================
async function initApp() {
    // Load data
    try {
        const response = await fetch('js/data.js');
        if (response.ok) {
            // Data loaded from external file
        }
    } catch (e) {
        // Use embedded data
    }
    
    // If data was loaded via script tag, use it
    if (window.SONGS_DATA) {
        APP_DATA = window.SONGS_DATA;
    } else {
        APP_DATA = LOCAL_DATA;
    }
    
    // Compute derived data
    APP_DATA.authors.forEach(a => {
        a.song_count = APP_DATA.songs.filter(s => s.author_slug === a.slug).length;
    });
    
    APP_DATA.categories.forEach(c => {
        c.song_count = APP_DATA.songs.filter(s => 
            s.categories && s.categories.some(cat => cat.slug === c.slug)
        ).length;
    });
    
    // Render initial page
    navigate('home');
}

// Load data script and then init
const dataScript = document.createElement('script');
dataScript.src = 'js/data.js';
dataScript.onload = initApp;
dataScript.onerror = initApp;
document.head.appendChild(dataScript);
