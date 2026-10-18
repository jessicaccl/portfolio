// Gera o PDF do currículo a partir de cv/curriculo.html: npm run cv
import { chromium } from '@playwright/test'
import { fileURLToPath, pathToFileURL } from 'node:url'

const html = fileURLToPath(new URL('./curriculo.html', import.meta.url))
const pdf = fileURLToPath(new URL('../public/Jessica_Lima_Product_Owner.pdf', import.meta.url))

const browser = await chromium.launch()
const page = await browser.newPage()
await page.goto(pathToFileURL(html).href, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)
await page.pdf({ path: pdf, format: 'A4', preferCSSPageSize: true, printBackground: true })
await browser.close()

console.log(`PDF gerado em ${pdf}`)
