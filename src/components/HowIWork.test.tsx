import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HowIWork } from './HowIWork'

describe('Como eu trabalho (US08)', () => {
  it('mostra as 8 etapas em ordem, cada uma com uma descrição', () => {
    render(<HowIWork />)

    const steps = within(screen.getByRole('list')).getAllByRole('listitem')
    expect(steps.map((step) => within(step).getByRole('heading').textContent)).toEqual([
      'Demanda com IA',
      'História com IA',
      'Critérios de aceite com IA',
      'Desenvolvimento com IA',
      'Teste com IA',
      'Homologação',
      'Produção',
      'Monitoramento',
    ])
    for (const step of steps) {
      expect(step.querySelector('p')).not.toBeEmptyDOMElement()
    }
  })

  it('traz o aprendizado de que nenhuma etapa é opcional', () => {
    render(<HowIWork />)

    expect(screen.getByText(/bugs aparecem quando uma etapa é pulada/i)).toBeInTheDocument()
    expect(screen.getByText(/nenhuma etapa é opcional/i)).toBeInTheDocument()
  })
})
