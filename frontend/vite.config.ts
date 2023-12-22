import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "/src/main.tsx",
        sw: "/public/serviceWorker.js"
      }
    }
  }
})
