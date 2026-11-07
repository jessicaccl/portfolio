import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Cases } from './Cases'

function companyCases() {
  return screen
    .getAllByRole('article')
    .filter((card) => within(card).queryByText(/locadora de motos/i))
}

describe('Cases em destaque (US07)', () => {
  it('mostra os cases da empresa e os autorais, com problema, meu papel e resultado', () => {
    render(<Cases />)

    const cards = screen.getAllByRole('article')
    expect(cards.map((card) => within(card).getByRole('heading').textContent)).toEqual([
      'CRM Pro',
      'Plataforma de rastreamento',
      'Assina+',
      'Agentes de IA no atendimento',
      'ERP de locação',
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

    const text = screen.getByRole('region', { name: 'Cases' }).textContent
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

  it('cada link tem um nome único, que diz de qual projeto é', () => {
    render(<Cases />)

    const names = screen.getAllByRole('link').map((link) => link.textContent)
    expect(new Set(names).size).toBe(names.length)
    expect(screen.getByRole('link', { name: /ver código\s*do crm pro/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /ver código\s*do assina\+/i })).toBeInTheDocument()
  })

  it('os projetos autorais mostram a tela real com descrição', () => {
    render(<Cases />)

    expect(screen.getByRole('img', { name: /crm pro, com dados de demonstração/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /assina\+, com dados de demonstração/i })).toBeInTheDocument()
  })

  it('sem tela real, o case mostra a decisão mais importante em destaque, sem desenho de produto', () => {
    render(<Cases />)

    for (const card of companyCases()) {
      expect(within(card).getByRole('blockquote')).not.toBeEmptyDOMElement()
      expect(card.querySelector('svg')).toBeNull()
    }
  })
})
