import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: 'https://backend-trashure-production.up.railway.app',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})