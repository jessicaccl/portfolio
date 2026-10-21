import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HowIWork } from './HowIWork'

describe('Como eu trabalho (US08)', () => {
  it('mostra as 8 etapas em ordem, cada uma com uma descrição', () => {
    render(<HowIWork />)

    const steps = screen.getAllByRole('listitem')
    expect(steps.map((step) => within(step).getByRole('heading').textContent)).toEqual([
      'Demanda',
      'História',
      'Critérios de aceite',
      'Desenvolvimento',
      'Teste',
      'Homologação',
      'Produção',
      'Monitoramento',
    ])
    for (const step of steps) {
      expect(step.querySelector('p')).not.toBeEmptyDOMElement()
    }
  })

  it('separa onde a IA ajuda de onde a validação é humana, com numeração contínua', () => {
    render(<HowIWork />)

    const [ai, human] = screen.getAllByRole('list')
    expect(screen.getByRole('heading', { level: 3, name: 'Com apoio de IA' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Validação humana' })).toBeInTheDocument()
    expect(within(ai).getAllByRole('listitem')).toHaveLength(5)
    expect(within(human).getAllByRole('listitem')).toHaveLength(3)
    expect(human).toHaveAttribute('start', '6')
  })

  it('traz o aprendizado de que nenhuma etapa é opcional', () => {
    render(<HowIWork />)

    expect(screen.getByText(/bugs aparecem quando uma etapa é pulada/i)).toBeInTheDocument()
    expect(screen.getByText(/nenhuma etapa é opcional/i)).toBeInTheDocument()
  })
})
