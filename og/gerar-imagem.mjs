// Gera a imagem de prévia de compartilhamento (1200x630) a partir de og/imagem.html: npm run og
import { chromium } from '@playwright/test'
import { fileURLToPath, pathToFileURL } from 'node:url'

const html = fileURLToPath(new URL('./imagem.html', import.meta.url))
const png = fileURLToPath(new URL('../public/og-image.png', import.meta.url))

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
await page.goto(pathToFileURL(html).href, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)
await page.screenshot({ path: png })
await browser.close()

console.log(`Imagem gerada em ${png}`)
