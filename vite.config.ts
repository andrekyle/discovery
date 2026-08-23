import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Pin the dev server to one port so the app URL never shifts between restarts.
  server: {
    port: 5173,
    strictPort: true,
  },
});
