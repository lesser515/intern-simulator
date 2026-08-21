import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist-source",
    emptyOutDir: true,
    rollupOptions: { input: "source.html" },
  },
});
