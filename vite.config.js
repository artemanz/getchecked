import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve("src"),
  publicDir: resolve("public"),
  build: {
    emptyOutDir: true,
    outDir: resolve("dist"),
  },
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
  plugins: [react()],
})
