import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://ibrahiem17.github.io/Portfolio/, so the build needs the
// repo name as its base path. Override with BASE_PATH=/ for a root deploy
// (a custom domain, Vercel, or Netlify).
const base = process.env.BASE_PATH ?? '/Portfolio/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
