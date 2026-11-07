import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeAll, describe, expect, it } from 'vitest'
import { CaseGallery } from './CaseGallery'

const screens = [
  { label: 'Funil', file: 'crm-pro-funil', alt: 'Funil do CRM Pro' },
  { label: 'Painel', file: 'crm-pro-painel', alt: 'Painel do CRM Pro' },
  { label: 'Ficha do cliente', file: 'crm-pro-ficha', alt: 'Ficha do cliente do CRM Pro' },
]

// O jsdom não implementa a janela modal; o navegador real é coberto pelos testes de ponta a ponta.
beforeAll(() => {
  HTMLDialogElement.prototype.showModal ??= function (this: HTMLDialogElement) {
    this.setAttribute('open', '')
  }
  HTMLDialogElement.prototype.close ??= function (this: HTMLDialogElement) {
    this.removeAttribute('open')
    this.dispatchEvent(new Event('close'))
  }
})

function renderGallery() {
  return render(<CaseGallery project="CRM Pro" address="crm.exemplo" screens={screens} />)
}

describe('Galeria das telas reais', () => {
  it('troca de tela pelas abas e marca a aba selecionada', async () => {
    const user = userEvent.setup()
    renderGallery()

    expect(screen.getByRole('tab', { name: 'Funil' })).toHaveAttribute('aria-selected', 'true')
    await user.click(screen.getByRole('tab', { name: 'Painel' }))

    expect(screen.getByRole('tab', { name: 'Painel' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel')).toContainElement(screen.getAllByRole('img', { name: 'Painel do CRM Pro' })[0])
  })

  it('navega entre as abas com as setas, Home e End', async () => {
    const user = userEvent.setup()
    renderGallery()

    await user.click(screen.getByRole('tab', { name: 'Funil' }))
    await user.keyboard('{ArrowRight}')
    expect(screen.getByRole('tab', { name: 'Painel' })).toHaveFocus()
    await user.keyboard('{End}')
    expect(screen.getByRole('tab', { name: 'Ficha do cliente' })).toHaveAttribute('aria-selected', 'true')
    await user.keyboard('{ArrowRight}')
    expect(screen.getByRole('tab', { name: 'Funil' })).toHaveFocus()
  })

  it('amplia a tela e fecha pelo botão', async () => {
    const user = userEvent.setup()
    const { container } = renderGallery()

    await user.click(screen.getByRole('button', { name: /ampliar/i }))
    const dialog = container.querySelector('dialog')!
    expect(dialog).toHaveAttribute('open')

    await user.click(screen.getByRole('button', { name: 'Fechar', hidden: true }))
    expect(dialog).not.toHaveAttribute('open')
  })
})
