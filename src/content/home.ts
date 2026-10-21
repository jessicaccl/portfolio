import type { CaseArtName } from '../components/CaseArt'

// Conteúdo da home. Regras (PRD, seção 9): nada de valor financeiro, percentual de custo,
// nome de cliente ou da empresa nos cases; sempre "o time" e um bloco "Meu papel".

export type ImpactStat = { value: string; label: string }

export const impactStats: ImpactStat[] = [
  { value: '+150', label: 'motos monitoradas por uma plataforma de rastreamento própria' },
  { value: '4', label: 'agentes de IA em produção, monitorados diariamente' },
  { value: '3', label: 'papéis no mesmo produto: PO, desenvolvedora e QA' },
  { value: '10 anos', label: 'à frente de um negócio próprio, com mentalidade de dono' },
]

export type CaseStudy = {
  title: string
  context: string
  problem: string
  role: string
  result: string
  tags: string[]
  art: CaseArtName
}

export const caseStudies: CaseStudy[] = [
  {
    title: 'Plataforma de rastreamento',
    context: 'Locadora de motos',
    problem:
      'A plataforma terceirizada era cara e instável, e a operação não podia confiar na localização da frota.',
    role: 'Auxiliei na descoberta da conexão dos rastreadores com a rede e fiz a migração da frota, veículo a veículo.',
    result:
      'Construímos uma plataforma própria para mais de 150 motos, com bloqueio automático de inadimplentes (nunca com a moto em movimento), cerca virtual e custo menor de rastreamento.',
    tags: ['Migração', 'Regras de negócio', 'Operação'],
    art: 'tracking',
  },
  {
    title: 'ERP de locação',
    context: 'Locadora de motos',
    problem:
      'Gestão e operação trazem demandas todos os dias para o sistema que sustenta contratos, manutenção, estoque e financeiro.',
    role: 'Levanto e especifico as demandas, desenvolvo melhorias e novas funcionalidades com IA e valido cada entrega contra os critérios de aceite.',
    result:
      'O time evolui continuamente os módulos operacional, gerencial e financeiro, com pagamentos integrados e baixa automática, assinatura digital de contratos e consulta de infrações.',
    tags: ['Discovery', 'Critérios de aceite', 'Testes de regressão'],
    art: 'erp',
  },
  {
    title: 'Agentes de IA no atendimento',
    context: 'Locadora de motos',
    problem:
      'Cobrança, atendimento financeiro e pós-venda precisavam de resposta rápida, sem sobrecarregar a equipe.',
    role: 'Desenvolvo e monitoro os agentes todos os dias, definindo até onde a IA vai e em que momento a equipe assume.',
    result:
      'Colocamos em produção agentes de venda, locação, financeiro e pós-venda. O de cobrança negocia com clientes em atraso e aciona a equipe quando há acordo.',
    tags: ['IA aplicada', 'Monitoramento', 'Humano no controle'],
    art: 'agents',
  },
]

export type WorkStep = { title: string; description: string }

export type WorkPhase = { title: string; description: string; steps: WorkStep[] }

// O método em dois blocos: onde a IA acelera e onde a decisão é das pessoas.
export const workPhases: WorkPhase[] = [
  {
    title: 'Com apoio de IA',
    description: 'A IA acelera a análise, a escrita e o código. Eu reviso tudo antes de seguir.',
    steps: [
      {
        title: 'Demanda',
        description: 'Escuto gestão e operação para entender o problema antes da solução.',
      },
      {
        title: 'História',
        description: 'Transformo a necessidade em história de usuário, com o valor para quem usa.',
      },
      {
        title: 'Critérios de aceite',
        description: 'Defino como saberemos que está pronto, incluindo os cenários de erro.',
      },
      {
        title: 'Desenvolvimento',
        description: 'Prototipo e desenvolvo com o time, sem perder o controle do que entra.',
      },
      {
        title: 'Teste',
        description: 'Valido contra os critérios e faço testes de regressão no que já funcionava.',
      },
    ],
  },
  {
    title: 'Validação humana',
    description: 'Aqui quem decide é quem usa: nada vai ao ar sem passar pelas pessoas.',
    steps: [
      {
        title: 'Homologação',
        description: 'Quem vai usar testa antes de ir ao ar. O "funciona" é deles, não só meu.',
      },
      {
        title: 'Produção',
        description: 'Publico com cuidado e comunico o que mudou para quem usa.',
      },
      {
        title: 'Monitoramento',
        description: 'Acompanho depois da entrega e trato bugs até a resolução.',
      },
    ],
  },
]

export type CareerStep = {
  period: string
  company: string
  role: string
  takeaway: string
  current?: boolean
}

// Ordem cronológica: a história da transição do varejo para produto (US09).
export const career: CareerStep[] = [
  {
    period: '2012 – 2014',
    company: 'Mayfair Multimarcas',
    role: 'Gerente Comercial',
    takeaway: 'Aprendi a liderar uma equipe de vendas com metas e decisões baseadas em dados.',
  },
  {
    period: '2015 – 2025',
    company: 'Amare Fashion',
    role: 'Fundadora e CEO',
    takeaway:
      'Dez anos à frente de uma loja de moda: cliente, equipe, operação e números. Daqui vem a minha mentalidade de dono.',
  },
  {
    period: '2025 – 2026',
    company: 'Serratec',
    role: 'Residência Full Stack (790 h)',
    takeaway: 'A base técnica para conversar de igual para igual com o time de desenvolvimento.',
  },
  {
    period: 'Mar – Mai 2026',
    company: 'FEST, Fábrica Escola de Software e Teste',
    role: 'Product Owner e Scrum Master · formação prática',
    takeaway: 'Prática de backlog, refinamento e cerimônias ágeis com equipes reais.',
  },
  {
    period: 'Mai 2026 – atual',
    company: 'Fast Motos, Grupo Maturano',
    role: 'Product Owner, Desenvolvedora de Software e Analista de Qualidade',
    takeaway: 'Onde junto produto, desenvolvimento com IA e qualidade no mesmo dia a dia.',
    current: true,
  },
  {
    period: 'Ago – Set 2026',
    company: 'FullStore',
    role: 'Analista de Implantação',
    takeaway: 'Vi o produto pelo lado do cliente: implantação, treinamento e o que trava a adoção.',
  },
]
