import { profile } from '../content/profile'

export function CvLink({ className }: { className?: string }) {
  return (
    <a href={profile.cv.href} download={profile.cv.fileName} className={className}>
      Baixar currículo
      <span className="visually-hidden"> (PDF)</span>
      <span aria-hidden="true" className="btn__icon">
        ↓
      </span>
    </a>
  )
}
