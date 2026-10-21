import type { PointerEvent } from 'react'
import { caseStudies } from '../content/home'
import { CaseArt } from './CaseArt'
import './Cases.css'

// Holofote dourado: guarda a posição do cursor no card para o gradiente do CSS.
function followPointer(event: PointerEvent<HTMLElement>) {
  const card = event.currentTarget
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--x', `${event.clientX - rect.left}px`)
  card.style.setProperty('--y', `${event.clientY - rect.top}px`)
}

export function Cases() {
  return (
    <section id="cases" className="cases" aria-labelledby="cases-title">
      <div className="section">
        <p className="section__eyebrow">Prova de produto</p>
        <h2 id="cases-title" className="section__title">
          Cases em destaque
        </h2>
        <p className="section__intro">
          Produtos reais, em produção, construídos com o time. Os dados são preservados por
          confidencialidade.
        </p>

        <ol className="cases__list">
          {caseStudies.map((item, index) => (
            <li key={item.title}>
              <article className="case" aria-labelledby={`case-${index}`} onPointerMove={followPointer}>
                <CaseArt name={item.art} />

                <div className="case__body">
                  <p className="case__number" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 id={`case-${index}`} className="case__title">
                    {item.title}
                  </h3>
                  <p className="case__context">{item.context}</p>

                  <dl className="case__details">
                    <div>
                      <dt>Problema</dt>
                      <dd>{item.problem}</dd>
                    </div>
                    <div>
                      <dt>Meu papel</dt>
                      <dd>{item.role}</dd>
                    </div>
                    <div>
                      <dt>Resultado</dt>
                      <dd>{item.result}</dd>
                    </div>
                  </dl>

                  <ul className="case__tags" aria-label="Temas">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
