import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Skills } from './Skills'

describe('Principais competências', () => {
  it('agrupa as competências por área', () => {
    render(<Skills />)

    expect(screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)).toEqual([
      'Produto e requisitos',
      'Qualidade e testes',
      'Front-end',
      'Back-end e APIs',
      'IA e automação',
      'Agilidade e negócio',
    ])
  })

  it('cada área mostra onde a competência foi usada na prática', () => {
    render(<Skills />)

    expect(screen.getAllByText('Na prática:')).toHaveLength(6)
  })

  it('cada grupo tem uma lista de competências com nome acessível', () => {
    render(<Skills />)

    for (const name of ['Produto e requisitos', 'Qualidade e testes', 'Back-end e APIs']) {
      const list = screen.getByRole('list', { name })
      expect(within(list).getAllByRole('listitem').length).toBeGreaterThanOrEqual(4)
    }
  })
})
