import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { Playlist } from '@/types';

interface PlaylistsContextType {
  playlists: Playlist[];
  createPlaylist: (name: string, description?: string) => Playlist;
  deletePlaylist: (id: string) => void;
  updatePlaylist: (id: string, updates: Partial<Pick<Playlist, 'name' | 'description'>>) => void;
  addSongToPlaylist: (playlistId: string, songId: number) => void;
  removeSongFromPlaylist: (playlistId: string, songId: number) => void;
  isSongInPlaylist: (playlistId: string, songId: number) => boolean;
  getPlaylistsForSong: (songId: number) => Playlist[];
}

const PlaylistsContext = createContext<PlaylistsContextType | undefined>(undefined);

const STORAGE_KEY = 'acorduri_playlists';

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

export function PlaylistsProvider({ children }: { children: React.ReactNode }) {
  const [playlists, setPlaylists] = useState<Playlist[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(playlists));
  }, [playlists]);

  const createPlaylist = useCallback((name: string, description = ''): Playlist => {
    const now = new Date().toISOString();
    const playlist: Playlist = {
      id: generateId(),
      name,
      description,
      songIds: [],
      createdAt: now,
      updatedAt: now,
    };
    setPlaylists((prev) => [...prev, playlist]);
    return playlist;
  }, []);

  const deletePlaylist = useCallback((id: string) => {
    setPlaylists((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const updatePlaylist = useCallback(
    (id: string, updates: Partial<Pick<Playlist, 'name' | 'description'>>) => {
      setPlaylists((prev) =>
        prev.map((p) =>
          p.id === id ? { ...p, ...updates, updatedAt: new Date().toISOString() } : p
        )
      );
    },
    []
  );

  const addSongToPlaylist = useCallback((playlistId: string, songId: number) => {
    setPlaylists((prev) =>
      prev.map((p) =>
        p.id === playlistId && !p.songIds.includes(songId)
          ? { ...p, songIds: [...p.songIds, songId], updatedAt: new Date().toISOString() }
          : p
      )
    );
  }, []);

  const removeSongFromPlaylist = useCallback((playlistId: string, songId: number) => {
    setPlaylists((prev) =>
      prev.map((p) =>
        p.id === playlistId
          ? { ...p, songIds: p.songIds.filter((id) => id !== songId), updatedAt: new Date().toISOString() }
          : p
      )
    );
  }, []);

  const isSongInPlaylist = useCallback(
    (playlistId: string, songId: number) => {
      const playlist = playlists.find((p) => p.id === playlistId);
      return playlist ? playlist.songIds.includes(songId) : false;
    },
    [playlists]
  );

  const getPlaylistsForSong = useCallback(
    (songId: number) => playlists.filter((p) => p.songIds.includes(songId)),
    [playlists]
  );

  return (
    <PlaylistsContext.Provider
      value={{
        playlists,
        createPlaylist,
        deletePlaylist,
        updatePlaylist,
        addSongToPlaylist,
        removeSongFromPlaylist,
        isSongInPlaylist,
        getPlaylistsForSong,
      }}
    >
      {children}
    </PlaylistsContext.Provider>
  );
}

export function usePlaylists() {
  const context = useContext(PlaylistsContext);
  if (!context) {
    throw new Error('usePlaylists must be used within a PlaylistsProvider');
  }
  return context;
}
