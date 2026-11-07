import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { HowIWork } from './HowIWork'

describe('Como eu trabalho (US08)', () => {
  it('mostra as 8 etapas do registro em ordem, cada uma com uma descrição', () => {
    render(<HowIWork />)

    const steps = within(screen.getByRole('list')).getAllByRole('listitem')
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

  it('diz em texto onde a IA ajuda e onde quem decide são as pessoas', () => {
    render(<HowIWork />)

    expect(screen.getAllByText('com IA')).toHaveLength(5)
    expect(screen.getAllByText('pessoas decidem')).toHaveLength(3)
  })

  it('traz o aprendizado de que nenhuma etapa é opcional', () => {
    render(<HowIWork />)

    expect(screen.getByRole('blockquote')).toHaveTextContent(
      'Bugs aparecem quando uma etapa é pulada. Por isso, nenhuma etapa é opcional.',
    )
  })

  it('cada etapa abre para mostrar o que entrega', async () => {
    const user = userEvent.setup()
    render(<HowIWork />)

    const first = screen.getByRole('button', { name: 'Demanda' })
    expect(first).toHaveAttribute('aria-expanded', 'true')

    const test = screen.getByRole('button', { name: 'Teste' })
    expect(test).toHaveAttribute('aria-expanded', 'false')
    await user.click(test)
    expect(test).toHaveAttribute('aria-expanded', 'true')
    expect(document.getElementById(test.getAttribute('aria-controls')!)).toBeVisible()
  })
})
