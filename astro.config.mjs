import { fileURLToPath } from "node:url";

import { defineConfig } from "astro/config";

const scssPath = fileURLToPath(
    new URL("./src/styles/scss", import.meta.url),
);

export default defineConfig({
    vite: {
        resolve: {
            alias: {
                "@scss": scssPath,
            },
        },

        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@scss/base/index" as *;',
                },
            },
        },

        build: {
            minify: false,
            cssMinify: false,
        },
    },
});