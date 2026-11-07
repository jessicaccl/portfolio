import { useEffect, useState } from 'react'
import { profile } from '../content/profile'
import { CvLink } from './CvLink'
import './CvBar.css'

// Celular: depois que o topo sai da tela, o currículo fica a um toque, numa barra fina.
// Some de novo no contato, que já tem o mesmo botão.
export function CvBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('#inicio')
    const contact = document.querySelector('#contato')
    if (!hero || !contact || !('IntersectionObserver' in window)) return

    const state = { heroVisible: true, contactVisible: false }
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) state.heroVisible = entry.isIntersecting
        if (entry.target === contact) state.contactVisible = entry.isIntersecting
      }
      setVisible(!state.heroVisible && !state.contactVisible)
    })
    observer.observe(hero)
    observer.observe(contact)
    return () => observer.disconnect()
  }, [])

  if (!visible) return null

  return (
    <div className="cv-bar">
      <p className="cv-bar__name">{profile.name}</p>
      <CvLink className="btn btn--primary cv-bar__button" placement="barra" />
    </div>
  )
}
