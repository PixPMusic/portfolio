import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import { visualizer } from 'rollup-plugin-visualizer';
import tailwindcss from '@tailwindcss/vite';
//import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  //output: 'server',
  //adapter: node({
  //  mode: 'standalone',
  //}),
  integrations: [compress()],
  vite: {
    plugins: [tailwindcss(), visualizer()],
  },
});
