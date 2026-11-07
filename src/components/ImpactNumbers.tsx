import { impactStats } from '../content/home'
import './ImpactNumbers.css'

export function ImpactNumbers() {
  return (
    <section className="facts" aria-labelledby="impact-title">
      <h2 id="impact-title" className="visually-hidden">
        Impacto em números
      </h2>
      <ul className="facts__list">
        {impactStats.map((stat) => (
          <li key={stat.label} className="facts__item">
            <span className="facts__value">{stat.value}</span>
            <span className="facts__label">{stat.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
