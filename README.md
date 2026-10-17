# Portfólio · Jessica Lima

> **Transformo problemas de negócio em produto que funciona.**
> PO técnica: escrevo os critérios, testo, homologo com quem usa e monitoro depois da entrega.

Este repositório é o meu portfólio e também um case: ele foi construído como um produto, com PRD, user stories, critérios de aceite e qualidade verificada a cada mudança.

## Documentos de produto

- [Mini-PRD](docs/PRD.md): problema, público, métricas de sucesso, escopo e riscos
- [User stories](docs/user-stories.md): histórias do MVP com critérios de aceite em Gherkin e ordem de entrega

## Qualidade

Cada mudança passa pelo CI antes de ir ao ar:

| Verificação | Ferramenta | Critério |
|---|---|---|
| Lint e tipos | oxlint, TypeScript | Sem erros |
| Testes de componentes | Vitest, Testing Library | Todos passando |
| Fluxos no navegador (desktop e celular) | Playwright | Todos passando |
| Acessibilidade | axe-core | Zero violações WCAG 2.1 AA |
| Performance, acessibilidade, boas práticas e SEO | Lighthouse CI | Nota ≥ 90 em todas |

## Rodando localmente

Requer Node 24.

```bash
npm install
npm run dev
```

| Comando | O que faz |
|---|---|
| `npm run dev` | Abre o site em modo desenvolvimento |
| `npm test` | Roda os testes de componentes |
| `npm run test:e2e` | Roda os testes no navegador, incluindo acessibilidade |
| `npm run lint` / `npm run typecheck` | Verifica estilo e tipos |
| `npm run build` | Gera a versão de produção em `dist/` |

## Stack

React 19 · TypeScript · Vite · Vitest · Playwright · axe-core · Lighthouse CI · GitHub Actions · Vercel
