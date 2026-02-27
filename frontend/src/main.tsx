import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { FavoritesProvider } from './context/FavoritesContext'
import { PlaylistsProvider } from './context/PlaylistsContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <PlaylistsProvider>
          <App />
        </PlaylistsProvider>
      </FavoritesProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
