import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { caseStudies, type CaseStudy } from '../content/home'
import { track } from '../lib/analytics'
import { CaseArt } from './case-art/CaseArt'
import { CaseGallery } from './CaseGallery'
import { ExternalLink } from './ExternalLink'
import './Cases.css'

const SPEED = 0.6 // px por quadro, cerca de 36 px/s
const RESUME_AFTER = 2000 // ms parado depois de uma interação

const slug = (title: string) =>
  title
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

type CardProps = {
  item: CaseStudy
  copy?: boolean
  onOpen?: (event: MouseEvent<HTMLButtonElement>) => void
}

function Card({ item, copy, onOpen }: CardProps) {
  const titleId = copy ? undefined : `case-${slug(item.title)}`
  return (
    <article className="belt-card" aria-labelledby={titleId}>
      <CaseArt art={item.art} />
      <div className="belt-card__info">
        <p className="belt-card__context">{item.context}</p>
        <h3 id={titleId} className="belt-card__title">
          {item.title}
        </h3>
        <p className="belt-card__summary">{item.summary}</p>
        <button type="button" className="belt-card__open" onClick={onOpen}>
          Ver o case<span className="visually-hidden"> {item.title}</span>
          <span aria-hidden="true"> →</span>
        </button>
      </div>
    </article>
  )
}

