import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// `base` is overridable via VITE_BASE so the same build works both locally
// (default "/") and under a GitHub Pages project subpath (e.g. "/the-sanctum/").
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
