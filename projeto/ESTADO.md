# Estado do projeto — Air Jordan 1, conceito BrandForge (site-jordan)

> Lido pelo `/comecar` no início de toda sessão. Atualizado no fim de cada fase (e sempre que uma decisão for aprovada). É o que permite `/clear`, fechar o VS Code ou passar o projeto para outra pessoa e retomar exatamente daqui.

## Agora

- **Fase atual:** 5 — Stack (não iniciada)
- **Próximo passo:** ler a skill `stack-web` e decidir as camadas (a vista explodida pede GSAP + ScrollTrigger para a faixa presa); atualizar `next` para 16.4.x (pendência do `npm audit`)
- **Modelo recomendado:** Sonnet
- **Última atualização:** 2026-10-18 por Filipe Amancio

## Fases

| # | Fase | Status | Resultado |
|---|---|---|---|
| 0 | Ambiente | concluída | — |
| 1 | Briefing | concluída | `projeto/BRIEF.md` |
| 2 | Nicho regulado | concluída | `projeto/BRIEF.md` §2 |
| 3 | Direção criativa | concluída | `projeto/DIRECAO.md` |
| 4 | Copy | concluída | `projeto/COPY.md` |
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
- 2026-10-17 — Nicho não regulado; 8 regras para a copy no BRIEF §2 (aviso conceitual em todas as páginas, sem preço/escassez, fatos com fonte, sem depoimentos, crédito nas fotos, logos sem redesenho, zero coleta de dados, `noindex` recomendado) (aprovado por Filipe Amancio)
- 2026-10-17 — Conceito central da fase 3: **"Um tênis feito de peças sobrepostas"** (site montado em painéis como o AJ1; anatomia como fio condutor). Portfólio da BrandForge não consultado (sem remote `template`) (aprovado por Filipe Amancio)
- 2026-10-17 — Referência fora do nicho: desenho técnico e moldes (aprovado por Filipe Amancio)
- 2026-10-17 — **Direção B, "Prancha de engenharia"**: fundo escuro com grade de desenho, Archivo em três larguras, carimbo como navegação e compra, assinatura = vista explodida horizontal (faixa presa). A e C descartadas (aprovado por Filipe Amancio)
- 2026-10-17 — `main` local baseado no commit inicial do remoto (mantém o `LICENSE`); zip do template no `.gitignore` (aprovado por Filipe Amancio)
- 2026-10-17 — Mapa de seções da copy: `/` (hero, legado, a forma, as cores, rodapé) e `/chicago` (hero com carimbo, história, vista explodida, materiais, outras cores, rodapé) + microtextos (modal de compra, créditos, 404, SEO, Open Graph) (aprovado por Filipe Amancio)
- 2026-10-17 — Tom de voz da copy: atitude, provocador, de rua; provocação só com fato verificável (aprovado por Filipe Amancio)
- 2026-10-17 — Copy sem travessão; rótulos únicos "Comprar" (compra) e "Falar com a BrandForge" (contato) (aprovado por Filipe Amancio)
- 2026-10-18 — **Copy completa aprovada** (`projeto/COPY.md`): home, /chicago, rodapé, modal de compra, 404, SEO e Open Graph; cores "em breve": Bred, Royal, Black Toe; "Banned" só como campanha da Nike (a carta da NBA era sobre o Air Ship); revisão final aplicada (aprovado por Filipe Amancio)

## Stack (fase 5)

- Base: Next.js + TypeScript + Tailwind (template)

## Construção (fase 6)

| Seção | Estrutura | Conferida 375/1440 | Animação |
|---|---|---|---|

## Pendências

- [ ] Atualizar `next` 16.3.6 → 16.4.x (e `eslint-config-next` junto): `npm audit` aponta 8 vulnerabilidades "high" (next, sharp, braces, source-map-js) — **quem:** nós, na fase 5 — desde 2026-10-17
- [ ] Playwright MCP: as ferramentas só aparecem numa sessão nova depois do `npm install`; reabrir o Claude Code e testar (`about:blank` + screenshot) — **quem:** nós — desde 2026-10-17
- [ ] Remote `template` (BrandForge) não configurado: a URL leva a conta da empresa; decidir na fase 10 se o portfólio vai para o template — **quem:** Filipe — desde 2026-10-17
- [ ] Fotos oficiais do AJ1 Chicago (lateral, frente, trás, sola, detalhes; rotação se houver), com a origem de cada uma. A direção B **exige as quatro vistas** (lateral, frente, trás, sola) recortadas sem halo, para fundo escuro — **quem:** Filipe — desde 2026-10-17
- [ ] Arquivos dos logos (SVG): Swoosh, Jumpman, Wings — **quem:** Filipe — desde 2026-10-17
- [ ] Contato da BrandForge para o aviso final (link/e-mail/WhatsApp; entra logo da BrandForge?) — **quem:** Filipe — desde 2026-10-17
- [ ] Decidir `noindex` do site (fase 6) — **quem:** nós — desde 2026-10-17
- [ ] Conferir as chamadas da vista explodida e os alts contra as fotos oficiais (etiqueta Nike Air na lingueta, cor da entressola, solado vermelho) — **quem:** nós, na fase 6 — desde 2026-10-18
- [ ] Faixa do seletor de tamanho (BR 37 a 44) é só demonstração; confirmar ou trocar — **quem:** Filipe — desde 2026-10-18

## Provisórios a trocar antes de publicar

- Rodapé e modal: "Falar com a BrandForge" sem destino até chegar o contato (a preencher)

## Lançamento (fase 9)

- Domínio: — · Preview: — · Produção: —

## Diário curto

- 2026-10-17 — Template extraído do zip, git iniciado com origin pessoal, dependências instaladas, `npm run verificar` passou. Análise visual do Air Jordan 1 salva em `projeto/referencias/`.
- 2026-10-17 — Fase 1: briefing por entrevista; BRIEF aprovado (trilha B, hub AJ1 com Chicago, conceito para portfólio da BrandForge).
- 2026-10-17 — Fase 2: nicho não regulado; regras de marca, CDC, direito autoral e LGPD aprovadas (BRIEF §2).
- 2026-10-17 — Fase 3: conceito "peças sobrepostas", referência desenho técnico, três direções com pranchas; escolhida a B (prancha de engenharia). Vocabulário de calçado e origem da Big Shoulders conferidos por uma segunda sessão do Claude (nike-site-fa), anotados no DIRECAO.
- 2026-10-18 — Fase 4: copy escrita seção por seção, tom de rua com fatos com fonte (levantados pela sessão nike-site-fa, registrados no COPY). Mito "banido pela NBA" tratado como campanha.
