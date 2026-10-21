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
  },
]

export type WorkStep = { title: string; description: string; withAi: boolean }

export const workSteps: WorkStep[] = [
  {
    title: 'Demanda',
    description: 'Escuto gestão e operação para entender o problema antes da solução.',
    withAi: true,
  },
  {
    title: 'História',
    description: 'Transformo a necessidade em história de usuário, com o valor para quem usa.',
    withAi: true,
  },
  {
    title: 'Critérios de aceite',
    description: 'Defino como saberemos que está pronto, incluindo os cenários de erro.',
    withAi: true,
  },
  {
    title: 'Desenvolvimento',
    description: 'Prototipo e desenvolvo com o time, usando IA para acelerar sem perder o controle.',
    withAi: true,
  },
  {
    title: 'Teste',
    description: 'Valido contra os critérios e faço testes de regressão no que já funcionava.',
    withAi: true,
  },
  {
    title: 'Homologação',
    description: 'Quem vai usar testa antes de ir ao ar. O "funciona" é deles, não só meu.',
    withAi: false,
  },
  {
    title: 'Produção',
    description: 'Publico com cuidado e comunico o que mudou para quem usa.',
    withAi: false,
  },
  {
    title: 'Monitoramento',
    description: 'Acompanho depois da entrega e trato bugs até a resolução.',
    withAi: false,
  },
]
