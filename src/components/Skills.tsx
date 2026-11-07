import { skillGroups } from '../content/home'
import './Skills.css'

export function Skills() {
  return (
    <section id="competencias" className="section" aria-labelledby="skills-title">
      <div className="section__head">
        <h2 id="skills-title" className="section__title">
          Principais competências
        </h2>
      </div>

      <ul className="skills">
        {skillGroups.map((group) => (
          <li key={group.title} className="skills__row">
            <h3 className="skills__title">{group.title}</h3>
            <ul className="skills__list" aria-label={group.title}>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <p className="skills__evidence">
              <span>Na prática:</span> {group.evidence}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
