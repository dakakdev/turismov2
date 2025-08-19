import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://mannytoursrd.com/",
  output: "server",
  adapter: vercel({}),
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/api") && !page.includes("/_image"),
      sitemap: "/sitemap.xml", // 👈 nombre fijo
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
