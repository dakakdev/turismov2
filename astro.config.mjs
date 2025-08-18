// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap"; // 👈

export default defineConfig({
  site: "https://mannytoursrd.com/", // 👈 obligatorio para URLs absolutas correctas
  output: "server",
  adapter: vercel({}),
  integrations: [
    sitemap({
      // Configuración opcional:
      // i18n: { defaultLocale: "es", locales: ["es"] }, // si tuvieras varios idiomas
      filter: (page) =>
        // Excluir rutas de API, previsualizaciones, etc.
        !page.includes("/api") && !page.includes("/_image"),
      // entryLimit: 50000, // por si tuvieras muchísimas URLs
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
