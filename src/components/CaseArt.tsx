// Ilustrações dos cases: desenhos próprios, sem nenhum print ou dado real (confidencialidade).
export type CaseArtName = 'tracking' | 'erp' | 'agents'

const gold = '#c9a227'
const accent = '#a04a26'
const cream = '#f3ece2'

function Tracking() {
  return (
    <>
      <path
        className="case-art__grid"
        d="M0 40H320M0 80H320M0 120H320M0 160H320M40 0V200M80 0V200M120 0V200M160 0V200M200 0V200M240 0V200M280 0V200"
      />
      <circle cx="200" cy="96" r="62" fill="none" stroke={gold} strokeWidth="1.5" strokeDasharray="4 6" opacity=".8" />
      <path
        className="case-art__route"
        d="M40 170 C 90 160, 110 110, 150 110 S 210 70, 230 60"
        fill="none"
        stroke={gold}
        strokeWidth="2.5"
        strokeDasharray="8 6"
        strokeLinecap="round"
      />
      <circle cx="40" cy="170" r="5" fill={accent} />
      <circle className="case-art__ping" cx="230" cy="60" r="5" fill="none" stroke={gold} strokeWidth="2" />
      <circle cx="230" cy="60" r="6" fill={gold} />
      <g fill={accent} opacity=".7">
        <circle cx="170" cy="130" r="3" />
        <circle cx="215" cy="120" r="3" />
        <circle cx="185" cy="70" r="3" />
        <circle cx="250" cy="105" r="3" />
      </g>
    </>
  )
}

function Erp() {
  return (
    <>
      <rect className="case-art__panel" x="30" y="30" width="260" height="140" rx="10" />
      <rect x="30" y="30" width="60" height="140" rx="10" fill={accent} opacity=".85" />
      <g fill={cream} opacity=".85">
        <rect x="42" y="50" width="36" height="6" rx="3" />
        <rect x="42" y="66" width="28" height="6" rx="3" />
        <rect x="42" y="82" width="32" height="6" rx="3" />
        <rect x="42" y="98" width="24" height="6" rx="3" />
      </g>
      <g className="case-art__bars" fill={gold}>
        <rect x="110" y="120" width="16" height="34" rx="3" />
        <rect x="134" y="104" width="16" height="50" rx="3" />
        <rect x="158" y="90" width="16" height="64" rx="3" />
        <rect x="182" y="76" width="16" height="78" rx="3" />
      </g>
      <g className="case-art__line">
        <rect x="212" y="48" width="64" height="10" rx="5" />
        <rect x="212" y="66" width="48" height="10" rx="5" />
      </g>
      <g transform="translate(214 92)">
        <rect width="60" height="60" rx="8" fill="none" stroke={gold} strokeWidth="1.5" />
        <path d="M14 31l10 10 22-22" fill="none" stroke={gold} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </>
  )
}

function Agents() {
  return (
    <>
      <g className="case-art__bubble">
        <rect x="36" y="30" width="150" height="38" rx="19" fill={accent} />
        <rect x="56" y="45" width="90" height="8" rx="4" fill={cream} />
      </g>
      <g className="case-art__bubble">
        <rect x="130" y="82" width="154" height="38" rx="19" fill={gold} />
        <rect x="150" y="97" width="70" height="8" rx="4" fill="#141414" opacity=".75" />
        <circle cx="262" cy="101" r="6" fill="#141414" opacity=".75" />
      </g>
      <g className="case-art__bubble">
        <rect className="case-art__panel" x="36" y="134" width="120" height="38" rx="19" />
        <rect className="case-art__line" x="56" y="149" width="60" height="8" rx="4" />
      </g>
      <g transform="translate(232 138)" fill="none" stroke={gold} strokeWidth="2" strokeLinecap="round">
        <circle cx="18" cy="12" r="10" />
        <path d="M0 46c2-14 10-20 18-20s16 6 18 20" />
      </g>
    </>
  )
}

const arts = { tracking: Tracking, erp: Erp, agents: Agents }

export function CaseArt({ name }: { name: CaseArtName }) {
  const Art = arts[name]
  return (
    <svg className="case-art" viewBox="0 0 320 200" aria-hidden="true" focusable="false">
      <rect className="case-art__bg" width="320" height="200" />
      <Art />
    </svg>
  )
}
