import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Cases } from './Cases'

function companyCases() {
  return screen
    .getAllByRole('article')
    .filter((card) => within(card).queryByText('Locadora de motos'))
}

describe('Cases em destaque (US07)', () => {
  it('mostra os cases da empresa e os autorais, com problema, meu papel e resultado', () => {
    render(<Cases />)

    const cards = screen.getAllByRole('article')
    expect(cards.map((card) => within(card).getByRole('heading').textContent)).toEqual([
      'Plataforma de rastreamento',
      'ERP de locação',
      'Agentes de IA no atendimento',
      'CRM Pro',
      'Assina+',
      'Loja Irmãs Amare',
    ])
    for (const card of cards) {
      for (const term of ['Problema', 'Meu papel', 'Resultado']) {
        expect(within(card).getByText(term)).toBeInTheDocument()
      }
    }
  })

  it('nos cases da empresa, fala do trabalho em time', () => {
    render(<Cases />)

    expect(companyCases()).toHaveLength(3)
    for (const card of companyCases()) {
      expect(card).toHaveTextContent(/construímos|o time|colocamos/i)
    }
  })

  it('respeita a confidencialidade: sem nome da empresa, valores ou percentuais', () => {
    render(<Cases />)

    const text = screen.getByRole('region', { name: 'Cases em destaque' }).textContent
    expect(text).not.toMatch(/maturano|fast motos|R\$|%/i)
  })

  it('cases da empresa não têm links; os autorais abrem demo e código em nova aba', () => {
    render(<Cases />)

    for (const card of companyCases()) {
      expect(within(card).queryAllByRole('link')).toHaveLength(0)
    }
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
    for (const link of links) {
      expect(link).toHaveAttribute('href', expect.stringMatching(/^https:\/\//))
      expect(link).toHaveAttribute('target', '_blank')
    }
  })
})
