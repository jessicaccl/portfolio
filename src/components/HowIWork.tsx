import { workLog } from '../content/home'
import { RevealWords } from './RevealWords'
import './HowIWork.css'

export function HowIWork() {
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
        <p className="log__bar" aria-hidden="true">
          registro do método <span>· uma demanda, do pedido à produção</span>
        </p>
        <ol className="log__list">
          {workLog.map((step, index) => (
            <li key={step.title} className="log__row">
              <span className="log__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="log__title">{step.title}</h3>
              <p className="log__description">{step.description}</p>
              <span className={step.by === 'IA' ? 'log__by' : 'log__by log__by--people'}>
                {step.by === 'IA' ? 'com IA' : 'pessoas decidem'}
              </span>
            </li>
          ))}
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
