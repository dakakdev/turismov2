// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/serverless"; // <-- nuevo

export default defineConfig({
  output: "server", // <-- habilita SSR
  adapter: vercel({}), // <-- Vercel serverless (se espera un objeto de opciones, aunque puede estar vacío)
  vite: {
    plugins: [tailwindcss()],
  },
});
