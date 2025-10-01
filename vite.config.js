import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  server: {
    watch: {
      usePolling: true
    },
  },
    base: "https://erleove.github.io/my-personal-superapp/",
})