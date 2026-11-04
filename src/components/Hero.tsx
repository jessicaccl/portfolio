import { impactStats } from '../content/home'
import { profile } from '../content/profile'
import { track } from '../lib/analytics'
import { CvLink } from './CvLink'
import { ExternalLink } from './ExternalLink'
import './Hero.css'

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__text">
        <p className="hero__role">{profile.role}</p>
        <h1 id="hero-title" className="hero__title">
          Product Owner que une negócio, tecnologia e <em>qualidade.</em>
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

        {/* Prova logo no topo: os mesmos números da faixa de impacto, em uma linha */}
        <ul className="hero__proof" aria-label="Destaques">
          {[impactStats[0], impactStats[1], impactStats[3]].map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong> {stat.label}
            </li>
          ))}
        </ul>
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
