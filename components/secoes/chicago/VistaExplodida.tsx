import { FotoProvisoria } from "@/components/FotoProvisoria";
import { MarcasDeCanto } from "@/components/MarcasDeCanto";

// Versão estática (sem JS e com movimento reduzido): as quatro vistas empilhadas, cada uma como
// uma folha da prancha. Na etapa D, o GSAP + ScrollTrigger usa os data-* abaixo para prender a
// seção e deslizar a faixa na horizontal, com a régua medindo o avanço.
const vistas = [
  {
    id: "vista-lateral",
    nome: "lateral",
    frase: "O lado que todo mundo conhece.",
    pecas: ["cabedal", "traseiro", "talão", "aba do tornozelo", "faixa dos ilhós", "biqueira perfurada"],
    marcas: ["Swoosh (no traseiro)", "Wings (na aba do tornozelo)"],
    alt: "Air Jordan 1 Chicago em vista lateral externa, com as peças do cabedal identificadas.",
  },
  {
    id: "vista-frente",
    nome: "frente",
    frase: "De frente, os furos da biqueira.",
    pecas: ["biqueira perfurada", "gáspea", "lingueta", "ilhós"],
    marcas: ["etiqueta Nike Air na lingueta"],
    alt: "Air Jordan 1 Chicago de frente: biqueira perfurada, lingueta e cadarço.",
  },
  {
    id: "vista-tras",
    nome: "trás",
    frase: "Por trás, o talão vermelho fecha o desenho.",
    pecas: ["talão", "cano"],
    marcas: [],
    alt: "Air Jordan 1 Chicago visto de trás: talão vermelho e cano alto.",
  },
  {
    id: "vista-sola",
    nome: "sola",
    frase: "Embaixo, borracha vermelha.",
    pecas: ["entressola", "solado"],
    marcas: [],
    alt: "Solado vermelho do Air Jordan 1 Chicago visto de baixo.",
  },
];

function Lista({ titulo, itens, sinal }: { titulo: string; itens: string[]; sinal: "peca" | "marca" }) {
  return (
    <div>
      <h4 className="cota text-base">{titulo}</h4>
      <ul className="mt-2 border-t border-borracha">
        {itens.map((item) => (
          <li key={item} className="flex items-center gap-3 border-b border-borracha py-2 text-base">
            {/* Peça = quadrado cheio (parte do molde); marca = quadrado vazado (aplicada por cima) */}
            <span
              aria-hidden="true"
              className={`size-2.5 shrink-0 ${sinal === "peca" ? "bg-sola" : "border border-couro"}`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function VistaExplodida() {
  return (
    <section
      id="vistas"
      data-vistas
      aria-labelledby="vistas-titulo"
      className="grade scroll-mt-4 overflow-hidden border-y border-borracha"
    >
      <div className="moldura py-20 md:py-32">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="min-w-0">
            <h2 id="vistas-titulo" className="display text-[clamp(2.4rem,11vw,5.96rem)]">
              Desmonta.
            </h2>
            <p className="mt-5 max-w-[36rem] text-lg">Quatro vistas, uma régua. Role e o Chicago se abre peça por peça.</p>
          </div>
          <p className="cota flex gap-5 text-base">
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="size-2.5 bg-sola" /> peça
            </span>
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="size-2.5 border border-couro" /> marca
            </span>
          </p>
        </div>

        {/* Régua: quatro segmentos, um por vista. Sem JS, serve de atalho para cada folha. */}
        <nav aria-label="Vistas do Chicago" className="mt-12">
          <ol data-regua className="grid grid-cols-4 gap-1">
            {vistas.map((v, i) => (
              <li key={v.id}>
                <a
                  href={`#${v.id}`}
                  data-regua-segmento
                  className="cota flex min-h-11 flex-col justify-end border-t-2 border-couro pt-2 text-base hover:border-sola hover:text-couro"
                >
                  <span>
                    vista {i + 1}/4 <span className="hidden sm:inline">· {v.nome}</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <ol data-faixa className="mt-16 grid gap-20 md:gap-28">
          {vistas.map((v, i) => (
            <li key={v.id} id={v.id} data-vista className="scroll-mt-8 border-t border-couro pt-6">
              <div className="flex items-baseline justify-between gap-6">
                <h3 className="cota text-base">
                  vista {i + 1}/4 · {v.nome}
                </h3>
                <span aria-hidden="true" className="display text-5xl text-sola md:text-7xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-6 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
                <figure>
                  <div className="relative">
                    <FotoProvisoria alt={v.alt} rotulo={`vista ${v.nome}`} proporcao="aspect-[4/3]" />
                    <MarcasDeCanto />
                  </div>
                </figure>
                <div className="grid content-start gap-8">
                  <p className="display text-2xl md:text-4xl">{v.frase}</p>
                  <Lista titulo="Peças" itens={v.pecas} sinal="peca" />
                  {v.marcas.length > 0 && <Lista titulo="Marcas" itens={v.marcas} sinal="marca" />}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
