import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { profile } from '../content/profile'
import { Contact } from './Contact'

describe('Contato (US04, US05)', () => {
  it('oferece o mesmo currículo do topo da página', () => {
    render(<Contact />)

    const cv = screen.getByRole('link', { name: /baixar currículo/i })
    expect(cv).toHaveAttribute('href', profile.cv.href)
    expect(cv).toHaveAttribute('download', profile.cv.fileName)
  })

  it.each([
    ['LinkedIn', profile.links.linkedin],
    ['GitHub', profile.links.github],
  ])('abre o %s em nova aba', (name, href) => {
    render(<Contact />)

    const link = screen.getByRole('link', { name: new RegExp(`^${name}\\s*\\(abre em nova aba\\)`, 'i') })
    expect(link).toHaveAttribute('href', href)
    expect(link).toHaveAttribute('target', '_blank')
  })
})
