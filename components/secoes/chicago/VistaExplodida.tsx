import { FotoProvisoria } from "@/components/FotoProvisoria";

// Estático (etapas A e B). A faixa presa com GSAP + ScrollTrigger entra na etapa D; sem JS ou com
// movimento reduzido, fica exatamente assim: as quatro vistas empilhadas.
const vistas = [
  {
    nome: "lateral",
    frase: "O lado que todo mundo conhece.",
    pecas: ["cabedal", "traseiro", "talão", "aba do tornozelo", "faixa dos ilhós", "biqueira perfurada"],
    marcas: ["Swoosh (no traseiro)", "Wings (na aba do tornozelo)"],
    alt: "Air Jordan 1 Chicago em vista lateral externa, com as peças do cabedal identificadas.",
  },
  {
    nome: "frente",
    frase: "De frente, os furos da biqueira.",
    pecas: ["biqueira perfurada", "gáspea", "lingueta", "ilhós"],
    marcas: ["etiqueta Nike Air na lingueta"],
    alt: "Air Jordan 1 Chicago de frente: biqueira perfurada, lingueta e cadarço.",
  },
  {
    nome: "trás",
    frase: "Por trás, o talão vermelho fecha o desenho.",
    pecas: ["talão", "cano"],
    marcas: [],
    alt: "Air Jordan 1 Chicago visto de trás: talão vermelho e cano alto.",
  },
  {
    nome: "sola",
    frase: "Embaixo, borracha vermelha.",
    pecas: ["entressola", "solado"],
    marcas: [],
    alt: "Solado vermelho do Air Jordan 1 Chicago visto de baixo.",
  },
];

function Lista({ titulo, itens }: { titulo: string; itens: string[] }) {
  return (
    <div>
      <h3 className="cota text-base">{titulo}</h3>
      <ul className="mt-2 border-t border-borracha">
        {itens.map((item) => (
          <li key={item} className="border-b border-borracha py-2 text-base">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function VistaExplodida() {
  return (
    <section id="vistas" aria-labelledby="vistas-titulo" className="grade scroll-mt-4 border-y border-borracha">
      <div className="moldura py-20 md:py-32">
        <h2 id="vistas-titulo" className="display text-4xl md:text-7xl">
          Desmonta.
        </h2>
        <p className="mt-5 max-w-[36rem] text-lg">Quatro vistas, uma régua. Role e o Chicago se abre peça por peça.</p>

        <ol className="mt-12 grid gap-16 md:gap-24">
          {vistas.map((v, i) => (
            <li key={v.nome} className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
              <figure>
                <FotoProvisoria alt={v.alt} rotulo={`vista ${v.nome}`} proporcao="aspect-[4/3]" />
                <figcaption className="cota mt-2 border-t border-cota pt-1">
                  vista {i + 1}/4 · {v.nome}
                </figcaption>
              </figure>
              <div className="grid content-start gap-6">
                <p className="display text-2xl md:text-3xl">{v.frase}</p>
                <Lista titulo="Peças" itens={v.pecas} />
                {v.marcas.length > 0 && <Lista titulo="Marcas" itens={v.marcas} />}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
