import { impactStats } from '../content/home'
import './ImpactNumbers.css'

export function ImpactNumbers() {
  return (
    <section className="impact" aria-labelledby="impact-title">
      <h2 id="impact-title" className="visually-hidden">
        Impacto em números
      </h2>
      <ul className="impact__list">
        {impactStats.map((stat) => (
          <li key={stat.label} className="impact__item">
            <span className="impact__value">{stat.value}</span>
            <span className="impact__label">{stat.label}</span>
            <span className="impact__detail">{stat.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
