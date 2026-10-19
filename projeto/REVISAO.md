# Revisão — fase 7

Feita em 2026-10-19, no build de produção (`next build` + `next start`, Next 16.4.2), com Playwright (Chromium) e Lighthouse. Status: **ok** (verificado agora) · **corrigido** (estava errado, corrigido e verificado de novo) · **pendente humano** (não dá para checar daqui; diz quem resolve).

Resumo: **71 linhas ok · 12 corrigidas** (11 correções distintas: o rótulo do vídeo aparece nos blocos 3 e 5) **· 6 linhas pendentes humanas** (9 pendências no total, listadas no fim). Lighthouse: desktop 100/96/100/66 nas duas páginas; mobile 95/96/100/66 (home) e 97/96/100/66 (/chicago). A acessibilidade não chega a 100 só por causa dos provisórios, e o SEO fica em 66 por causa do `noindex`, que é de propósito.

## 1. Build limpo

| Item | Status | Evidência |
|---|---|---|
| `npm run verificar` (lint + build) | ok | Passou no começo da revisão e de novo depois de cada correção (a última depois da CSP e do `robots.ts`): lint sem saída, "✓ Compiled successfully", 10 rotas estáticas (`/`, `/chicago`, `/_not-found`, ícones, OG, robots, sitemap) |

## 2. Web Interface Guidelines (`web-design-guidelines` sobre `app/**/*.tsx` e `components/**/*.tsx`)

| Item | Status | Evidência / arquivo |
|---|---|---|
| `color-scheme: dark` no `<html>` (tema escuro: barra de rolagem e controles nativos) | corrigido | `app/globals.css` (base `html`) e `export const viewport` em `app/layout.tsx`; `getComputedStyle(html).colorScheme === "dark"` |
| `<meta name="theme-color">` igual ao fundo | corrigido | `app/layout.tsx` (`viewport.themeColor = "#16171a"`); HTML servido traz `name="theme-color" content="#16171a"` |
| `overscroll-behavior: contain` no modal | corrigido | `components/Compra.tsx:53` (`overscroll-contain`) |
| Área segura (notch) na barra fixa de compra do celular | corrigido | `components/secoes/chicago/Hero.tsx:43` (`pb-[env(safe-area-inset-bottom)]`) |
| `text-wrap: balance` nos títulos | corrigido | `app/globals.css` (base `h1, h2, h3`) |
| `touch-action: manipulation` e realce de toque definido de propósito | corrigido | `app/globals.css` (base: `a, button, summary, label`; `-webkit-tap-highlight-color` em vermelho sola a 25%) |
| Números tabulares no seletor de tamanho | corrigido | `components/Compra.tsx:77` (`tabular-nums`) |
| Nome da marca protegido da tradução automática | corrigido | `translate="no"` nos H1 de `components/secoes/home/Hero.tsx:21` e `components/secoes/chicago/Hero.tsx:20` |
| Sem `transition: all`, `outline-none` sem substituto, zoom bloqueado, `onPaste`, `autoFocus`, `<div onClick>` | ok | `grep` sem ocorrência. O único `outline-none` (`Compra.tsx:112`) está no título do passo 2, que recebe foco por código (`tabIndex=-1`) e não é interativo |
| Foco visível | ok | `:focus-visible` global (2px couro, offset 3px) em `app/globals.css`; o rádio do tamanho usa `has-focus-visible` |
| Botões, links, labels, link para pular ao conteúdo, hierarquia de títulos | ok | Lido arquivo por arquivo; os rádios ficam dentro do `<label>` (alvo único) |
| Vídeo em loop: botão de pausar e parada com movimento reduzido | ok | `components/VideoHero.tsx` (ver bloco 3) |
| Conteúdo e tom (voz ativa, caixa de título em inglês, primeira pessoa) | ok, não aplicado | São regras de copy em inglês; a copy em português foi aprovada no COPY.md e não muda |

## 3. Checagens automáticas no navegador

Páginas `/`, `/chicago` e uma rota inexistente (404), em 375×812 e 1440×900.

