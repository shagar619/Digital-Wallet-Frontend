import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },


  server: {
    proxy: {
      // Whenever frontend requests /api/w1, Vite intercepts it 
      // and securely forwards it to your live Vercel backend.
      '/api/w1': {
        target: 'https://digital-wallet-backend-liart-two.vercel.app',
        changeOrigin: true,
        secure: true,
      }
    }
  }

})