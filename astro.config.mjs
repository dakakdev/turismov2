// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/static"; // 👈 cambia a static
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://mannytoursrd.com/",
  output: "static", // 👈 cambia a static
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/api") && !page.includes("/_image"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
