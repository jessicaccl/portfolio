import type { ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function ExternalLink({ href, children, className, onClick }: Props) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className} onClick={onClick}>
      {children}
      <span className="visually-hidden"> (abre em nova aba)</span>
    </a>
  )
}
