import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from '../components/Hero'
import { track } from './analytics'

describe('Medição de conversão', () => {
  afterEach(() => {
    delete window.plausible
    delete window.umami
  })

  it('não faz nada e não quebra quando nenhum serviço está instalado', () => {
    expect(() => track('cv_download', { local: 'topo' })).not.toThrow()
  })

  it('envia o evento para o Plausible e para o Umami quando estão na página', () => {
    window.plausible = vi.fn()
    window.umami = { track: vi.fn() }

    track('linkedin_click', { local: 'topo' })

    expect(window.plausible).toHaveBeenCalledWith('linkedin_click', { props: { local: 'topo' } })
    expect(window.umami.track).toHaveBeenCalledWith('linkedin_click', { local: 'topo' })
  })

  it('um erro do serviço não impede o clique', () => {
    window.plausible = () => {
      throw new Error('serviço fora do ar')
    }
    expect(() => track('cv_download')).not.toThrow()
  })

  it('registra o clique em "Baixar currículo" e no LinkedIn do topo', async () => {
    const user = userEvent.setup()
    window.plausible = vi.fn()
    render(<Hero />)

    await user.click(screen.getByRole('link', { name: /baixar currículo/i }))
    await user.click(screen.getByRole('link', { name: /linkedin/i }))

    expect(window.plausible).toHaveBeenCalledWith('cv_download', { props: { local: 'topo' } })
    expect(window.plausible).toHaveBeenCalledWith('linkedin_click', { props: { local: 'topo' } })
  })
})
