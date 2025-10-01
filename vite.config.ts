import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to GitHub Pages under a repository, set base to '/<repo>/'.
const repoName = process.env.VITE_GH_PAGES_BASE || ''

export default defineConfig({
  plugins: [react()],
  base: repoName, // e.g., '/the-brunch-club/'
})
