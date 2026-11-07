import { profile } from '../content/profile'
import { track } from '../lib/analytics'
import { CvLink } from './CvLink'
import { ExternalLink } from './ExternalLink'
import './Hero.css'

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__text">
        <p className="hero__kicker">{profile.role}</p>
        <h1 id="hero-title" className="hero__title">
          {profile.headline}
        </h1>
        <p className="hero__lead">{profile.subheadline}</p>

        <div className="hero__actions">
          <CvLink className="btn btn--primary" placement="topo" />
          <ExternalLink
            href={profile.links.linkedin}
            className="btn btn--secondary"
            onClick={() => track('linkedin_click', { local: 'topo' })}
          >
            LinkedIn
          </ExternalLink>
        </div>
      </div>

      {profile.photo && (
        <figure className="hero__figure">
          <img
            src={profile.photo.src}
            srcSet={profile.photo.srcSet}
            sizes="(min-width: 900px) 26rem, calc(100vw - 2.5rem)"
            alt={profile.photo.alt}
            width={480}
            height={600}
            fetchPriority="high"
            className="hero__photo"
          />
          <figcaption>Jessica Lima, PO, desenvolvedora com IA e QA.</figcaption>
        </figure>
      )}
    </section>
  )
}
