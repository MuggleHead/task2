import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    '/api': 'https://run.mocky.io/v3/200998b7-f48d-4456-a639-0b5d2d275c12'
  }
})
