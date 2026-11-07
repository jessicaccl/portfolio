// Conteúdo da home. Regras (PRD, seção 9): nada de valor financeiro, percentual de custo,
// nome de cliente ou da empresa nos cases; nos cases da empresa, sempre "o time".

export type ImpactStat = { value: string; label: string }

export const impactStats: ImpactStat[] = [
  { value: '+150', label: 'motos numa plataforma de rastreamento própria' },
  { value: '4', label: 'agentes de IA em produção, monitorados todo dia' },
  { value: '89', label: 'testes automatizados no Assina+' },
  { value: '10 anos', label: 'à frente de um negócio próprio' },
]

export type CaseStudy = {
  title: string
  context: string
  problem: string
  role: string
  result: string
  links?: { label: string; href: string }[]
  // Tela real (só em projetos autorais, com dados de demonstração)
  image?: { src: string; width: number; height: number; alt: string; caption: string }
  // Nos cases sem tela, uma frase que resume a decisão mais importante
  note?: string
}

export const caseStudies: CaseStudy[] = [
  {
    title: 'CRM Pro',
    context: 'Projeto autoral · no ar',
    problem:
      'Pequenas empresas perdem leads entre planilhas e WhatsApp e não enxergam o próprio funil de vendas.',
    role: 'Fiz o discovery, o roadmap em 7 fases e as histórias com critérios de aceite, e desenvolvi o sistema do banco ao deploy.',
    result:
      'No ar com funil em Kanban, painel de resultados, ficha do cliente e multiempresa. Já recebe leads reais de um quiz de diagnóstico, por webhook.',
    image: {
      src: '/cases/crm-pro-detalhe.webp',
      width: 575,
      height: 359,
      alt: 'Indicadores e receita por mês no painel do CRM Pro, com dados de demonstração',
      caption: 'Painel de resultados: ciclo de venda, previsão e receita por mês (dados de demonstração).',
    },
    links: [
      { label: 'Ver demo', href: 'https://crm-pro-jessica.vercel.app' },
      { label: 'Ver código', href: 'https://github.com/jessicaccl/crm-frontend' },
    ],
  },
  {
    title: 'Plataforma de rastreamento',
    context: 'Locadora de motos · com o time',
    problem:
      'A plataforma terceirizada era cara e instável, e a operação não podia confiar na localização da frota.',
    role: 'Auxiliei na descoberta da conexão dos rastreadores com a rede e fiz a migração da frota, veículo a veículo.',
    result:
      'Construímos uma plataforma própria para mais de 150 motos, com bloqueio automático de inadimplentes, cerca virtual e custo menor de rastreamento.',
    note: '“Bloquear o inadimplente, nunca com a moto em movimento.” A regra de negócio mais importante virou critério de aceite.',
  },
  {
    title: 'Assina+',
    context: 'Projeto autoral · código aberto',
    problem:
      'Negócios por assinatura precisam saber quanto vão receber e quem está atrasando, antes que o atraso vire prejuízo.',
    role: 'Defini as regras de cobrança e de provisão, escrevi os critérios de aceite e desenvolvi a API e a interface com testes automatizados.',
    result:
      'Painel com receita recorrente, previsão, aging e provisão por faixa de atraso, lembretes automáticos por e-mail e 89 testes automatizados.',
    image: {
      src: '/cases/assina-mais-detalhe.webp',
      width: 760,
      height: 475,
      alt: 'Receita recorrente e previsão de recebimentos no Assina+, com dados de demonstração',
      caption: 'Provisões: receita recorrente, a receber e previsão por mês (dados de demonstração).',
    },
    links: [
      {
        label: 'Ver código',
        href: 'https://github.com/jessicaccl/gerenciamento-de-assinaturas-frontend',
      },
    ],
  },
  {
    title: 'Agentes de IA no atendimento',
    context: 'Locadora de motos · com o time',
    problem:
      'Cobrança, atendimento financeiro e pós-venda precisavam de resposta rápida, sem sobrecarregar a equipe.',
    role: 'Desenvolvo e monitoro os agentes todos os dias, definindo até onde a IA vai e em que momento a equipe assume.',
    result:
      'Colocamos em produção agentes de venda, locação, financeiro e pós-venda. O de cobrança negocia com clientes em atraso e aciona a equipe quando há acordo.',
    note: 'A IA atende, cobra e agenda. Quando o cliente propõe um acordo, quem assume é uma pessoa.',
  },
  {
    title: 'ERP de locação',
    context: 'Locadora de motos · com o time',
    problem:
      'Gestão e operação trazem demandas todos os dias para o sistema que sustenta contratos, manutenção, estoque e financeiro.',
    role: 'Levanto e especifico as demandas, desenvolvo melhorias e novas funcionalidades com IA e valido cada entrega contra os critérios de aceite.',
    result:
      'O time evolui continuamente os módulos operacional, gerencial e financeiro, com pagamentos integrados e baixa automática, assinatura digital de contratos e consulta de infrações.',
    note: 'Nenhuma melhoria vai ao ar sem passar pelos critérios de aceite e pelo teste de regressão.',
  },
  {
    title: 'Loja Irmãs Amare',
    context: 'Negócio próprio · em lançamento',
    problem:
      'Depois de 10 anos de loja física, a marca precisava vender online sem depender de plataforma pronta e sem perder o atendimento próximo.',
    role: 'Sou PO, QA e desenvolvedora: cortei o escopo para lançar em 15 dias, desenhei o checkout e testei a compra de ponta a ponta.',
    result:
      'Loja com vitrine, “compre o look”, checkout com Pix, cartão e boleto, cálculo de frete, painel de pedidos e estoque e área da cliente.',
    note: 'Lançar em 15 dias foi, antes de tudo, decidir o que ficava de fora.',
  },
]

