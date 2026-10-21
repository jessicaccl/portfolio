import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Career } from './Career'

describe('Trajetória (US09)', () => {
  it('mostra a trajetória em ordem cronológica', () => {
    render(<Career />)

    const items = within(screen.getByRole('list')).getAllByRole('listitem')
    expect(items.map((item) => within(item).getByRole('heading').textContent)).toEqual([
      'Mayfair Multimarcas',
      'Amare Fashion',
      'Serratec',
      'FEST, Fábrica Escola de Software e Teste',
      'Fast Motos, Grupo Maturano',
      'FullStore',
    ])
  })

  it('cada etapa tem período, cargo e o que eu levei dela', () => {
    render(<Career />)

    for (const item of within(screen.getByRole('list')).getAllByRole('listitem')) {
      expect(item.querySelectorAll('p')).toHaveLength(3)
      for (const paragraph of item.querySelectorAll('p')) {
        expect(paragraph).not.toBeEmptyDOMElement()
      }
    }
  })

  it('indica o emprego atual também para o leitor de tela', () => {
    render(<Career />)

    expect(screen.getByText('(emprego atual)', { exact: false })).toBeInTheDocument()
  })
})
