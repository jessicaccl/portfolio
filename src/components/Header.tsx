import { profile } from '../content/profile'
import { ExternalLink } from './ExternalLink'
import './Header.css'

export function Header() {
  return (
    <header className="header">
      <a href="#inicio" className="header__brand">
        {profile.name}
        <span aria-hidden="true" className="header__dot" />
      </a>
      <nav aria-label="Redes" className="header__links">
        <ExternalLink href={profile.links.linkedin}>LinkedIn</ExternalLink>
        <ExternalLink href={profile.links.github}>GitHub</ExternalLink>
      </nav>
    </header>
  )
}
