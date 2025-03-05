import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base: "/Task-Vue/",
  server: {
    hmr: {
      overlay: false,
    },
  },
  css: {
    devSourcemap: true,
  },
});
