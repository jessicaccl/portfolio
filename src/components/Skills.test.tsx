import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Skills } from './Skills'

describe('Principais competências', () => {
  it('agrupa as competências em produto, qualidade, IA e agilidade', () => {
    render(<Skills />)

    expect(screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)).toEqual([
      'Produto e requisitos',
      'Qualidade de software',
      'Desenvolvimento com IA',
      'Agilidade e negócio',
    ])
  })

  it('cada grupo tem uma lista de competências com nome acessível', () => {
    render(<Skills />)

    for (const name of ['Produto e requisitos', 'Qualidade de software']) {
      const list = screen.getByRole('list', { name })
      expect(within(list).getAllByRole('listitem').length).toBeGreaterThanOrEqual(4)
    }
  })
})
