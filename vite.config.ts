import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";
const pathResolve = (dir) => resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-json-viewer/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": pathResolve("./src"),
    },
  },
})
