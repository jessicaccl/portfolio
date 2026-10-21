# Mini-PRD — Portfólio Jessica Lima

> **Status:** rascunho v0.1 · **Data:** 15/10/2026 · **Responsável:** Jessica Lima
> Este documento trata o próprio portfólio como um produto. Ele também é parte do case.

---

## 1. Contexto e problema

Busco uma vaga de **Product Owner / Analista de Produto / PO técnica**, CLT, 100% remota.

O meu perfil é híbrido, e isso é um diferencial difícil de explicar só com o currículo:
- **10 anos como fundadora de uma loja de moda:** mentalidade de dono, comunicação e leitura do cliente.
- **Formação full stack:** consigo conversar de igual para igual com o time técnico.
- **Experiência real em produto:** atuo como PO, desenvolvedora com IA e QA na evolução de um ERP em produção (melhorias, correções e novas funcionalidades) e participei da migração da frota para uma plataforma de rastreamento própria.

**Problema:** o currículo em PDF e o GitHub mostram tecnologias e cargos, mas **não mostram como eu penso, decido e garanto qualidade**. Quem avalia não enxerga o meu valor como PO em poucos segundos.

## 2. Objetivo

Ter um portfólio que, **em até 30 segundos**, faça um recrutador ou CTO entender:
1. **Quem eu sou:** uma PO técnica, focada em qualidade.
2. **O que já entreguei com o meu time:** produto real, com impacto mensurável.
3. **Por que vale me chamar para uma conversa.**

E que o leve a **baixar o currículo** ou **abrir o meu LinkedIn**.

## 3. Público

| Persona | O que procura | Tempo de leitura | O que precisa ver primeiro |
|---|---|---|---|
| **Recrutadora tech / RH** | Aderência à vaga, clareza, senioridade | ~30 s | Cargo-alvo, números de impacto, botão do CV |
| **CTO / Head de Produto de startup** | Como eu decido, priorizo e garanto qualidade | 3–5 min | Cases com problema, decisões, papel no time e resultado |

## 4. Proposta de valor

> **Transformo problemas de negócio em produto que funciona.**
> PO técnica: escrevo os critérios, testo, homologo com quem usa e monitoro depois da entrega.

**Como quero ser percebida:** estratégica, organizada e ousada.

## 5. Métricas de sucesso

| Tipo | Métrica | Meta inicial |
|---|---|---|
| **Principal** | Cliques em "Baixar currículo" + "LinkedIn" / visitantes | ≥ 15% |
| Apoio | Visitantes que abrem pelo menos 1 case | ≥ 30% |
| Apoio | Entrevistas em que o portfólio foi citado | Registrar manualmente |
| Qualidade | Lighthouse (Performance, Acessibilidade, Boas práticas, SEO) | ≥ 90 em todas |
| Qualidade | Violações de acessibilidade (axe) | 0 |
| Qualidade | Carregamento do maior elemento (LCP) no celular | < 2,5 s |

> As metas são hipóteses iniciais e serão revistas após 30 dias de dados reais.

## 6. Escopo

### MVP (Fase 1) — dentro
- **Home:** hero com foto, números de impacto, 3 cases em destaque, "Como eu trabalho", trajetória e contato.
- **Botões:** "Baixar currículo" (PDF) e "LinkedIn", visíveis no topo e no fim da página.
- **Layout responsivo**, do celular (360 px) ao desktop.
- **Publicação** em URL gratuita da Vercel.

### Próximas fases
- Páginas completas de case (`/cases/...`) — Fase 2.
- Seção "Produto com IA" e artefatos para download — Fase 3.
- Página pública de qualidade (Lighthouse, testes, acessibilidade) e analytics — Fase 4.
- Laboratório (Assina+, CRM e freelances).
- Domínio próprio.

### Fora do escopo
- Blog, versão em inglês, formulário de contato com backend, modo escuro.
- Qualquer código, print real ou dado sensível de empresas em que trabalhei.

