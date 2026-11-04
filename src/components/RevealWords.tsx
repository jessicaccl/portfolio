import { useEffect, useRef } from 'react'
import './RevealWords.css'

type Props = { text: string; accent: string }

// Frase de destaque: cada palavra passa do tom secundário para o tom cheio ao cruzar
// a parte de cima da tela, uma vez só. O tom inicial já passa no contraste (WCAG 1.4.3),
// e com movimento reduzido ou sem IntersectionObserver a frase aparece completa.
export function RevealWords({ text, accent }: Props) {
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const words = [...root.querySelectorAll<HTMLElement>('.reveal__word')]
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      words.forEach((word) => word.classList.add('is-on'))
      return
    }

    root.classList.add('is-armed')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-on')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -35% 0px', threshold: 1 },
    )
    words.forEach((word) => observer.observe(word))
    return () => observer.disconnect()
  }, [])

  const split = (value: string) => value.split(' ').filter(Boolean)

  return (
    <p ref={ref} className="reveal">
      {split(text).map((word, index) => (
        <span key={`t${index}`} className="reveal__word">
          {word}{' '}
        </span>
      ))}
      <em>
        {split(accent).map((word, index) => (
          <span key={`a${index}`} className="reveal__word">
            {word}
            {index < split(accent).length - 1 ? ' ' : ''}
          </span>
        ))}
      </em>
    </p>
  )
}
