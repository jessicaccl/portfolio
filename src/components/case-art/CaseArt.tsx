import type { CaseArt as Art } from '../../content/home'
import { brazilDots, serra } from './brazil'
import './CaseArt.css'

// Imagem do card na esteira. Telas reais nos projetos autorais; ilustrações próprias,
// sem dados reais, nos cases da empresa (contrato de confidencialidade).
export function CaseArt({ art }: { art: Art }) {
  switch (art.kind) {
    case 'shot':
      return (
        <div className={`art art--shot art--${art.tone}`}>
          <div className="art__window">
            <span className="art__dots" aria-hidden="true" />
            <img
              src={`/cases/${art.file}-960.webp`}
              alt=""
              width={960}
              height={600}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
        </div>
      )
    case 'map':
      return <MapArt />
    case 'chat':
      return <ChatArt />
    case 'monitor':
      return <MonitorArt />
    case 'erp':
      return <ErpArt />
  }
}

function MapArt() {
  const [x, y] = serra
  return (
    <svg className="art art--map" viewBox="0 0 400 260" aria-hidden="true" focusable="false">
      <rect width="400" height="260" className="art-map__bg" />
      <g className="art-map__dots">
        {brazilDots.map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.9" />
        ))}
      </g>
      <g className="art-map__fleet">
        <circle cx={x} cy={y} r="5" />
        <circle cx={x - 7} cy={y - 4} r="3" />
        <circle cx={x + 6} cy={y + 3} r="3" />
        <circle cx={x - 3} cy={y + 7} r="3" />
      </g>
      <circle className="art-map__ping" cx={x} cy={y} r="16" />
      <text x="24" y="58" className="art-map__big">
        +150
      </text>
      <text x="26" y="82" className="art-map__label">
        motos rastreadas
      </text>
      <text x="26" y="232" className="art-map__note">
        frota na região serrana do RJ
      </text>
    </svg>
  )
}

function ChatArt() {
  return (
    <div className="art art--chat" aria-hidden="true">
      <div className="chat__top">
        <span className="chat__avatar">L</span>
        <span>
          <b>Assistente da locadora</b>
          <small>online</small>
        </span>
      </div>
      <div className="chat__body">
        <p className="chat__msg">
          Oi, Marcos! Vi que a fatura da semana está em aberto. Posso ajudar?<time>10:31</time>
        </p>
        <p className="chat__msg chat__msg--out">
          Consigo pagar uma parte hoje e o resto na sexta?<time>10:33 ✓✓</time>
        </p>
        <p className="chat__msg">
          Claro! Vou chamar a equipe para fechar o acordo.<time>10:33</time>
        </p>
        <p className="chat__system">Transferido para a equipe financeira</p>
        <p className="chat__msg chat__msg--human">
          <b>Ana · financeiro</b>Oi, Marcos! Vamos fechar agora.<time>10:35</time>
        </p>
      </div>
    </div>
  )
}

const peaks = [22, 30, 55, 82, 70, 48, 60, 90, 66, 40, 28, 18]

function MonitorArt() {
  return (
    <div className="art art--monitor" aria-hidden="true">
      <div className="monitor__kpis">
        {[
          ['Resolvidos', 82],
          ['Recorrência', 38],
          ['Tempo médio', 64],
          ['Satisfação', 76],
        ].map(([label, width]) => (
          <span key={label}>
            <i style={{ width: `${width}%` }} />
            {label}
          </span>
        ))}
      </div>
      <div className="monitor__chart">
        <small>Picos de atendimento</small>
        <div className="monitor__bars">
          {peaks.map((height, index) => (
            <i key={index} style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
      <div className="monitor__split">
        <small>Agentes de IA × equipe</small>
        <div>
          <i />
          <i />
        </div>
      </div>
    </div>
  )
}

const modules = [
  'Cadastros',
  'Venda e locação',
  'Contratos',
  'Manutenção',
  'Estoque',
  'Financeiro',
  'Integrações bancárias',
  'Pós-venda e KPIs',
]

function ErpArt() {
  return (
    <div className="art art--erp" aria-hidden="true">
      {modules.map((module) => (
        <span key={module}>{module}</span>
      ))}
    </div>
  )
}
