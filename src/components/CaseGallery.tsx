import { useId, useRef, useState, type KeyboardEvent } from 'react'
import type { CaseScreen } from '../content/home'
import './CaseGallery.css'

type Props = { project: string; address: string; screens: CaseScreen[] }

const src = (file: string, width: 960 | 1440) => `/cases/${file}-${width}.webp`

// Galeria das telas reais: abas no padrão WAI-ARIA (setas, Home e End trocam de tela)
// e clique para ampliar num <dialog> nativo, que fecha com Esc.
export function CaseGallery({ project, address, screens }: Props) {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const dialog = useRef<HTMLDialogElement>(null)
  const zoomButton = useRef<HTMLButtonElement>(null)
  const id = useId()
  const screen = screens[active]

  function select(index: number) {
    const next = (index + screens.length) % screens.length
    setActive(next)
    tabs.current[next]?.focus()
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const moves: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: screens.length - 1,
    }
    if (event.key in moves) {
      event.preventDefault()
      select(moves[event.key])
    }
  }

  function closeZoom() {
    dialog.current?.close()
  }

  return (
    <figure className="gallery">
      <div className="gallery__window">
        <div className="gallery__bar">
          <span className="gallery__dots" aria-hidden="true" />
          <span className="gallery__address">{address}</span>
        </div>

        <div
          id={`${id}-panel`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${active}`}
          className="gallery__panel"
        >
          <button
            ref={zoomButton}
            type="button"
            className="gallery__zoom"
            onClick={() => dialog.current?.showModal()}
          >
            <img
              key={screen.file}
              src={src(screen.file, 960)}
              alt={screen.alt}
              width={960}
              height={600}
              loading="lazy"
              decoding="async"
            />
            <span className="gallery__hint">
              Ampliar<span className="visually-hidden"> a tela {screen.label} do {project}</span>
            </span>
          </button>
        </div>
      </div>

      <div className="gallery__footer">
        <div role="tablist" aria-label={`Telas do ${project}`} className="gallery__tabs">
          {screens.map((item, index) => (
            <button
              key={item.file}
              ref={(element) => {
                tabs.current[index] = element
              }}
              id={`${id}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-controls={`${id}-panel`}
              tabIndex={index === active ? 0 : -1}
              className="gallery__tab"
              onClick={() => setActive(index)}
              onKeyDown={onTabKeyDown}
            >
              {item.label}
            </button>
          ))}
        </div>
        <figcaption className="gallery__caption">Dados de demonstração.</figcaption>
      </div>

      <dialog
        ref={dialog}
        className="gallery__dialog"
        aria-label={`${screen.label}, ${project}`}
        onClose={() => zoomButton.current?.focus()}
        onClick={(event) => event.target === dialog.current && closeZoom()}
      >
        <div className="gallery__dialog-bar">
          <p>
            {project} · {screen.label}
          </p>
          <button type="button" className="gallery__close" onClick={closeZoom}>
            Fechar
          </button>
        </div>
        <img
          src={src(screen.file, 1440)}
          alt={screen.alt}
          width={1440}
          height={900}
          loading="lazy"
          decoding="async"
        />
      </dialog>
    </figure>
  )
}
