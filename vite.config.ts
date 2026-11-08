/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

// Endereço público do site para a prévia de compartilhamento. A Netlify define URL e a
// Vercel define VERCEL_PROJECT_PRODUCTION_URL no build;
// SITE_URL permite sobrescrever (ex.: domínio próprio). Sem nenhum dos dois, os links ficam relativos.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
const siteUrl = (
  process.env.SITE_URL ??
  process.env.URL ??
  (vercelUrl ? `https://${vercelUrl}` : '')
).replace(/\/$/, '')

function siteUrlPlugin(): Plugin {
  return {
    name: 'site-url',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => html.replaceAll('%SITE_URL%', siteUrl),
    },
  }
}

// Analytics opcional: com PLAUSIBLE_DOMAIN definido no build (ex.: na Netlify), o script do
// Plausible entra na página e os eventos de src/lib/analytics.ts passam a ser registrados.
const plausibleDomain = process.env.PLAUSIBLE_DOMAIN

function analyticsPlugin(): Plugin {
  return {
    name: 'analytics',
    transformIndexHtml: () =>
      plausibleDomain
        ? [
            {
              tag: 'script',
              attrs: { defer: true, 'data-domain': plausibleDomain, src: 'https://plausible.io/js/script.js' },
              injectTo: 'head',
            },
          ]
        : [],
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), siteUrlPlugin(), analyticsPlugin()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
  },
})
