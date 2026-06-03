import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite is configured so that:
//   - Source lives in  app/
//   - `npm run dev`    serves the React app at http://localhost:5173
//   - `npm run build`  outputs the built site to  guide/
//
// The guide is then accessible at  https://swwedding.github.io/guide/
// The coming-soon page remains at  https://swwedding.github.io/
//
// base: './' uses relative asset paths, which works on GitHub Pages,
// Netlify, and Vercel without any extra configuration.

export default defineConfig({
  root: 'app',
  plugins: [react()],
  build: {
    outDir: '../guide',
    emptyOutDir: true,
  },
  base: './',
})
