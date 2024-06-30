import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        short_name: 'MyIndia',
        name: 'MyIndia E-Commerce Platform',
        icons: [
          
        ],
        start_url: '.',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff'
      }
    })
  ]
});
