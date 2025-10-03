import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    },
  },
  build: {
    outDir: './docs',
    assetsDir: '',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@public": path.resolve(__dirname, "./public")
    }
  }
})