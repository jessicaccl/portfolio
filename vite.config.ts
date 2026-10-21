/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

// Endereço público do site para a prévia de compartilhamento. A Netlify define URL no build;
// SITE_URL permite sobrescrever (ex.: domínio próprio). Sem nenhum dos dois, os links ficam relativos.
const siteUrl = (process.env.SITE_URL ?? process.env.URL ?? '').replace(/\/$/, '')

function siteUrlPlugin(): Plugin {
  return {
    name: 'site-url',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => html.replaceAll('%SITE_URL%', siteUrl),
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), siteUrlPlugin()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
  },
})
