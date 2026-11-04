// Eventos de conversão do PRD (métrica principal: cliques em "Baixar currículo" e "LinkedIn").
// Funciona com Plausible ou Umami: basta o script do serviço estar na página.
// Sem script, track() não faz nada, e um erro do serviço nunca impede o clique.

type EventProps = Record<string, string>

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: EventProps }) => void
    umami?: { track: (event: string, data?: EventProps) => void }
  }
}

export type ConversionEvent = 'cv_download' | 'linkedin_click' | 'github_click' | 'case_link_click'

export function track(event: ConversionEvent, props: EventProps = {}) {
  try {
    window.plausible?.(event, { props })
    window.umami?.track(event, props)
  } catch {
    // Analytics é acessório: falhas aqui não podem afetar a navegação.
  }
}
