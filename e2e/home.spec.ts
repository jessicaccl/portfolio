import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test('a home abre e mostra a proposta de valor', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Jessica Lima · PO técnica')
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Transformo problemas de negócio em produto que funciona.',
    }),
  ).toBeVisible()
})

test('a home não tem violações de acessibilidade (WCAG 2.1 AA)', async ({ page }) => {
  await page.goto('/')

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze()

  expect(results.violations).toEqual([])
})