| Item | Status | Evidência |
|---|---|---|
| Imagens quebradas | ok | `[]` nas 6 combinações (não há `<img>` ainda: as fotos são molduras `FotoProvisoria`) |
| Scroll horizontal | ok | `scrollWidth > innerWidth` = `false` nas 6, e também em 768 e 1920 (bloco 4) |
| Um H1 por página | ok | `1` nas 6 |
| Imagem sem alt / `role="img"` sem rótulo | ok | `0` e `0` |
| Campo sem label | ok | `0`; os 8 rádios do modal têm `labels` (conferido com o modal aberto) |
| Console | ok | Zero erros e avisos em `/` e `/chicago`. Na 404, o único erro é o próprio documento respondendo 404 (esperado) |
| Alvos de toque ≥ 44px | ok | Só o link "Pular para o conteúdo" mede 1×1, porque fica escondido (`sr-only`) até receber foco. Todo o resto ≥ 44 |
| Teclado: ordem e foco visível | ok | 1440 `/`: pular → logo → A linha → Chicago → Cores → Pausar vídeo → Ver o Chicago ×3 → Créditos e fontes, todos com contorno de 2px. 375 `/chicago`: …→ Comprar (barra) → vista 1–4 → Ver a linha → Créditos, nenhum coberto pela barra fixa |
| Teclado no modal | ok | Enter no "Comprar" abre o `<dialog>`; o Tab fica dentro dele (passa pela interface do navegador, comportamento nativo do modal); Esc fecha e o foco volta ao "Comprar" |
| Movimento reduzido (emulado) | ok | Vídeo parado no poster (`paused`, `currentTime` 0, botão "Tocar vídeo"); /chicago sem `data-vistas-animado`, sem `pin-spacer` e faixa com `transform: none` depois de rolar. Sem emulação: vídeo toca e a faixa desliza (`translateX -1376px`) |
| Rótulo do botão do vídeo piscava na hidratação | corrigido | Saía do servidor como "Tocar vídeo" com o vídeo já tocando. Agora o estado começa em "tocando" e o ramo do movimento reduzido sincroniza num `requestAnimationFrame` (`components/VideoHero.tsx:15-31`). Conferido: HTML do servidor = "Pausar vídeo"; com movimento reduzido = "Tocar vídeo"; o clique alterna nos dois modos |
| Hero sem JavaScript | ok | `curl` nas duas páginas: H1, texto, CTA, carimbo e poster do vídeo estão no HTML servido. Nota: sem JS o "Comprar" não abre o modal (a compra é simulada; aceito) |
| Ida e volta entre rotas | ok | / → /chicago (faixa rolada) → "A linha" → voltar: continua `1` pin-spacer, console limpo |

## 4. Screenshots finais (página inteira)

| Item | Status | Evidência |
|---|---|---|
| 375, 768 e 1920, home e /chicago | ok | `projeto/referencias/revisao/{home,chicago}-{375,768,1920}.png`, sem quebra e sem scroll horizontal. No /chicago em 1920 aparece um vão escuro (é o trecho de rolagem da faixa presa) e em 375 a barra de compra aparece no meio do print. As duas coisas vêm da captura de página inteira, não do site |
| H1 e CTA acima da dobra | ok | Medido em 375×812, 768×1024, 1366×768, 1440×900 e 1920×1080, nas duas páginas: o fundo do CTA fica sempre ≤ a altura da tela (ex.: 1366×768 home, CTA em 707) |

## 5. Performance React/Next (`stack-web/references/react-vercel`)

| Regra | Status | Evidência |
|---|---|---|
| Imports dinâmicos / condicionais | ok | GSAP só no chunk do /chicago (`1cwjq6lil5v4j.js` referenciado em `chicago.html` e ausente em `index.html`) |
| Terceiros adiados | ok | Nenhum terceiro (sem analytics, pixel ou chat) |
| Barrel imports | ok | `lib/gsap.ts` importa direto de `gsap` e `@gsap/react` |
| Serialização para o cliente | ok | Os Client Components (`VideoHero`, `Compra`, `PalcoVistas`) só recebem strings e children |
| Leitura de arquivo estático fora do componente | ok | Fonte da OG lida no módulo (`components/seo/imagemOg.tsx:10`) |
| Sem piscar na hidratação | corrigido | Rótulo do vídeo (ver bloco 3) |
| `&&` com número | ok | `v.marcas.length > 0 &&`, `i > 0 &&` (booleanos) |
| Resource hints só onde medem diferença | ok | Testei um `preload` do poster com `fetchPriority: "high"`: LCP mobile 2,9 s antes (×3) e 2,9 s depois (×3). Sem ganho, então revertido |
| Componentes inline / listeners passivos / Promise.all | ok | `Lista` e `Marcador` estão no topo do módulo; só listeners de clique; não há busca de dados |

