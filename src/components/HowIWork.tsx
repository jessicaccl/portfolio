import { useId, useState } from 'react'
import { workLog } from '../content/home'
import { RevealWords } from './RevealWords'
import './HowIWork.css'

export function HowIWork() {
  // A primeira etapa começa aberta, para mostrar que cada linha abre
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]))
  const id = useId()

  function toggle(index: number) {
    setOpen((current) => {
      const next = new Set(current)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <section id="como-trabalho" className="section" aria-labelledby="work-title">
      <div className="section__head">
        <h2 id="work-title" className="section__title">
          Como eu trabalho
        </h2>
        <p className="section__lede">
          Toda demanda passa pelas mesmas oito etapas. A IA me dá velocidade nas cinco primeiras; nas
          três últimas, quem decide são as pessoas.
        </p>
      </div>

      <div className="log">
        <p className="log__bar">
          registro do método <span>· clique numa etapa para ver o que ela entrega</span>
        </p>
        <ol className="log__list">
          {workLog.map((step, index) => {
            const isOpen = open.has(index)
            return (
              <li key={step.title} className={isOpen ? 'log__row is-open' : 'log__row'}>
                <span className="log__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="log__title">
                  <button
                    type="button"
                    className="log__toggle"
                    aria-expanded={isOpen}
                    aria-controls={`${id}-${index}`}
                    onClick={() => toggle(index)}
                  >
                    {step.title}
                    <span className="log__chevron" aria-hidden="true" />
                  </button>
                </h3>
                <p className="log__description">{step.description}</p>
                <span className={step.by === 'IA' ? 'log__by' : 'log__by log__by--people'}>
                  {step.by === 'IA' ? 'com IA' : 'pessoas decidem'}
                </span>
                <div id={`${id}-${index}`} className="log__output" hidden={!isOpen}>
                  <span className="log__output-label">entrega</span> {step.output}
                </div>
              </li>
            )
          })}
        </ol>
      </div>

      <blockquote className="principle">
        <RevealWords
          text="Bugs aparecem quando uma etapa é pulada."
          accent="Por isso, nenhuma etapa é opcional."
        />
      </blockquote>
    </section>
  )
}
