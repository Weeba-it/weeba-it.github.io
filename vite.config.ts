import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/Weeba-it.github.io/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ora @ punta a src
    },
  },
});
