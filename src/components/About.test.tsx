import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('Sobre mim', () => {
  it('apresenta quem eu sou em poucos parágrafos', () => {
    render(<About />)

    const section = screen.getByRole('region', { name: 'Sobre mim' })
    expect(section.querySelectorAll('p:not(.section__eyebrow)').length).toBeGreaterThanOrEqual(2)
    expect(section).toHaveTextContent(/produto, desenvolvimento e qualidade/i)
  })

  it('não expõe dados que eu não quero no site', () => {
    render(<About />)

    const text = screen.getByRole('region', { name: 'Sobre mim' }).textContent
    expect(text).not.toMatch(/remot|início imediato|disponível|R\$|%/i)
  })
})
