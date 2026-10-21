import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Cases } from './Cases'

describe('Cases em destaque (US07)', () => {
  it('mostra os 3 cases com problema, meu papel e resultado', () => {
    render(<Cases />)

    const cards = screen.getAllByRole('article')
    expect(cards.map((card) => within(card).getByRole('heading').textContent)).toEqual([
      'Plataforma de rastreamento',
      'ERP de locação',
      'Agentes de IA no atendimento',
    ])
    for (const card of cards) {
      for (const term of ['Problema', 'Meu papel', 'Resultado']) {
        expect(within(card).getByText(term)).toBeInTheDocument()
      }
    }
  })

  it('fala do trabalho em time', () => {
    render(<Cases />)

    for (const card of screen.getAllByRole('article')) {
      expect(card).toHaveTextContent(/construímos|o time|colocamos/i)
    }
  })

  it('respeita a confidencialidade: sem empresa, cliente, valor ou percentual', () => {
    render(<Cases />)

    const text = screen.getByRole('region', { name: 'Cases em destaque' }).textContent
    expect(text).toMatch(/locadora de motos/i)
    expect(text).not.toMatch(/maturano|fast motos|R\$|%/i)
  })

  it('não tem links para páginas que ainda não existem', () => {
    render(<Cases />)

    expect(screen.queryAllByRole('link')).toHaveLength(0)
  })
})
