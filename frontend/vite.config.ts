import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'

export default defineConfig({
  base: '/ChitaraMea/',
  plugins: [
    react(),
    legacy({
      targets: ['iOS >= 10', 'safari >= 10', '> 0.5%', 'last 2 versions', 'not dead'],
    }),
  ],
  build: {
    target: ['es2018', 'safari12'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
  },
})
