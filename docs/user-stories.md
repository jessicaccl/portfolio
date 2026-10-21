# User Stories — MVP (Fase 1)

> **Base:** [PRD.md](PRD.md) · **Versão:** v0.1 · **Data:** 16/10/2026
> **Tamanho:** P (pequena, até meio dia) · M (média, 1 dia) · G (grande, 2 dias ou mais)
> Toda história só está pronta quando cumpre a **Definition of Done** (PRD, seção 12).

**Personas:** **Recrutadora** (lê a home em ~30 s) · **CTO** (lê com calma, quer entender como eu penso) · **Jessica** (dona do produto).

---

## Épico 1 — Fundação

### US01 · Site publicado desde o primeiro dia
**Como** Jessica, **quero** que o site esteja no ar desde a primeira entrega, **para** testar no celular de verdade e mostrar a evolução.
**Prioridade:** Must · **Tamanho:** P · **Cobre:** escopo do MVP

```gherkin
Cenário: Publicação automática
  Dado que uma mudança foi enviada para a branch principal do GitHub
  Quando a integração com a Vercel termina
  Então o site atualizado está disponível na URL pública em até 5 minutos

Cenário: Mudança com erro não vai ao ar
  Dado que uma mudança quebra o build
  Quando a publicação é tentada
  Então a versão anterior continua no ar
```

### US02 · Qualidade verificada a cada mudança
**Como** Jessica, **quero** que cada mudança passe por verificações automáticas, **para** não publicar nada quebrado nem com perda de qualidade.
**Prioridade:** Must · **Tamanho:** M · **Cobre:** PRD, seção 8

```gherkin
Cenário: Pull request verificado
  Dado que abri um pull request
  Quando o CI roda
  Então lint, checagem de tipos e testes são executados
  E o resultado aparece no pull request

Cenário: Bloqueio por qualidade
  Dado que a nota do Lighthouse fica abaixo de 90 em alguma categoria
  Ou o axe encontra alguma violação de acessibilidade
  Quando o CI termina
  Então o pull request é marcado como reprovado
```

---

## Épico 2 — Primeira impressão (os 30 segundos)

### US03 · Entender quem eu sou de imediato
**Como** recrutadora, **quero** entender em poucos segundos quem é a Jessica e que vaga ela busca, **para** decidir se o perfil combina com a minha vaga.
**Prioridade:** Must · **Tamanho:** M · **Cobre:** RF01

```gherkin
Cenário: Hero visível ao abrir o site
  Dado que abro o site em um celular de 360 px ou em um desktop
  Quando a página carrega
  Então vejo, sem rolar a tela, o nome "Jessica Lima"
  E o título "Transformo problemas de negócio em produto que funciona."
  E o subtítulo "PO técnica: escrevo os critérios, testo, homologo com quem usa e monitoro depois da entrega."
  E os botões "Baixar currículo" e "LinkedIn"

Cenário: Foto acessível
  Dado que uso um leitor de tela
  Quando chego à foto do hero
  Então ouço uma descrição como "Foto de Jessica Lima"
```

### US04 · Baixar o currículo em 1 clique
**Como** recrutadora, **quero** baixar o currículo sem cadastro, **para** anexar ao processo e avaliar depois.
**Prioridade:** Must · **Tamanho:** P · **Cobre:** RF06

```gherkin
Cenário: Download a partir do topo
  Dado que estou no hero
  Quando clico em "Baixar currículo"
  Então o arquivo "Jessica_Lima_Product_Owner.pdf" é baixado
  E nenhum cadastro ou formulário é pedido

Cenário: Download no fim da página
  Dado que rolei até a seção de contato
  Quando clico em "Baixar currículo"
  Então o mesmo arquivo é baixado

Cenário: Currículo sempre atualizado
  Dado que o PDF do currículo foi substituído no projeto
  Quando o site é publicado
  Então o download entrega a nova versão
```

### US05 · Chegar ao meu LinkedIn e GitHub
**Como** recrutadora ou CTO, **quero** acessar o LinkedIn e o GitHub da Jessica, **para** ver recomendações, histórico e código.
**Prioridade:** Must · **Tamanho:** P · **Cobre:** RF07

```gherkin
Cenário: Links externos
  Dado que estou no hero ou na seção de contato
  Quando clico em "LinkedIn" ou "GitHub"
  Então o perfil correspondente abre em uma nova aba
  E o site continua aberto na aba original

Cenário: Link acessível
  Dado que navego só pelo teclado
  Quando o foco chega ao link do LinkedIn
  Então o foco fica visível
  E o leitor de tela informa que o link abre em nova aba
```

### US06 · Ver o impacto em números
**Como** recrutadora, **quero** ver resultados concretos logo no início, **para** avaliar a senioridade sem ler textos longos.
**Prioridade:** Must · **Tamanho:** P · **Cobre:** RF02

```gherkin
Cenário: Faixa de números
  Dado que rolei logo abaixo do hero
  Quando a seção de números aparece
  Então vejo de 3 a 4 indicadores, cada um com valor e uma legenda curta
  E um deles é "173 motos rastreadas por uma plataforma própria"

Cenário: Sem número inventado ou confidencial
  Dado um número exibido na faixa
  Então ele foi confirmado pela Jessica
  E não revela valores financeiros da empresa
```

---

## Épico 3 — Prova de produto

### US07 · Conhecer os cases em destaque
**Como** CTO, **quero** ver um resumo dos principais produtos que a Jessica ajudou a construir, **para** entender o tipo de problema que ela resolve e qual foi o papel dela.
**Prioridade:** Must · **Tamanho:** M · **Cobre:** RF03

