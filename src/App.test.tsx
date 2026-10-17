import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('oferece o atalho "Pular para o conteúdo" apontando para o conteúdo principal', () => {
    render(<App />)

    const skipLink = screen.getByRole('link', { name: 'Pular para o conteúdo' })
    expect(skipLink).toHaveAttribute('href', '#conteudo')
    expect(screen.getByRole('main')).toHaveAttribute('id', 'conteudo')
  })

  it('tem um único título principal (h1)', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })
})
