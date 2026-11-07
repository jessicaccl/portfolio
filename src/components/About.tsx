import { about, aboutOpening } from '../content/home'
import './About.css'

// Sobre mim como uma folha de discovery: o texto principal numa folha pautada
// e o resto em post-its, de onde eu venho e para onde eu vou.
export function About() {
  const [main, origin, next] = about

  return (
    <section id="sobre" className="section about" aria-labelledby="about-title">
      <div className="section__head">
        <h2 id="about-title" className="section__title">
          Sobre mim
        </h2>
      </div>

      <div className="about__board">
        <div className="about__sheet">
          <p className="about__label">discovery · quem é a Jessica</p>
          <p className="about__opening">{aboutOpening}</p>
          <p>{main}</p>
        </div>
        <div className="about__notes">
          <div className="about__note about__note--olive">
            <p className="about__label">de onde eu venho</p>
            <p>{origin}</p>
          </div>
          <div className="about__note about__note--lav">
            <p className="about__label">para onde eu vou</p>
            <p>{next}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
