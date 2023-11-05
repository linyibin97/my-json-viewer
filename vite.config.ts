import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-json-viewer/',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  }
})
