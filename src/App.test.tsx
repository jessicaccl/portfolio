import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('mostra a proposta de valor como título principal', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Transformo problemas de negócio em produto que funciona.',
      }),
    ).toBeInTheDocument()
  })

  it('avisa que o link do GitHub abre em nova aba', () => {
    render(<App />)

    const link = screen.getByRole('link', { name: /github\s*\(abre em nova aba\)/i })
    expect(link).toHaveAttribute('target', '_blank')
  })
})
