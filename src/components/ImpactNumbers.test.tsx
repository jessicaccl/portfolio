import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ImpactNumbers } from './ImpactNumbers'

describe('Números de impacto (US06)', () => {
  it('mostra de 3 a 4 indicadores, cada um com valor e legenda', () => {
    render(<ImpactNumbers />)

    const items = within(screen.getByRole('list')).getAllByRole('listitem')
    expect(items.length).toBeGreaterThanOrEqual(3)
    expect(items.length).toBeLessThanOrEqual(4)
    for (const item of items) {
      expect(item.children).toHaveLength(2)
      expect(item).not.toHaveTextContent(/^\s*$/)
    }
  })

  it('não revela valores financeiros nem percentuais de custo', () => {
    render(<ImpactNumbers />)

    const text = screen.getByRole('region', { name: 'Impacto em números' }).textContent
    expect(text).not.toMatch(/R\$|%/)
  })
})
