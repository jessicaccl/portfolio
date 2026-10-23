import { useEffect, useRef, useState } from 'react'
import { profile } from '../content/profile'
import { ExternalLink } from './ExternalLink'
import { ThemeToggle } from './ThemeToggle'
import './Header.css'

const sections = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#cases', label: 'Cases' },
  { href: '#como-trabalho', label: 'Como eu trabalho' },
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#contato', label: 'Contato' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#inicio" className="header__brand">
          {profile.name}
          <span aria-hidden="true" className="header__dot" />
        </a>

        <div className="header__actions">
          <nav aria-label="Principal" className="nav">
            <button
              ref={toggleRef}
              type="button"
              className="nav__toggle"
              aria-expanded={open}
              aria-controls="menu-principal"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? 'Fechar' : 'Menu'}
            </button>

            <div id="menu-principal" className={open ? 'nav__panel is-open' : 'nav__panel'}>
              <ul className="nav__sections">
                {sections.map((section) => (
                  <li key={section.href}>
                    <a href={section.href} onClick={() => setOpen(false)}>
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="nav__external">
                <li>
                  <ExternalLink href={profile.links.linkedin}>LinkedIn</ExternalLink>
                </li>
                <li>
                  <ExternalLink href={profile.links.github}>GitHub</ExternalLink>
                </li>
              </ul>
            </div>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
