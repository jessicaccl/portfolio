import { useEffect, useRef, useState } from 'react'
import { profile } from '../content/profile'
import { track } from '../lib/analytics'
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
  const [current, setCurrent] = useState<string | null>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Marca no menu a seção que está no meio da tela
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const targets = sections
      .map((section) => document.querySelector(section.href))
      .filter((element): element is Element => element !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setCurrent(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

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
                    <a
                    href={section.href}
                    aria-current={current === section.href ? 'true' : undefined}
                    onClick={() => setOpen(false)}
                  >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="nav__external">
                <li>
                  <ExternalLink
                    href={profile.links.linkedin}
                    onClick={() => track('linkedin_click', { local: 'menu' })}
                  >
                    LinkedIn
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink
                    href={profile.links.github}
                    onClick={() => track('github_click', { local: 'menu' })}
                  >
                    GitHub
                  </ExternalLink>
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
