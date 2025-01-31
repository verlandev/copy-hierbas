// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; // Importa el plugin de Tailwind

export default defineConfig({
  integrations: [tailwind()], // Activa Tailwind en Astro
});
