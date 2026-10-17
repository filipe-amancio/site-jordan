# Estado do projeto — a definir (site-jordan)

> Lido pelo `/comecar` no início de toda sessão. Atualizado no fim de cada fase (e sempre que uma decisão for aprovada). É o que permite `/clear`, fechar o VS Code ou passar o projeto para outra pessoa e retomar exatamente daqui.

## Agora

- **Fase atual:** 1 — Briefing (não iniciada)
- **Próximo passo:** abrir o briefing definindo o que é o site (conceito/portfólio inspirado no Air Jordan 1, marca própria com essa estética, ou outro), usando `projeto/referencias/analise-air-jordan-1.md` como material bruto
- **Modelo recomendado:** Opus
- **Última atualização:** 2026-10-17 por Filipe Amancio

## Fases

| # | Fase | Status | Resultado |
|---|---|---|---|
| 0 | Ambiente | concluída | — |
| 1 | Briefing | não iniciada | `projeto/BRIEF.md` |
| 2 | Nicho regulado | não iniciada | `projeto/BRIEF.md` §2 |
| 3 | Direção criativa | não iniciada | `projeto/DIRECAO.md` |
| 4 | Copy | não iniciada | `projeto/COPY.md` |
| 5 | Stack | não iniciada | seção "Stack" abaixo |
| 6 | Construção | não iniciada | código em `app/`, `components/`, `lib/` |
| 7 | Revisão | não iniciada | `projeto/REVISAO.md` |
| 8 | Preview e feedback | não iniciada | `projeto/FEEDBACK.md` |
| 9 | Lançamento | não iniciada | seção "Lançamento" abaixo |
| 10 | Portfólio | não iniciada | commit no portfólio do template |

## Decisões aprovadas

- 2026-10-17 — Repositório na conta pessoal `filipe-amancio/site-jordan`, commits com a identidade pessoal (Filipe Amancio) e Vercel na conta pessoal, em vez da conta única da empresa `brandforgecontato-oss` que o template pede (aprovado por Filipe Amancio)
- 2026-10-17 — `main` local baseado no commit inicial do remoto (mantém o `LICENSE`); zip do template no `.gitignore` (aprovado por Filipe Amancio)

## Stack (fase 5)

- Base: Next.js + TypeScript + Tailwind (template)

## Construção (fase 6)

| Seção | Estrutura | Conferida 375/1440 | Animação |
|---|---|---|---|

## Pendências

- [ ] Atualizar `next` 16.3.6 → 16.4.x (e `eslint-config-next` junto): `npm audit` aponta 8 vulnerabilidades "high" (next, sharp, braces, source-map-js) — **quem:** nós, na fase 5 — desde 2026-10-17
- [ ] Playwright MCP: as ferramentas só aparecem numa sessão nova depois do `npm install`; reabrir o Claude Code e testar (`about:blank` + screenshot) — **quem:** nós — desde 2026-10-17
- [ ] Remote `template` (BrandForge) não configurado: a URL leva a conta da empresa; decidir na fase 10 se o portfólio vai para o template — **quem:** Filipe — desde 2026-10-17
- [ ] Definir no briefing o uso de marcas registradas (Nike, Jordan, Air Jordan, Wings, Swoosh, Jumpman) — **quem:** Filipe — desde 2026-10-17

## Provisórios a trocar antes de publicar

- 

## Lançamento (fase 9)

- Domínio: — · Preview: — · Produção: —

## Diário curto

- 2026-10-17 — Template extraído do zip, git iniciado com origin pessoal, dependências instaladas, `npm run verificar` passou. Análise visual do Air Jordan 1 salva em `projeto/referencias/`.
