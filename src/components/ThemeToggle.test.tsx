import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import { ThemeToggle } from './ThemeToggle'

describe('Modo claro e escuro', () => {
  afterEach(() => {
    document.documentElement.dataset.theme = 'light'
    localStorage.clear()
  })

  it('alterna o tema, guarda a escolha e descreve a próxima ação', async () => {
    const user = userEvent.setup()
    document.documentElement.dataset.theme = 'light'
    render(<ThemeToggle />)

    await user.click(screen.getByRole('button', { name: 'Ativar modo escuro' }))
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(localStorage.getItem('tema')).toBe('escuro')

    await user.click(screen.getByRole('button', { name: 'Ativar modo claro' }))
    expect(document.documentElement.dataset.theme).toBe('light')
    expect(localStorage.getItem('tema')).toBe('claro')
  })

  it('começa no tema que já está aplicado na página', () => {
    document.documentElement.dataset.theme = 'dark'
    render(<ThemeToggle />)

    expect(screen.getByRole('button', { name: 'Ativar modo claro' })).toBeInTheDocument()
  })
})
