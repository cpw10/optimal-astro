// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import editableRegions from '@cloudcannon/editable-regions/astro-integration';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
        '~': '/src',
      },
    },
  },

  integrations: [mdx(), editableRegions()]
});