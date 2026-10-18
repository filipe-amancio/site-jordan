# Estado do projeto — Air Jordan 1, conceito BrandForge (site-jordan)

> Lido pelo `/comecar` no início de toda sessão. Atualizado no fim de cada fase (e sempre que uma decisão for aprovada). É o que permite `/clear`, fechar o VS Code ou passar o projeto para outra pessoa e retomar exatamente daqui.

## Agora

- **Fase atual:** 6 — Construção (em andamento: etapa A concluída)
- **Próximo passo:** etapa B (seção a seção), começando pelo hero da home; screenshot 375/1440 e aprovação de cada seção
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
| 5 | Stack | concluída | seção "Stack" abaixo |
| 6 | Construção | em andamento | código em `app/`, `components/`, `lib/` |
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
- 2026-10-18 — **Stack**: base + GSAP/ScrollTrigger só na vista explodida; sem Lenis, Motion, SplitText, 3D, View Transitions, Rive e Lottie; `next` e `eslint-config-next` 16.3.6 → 16.4.2 (16.4.1 corrige duas falhas críticas de execução remota) + `npm audit fix` sem `--force`; avisos restantes do eslint (dev) aceitos (aprovado por Filipe Amancio)

- 2026-10-18 — **Hero da home com vídeo** (`public/videos/hero.mp4`, cópia de `fotos-videos/Sneaker_moving_through_smoke_water_…mp4`) no lugar da foto lateral: mudo, em loop, poster `hero-poster.jpg`, botão "Pausar vídeo"/"Tocar vídeo", parado no poster com movimento reduzido. Altura limitada pela tela para H1 e carimbo ficarem acima da dobra. O hero do /chicago continua com a foto lateral (pedido de Filipe Amancio)
- 2026-10-18 — Vídeo do hero toca sozinho ao entrar (autoPlay nativo); com movimento reduzido fica parado no poster, com botão para tocar (aprovado por Filipe Amancio)

## Stack (fase 5)

- Base: Next.js 16.4.2 + TypeScript + Tailwind (template)
- GSAP + ScrollTrigger (`gsap` 3.15.0 + `@gsap/react` 2.1.2): **sim, só na vista explodida** de `/chicago` (faixa presa, deslize horizontal com scrub suavizado para dar a inércia, régua de avanço, assentamento de cada vista). Movimento reduzido: vistas empilhadas na vertical, sem pin. No celular a faixa vira lista vertical (DIRECAO)
- Lenis: não (a inércia vem do scrub; não sequestrar a rolagem) — removido
- Motion: não (modal de "Comprar" com `<dialog>` nativo, seletor de tamanho e menu em CSS) — removido
- SplitText: não (o H1 é o LCP)
- 3D/WebGL, View Transitions, Rive, Lottie: não
- Dados e segurança: nada a proteger (sem formulário, login, pagamento ou coleta; "Comprar" é simulado). `seguranca-web` não entra enquanto isso não mudar
- `npm audit`: 0 vulnerabilidades nas dependências de produção (`--omit=dev`). Restam 5 "high" só em desenvolvimento, na cadeia `eslint-config-next` → `@next/eslint-plugin-next` → `fast-glob` → `micromatch` → `braces`, sem correção publicada (a sugestão do npm é rebaixar para 14.x, não aplicar). Risco aceito; conferir de novo na fase 9

## Construção (fase 6)

| Seção | Estrutura | Conferida 375/1440 | Animação |
|---|---|---|---|
| / · hero (vídeo) | ok | ok (2026-10-18, aprovado) | vídeo em autoplay |
| / · legado | ok | — | — |
| / · a forma | ok | — | — |
| / · as cores | ok | — | — |
| /chicago · hero + barra fixa + modal | ok | — | — |
| /chicago · história | ok | — | — |
| /chicago · vista explodida (estática) | ok | — | pendente (etapa D) |
| /chicago · materiais | ok | — | — |
| /chicago · outras cores | ok | — | — |
| rodapé (todas) | ok | — | — |
| 404 | ok | — | — |

## Pendências

