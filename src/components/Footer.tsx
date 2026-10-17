import { profile } from '../content/profile'
import { ExternalLink } from './ExternalLink'
import './Footer.css'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer">
      <p>
        © {currentYear} {profile.name} · Construído como produto: com PRD, user
        stories e qualidade verificada no CI.{' '}
        <ExternalLink href={profile.links.repo}>Ver o código</ExternalLink>
      </p>
    </footer>
  )
}
