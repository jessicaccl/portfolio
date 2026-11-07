import { career } from '../content/home'
import './Career.css'

export function Career() {
  return (
    <section id="trajetoria" className="section" aria-labelledby="career-title">
      <div className="section__head">
        <h2 id="career-title" className="section__title">
          Do varejo ao produto digital
        </h2>
        <p className="section__lede">
          Antes de escrever histórias de usuário, passei mais de dez anos ouvindo clientes e cuidando
          de um negócio. Cada etapa deixou algo que uso até hoje.
        </p>
      </div>

      <ol className="timeline">
        {career.map((step) => (
          <li key={step.company} className="timeline__item">
            <p className="timeline__period">
              {step.period}
              {step.current && <span className="visually-hidden"> (emprego atual)</span>}
            </p>
            <div>
              <h3 className="timeline__company">{step.company}</h3>
              <p className="timeline__role">{step.role}</p>
            </div>
            <p className="timeline__takeaway">{step.takeaway}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