export type WorkStep = { title: string; description: string; by: 'IA' | 'pessoas' }

// O registro do método: a mesma sequência para toda demanda.
// A IA acelera as cinco primeiras etapas; nas três últimas, quem decide são as pessoas.
export const workLog: WorkStep[] = [
  {
    title: 'Demanda',
    description: 'Escuto gestão e operação para entender o problema antes da solução.',
    by: 'IA',
  },
  {
    title: 'História',
    description: 'Transformo a necessidade em história de usuário, com o valor para quem usa.',
    by: 'IA',
  },
  {
    title: 'Critérios de aceite',
    description: 'Defino como saberemos que está pronto, incluindo os cenários de erro.',
    by: 'IA',
  },
  {
    title: 'Desenvolvimento',
    description: 'Prototipo e desenvolvo com o time, sem perder o controle do que entra.',
    by: 'IA',
  },
  {
    title: 'Teste',
    description: 'Valido contra os critérios e faço testes de regressão no que já funcionava.',
    by: 'IA',
  },
  {
    title: 'Homologação',
    description: 'Quem vai usar testa antes de ir ao ar. O “funciona” é deles, não só meu.',
    by: 'pessoas',
  },
  {
    title: 'Produção',
    description: 'Publico com cuidado e comunico o que mudou para quem usa.',
    by: 'pessoas',
  },
  {
    title: 'Monitoramento',
    description: 'Acompanho depois da entrega e trato bugs até a resolução.',
    by: 'pessoas',
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

// A primeira frase abre a seção em destaque; o resto corre em colunas.
export const aboutOpening = 'No dia a dia, transito entre produto, desenvolvimento e qualidade.'

export const about: string[] = [
  'Levanto as demandas com gestão e operação, transformo em histórias com critérios de aceite claros, desenvolvo com IA junto com o time e só considero pronto o que foi testado e homologado por quem vai usar.',
  'Antes da tecnologia, passei dez anos à frente da minha própria loja de moda. Foi ali que aprendi a ouvir o cliente, cuidar dos números e decidir com mentalidade de dono, e é isso que levo para cada produto.',
  'Hoje sigo investindo no próximo passo: pós-graduações em Gestão de Projetos em TI e em Inteligência Artificial Generativa, e mentoria com foco na certificação PSPO.',
]

export type SkillGroup = { title: string; skills: string[]; evidence: string }

// Competências comprovadas no trabalho e nos repositórios públicos (github.com/jessicaccl).
export const skillGroups: SkillGroup[] = [
  {
    title: 'Produto e requisitos',
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
    skills: [
      'Testes funcionais e de regressão',
      'Homologação com o usuário',
      'Vitest e Testing Library',
      'Playwright',
      'xUnit e JUnit',
      'Acessibilidade (WCAG, axe)',
      'CI com GitHub Actions',
    ],
    evidence: 'Portfólio, Assina+ e CRM Pro',
  },
  {
    title: 'Front-end',
    skills: [
      'React',
      'TypeScript',
      'Vite',
      'React Native com Expo',
      'React Query',
      'React Hook Form e Zod',
      'Tailwind CSS',
    ],
    evidence: 'CRM Pro, Assina+ e sites para clientes',
  },
  {
    title: 'Back-end e APIs',
    skills: [
      'Java e Spring Boot',
      'C# e .NET',
      'APIs REST e OpenAPI',
      'PostgreSQL',
      'JWT e Spring Security',
      'RabbitMQ',
      'Docker',
    ],
    evidence: 'CRM Pro e Assina+',
  },
  {
    title: 'IA e automação',
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
    skills: ['Scrum', 'Kanban', 'ClickUp', 'Azure DevOps', 'Jira', 'KPIs e ROI'],
    evidence: 'Locadora de motos, formação na FEST e 10 anos de negócio próprio',
  },
]