## 7. Requisitos funcionais (MVP)

| ID | Requisito |
|---|---|
| RF01 | Exibir o hero com nome, proposta de valor, foto P&B e os botões "Baixar currículo" e "LinkedIn". |
| RF02 | Exibir de 3 a 4 números de impacto (ex.: mais de 150 motos na frota rastreada). Percentuais de custo não são divulgados. |
| RF03 | Exibir 3 cards de case com título, problema em uma frase, meu papel e resultado. |
| RF04 | Exibir a seção "Como eu trabalho" com o meu fluxo, da demanda ao monitoramento. |
| RF05 | Exibir a trajetória: Amare Fashion → Residência Full Stack → FullStore → Maturano. |
| RF06 | Permitir baixar o currículo em PDF com 1 clique, sem cadastro. |
| RF07 | Abrir o LinkedIn e o GitHub em nova aba. |
| RF08 | Ter menu de navegação para as seções, que funcione também no celular. |

## 8. Requisitos de qualidade (não funcionais)

- **Acessibilidade:** padrão WCAG 2.1 AA, ou seja, contraste adequado, navegação por teclado, texto alternativo nas imagens e foco visível.
- **Performance:** imagens otimizadas e site leve; metas da seção 5.
- **SEO:** título, descrição e prévia de compartilhamento (Open Graph) para quando o link for enviado no LinkedIn ou WhatsApp.
- **Testes automatizados:** de componentes e do fluxo principal (abrir o site → baixar o CV).
- **Integração contínua (CI):** cada mudança passa por lint, testes e Lighthouse antes de ir ao ar.
- **Idioma:** português do Brasil.

## 9. Restrições

- **Confidencialidade:** existe contrato de confidencialidade com o empregador atual. A empresa é citada só na trajetória. Nos cases ela aparece como "locadora de motos", com dados fictícios, diagramas próprios e números em percentual. O texto final passa pelo gestor antes de ir ao ar.
- **Trabalho em time:** tudo foi construído com o time. O texto usa "construímos" e cada case tem um bloco **"Meu papel"**.
- **Orçamento:** custo zero no MVP (hospedagem gratuita).
- **Ritmo:** sem prazo fixo. O projeto também é estudo, então a construção é feita junto e com aprendizado.

## 10. Riscos

| Risco | Impacto | Mitigação |
|---|---|---|
| Expor informação confidencial | Alto | Regra da seção 9 e revisão do gestor |
| Número de impacto contestado em entrevista | Alto | Usar só números confirmados e saber explicar cada um |
| Parecer "só dev" e não PO | Médio | Cases centrados em problema, decisão e papel; código fica em segundo plano |
| Visual ousado prejudicar a leitura | Médio | Testar contraste e legibilidade (meta de acessibilidade) |
| Projeto não terminar por falta de prazo | Médio | Fases pequenas, cada uma publicável |

## 11. Hipóteses a validar

- **H1:** colocar números de impacto logo após o hero aumenta os cliques no CV.
- **H2:** um bloco "Meu papel" claro passa mais confiança do que uma lista de tecnologias.
- **H3:** recrutadores leem a home e CTOs abrem os cases. As métricas por página vão confirmar.

## 12. Definition of Done (vale para toda entrega)

- [ ] Critérios de aceite da história atendidos
- [ ] Funciona no celular e no desktop
- [ ] Testes passando e CI verde
- [ ] Lighthouse ≥ 90 e zero violações no axe
- [ ] Nenhuma informação confidencial
- [ ] Revisado pela Jessica e publicado

## 13. Em aberto

- [ ] Confirmar com o gestor o valor do custo antigo de rastreamento e o que pode ser divulgado.
- [ ] Trazer os números do ERP e dos agentes de IA (cobrança, atendimento).
- [ ] Atualizar o currículo em PDF para combinar com o portfólio.
- [ ] Escolher o 4º número de impacto da home.
- [ ] Definir o nome do domínio (fase futura).
