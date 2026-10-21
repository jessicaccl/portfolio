// Fonte única dos dados pessoais usados no site e nos testes.
export const profile = {
  name: 'Jessica Lima',
  role: 'Product Owner · Produto e Qualidade de Software · Desenvolvedora',
  headline: 'Transformo problemas de negócio em produto que funciona.',
  subheadline:
    'PO técnica: escrevo os critérios, testo, homologo com quem usa e monitoro depois da entrega.',
  availability: 'Aberta a oportunidades como Product Owner',
  links: {
    linkedin: 'https://www.linkedin.com/in/jessica-lima-8ba677275/',
    github: 'https://github.com/jessicaccl',
    repo: 'https://github.com/jessicaccl/portfolio',
  },
  cv: {
    href: '/Jessica_Lima_Product_Owner.pdf',
    fileName: 'Jessica_Lima_Product_Owner.pdf',
  },
  photo: {
    src: '/foto/jessica-lima-960.webp',
    srcSet: '/foto/jessica-lima-480.webp 480w, /foto/jessica-lima-960.webp 960w',
    alt: 'Foto de Jessica Lima',
  } as { src: string; srcSet: string; alt: string } | null,
}
