# Direção criativa — Air Jordan 1 (projeto conceitual BrandForge)

Preenchido na fase 3. Primeiro com as três direções propostas; depois da escolha, só a aprovada fica detalhada e as outras viram um resumo de uma linha (registro do que foi descartado e por quê).

## Conceito central

**Um tênis feito de peças sobrepostas.** O site é montado como o AJ1: blocos que se sobrepõem como couro, divisões que seguem as costuras, e a anatomia do tênis como fio condutor da navegação.

De onde veio: DNA do produto no BRIEF §1 e na análise visual (sobreposições de couro, biqueira perfurada, segmentação por costuras e blocos, contraste de materiais). Para o público real (potenciais clientes da BrandForge), a montagem peça por peça também mostra o ofício da agência.

## Referências (fora do nicho)

- **Desenho técnico e moldes** (moldes de modelagem de calçado e alfaiataria, pranchas de engenharia, manuais de montagem e kits de modelismo). O que tirar: peças com nome e ordem real de montagem, linhas de cota e de chamada, carimbo da prancha como bloco de informação, vista explodida. Escolhido por Filipe em 2026-10-17; sem prints.

### Vocabulário de calçado (conferido em 2026-10-17, para a fase 4)

- Certos: **cabedal** (gáspea + traseiro), **gáspea**, **biqueira** (perfurada no AJ1), **lingueta**, **ilhós**, **palmilha**, **entressola**, **solado**.
- **Traseiro**: lateral e parte de trás do cabedal, onde fica o Swoosh ("painel lateral" como termo coloquial).
- **Talão**: a sobreposição visível do calcanhar (vermelha no Chicago). Não chamar de "contraforte": o contraforte é um reforço **interno**. O mesmo vale para "couraça" (reforço interno do bico).
- **Colarinho**: uso corrente no varejo, não é termo técnico. A peça do Wings: "aba do tornozelo" (descritivo). Faixa dos ilhós: "faixa dos ilhós" (descritivo).
- Swoosh e Wings são **marcas aplicadas**, não peças de modelagem: separar "peças" de "marcas" nas chamadas.
- Fontes: buscape.com.br/tenis/conteudo/partes-do-tenis · promobit.com.br/blog/conheca-as-partes-de-um-tenis · microtesauro SENAI/DN 1999 (citado em archive.proz.com/kudoz/portuguese-to-english/manufacturing/3479465-avesso.html, não consultado direto) · feature.com/blogs/feature-1/anatomy-of-a-sneaker

## Portfólio consultado

Nenhum: `portfolio/sites/` local está vazio e o remote `template` não está configurado (pendência no ESTADO). **Não foi possível conferir repetição com sites anteriores da BrandForge.** Conferir antes da fase 10.

---

## Direção B: Prancha de engenharia

- **Ideia em uma frase:** o tênis como projeto técnico numa prancha escura: grade de desenho visível, carimbo da prancha que funciona como navegação e compra, e uma vista explodida que corre na horizontal.
- **Alavancas do vocabulário visual:**
  - usadas: **profundidade por camadas** (vistas sobrepostas como folhas da prancha), **movimento com massa** (o deslize horizontal tem inércia, curva de desaceleração própria), **ritmo** (a vista explodida é o único trecho denso; o resto é calmo).
  - invertida: **estrutura quase invisível**. Aqui a grade de desenho fica visível de propósito, porque organiza as vistas (lateral, frente, trás, sola) como numa prancha real.
- **Paleta** (contrastes calculados em 2026-10-17):
  - Asfalto `#16171A` — fundo de toda a página
  - Borracha `#2A2C31` — superfícies e linhas da grade
  - Branco couro `#F2F2F0` — texto (16,0:1 sobre o fundo)
  - Vermelho sola `#E0283F` — grandes planos, números enormes e o botão "Comprar" (texto do botão em Asfalto); como texto sobre o fundo, só em tamanho grande (3,9:1, AA para texto grande)
  - Cinza cota `#9A9CA1` — texto secundário e cotas (6,5:1: AA)
- **Tipografia:** uma família só, **Archivo** (variável, eixos `wdth` 62–125 e `wght`, disponível no `next/font`), em três larguras: expandida (wdth 125, peso 800) no display, normal no corpo, condensada (wdth 62) nas cotas e no carimbo. Escala 1.25. Mesma matéria-prima em larguras diferentes, como peças cortadas do mesmo couro.
- **Forma:** reto (raio 0); a única "borda" é a linha de grade. Sem sombra; camadas por diferença de tom.
- **Estrutura de layout:** hero com a vista lateral grande sobre a grade e o carimbo no canto inferior direito (linha, colorway, vista e o botão "Comprar" moram nele); depois uma faixa presa na tela que desliza as vistas na horizontal; depois materiais em grade assimétrica.
  ```
  1440 ┌───────────────────────────────────────────────────────────┐
       │ grade de desenho                                          │
       │            FOTO LATERAL GRANDE (sobre asfalto)            │
       │                                       ┌─────────────────┐ │
       │ AIR JORDAN 1                          │ CARIMBO         │ │
       │ CHICAGO                               │ linha / cor     │ │
       │                                       │ [ Comprar ]     │ │
       └───────────────────────────────────────┴─────────────────┘
       ════ faixa presa: lateral → frente → trás → sola ══════► (rolagem)
       materiais: [couro liso  ][grão ][borracha      ]
  375: carimbo vira barra fixa no rodapé com o "Comprar"; a faixa vira lista vertical
  ```
- **Interação-assinatura:** **vista explodida horizontal.** Ao rolar, a faixa presa desliza pelas quatro vistas do tênis com uma régua que mede o avanço; cada vista para no lugar com um pequeno assentamento. Movimento reduzido: as vistas ficam empilhadas na vertical, sem faixa presa.
- **Fotografia e imagem:** fotos oficiais recortadas sobre fundo escuro (exige recorte limpo, sem halo branco); vistas ortogonais (lateral, frente, trás, sola) necessárias para a assinatura.
- **Riscos:** fundo quase preto + vermelho fica perto do clichê "fundo escuro com um acento só"; a saída é o vermelho em grandes planos, não em detalhe, e a grade fazer trabalho real. A faixa presa custa mais desenvolvimento (GSAP + ScrollTrigger, decidir na fase 5) e depende das quatro vistas de foto. Escuro na página inteira: sem alternância de tema por seção.
- **Prancha:** `projeto/referencias/direcoes/b-375.png`, `b-1440.png`

### Regras de execução (da autocrítica)

- Sem fonte mono: as cotas usam Archivo condensada.
- Caixa alta só no H1, no nome da peça e no botão; o resto em caixa normal.
- Nada de destacar uma palavra do título com outra cor.
- Fontes da análise (Anton, Bebas Neue, Oswald) ficam de fora.

---

## Escolhida: B — aprovada em 2026-10-17 por Filipe Amancio

Ajustes pedidos na aprovação: nenhum

Descartadas: A, Molde de corte (branco, cotas que se desenham, Big Shoulders): a mais segura, com menos impacto como vitrine que a B · C, Molde vazado (vermelho dominante, recortes diagonais, Saira Stencil): o vermelho em área grande cansa e o estêncil pesa a leitura
