import type { CaseArtName } from '../components/CaseArt'

// Conteúdo da home. Regras (PRD, seção 9): nada de valor financeiro, percentual de custo,
// nome de cliente ou da empresa nos cases; sempre "o time" e um bloco "Meu papel".

export type ImpactStat = { value: string; label: string; detail: string }

export const impactStats: ImpactStat[] = [
  {
    value: '+150',
    label: 'motos rastreadas',
    detail: 'por uma plataforma própria, com bloqueio seguro e cerca virtual',
  },
  {
    value: '4',
    label: 'agentes de IA em produção',
    detail: 'em venda, locação, financeiro e pós-venda, monitorados todo dia',
  },
  {
    value: '3 em 1',
    label: 'PO, dev e QA',
    detail: 'no mesmo produto, da demanda ao monitoramento',
  },
  {
    value: '10 anos',
    label: 'à frente de um negócio',
    detail: 'uma loja de moda própria, com mentalidade de dono',
  },
]

export type CaseStudy = {
  title: string
  context: string
  problem: string
  role: string
  result: string
  tags: string[]
  art: CaseArtName
  links?: { label: string; href: string }[]
  // Print real da tela (só em projetos autorais, com dados de demonstração)
  image?: { name: string; alt: string }
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
  {
    title: 'CRM Pro',
    context: 'Projeto autoral · no ar',
    problem:
      'Pequenas empresas perdem leads entre planilhas e WhatsApp e não enxergam o próprio funil de vendas.',
    role: 'Fiz o discovery, o roadmap em 7 fases e as histórias com critérios de aceite, e desenvolvi o sistema do banco ao deploy.',
    result:
      'No ar com funil em Kanban, painel de resultados, ficha do cliente e multiempresa. Já recebe leads reais de um quiz de diagnóstico, por webhook.',
    tags: ['Roadmap em fases', 'Multiempresa', 'Integração por webhook'],
    art: 'crm',
    image: { name: 'crm-pro', alt: 'Painel de resultados do CRM Pro, com dados de demonstração' },
    links: [
      { label: 'Ver demo', href: 'https://crm-pro-jessica.vercel.app' },
      { label: 'Ver código', href: 'https://github.com/jessicaccl/crm-frontend' },
    ],
  },
  {
    title: 'Assina+',
    context: 'Projeto autoral · código aberto',
    problem:
      'Negócios por assinatura precisam saber quanto vão receber e quem está atrasando, antes que o atraso vire prejuízo.',
    role: 'Defini as regras de cobrança e de provisão, escrevi os critérios de aceite e desenvolvi a API e a interface com testes automatizados.',
    result:
      'Painel com receita recorrente, previsão, aging e provisão por faixa de atraso, lembretes automáticos por e-mail e 89 testes automatizados.',
    tags: ['Regras de negócio', 'Indicadores financeiros', 'Testes automatizados'],
    art: 'subscriptions',
    image: { name: 'assina-mais', alt: 'Tela de provisões de pagamento do Assina+, com dados de demonstração' },
    links: [
      {
        label: 'Ver código',
        href: 'https://github.com/jessicaccl/gerenciamento-de-assinaturas-frontend',
      },
    ],
  },
  {
    title: 'Loja Irmãs Amare',
    context: 'Negócio próprio · em lançamento',
    problem:
      'Depois de 10 anos de loja física, a marca precisava vender online sem depender de plataforma pronta e sem perder o atendimento próximo.',
    role: 'Sou PO, QA e desenvolvedora: cortei o escopo para lançar em 15 dias, desenhei o checkout e testei a compra de ponta a ponta.',
    result:
      'Loja com vitrine, "compre o look", checkout com Pix, cartão e boleto, cálculo de frete, painel de pedidos e estoque e área da cliente.',
    tags: ['MVP em 15 dias', 'Checkout e pagamentos', 'Negócio real'],
    art: 'store',
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

export const about: string[] = [
  'No dia a dia, transito entre produto, desenvolvimento e qualidade. Levanto as demandas com gestão e operação, transformo em histórias com critérios de aceite claros, desenvolvo com IA junto com o time e só considero pronto o que foi testado e homologado por quem vai usar.',
  'Antes da tecnologia, passei dez anos à frente da minha própria loja de moda. Foi ali que aprendi a ouvir o cliente, cuidar dos números e decidir com mentalidade de dono, e é isso que levo para cada produto.',
  'Hoje sigo investindo no próximo passo: pós-graduações em Gestão de Projetos em TI e em Inteligência Artificial Generativa, e mentoria com foco na certificação PSPO.',
]

export type SkillGroup = {
  title: string
  icon: 'product' | 'quality' | 'front' | 'back' | 'ai' | 'agile'
  skills: string[]
  evidence: string
}

// Competências comprovadas no trabalho e nos repositórios públicos (github.com/jessicaccl).
export const skillGroups: SkillGroup[] = [
  {
    title: 'Produto e requisitos',
    icon: 'product',
    skills: [
      'Discovery',
      'Requisitos funcionais e não funcionais',
      'Backlog e priorização',
      'Histórias de usuário',
      'Critérios de aceite em Gherkin',
      'PRD e documentação',
    ],
    evidence: 'ERP da locadora de motos e o PRD deste portfólio',
  },
  {
    title: 'Qualidade e testes',
    icon: 'quality',
    skills: [
      'Testes funcionais e de regressão',
      'Homologação com o usuário',
      'Vitest e Testing Library',
      'Playwright',
      'xUnit e JUnit',
      'Acessibilidade (WCAG, axe)',
      'CI com GitHub Actions',
    ],
    evidence: 'Portfólio, Assina+ e CRM de Vendas',
  },
  {
    title: 'Front-end',
    icon: 'front',
    skills: [
      'React',
      'TypeScript',
      'Vite',
      'React Native com Expo',
      'React Query',
      'React Hook Form e Zod',
      'Tailwind CSS',
    ],
    evidence: 'CRM de Vendas, Assina+ e sites para clientes',
  },
  {
    title: 'Back-end e APIs',
    icon: 'back',
    skills: [
      'Java e Spring Boot',
      'C# e .NET',
      'APIs REST e OpenAPI',
      'PostgreSQL',
      'JWT e Spring Security',
      'RabbitMQ',
      'Docker',
    ],
    evidence: 'CRM de Vendas e Assina+',
  },
  {
    title: 'IA e automação',
    icon: 'ai',
    skills: [
      'Claude Code',
      'Lovable',
      'Supabase',
      'Agentes de IA no WhatsApp',
      'Python',
      'Automação com GitHub Actions',
      'VPS',
    ],
    evidence: 'Agentes da locadora e um agente que monitora vagas e avisa no Telegram',
  },
  {
    title: 'Agilidade e negócio',
    icon: 'agile',
    skills: ['Scrum', 'Kanban', 'ClickUp', 'Azure DevOps', 'Jira', 'KPIs e ROI'],
    evidence: 'Locadora de motos, formação na FEST e 10 anos de negócio próprio',
  },
]
