import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeAll, describe, expect, it } from 'vitest'
import { caseStudies } from '../content/home'
import { Cases } from './Cases'

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

async function openCase(title: string) {
  const user = userEvent.setup()
  const button = screen
    .getAllByRole('button')
    .find(
      (element) =>
        element.textContent?.startsWith('Ver o case') && element.textContent.includes(title),
    )
  if (!button) throw new Error(`Botão do case ${title} não encontrado`)
  await user.click(button)
  await new Promise((resolve) => requestAnimationFrame(resolve))
  return { user, dialog: document.querySelector('dialog')! }
}

const companyCases = caseStudies.filter((item) => item.context.startsWith('Locadora'))

describe('Cases em destaque (US07)', () => {
  it('a esteira mostra os 7 cases, cada um com contexto, título e resumo', () => {
    render(<Cases />)

    const cards = screen.getAllByRole('article')
    expect(cards.map((card) => within(card).getByRole('heading').textContent)).toEqual(
      caseStudies.map((item) => item.title),
    )
    expect(cards).toHaveLength(7)
    expect(
      screen.getByRole('heading', { name: 'Monitoramento dos atendimentos' }),
    ).toBeInTheDocument()
  })

  it('a segunda volta da esteira é só visual: fora do leitor de tela e do teclado', () => {
    const { container } = render(<Cases />)

    const copies = container.querySelectorAll('li[aria-hidden="true"]')
    expect(copies).toHaveLength(caseStudies.length)
    for (const copy of copies) expect(copy).toHaveAttribute('inert')
  })

  it('o botão pausa e retoma a esteira', async () => {
    const user = userEvent.setup()
    render(<Cases />)

    const pause = screen.getByRole('button', { name: 'Pausar esteira' })
    await user.click(pause)
    expect(screen.getByRole('button', { name: 'Retomar esteira' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })

  it('cada case abre com problema, meu papel e resultado', async () => {
    render(<Cases />)

    for (const item of caseStudies) {
      const { dialog } = await openCase(item.title)
      expect(within(dialog).getByRole('heading', { name: item.title })).toBeInTheDocument()
      for (const term of ['Problema', 'Meu papel', 'Resultado']) {
        expect(within(dialog).getByText(term)).toBeInTheDocument()
      }
    }
  }, 20_000)

  it('nos cases da empresa, fala do trabalho em time e não tem links', async () => {
    render(<Cases />)

    expect(companyCases.length).toBeGreaterThanOrEqual(4)
    for (const item of companyCases) {
      const { dialog } = await openCase(item.title)
      expect(dialog).toHaveTextContent(/construímos|o time|colocamos/i)
      expect(within(dialog).queryAllByRole('link')).toHaveLength(0)
    }
  }, 20_000)

  it('respeita a confidencialidade: sem nome da empresa, valores ou percentuais', async () => {
    const { container } = render(<Cases />)

    expect(container.textContent).not.toMatch(/maturano|fast motos|R\$|%/i)
    for (const item of companyCases) {
      const { dialog } = await openCase(item.title)
      expect(dialog.textContent).not.toMatch(/maturano|fast motos|R\$|%/i)
    }
  }, 20_000)

  it('os autorais abrem demo, código ou loja em nova aba, com nome único', async () => {
    render(<Cases />)

    const { dialog } = await openCase('CRM Pro')
    const links = within(dialog).getAllByRole('link')
    expect(links.map((link) => link.textContent)).toEqual(
      expect.arrayContaining([
        expect.stringMatching(/ver demo\s*do crm pro/i),
        expect.stringMatching(/ver código\s*do crm pro/i),
      ]),
    )
    for (const link of links) {
      expect(link).toHaveAttribute('href', expect.stringMatching(/^https:\/\//))
      expect(link).toHaveAttribute('target', '_blank')
    }
  })

  it('os projetos autorais mostram as telas reais numa galeria com abas', async () => {
    render(<Cases />)

    const { dialog } = await openCase('Assina+')
    expect(within(dialog).getByRole('tablist', { name: 'Telas do Assina+' })).toBeInTheDocument()
  })
})
