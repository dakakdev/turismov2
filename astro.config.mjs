import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://mannytoursrd.com/",
  output: "static",
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/api") && !page.includes("/_image"),
      sitemap: "./public/sitemap.xml",
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
