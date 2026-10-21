import { profile } from '../content/profile'
import { CvLink } from './CvLink'
import { ExternalLink } from './ExternalLink'
import './Hero.css'

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__text">
        <p className="hero__role">{profile.role}</p>
        <h1 id="hero-title" className="hero__title">
          Transformo problemas de negócio em <em>produto que funciona.</em>
        </h1>
        <p className="hero__lead">{profile.subheadline}</p>

        <div className="hero__actions">
          <CvLink className="btn btn--primary" />
          <ExternalLink href={profile.links.linkedin} className="btn btn--secondary">
            LinkedIn
          </ExternalLink>
        </div>

        <p className="hero__availability">
          <span aria-hidden="true" className="hero__pulse" />
          {profile.availability}
        </p>
      </div>

      <div className="hero__portrait">
        {profile.photo ? (
          <img
            src={profile.photo.src}
            srcSet={profile.photo.srcSet}
            sizes="(min-width: 900px) 22rem, min(100vw - 2rem, 22rem)"
            alt={profile.photo.alt}
            width={480}
            height={600}
            fetchPriority="high"
            className="hero__photo"
          />
        ) : (
          <div aria-hidden="true" className="hero__photo hero__photo--placeholder">
            JL
          </div>
        )}
        <span aria-hidden="true" className="hero__dots" />
      </div>
    </section>
  )
}
