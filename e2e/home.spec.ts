import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const headline = 'Product Owner que une negócio, tecnologia e qualidade.'

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

test('a foto do hero carrega (US03)', async ({ page }) => {
  await page.goto('/')

  const photo = page.getByRole('img', { name: 'Foto de Jessica Lima' })
  await expect(photo).toBeVisible()
  await expect(photo).toHaveJSProperty('complete', true)
  await expect(photo).not.toHaveJSProperty('naturalWidth', 0)
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

test.describe('menu no celular (US10)', () => {
  test.use({ viewport: { width: 360, height: 740 } })

  test('abre, leva à seção escolhida e fecha', async ({ page }) => {
    await page.goto('/')
    const nav = page.getByRole('navigation', { name: 'Principal' })
    await expect(nav.getByRole('link', { name: 'Cases' })).toBeHidden()

    await nav.getByRole('button', { name: 'Menu' }).click()
    await nav.getByRole('link', { name: 'Cases' }).click()

    await expect(page.getByRole('heading', { name: 'Cases em destaque' })).toBeInViewport()
    await expect(nav.getByRole('link', { name: 'Cases' })).toBeHidden()
  })

  test('fecha com Esc', async ({ page }) => {
    await page.goto('/')
    const nav = page.getByRole('navigation', { name: 'Principal' })

    await nav.getByRole('button', { name: 'Menu' }).click()
    await expect(nav.getByRole('link', { name: 'Trajetória' })).toBeVisible()
    await page.keyboard.press('Escape')

    await expect(nav.getByRole('link', { name: 'Trajetória' })).toBeHidden()
    await expect(nav.getByRole('button', { name: 'Menu' })).toBeFocused()
  })
})

test.describe('menu no desktop (US10)', () => {
  test.use({ viewport: { width: 1280, height: 800 } })

  test('os links ficam visíveis e levam até a seção', async ({ page }) => {
    await page.goto('/')
    const nav = page.getByRole('navigation', { name: 'Principal' })
    await expect(nav.getByRole('button', { name: 'Menu' })).toBeHidden()

    await nav.getByRole('link', { name: 'Trajetória' }).click()
    await expect(page.getByRole('heading', { name: 'Do varejo ao produto digital' })).toBeInViewport()
  })
})

test('a página tem prévia de compartilhamento com imagem (US11)', async ({ page, request }) => {
  await page.goto('/')

  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', 'Jessica Lima · PO técnica')
  await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /Product Owner/)
  const image = await page.locator('meta[property="og:image"]').getAttribute('content')
  expect(image).toMatch(/\/og-image\.png$/)

  const response = await request.get('/og-image.png')
  expect(response.ok()).toBe(true)
  expect(response.headers()['content-type']).toContain('image/png')
})

test('a home não tem violações de acessibilidade (WCAG 2.1 AA)', async ({ page }) => {
  await page.goto('/')

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze()

  expect(results.violations).toEqual([])
})
