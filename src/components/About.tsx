import { about, aboutOpening } from '../content/home'
import './About.css'

export function About() {
  return (
    <section id="sobre" className="section about" aria-labelledby="about-title">
      <div className="section__head">
        <h2 id="about-title" className="section__title">
          Sobre mim
        </h2>
      </div>
      <p className="about__opening">{aboutOpening}</p>
      <div className="about__columns">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
