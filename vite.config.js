import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from any device on the network
    port: 5173,      // Default port for Vite
    strictPort: true // Prevents port switching if 5173 is in use
  }
})
//http://192.168.164.199:5173/