## 6. Lighthouse (medido, build de produção local)

Arquivos: `projeto/lighthouse-{home,chicago}-{desktop,mobile}.json` (medidos antes da CSP completa, que não muda a carga).

| Página / perfil | Performance | Acessibilidade | Boas práticas | SEO | LCP | TBT | CLS |
|---|---|---|---|---|---|---|---|
| / desktop | 100 | 96 | 100 | 66 | 0,6 s | 0 ms | 0 |
| / mobile | 95 | 96 | 100 | 66 | 2,9 s | 70 ms | 0 |
| /chicago desktop | 100 | 96 | 100 | 66 | 0,6 s | 0 ms | 0 |
| /chicago mobile | 97 | 96 | 100 | 66 | 2,6 s | 50 ms | 0 |

- **SEO 66:** só falha `is-crawlable`, por causa do `noindex` aprovado (esperado).
- **Acessibilidade 96:** as falhas vêm todas de provisórios. São três: o texto "foto oficial: …" das molduras (3,16:1), o "Falar com a BrandForge" inativo (2,07:1) e o link do logo com o texto "logo" diferente do nome acessível. Os três somem quando chegarem as fotos, o logo e o contato (pendentes humanos abaixo).
- **LCP mobile 2,9 s na home (acima da meta de 2,5 s, mas performance 95 ≥ 85):** o LCP é o poster do vídeo. Na medição real os trechos somam ~140 ms; os 2,9 s vêm da simulação de 4G, em que o `hero.mp4` (5,7 MB, autoplay) disputa banda com o poster (peso total da home 3,1–3,5 MB contra 318 KB no /chicago). Causa: o vídeo sem compressão, que já é pendência antes da fase 9. Medir de novo depois de comprimir.

## 7. Segurança

O site não tem formulário, login, banco, pagamento nem coleta de dados. Os itens de RLS, rotas de API, validação, rate limit e LGPD não se aplicam.

| Item | Status | Evidência |
|---|---|---|
| Segredos no código e no histórico | ok | `scan_segredos.sh .`: nenhuma chave, `service_role`, variável pública com nome de segredo ou `.env` fora do `.gitignore`. Único "padrão perigoso": `dangerouslySetInnerHTML` do JSON-LD (`components/seo/JsonLd.tsx:34`), com dados estáticos de `lib/site.ts` e `<` escapado: seguro. `git log --all -p` sem chave (só os padrões do próprio script) |
| `npm audit` | ok | Produção (`--omit=dev`): 0 vulnerabilidades. Desenvolvimento: as mesmas 5 "high" da fase 5 (cadeia do `eslint-config-next`, sem correção publicada), risco já aceito; conferir de novo na fase 9 |
| CSP completada | corrigido | `next.config.ts`: `default-src 'self'`, `script-src 'self' 'unsafe-inline'` (as páginas estáticas não aceitam nonce; guia "Without Nonces" do Next), `style-src 'self' 'unsafe-inline'`, `img-src 'self' blob: data:`, `font-src`/`media-src`/`connect-src 'self'`, `frame-src 'none'`, `object-src 'none'`, `base-uri`/`form-action 'self'`, `frame-ancestors 'none'`. `'unsafe-eval'` só em dev; `vercel.live` só com `VERCEL_ENV=preview` (barra de comentários da fase 8). Conferido: header servido, zero violação no fluxo inteiro (vídeo, navegação, faixa presa, modal até o passo 2, 404) e `next dev` hidrata sem erro |
| Demais headers | ok | HSTS, nosniff, Referrer-Policy, Permissions-Policy, X-Frame-Options DENY e `X-Robots-Tag: noindex, nofollow` servidos |

## 8. Checklist de entrega

