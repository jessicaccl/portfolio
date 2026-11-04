import { profile } from '../content/profile'
import { track } from '../lib/analytics'

type Props = { className?: string; placement: string }

export function CvLink({ className, placement }: Props) {
  return (
    <a
      href={profile.cv.href}
      download={profile.cv.fileName}
      className={className}
      onClick={() => track('cv_download', { local: placement })}
    >
      Baixar currículo
      <span className="visually-hidden"> (PDF)</span>
      <span aria-hidden="true" className="btn__icon">
        ↓
      </span>
    </a>
  )
}
