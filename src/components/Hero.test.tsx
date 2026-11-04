import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { profile } from '../content/profile'
import { Hero } from './Hero'

describe('Hero (US03, US04, US05)', () => {
  it('mostra a proposta de valor e o subtítulo', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: profile.headline }),
    ).toBeInTheDocument()
    expect(screen.getByText(profile.subheadline)).toBeInTheDocument()
  })

  it('mostra a foto com texto alternativo (US03)', () => {
    render(<Hero />)

    expect(screen.getByRole('img', { name: 'Foto de Jessica Lima' })).toBeInTheDocument()
  })

  it('baixa o currículo em PDF sem cadastro', () => {
    render(<Hero />)

    const cv = screen.getByRole('link', { name: /baixar currículo\s*\(pdf\)/i })
    expect(cv).toHaveAttribute('href', profile.cv.href)
    expect(cv).toHaveAttribute('download', profile.cv.fileName)
  })

  it('abre o LinkedIn em nova aba e avisa o leitor de tela', () => {
    render(<Hero />)

    const linkedin = screen.getByRole('link', { name: /linkedin\s*\(abre em nova aba\)/i })
    expect(linkedin).toHaveAttribute('href', profile.links.linkedin)
    expect(linkedin).toHaveAttribute('target', '_blank')
    expect(linkedin).toHaveAttribute('rel', 'noreferrer')
  })

  it('mostra uma prova logo no topo, com números reais da faixa de impacto', () => {
    render(<Hero />)

    const proof = screen.getByRole('list', { name: 'Destaques' })
    expect(proof).toHaveTextContent('+150 motos rastreadas')
    expect(proof).toHaveTextContent('4 agentes de IA em produção')
  })
})
