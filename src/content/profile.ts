// Fonte única dos dados pessoais usados no site e nos testes.
export const profile = {
  name: 'Jessica Lima',
  role: 'Product Owner · Produto e Qualidade de Software',
  headline: 'Transformo problemas de negócio em produto que funciona.',
  subheadline:
    'PO técnica: escrevo os critérios, testo, homologo com quem usa e monitoro depois da entrega.',
  availability: 'Disponível para vagas remotas · CLT',
  links: {
    linkedin: 'https://www.linkedin.com/in/jessica-lima-8ba677275/',
    github: 'https://github.com/jessicaccl',
    repo: 'https://github.com/jessicaccl/portfolio',
  },
  cv: {
    href: '/Jessica_Lima_Product_Owner.pdf',
    fileName: 'Jessica_Lima_Product_Owner.pdf',
  },
  // Enquanto a foto não chega, o hero mostra um monograma decorativo.
  photo: null as { src: string; alt: string } | null,
}