- [ ] Remote `template` (BrandForge) não configurado: a URL leva a conta da empresa; decidir na fase 10 se o portfólio vai para o template — **quem:** Filipe — desde 2026-10-17
- [ ] Fotos oficiais do AJ1 Chicago (lateral, frente, trás, sola, detalhes; rotação se houver), com a origem de cada uma. A direção B **exige as quatro vistas** (lateral, frente, trás, sola) recortadas sem halo, para fundo escuro — **quem:** Filipe — desde 2026-10-17
- [ ] Arquivos dos logos (SVG): Swoosh, Jumpman, Wings — **quem:** Filipe — desde 2026-10-17
- [ ] Contato da BrandForge para o aviso final (link/e-mail/WhatsApp; entra logo da BrandForge?) — **quem:** Filipe — desde 2026-10-17
- [ ] Decidir `noindex` do site (fase 6) — **quem:** nós — desde 2026-10-17
- [ ] Conferir as chamadas da vista explodida e os alts contra as fotos oficiais (etiqueta Nike Air na lingueta, cor da entressola, solado vermelho) — **quem:** nós, na fase 6 — desde 2026-10-18
- [ ] Faixa do seletor de tamanho (BR 37 a 44) é só demonstração; confirmar ou trocar — **quem:** Filipe — desde 2026-10-18

## Provisórios a trocar antes de publicar

- Rodapé e modal: "Falar com a BrandForge" sem destino até chegar o contato (a preencher); `site.contatoBrandForge` vazio, o botão aparece inativo
- Fotos: todas as imagens são molduras `FotoProvisoria` (role="img" com o alt aprovado), sem foto de banco; viram `next/image` quando as oficiais chegarem
- Logo do cabeçalho: caixa tracejada "logo" no lugar do Jumpman
- Favicon: ainda não existe (404 no console); entra na etapa C
- Vídeo do hero: 5,7 MB sem compressão (8 s, 1280×720); comprimir (meta ~1,5 MB, + WebM) antes da fase 9. Origem: gerado por IA (confirmado por Filipe em 2026-10-18); crédito "Vídeo da abertura: gerado por IA para este projeto." nos "Créditos e fontes"
- Rótulos "Pausar vídeo"/"Tocar vídeo" aprovados por Filipe em 2026-10-18 (fora do COPY.md, acessibilidade WCAG 2.2.2)

## Lançamento (fase 9)

- Domínio: — · Preview: — · Produção: —

## Diário curto

- 2026-10-17 — Template extraído do zip, git iniciado com origin pessoal, dependências instaladas, `npm run verificar` passou. Análise visual do Air Jordan 1 salva em `projeto/referencias/`.
- 2026-10-17 — Fase 1: briefing por entrevista; BRIEF aprovado (trilha B, hub AJ1 com Chicago, conceito para portfólio da BrandForge).
- 2026-10-17 — Fase 2: nicho não regulado; regras de marca, CDC, direito autoral e LGPD aprovadas (BRIEF §2).
- 2026-10-17 — Fase 3: conceito "peças sobrepostas", referência desenho técnico, três direções com pranchas; escolhida a B (prancha de engenharia). Vocabulário de calçado e origem da Big Shoulders conferidos por uma segunda sessão do Claude (nike-site-fa), anotados no DIRECAO.
- 2026-10-18 — Fase 4: copy escrita seção por seção, tom de rua com fatos com fonte (levantados pela sessão nike-site-fa, registrados no COPY). Mito "banido pela NBA" tratado como campanha.
- 2026-10-18 — Fase 5: stack definida (GSAP só na vista explodida); Lenis e Motion removidos; Next 16.4.2 (notas de versão e `npm audit` conferidos pela sessão nike-site-06); `npm run verificar` passou; Playwright MCP testado (`about:blank` + screenshot ok).
- 2026-10-18 — Fase 6, etapa A: `lib/site.ts` (WebSite, nav, cores, tamanhos, fontes), tokens da direção B no `globals.css`, Archivo variável com eixo `wdth`, todas as seções de `/` e `/chicago` + rodapé, modal de compra (`<dialog>`) e 404 com a copy exata. Conferido em 375 e 1440: sem scroll horizontal, 1 H1, modal abre e marca tamanho; lint e tsc limpos.
