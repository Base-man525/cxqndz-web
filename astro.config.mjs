import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://base-man525.github.io',
  base: '/cxqndz-web/',
  outDir: './dist',
  output: 'static',
  build: {
    assets: 'assets',
  },
});
