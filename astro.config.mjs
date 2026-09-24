// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://mosesnetto.github.io/portfolio",
  base: "/portfolio",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
