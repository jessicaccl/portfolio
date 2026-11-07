import { caseStudies } from '../content/home'
import { track } from '../lib/analytics'
import { ExternalLink } from './ExternalLink'
import './Cases.css'

export function Cases() {
  return (
    <section id="cases" className="section" aria-labelledby="cases-title">
      <div className="section__head">
        <h2 id="cases-title" className="section__title">
          Cases
        </h2>
        <p className="section__lede">
          Na empresa, os dados são preservados por confidencialidade. Nos projetos autorais, dá para
          abrir a demo e ver o código.
        </p>
      </div>

      <ol className="cases">
        {caseStudies.map((item, index) => (
          <li key={item.title}>
            <article className="case" aria-labelledby={`case-${index}`}>
              <p className="case__number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </p>

              <div className="case__body">
                <h3 id={`case-${index}`} className="case__title">
                  {item.title}
                </h3>
                <p className="case__context">{item.context}</p>

                <dl className="case__story">
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

                {item.links && (
                  <p className="case__links">
                    {item.links.map((link) => (
                      <ExternalLink
                        key={link.href}
                        href={link.href}
                        className="case__link"
                        onClick={() =>
                          track('case_link_click', { case: item.title, link: link.label })
                        }
                      >
                        {link.label}
                        <span className="visually-hidden"> do {item.title}</span>{' '}
                        <span aria-hidden="true">↗</span>
                      </ExternalLink>
                    ))}
                  </p>
                )}
              </div>

              {item.image ? (
                <figure className="case__figure">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>{item.image.caption}</figcaption>
                </figure>
              ) : (
                item.note && <blockquote className="case__note">{item.note}</blockquote>
              )}
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
