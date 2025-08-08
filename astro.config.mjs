import { defineConfig } from 'astro/config';

// https://astro.build/config
// export default defineConfig({});

// xmetal added
export default defineConfig({
    vite: {
      build: {
        minify: false,
        cssMinify: false
      }
    }
  });