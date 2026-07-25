import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import hercules from "@usehercules/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss(), ...hercules()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    allowedHosts: [".cursorvm.com", ".us5p.cursorvm.com", "localhost", "127.0.0.1"],
    cors: true,
    // Cursor external Chrome opens the app via an HTTPS proxy on port 443.
    hmr: {
      clientPort: 443,
    },
  },
  preview: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    allowedHosts: [".cursorvm.com", ".us5p.cursorvm.com", "localhost", "127.0.0.1"],
    cors: true,
  },
});
