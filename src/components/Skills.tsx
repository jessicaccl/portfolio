import type { ReactNode } from 'react'
import { skillGroups, type SkillGroup } from '../content/home'
import './Skills.css'

const icons: Record<SkillGroup['icon'], ReactNode> = {
  product: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 9h8M8 13h5M8 17h3" />
    </>
  ),
  quality: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  ai: (
    <>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" />
    </>
  ),
  agile: (
    <>
      <path d="M20 12a8 8 0 1 1-2.3-5.7" />
      <path d="M20 4v4h-4" />
      <path d="M12 8v4l3 2" />
    </>
  ),
}

export function Skills() {
  return (
    <section id="competencias" className="section" aria-labelledby="skills-title">
      <p className="section__eyebrow">O que eu faço bem</p>
      <h2 id="skills-title" className="section__title">
        Principais competências
      </h2>

      <ul className="skills">
        {skillGroups.map((group) => (
          <li key={group.title} className="skills__group">
            <span className="skills__icon">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                {icons[group.icon]}
              </svg>
            </span>
            <h3 className="skills__title">{group.title}</h3>
            <ul className="skills__list" aria-label={group.title}>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