### Visual
| Item | Status | Evidência |
|---|---|---|
| Hierarquia clara | ok | Screenshots do bloco 4 |
| Tipografia e paleta iguais às do DIRECAO | ok | `@theme` em `app/globals.css` = DIRECAO §cores (#16171A, #2A2C31, #F2F2F0, #E0283F, #9A9CA1); Archivo variável `wdth` 62/100/125, escala 1.25 |
| Espaçamento na escala | ok | Moldura 16/64px, grade de 80px, seções `py-20/32` |
| Interação-assinatura funciona | ok | Faixa presa conferida no bloco 3 (desliza, 1 pino, reverte com movimento reduzido) |
| CTA principal acima da dobra | ok | Bloco 4 (5 resoluções) |

### Responsividade
| Item | Status | Evidência |
|---|---|---|
| 375/768/1920 sem quebra | ok | Bloco 4 |
| Sem scroll horizontal | ok | Blocos 3 e 4 |
| Alvos de toque ≥ 44px | ok | Bloco 3 |
| Imagens responsivas (`sizes`) | pendente humano | Ainda não há `next/image`: entra com as fotos oficiais (Filipe envia; nós aplicamos `sizes` ao trocar `FotoProvisoria`) |

### Performance
| Item | Status | Evidência |
|---|---|---|
| Imagens otimizadas, lazy abaixo da dobra, preload só no hero | pendente humano | Depende das fotos oficiais. O vídeo do hero precisa ser comprimido (meta ~1,5 MB + WebM) antes da fase 9 |
| Lighthouse medido | ok | Bloco 6 |
| Nenhum pacote sem uso | ok | Dependências: `next`, `react`, `react-dom`, `gsap` e `@gsap/react` (os dois em `lib/gsap.ts`). Lenis e Motion removidos na fase 5 |
| Hero sem JS | ok | Bloco 3 |
| 3D/Spline/Rive/Lottie sob demanda | ok, não se aplica | Nenhum no site |
| Navegar e voltar não duplica animação | ok | Bloco 3 |

### Acessibilidade
| Item | Status | Evidência |
|---|---|---|
| Contraste AA | pendente humano | Os tokens passam (16:1, 6,5:1; vermelho só em texto grande). Falham só os provisórios ("Falar com a BrandForge" a 2,07:1 e o texto das molduras). Resolve quando chegarem o contato (Filipe) e as fotos |
| Alt em toda imagem de conteúdo | ok | Todas as molduras e o vídeo têm o alt aprovado no COPY |
| Label em todo campo | ok | Bloco 3 |
| Tab em ordem lógica com foco visível | ok | Bloco 3 |
| HTML semântico, um H1 | ok | Bloco 3; `header`/`nav`/`main`/`section aria-labelledby`/`footer`, `dl` no carimbo |
| Movimento reduzido | ok | Bloco 3 |

### SEO
| Item | Status | Evidência |
|---|---|---|
| `lib/site.ts` só com dados reais | ok | Endereço, telefone e horário vazios de propósito; JSON-LD `WebSite` só com nome, url e descrição |
| Title e description por página | ok | `/` e `/chicago` com title próprio e description de 133 caracteres; 404 com title próprio |
| H1 único, URLs legíveis | ok | `/`, `/chicago` |
| NAP / JSON-LD de negócio local | ok, não se aplica | Sem endereço físico (BRIEF §4) |
| Sitemap e robots | ok | `/sitemap.xml` lista `/` e `/chicago`; `/robots.txt` = `Disallow: /`. Pela decisão de 2026-10-18 continua bloqueado em produção (não definir `SITE_INDEXAVEL`) |
| Imagem OG 1200×630 | ok | `og:image` PNG 1200×630 com alt, uma por página |
| Decisão sobre rastreadores de IA em `app/robots.ts` | corrigido | O comentário falava em "negócio local liberado"; agora registra que o `noindex` bloqueia todos, IA incluída (`app/robots.ts:4-7`) |
| WhatsApp e Search Console | ok, não se aplica agora | Fase 9; Search Console não se aplica (`noindex`) |

### Conformidade (BRIEF §2)
| Item | Status | Evidência |
|---|---|---|
| Aviso conceitual em todas as páginas e no modal (regra 1) | ok | Rodapé global (`layout.tsx`) e passo 2 do modal |
| Sem preço, frete, escassez ou prazo (regra 2) | ok | `grep` de R$, reais, frete, últimas, unidades, entrega em: nenhuma ocorrência |
| Fatos com fonte (regra 3) | ok | "Créditos e fontes" no rodapé, a partir de `site.fontes` (COPY "Fontes dos fatos") |
| Sem depoimento, avaliação ou estrela (regra 4) | ok | `grep` de estrelas, avaliação, mais vendido: nenhuma ocorrência |
| Crédito nas fotos (regra 5) | ok | "Imagens: Nike, Inc." e "Vídeo da abertura: gerado por IA" em `Rodape.tsx:51-52`. A origem de cada foto fica para quando as fotos chegarem |
| Logos sem redesenho (regra 6) | ok | Nenhum logo desenhado; caixa "logo" provisória |
| Zero coleta (regra 7) | ok | Sem formulário, cookie ou analytics; o tamanho fica só no estado da página |
| Registro profissional | ok, não se aplica | — |
| Cliente confirmou a copy final | pendente humano | Copy aprovada por Filipe em 2026-10-18 (COPY.md); confirmar de novo no preview (fase 8) depois das fotos — Filipe |

### Conteúdo e dados
| Item | Status | Evidência |
|---|---|---|
| Nenhuma imagem provisória sem aprovação | ok | Só molduras `FotoProvisoria` (sem banco nem `picsum`); vídeo gerado por IA, aprovado e creditado |
| Nenhum dado inventado | ok | Fatos com fonte; sem nome, número ou depoimento inventado |
| Dados do BRIEF §3 recebidos | pendente humano | Faltam as fotos oficiais (4 vistas, sem halo), os SVGs do Swoosh, Jumpman e Wings, e o contato da BrandForge — Filipe |

### Código
| Item | Status | Evidência |
|---|---|---|
| `npm run verificar` | ok | Bloco 1 |
| Sem TODO, placeholder ou `markers: true` | ok | `grep` sem ocorrência. Os `PROVISÓRIO` comentados são intencionais e estão listados no ESTADO |
| Nomes descritivos, sem duplicação óbvia | ok | `Carimbo`, `Regua`, `CardsCores` e `MarcasDeCanto` são reutilizados entre as páginas |
| Sem travessão em texto visível (copy e `design-taste` §14) | ok | `grep` no código e no HTML servido das 3 páginas: nenhum |

### Entrega (fase 9)
| Item | Status | Evidência |
|---|---|---|
| Domínio e HTTPS | pendente humano | Fase 9 — Filipe decide o domínio |
| Acessos entregues | ok, não se aplica | Conta pessoal do próprio Filipe |

## `design-taste-frontend` §14 (só onde não contradiz a direção B)

Ok: um tema só (escuro), um acento (vermelho sola), raio zero em tudo, CTAs legíveis (asfalto sobre vermelho, 3,9:1 em texto grande e negrito), nenhum CTA quebra linha no desktop, menu numa linha só (64px), sem marquee, sem indicação de "role para baixo", sem versão no rodapé, movimento justificado (o vídeo abre a página; a faixa conta a anatomia). Ficaram de fora, porque contradizem a direção aprovada: cabeçalho dividido em Legado e História (título largo + texto ao lado, como na prancha), cotas e legendas técnicas ("vista lateral", "marco 01") e o mesmo "Ver o Chicago" repetido 3 vezes na home (rótulo único aprovado no COPY).

## Pendentes humanos (vão para o ESTADO)

1. Fotos oficiais (4 vistas sem halo + detalhes) com a origem de cada uma: libera `next/image` com `sizes`, lazy, contraste das molduras e alts finais — **Filipe**
2. SVGs do Swoosh, Jumpman e Wings: tira a caixa "logo" (corrige o `label-content-name-mismatch`) — **Filipe**
3. Contato da BrandForge: ativa o "Falar com a BrandForge" (hoje a 2,07:1, **não pode ir ao ar assim**) — **Filipe**
4. Comprimir o `hero.mp4` (meta ~1,5 MB + WebM) e medir de novo o LCP mobile da home — **nós, antes da fase 9**
5. Testar num celular real (iPhone com notch para a barra fixa; Android) — **Filipe, no preview da fase 8**
6. Confirmar a copy final no preview — **Filipe, fase 8**
7. Domínio e HTTPS — **Filipe, fase 9**
8. `npm audit` de novo (5 "high" de dev aceitas) — **nós, fase 9**
9. Faixa de tamanhos BR 37–44 (só demonstração): confirmar ou trocar — **Filipe**
