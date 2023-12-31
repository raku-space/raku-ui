import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"

export default defineConfig({
  plugins: [Vue()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "raku",
      formats: ["es"],
      fileName: (format) => `raku.${format}.js`,
    },
  },
})
