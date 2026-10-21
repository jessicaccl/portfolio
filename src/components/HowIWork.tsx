import { workSteps } from '../content/home'
import './HowIWork.css'

export function HowIWork() {
  return (
    <section id="como-trabalho" className="section" aria-labelledby="work-title">
      <p className="section__eyebrow">Método</p>
      <h2 id="work-title" className="section__title">
        Como eu trabalho
      </h2>
      <p className="section__intro">
        Da demanda ao monitoramento, cada entrega passa pelas mesmas etapas. Uso IA no dia a dia
        para ganhar velocidade, e a decisão e a validação continuam humanas.
      </p>

      <ol className="steps">
        {workSteps.map((step, index) => (
          <li key={step.title} className="step">
            <span className="step__number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="step__title">
              {step.title}
              {step.withAi && (
                <>
                  {' '}
                  <span className="step__ai">com IA</span>
                </>
              )}
            </h3>
            <p className="step__description">{step.description}</p>
          </li>
        ))}
      </ol>

      <blockquote className="principle">
        <p>
          Bugs aparecem quando uma etapa é pulada. <em>Por isso, nenhuma etapa é opcional.</em>
        </p>
      </blockquote>
    </section>
  )
}
