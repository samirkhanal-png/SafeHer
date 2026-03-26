import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // ✅ Vercel & env fix
  define: {
    'process.env': process.env, // ensures VITE_ env vars are available
  },
  build: {
    chunkSizeWarningLimit: 2000, // optional: prevents large chunk warnings
  },
}));