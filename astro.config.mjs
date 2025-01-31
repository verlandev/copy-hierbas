// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; // Importa el plugin de Tailwind

export default defineConfig({
  experimental: {
    svg: {
      mode: 'sprite'
    },
  },	
  integrations: [tailwind()], // Activa Tailwind en Astro
});
