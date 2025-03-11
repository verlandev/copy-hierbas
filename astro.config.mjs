// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; // Importa el plugin de Tailwind

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  experimental: {
    svg: {
      mode: 'sprite'
    },
  },	
  integrations: [tailwind()], // Activa Tailwind en Astro
});