# Estado do projeto — Air Jordan 1, conceito BrandForge (site-jordan)

> Lido pelo `/comecar` no início de toda sessão. Atualizado no fim de cada fase (e sempre que uma decisão for aprovada). É o que permite `/clear`, fechar o VS Code ou passar o projeto para outra pessoa e retomar exatamente daqui.

## Agora

- **Fase atual:** 2 — Nicho regulado (não iniciada)
- **Próximo passo:** confirmar se há nicho regulado (provavelmente não) e registrar no BRIEF §2 as regras de uso de marca (aviso conceitual, créditos de imagem, `noindex`?)
- **Modelo recomendado:** Opus
- **Última atualização:** 2026-10-17 por Filipe Amancio

## Fases

| # | Fase | Status | Resultado |
|---|---|---|---|
| 0 | Ambiente | concluída | — |
| 1 | Briefing | concluída | `projeto/BRIEF.md` |
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
- 2026-10-17 — Site = peça de portfólio da BrandForge feita como se fosse o site oficial da Jordan, com aviso "projeto conceitual" no final; **trilha B** (aprovado por Filipe Amancio)
- 2026-10-17 — Usar nomes **e logos** Nike/Jordan (Swoosh, Jumpman, Wings) e **fotos oficiais da Nike**, ciente do risco de takedown (aprovado por Filipe Amancio)
- 2026-10-17 — Formato hub da linha AJ1: Chicago completa, outras cores "em breve" em silhueta; "comprar" simulado sem coleta de dados; clima ousado; copy em português; prazo tranquilo; aviso leva ao contato da BrandForge (aprovado por Filipe Amancio)
- 2026-10-17 — BRIEF da fase 1 aprovado (aprovado por Filipe Amancio)
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
- [ ] Fotos oficiais do AJ1 Chicago (lateral, frente, trás, sola, detalhes; rotação se houver), com a origem de cada uma — **quem:** Filipe — desde 2026-10-17
- [ ] Arquivos dos logos (SVG): Swoosh, Jumpman, Wings — **quem:** Filipe — desde 2026-10-17
- [ ] Contato da BrandForge para o aviso final (link/e-mail/WhatsApp; entra logo da BrandForge?) — **quem:** Filipe — desde 2026-10-17
- [ ] Decidir `noindex` do site (fase 6) — **quem:** nós — desde 2026-10-17

## Provisórios a trocar antes de publicar

- 

## Lançamento (fase 9)

- Domínio: — · Preview: — · Produção: —

## Diário curto

- 2026-10-17 — Template extraído do zip, git iniciado com origin pessoal, dependências instaladas, `npm run verificar` passou. Análise visual do Air Jordan 1 salva em `projeto/referencias/`.
- 2026-10-17 — Fase 1: briefing por entrevista; BRIEF aprovado (trilha B, hub AJ1 com Chicago, conceito para portfólio da BrandForge).
