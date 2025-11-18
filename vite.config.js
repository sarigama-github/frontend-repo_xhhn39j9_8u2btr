import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [],
    entries: ['./src/**/*.{js,jsx,ts,tsx}'],
    holdUntilCrawlEnd: true,
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
    // Enable HMR with polling for remote previews and avoid full reload glitches
    hmr: { clientPort: 3000, overlay: true },
    watch: { usePolling: true, interval: 1000 },
    cors: { origin: '*', credentials: true },
    allowedHosts: ['.modal.host', '.modal.run', 'localhost', '127.0.0.1'],
  },
  preview: {
    port: 3000,
    host: '0.0.0.0',
  }
})
