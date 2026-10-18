// Gera o PDF do currículo a partir de cv/curriculo.html: npm run cv
//
// Versão pública (site): sem telefone, salva em public/.
// Versão para envio direto: defina CV_TELEFONE e CV_SAIDA. O número nunca fica no repositório.
//   CV_TELEFONE="(21) 9xxxx-xxxx" CV_SAIDA="C:/caminho/arquivo.pdf" npm run cv
import { chromium } from '@playwright/test'
import { fileURLToPath, pathToFileURL } from 'node:url'

const html = fileURLToPath(new URL('./curriculo.html', import.meta.url))
const telefone = process.env.CV_TELEFONE
const pdf =
  process.env.CV_SAIDA ??
  fileURLToPath(new URL('../public/Jessica_Lima_Product_Owner.pdf', import.meta.url))

const browser = await chromium.launch()
const page = await browser.newPage()
await page.goto(pathToFileURL(html).href, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)
if (telefone) {
  await page.evaluate((numero) => {
    document.getElementById('telefone').textContent = ` · ${numero}`
  }, telefone)
}
await page.pdf({ path: pdf, format: 'A4', preferCSSPageSize: true, printBackground: true })
await browser.close()

console.log(`PDF gerado em ${pdf}${telefone ? ' (com telefone)' : ''}`)
