import { profile } from '../content/profile'
import { CvLink } from './CvLink'
import { ExternalLink } from './ExternalLink'
import './Contact.css'

export function Contact() {
  return (
    <section id="contato" className="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="contact__title">
        Vamos conversar?
      </h2>
      <p className="contact__text">
        Busco uma vaga remota de Product Owner ou Analista de Produto. Se o seu time precisa de
        alguém que una visão de negócio, critério e qualidade na entrega, me chama.
      </p>
      <div className="contact__actions">
        <CvLink className="btn btn--primary" />
        <ExternalLink href={profile.links.linkedin} className="btn btn--secondary">
          LinkedIn
        </ExternalLink>
        <ExternalLink href={profile.links.github} className="btn btn--secondary">
          GitHub
        </ExternalLink>
      </div>
    </section>
  )
}
