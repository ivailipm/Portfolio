import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
    // Relative asset URLs so CSS/JS load when opening dist locally (file://)
    // or when the site is served from a subdirectory (e.g. GitHub Pages project site).
    base: './',
    build: {
        cssCodeSplit: false,
        rollupOptions: {
            input: {
                main: resolve(dirname, 'index.html'),
                projects: resolve(dirname, 'projects.html'),
                about: resolve(dirname, 'about.html'),
                contact: resolve(dirname, 'contact.html'),
            },
        },
    },
})