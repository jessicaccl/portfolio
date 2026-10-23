import { about } from '../content/home'
import './About.css'

export function About() {
  return (
    <section id="sobre" className="section about" aria-labelledby="about-title">
      <div className="about__heading">
        <p className="section__eyebrow">Quem sou</p>
        <h2 id="about-title" className="section__title">
          Sobre mim
        </h2>
      </div>
      <div className="about__text">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
