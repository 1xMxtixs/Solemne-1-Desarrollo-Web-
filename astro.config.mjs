// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://1xmxtixs.github.io/Solemne-1-Desarrollo-Web-/',
  base: '/Solemne-1-Desarrollo-Web-/',
  vite: {
    plugins: [tailwindcss()],
  },
});