export function Cases() {
  const belt = useRef<HTMLDivElement>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const opener = useRef<HTMLElement | null>(null)
  const [paused, setPaused] = useState(false)
  const [active, setActive] = useState<CaseStudy | null>(null)
  const pausedRef = useRef(paused)

  useEffect(() => {
    pausedRef.current = paused
  }, [paused])

  // Esteira: anda sozinha e dá a volta sem emenda (a segunda cópia é só visual).
  // Para no mouse, no foco, ao arrastar, ao deslizar e pelo botão; volta depois de 2 s.
  useEffect(() => {
    const element = belt.current
    if (!element) return
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    let hovering = false
    let focused = false
    let drag: { x: number; start: number; moved: boolean } | null = null
    let holdUntil = 0
    let frame = 0

    const half = () => element.scrollWidth / 2
    const wrap = () => {
      if (half() <= element.clientWidth) return
      if (element.scrollLeft >= half()) element.scrollLeft -= half()
      else if (element.scrollLeft <= 0) element.scrollLeft += half()
    }
    const hold = (ms = RESUME_AFTER) => {
      holdUntil = performance.now() + ms
    }
    const tick = (now: number) => {
      if (!reduced && !pausedRef.current && !hovering && !focused && !drag && now > holdUntil) {
        element.scrollLeft += SPEED
        wrap()
      }
      frame = requestAnimationFrame(tick)
    }

    const blockClick = (event: Event) => {
      event.preventDefault()
      event.stopPropagation()
    }
    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || event.button !== 0) return
      drag = { x: event.clientX, start: element.scrollLeft, moved: false }
    }
    const onPointerMove = (event: PointerEvent) => {
      if (!drag) return
      const dx = event.clientX - drag.x
      if (!drag.moved && Math.abs(dx) > 5) {
        drag.moved = true
        element.setPointerCapture(event.pointerId)
        element.classList.add('is-dragging')
      }
      if (drag.moved) {
        element.scrollLeft = drag.start - dx
        wrap()
      }
    }
    const onPointerUp = () => {
      if (!drag) return
      const moved = drag.moved
      drag = null
      element.classList.remove('is-dragging')
      hold()
      // Depois de arrastar, soltar o mouse não abre um case por engano
      if (moved) {
        element.addEventListener('click', blockClick, { capture: true, once: true })
        setTimeout(() => element.removeEventListener('click', blockClick, { capture: true }), 0)
      }
    }
    const onTouchStart = () => hold(60_000)
    const onRelease = () => hold()
    const onEnter = () => (hovering = true)
    const onLeave = () => (hovering = false)
    const onFocusIn = () => (focused = true)
    const onFocusOut = () => (focused = false)

    const listeners: [string, EventListener, AddEventListenerOptions?][] = [
      ['pointerdown', onPointerDown as EventListener],
      ['pointermove', onPointerMove as EventListener],
      ['pointerup', onPointerUp],
      ['pointercancel', onPointerUp],
      ['touchstart', onTouchStart, { passive: true }],
      ['touchend', onRelease, { passive: true }],
      ['wheel', onRelease, { passive: true }],
      ['scroll', wrap, { passive: true }],
      ['mouseenter', onEnter],
      ['mouseleave', onLeave],
      ['focusin', onFocusIn],
      ['focusout', onFocusOut],
    ]
    listeners.forEach(([type, listener, options]) => element.addEventListener(type, listener, options))
    element.scrollLeft = 1
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      listeners.forEach(([type, listener]) => element.removeEventListener(type, listener))
    }
  }, [])

  function open(item: CaseStudy, event: MouseEvent<HTMLButtonElement>) {
    opener.current = event.currentTarget
    setActive(item)
    // Abre depois que o conteúdo do case foi renderizado
    requestAnimationFrame(() => dialog.current?.showModal?.())
  }

  function close() {
    dialog.current?.close()
  }

  function onBeltKey(event: React.KeyboardEvent<HTMLDivElement>) {
    const element = belt.current
    if (!element || event.target !== element) return
    if (event.key === 'ArrowRight') element.scrollBy({ left: 440, behavior: 'smooth' })
    if (event.key === 'ArrowLeft') element.scrollBy({ left: -440, behavior: 'smooth' })
  }

  return (
    <section id="cases" className="section cases" aria-labelledby="cases-title">
      <div className="section__head cases__head">
        <div>
          <h2 id="cases-title" className="section__title">
            Cases
          </h2>
          <p className="section__lede">
            Na empresa, os dados são preservados por confidencialidade. Nos projetos autorais, dá
            para abrir a demo e ver o código.
          </p>
        </div>
        <button
          type="button"
          className="cases__pause"
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
        >
          {paused ? 'Retomar esteira' : 'Pausar esteira'}
        </button>
      </div>

      <div
        ref={belt}
        className="belt"
        role="region"
        aria-label="Esteira de cases, arraste para os lados"
        tabIndex={0}
        onKeyDown={onBeltKey}
      >
        <ol className="belt__track">
          {caseStudies.map((item) => (
            <li key={item.title}>
              <Card item={item} onOpen={(event) => open(item, event)} />
            </li>
          ))}
          {/* Segunda volta da esteira: só visual, fora da leitura e do teclado */}
          {caseStudies.map((item) => (
            <li key={`copia-${item.title}`} aria-hidden="true" inert>
              <Card item={item} copy />
            </li>
          ))}
        </ol>
      </div>
      <p className="cases__hint">
        Arraste para os lados ou deslize no celular. A esteira para quando você interage e volta
        sozinha.
      </p>

      <dialog
        ref={dialog}
        className="case-dialog"
        aria-labelledby="case-dialog-title"
        onClose={() => opener.current?.focus()}
        onClick={(event) => event.target === dialog.current && close()}
      >
        {active && (
          <div className="case-dialog__body">
            <div className="case-dialog__bar">
              <p className="case-dialog__context">{active.context}</p>
              <button type="button" className="case-dialog__close" onClick={close}>
                Fechar
              </button>
            </div>
            <h3 id="case-dialog-title" className="case-dialog__title">
              {active.title}
            </h3>
            <dl className="case-dialog__story">
              <div>
                <dt>Problema</dt>
                <dd>{active.problem}</dd>
              </div>
              <div>
                <dt>Meu papel</dt>
                <dd>{active.role}</dd>
              </div>
              <div>
                <dt>Resultado</dt>
                <dd>{active.result}</dd>
              </div>
            </dl>
            {active.links && (
              <p className="case-dialog__links">
                {active.links.map((link) => (
                  <ExternalLink
                    key={link.href}
                    href={link.href}
                    className="case-dialog__link"
                    onClick={() =>
                      track('case_link_click', { case: active.title, link: link.label })
                    }
                  >
                    {link.label}
                    <span className="visually-hidden"> do {active.title}</span>{' '}
                    <span aria-hidden="true">↗</span>
                  </ExternalLink>
                ))}
              </p>
            )}
            {active.gallery ? (
              <CaseGallery
                project={active.title}
                address={active.gallery.address}
                screens={active.gallery.screens}
              />
            ) : (
              active.note && <blockquote className="case-dialog__note">{active.note}</blockquote>
            )}
          </div>
        )}
      </dialog>
    </section>
  )
}