```gherkin
Cenário: Três cards de case
  Dado que estou na seção de cases
  Então vejo 3 cards: "Plataforma de rastreamento", "ERP de locação" e "Agentes de IA no financeiro"
  E cada card mostra: problema em uma frase, "Meu papel" e resultado

Cenário: Trabalho em time
  Dado qualquer card de case
  Então o texto usa "construímos" ou "o time"
  E o bloco "Meu papel" deixa claro o que foi feito pela Jessica

Cenário: Confidencialidade
  Dado qualquer card de case
  Então a empresa aparece como "locadora de motos"
  E não há print real, nome de cliente ou valor financeiro

Cenário: Sem link quebrado
  Dado que as páginas completas dos cases ainda não existem (Fase 2)
  Então os cards não levam a páginas inexistentes
```

### US08 · Entender como eu trabalho
**Como** CTO, **quero** ver o processo da Jessica da demanda à produção, **para** avaliar se ela garante qualidade de forma consistente.
**Prioridade:** Must · **Tamanho:** M · **Cobre:** RF04

```gherkin
Cenário: Fluxo de trabalho
  Dado que estou na seção "Como eu trabalho"
  Então vejo as etapas em ordem:
    | Demanda | História | Critérios de aceite | Desenvolvimento | Teste | Homologação | Produção | Monitoramento |
  E cada etapa tem uma frase sobre o que faço nela

Cenário: Aprendizado sobre qualidade
  Dado que leio a seção
  Então encontro a ideia de que bugs aparecem quando uma etapa é pulada
  E que por isso nenhuma etapa é opcional

Cenário: Uso de IA
  Dado que leio a seção
  Então entendo em quais etapas uso IA no dia a dia
```

### US09 · Ver a minha trajetória
**Como** recrutadora, **quero** ver a trajetória profissional em ordem, **para** entender a transição do varejo para produto.
**Prioridade:** Must · **Tamanho:** P · **Cobre:** RF05

```gherkin
Cenário: Linha do tempo
  Dado que estou na seção de trajetória
  Então vejo, em ordem cronológica:
    | Amare Fashion | Fundadora · 10 anos |
    | Serratec | Residência Full Stack (790 h) |
    | FullStore | Analista de Implantação |
    | Maturano | Desenvolvedora de Sistemas · atuação em Produto e Qualidade |
  E cada item tem uma frase sobre o que levei dessa etapa
```

---

## Épico 4 — Navegação e alcance

### US10 · Navegar pelas seções
**Como** visitante, **quero** ir direto à seção que me interessa, **para** não precisar rolar a página inteira.
**Prioridade:** Must · **Tamanho:** M · **Cobre:** RF08

```gherkin
Cenário: Menu no desktop
  Dado que estou em uma tela de 1024 px ou mais
  Quando clico em um item do menu
  Então a página rola suavemente até a seção correspondente

Cenário: Menu no celular
  Dado que estou em uma tela menor que 768 px
  Quando toco no botão de menu
  Então o menu abre
  E ao escolher uma seção o menu fecha e a página vai até ela

Cenário: Teclado
  Dado que navego só pelo teclado
  Quando o menu do celular está aberto
  Então consigo fechá-lo com a tecla Esc
```

### US11 · Prévia bonita ao compartilhar o link
**Como** Jessica, **quero** que o link do portfólio mostre título, descrição e imagem quando enviado, **para** causar boa impressão no LinkedIn, WhatsApp e e-mail.
**Prioridade:** Should · **Tamanho:** P · **Cobre:** PRD, seção 8 (SEO)

```gherkin
Cenário: Prévia de compartilhamento
  Dado que colo o link do site no LinkedIn ou no WhatsApp
  Quando a prévia é gerada
  Então aparecem o nome "Jessica Lima · PO técnica", a proposta de valor e uma imagem com a identidade visual
```

### US12 · Site acessível para todos
**Como** visitante que usa teclado ou leitor de tela, **quero** navegar pelo site sem barreiras, **para** ter acesso ao mesmo conteúdo que os demais.
**Prioridade:** Must · **Tamanho:** M · **Cobre:** PRD, seção 8 (WCAG 2.1 AA)

```gherkin
Cenário: Contraste
  Dado qualquer texto do site sobre o fundo bege
  Então o contraste é de pelo menos 4,5:1 (texto normal) ou 3:1 (texto grande)

Cenário: Ordem de leitura
  Dado que navego com Tab do início ao fim
  Então o foco segue a ordem visual e fica sempre visível

Cenário: Pular para o conteúdo
  Dado que acabei de abrir o site e pressiono Tab
  Então aparece o link "Pular para o conteúdo"
```

---

## Ordem de entrega sugerida

Cada entrega deixa o site no ar e utilizável, mesmo incompleto.

| Entrega | Histórias | O que fica no ar |
|---|---|---|
| **1 — Esqueleto** | US01, US02 | Projeto publicado com CI e qualidade verificada |
| **2 — Primeira impressão** | US03, US04, US05, US12 | Hero com CV e LinkedIn: já dá para enviar o link |
| **3 — Prova** | US06, US07, US08 | Números, cases e método |
| **4 — Completo** | US09, US10, US11 | Trajetória, menu e prévia de compartilhamento: MVP fechado |

> A US12 (acessibilidade) entra na entrega 2 e passa a valer como critério para todas as seguintes.
