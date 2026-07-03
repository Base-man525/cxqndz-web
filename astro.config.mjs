import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://base-man525.github.io',
  outDir: './dist',
  output: 'static',
  build: {
    assets: 'assets',
  },
  base: '/cxqndz-web/',
});
