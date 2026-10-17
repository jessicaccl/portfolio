import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const headline = 'Transformo problemas de negócio em produto que funciona.'

test('a home abre com o título da página e a proposta de valor', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Jessica Lima · PO técnica')
  await expect(page.getByRole('heading', { level: 1, name: headline })).toBeVisible()
})

test.describe('celular de 360 px (US03)', () => {
  test.use({ viewport: { width: 360, height: 740 } })

  test('nome, proposta de valor e botões aparecem sem rolar a tela', async ({ page }) => {
    await page.goto('/')
    const hero = page.locator('#inicio')

    for (const element of [
      page.getByRole('banner').getByText('Jessica Lima'),
      page.getByRole('heading', { level: 1, name: headline }),
      hero.getByRole('link', { name: /baixar currículo/i }),
      hero.getByRole('link', { name: /linkedin/i }),
    ]) {
      await expect(element).toBeInViewport({ ratio: 1 })
    }
  })
})

test('o currículo é baixado com 1 clique a partir do topo (US04)', async ({ page }) => {
  await page.goto('/')

  const downloadPromise = page.waitForEvent('download')
  await page.locator('#inicio').getByRole('link', { name: /baixar currículo/i }).click()
  const download = await downloadPromise

  expect(download.suggestedFilename()).toBe('Jessica_Lima_Product_Owner.pdf')
  expect(await download.failure()).toBeNull()
})

test('o primeiro Tab mostra o atalho "Pular para o conteúdo" (US12)', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')

  const skipLink = page.getByRole('link', { name: 'Pular para o conteúdo' })
  await expect(skipLink).toBeFocused()
  await expect(skipLink).toBeInViewport()
})

test('a home não tem violações de acessibilidade (WCAG 2.1 AA)', async ({ page }) => {
  await page.goto('/')

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze()

  expect(results.violations).toEqual([])
})
