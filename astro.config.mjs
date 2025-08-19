import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://mannytoursrd.com/",
  output: "static", // 👈 importante
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
