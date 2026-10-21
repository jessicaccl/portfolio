import { workPhases } from '../content/home'
import './HowIWork.css'

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2l2.2 6.3L20.5 10l-6.3 2.2L12 18.5l-2.2-6.3L3.5 10l6.3-1.7z" />
      <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" />
    </svg>
  )
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="9" cy="8" r="3.5" />
      <circle cx="17" cy="9.5" r="2.5" />
      <path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5" />
      <path d="M15.5 14.6c2.6-.2 4.8 1.3 5.5 4.4" />
    </svg>
  )
}

// Número da primeira etapa de cada bloco, para a numeração seguir contínua (01 a 08).
const firstStepOf = workPhases.map((_, index) =>
  workPhases.slice(0, index).reduce((total, phase) => total + phase.steps.length, 1),
)

export function HowIWork() {
  return (
    <section id="como-trabalho" className="section" aria-labelledby="work-title">
      <p className="section__eyebrow">Método</p>
      <h2 id="work-title" className="section__title">
        Como eu trabalho
      </h2>
      <p className="section__intro">
        Da demanda ao monitoramento, cada entrega passa pelas mesmas etapas. A IA me dá
        velocidade; a decisão e a validação continuam humanas.
      </p>

      <div className="phases">
        {workPhases.map((phase, phaseIndex) => {
          const firstStep = firstStepOf[phaseIndex]
          const isAi = phaseIndex === 0

          return (
            <div key={phase.title} className={isAi ? 'phase phase--ai' : 'phase phase--human'}>
              <div className="phase__header">
                <span className="phase__icon">{isAi ? <SparkIcon /> : <PeopleIcon />}</span>
                <div>
                  <h3 className="phase__title">{phase.title}</h3>
                  <p className="phase__description">{phase.description}</p>
                </div>
              </div>

              <ol className="flow" start={firstStep}>
                {phase.steps.map((step, stepIndex) => (
                  <li key={step.title} className="flow__step">
                    <span className="flow__number" aria-hidden="true">
                      {String(firstStep + stepIndex).padStart(2, '0')}
                    </span>
                    <h4 className="flow__title">{step.title}</h4>
                    <p className="flow__description">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          )
        })}
      </div>

      <blockquote className="principle">
        <p>
          Bugs aparecem quando uma etapa é pulada. <em>Por isso, nenhuma etapa é opcional.</em>
        </p>
      </blockquote>
    </section>
  )
}
