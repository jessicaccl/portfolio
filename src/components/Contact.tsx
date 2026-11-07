import { profile } from '../content/profile'
import { track } from '../lib/analytics'
import { CvLink } from './CvLink'
import { ExternalLink } from './ExternalLink'
import './Contact.css'

export function Contact() {
  return (
    <section id="contato" className="contact" aria-labelledby="contact-title">
      <div className="contact__page">
        <p className="contact__label">próximo passo</p>
        <h2 id="contact-title" className="contact__title">
          Vamos conversar?
        </h2>
        <p className="contact__text">
          Gosto de trocar ideias sobre produto, qualidade de software e IA aplicada a negócios. Se
          você tem um projeto, um desafio no seu time ou quer só trocar experiências, me chama.
        </p>
        <div className="contact__actions">
          <CvLink className="btn btn--primary" placement="contato" />
          <ExternalLink
            href={profile.links.linkedin}
            className="btn btn--secondary"
            onClick={() => track('linkedin_click', { local: 'contato' })}
          >
            LinkedIn
          </ExternalLink>
          <ExternalLink
            href={profile.links.github}
            className="btn btn--secondary"
            onClick={() => track('github_click', { local: 'contato' })}
          >
            GitHub
          </ExternalLink>
        </div>
      </div>
    </section>
  )
}
