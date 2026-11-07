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
          Product Owner que une negócio, tecnologia e{' '}
          <span className="hero__scribble">
            qualidade.
            <svg
              viewBox="0 0 300 24"
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M4 16 C 60 6, 120 20, 180 11 S 270 8, 296 14" />
            </svg>
          </span>
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
        <p className="hero__note">
          <svg viewBox="0 0 40 30" aria-hidden="true" focusable="false">
            <path d="M36 26 C 26 26, 12 22, 8 6 M3 12 L8 5 L14 11" />
          </svg>
          currículo atualizado, em PDF
        </p>
      </div>

      {profile.photo && (
        <figure className="hero__figure">
          <span className="hero__frame">
            <img
              src={profile.photo.src}
              srcSet={profile.photo.srcSet}
              sizes="(min-width: 900px) 26rem, min(86vw, 21rem)"
              alt={profile.photo.alt}
              width={480}
              height={600}
              fetchPriority="high"
              className="hero__photo"
            />
          </span>
          <figcaption>Jessica Lima, PO, desenvolvedora com IA e QA.</figcaption>
        </figure>
      )}
    </section>
  )
}
