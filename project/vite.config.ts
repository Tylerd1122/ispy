import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures assets are loaded correctly
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: "dist", // Ensure the output directory matches your Cloudflare Pages settings
  },
});
