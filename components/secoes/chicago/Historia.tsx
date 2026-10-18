import { Regua } from "@/components/Regua";

export function Historia() {
  return (
    <section aria-labelledby="historia-titulo" className="moldura py-20 md:py-32">
      <div className="grid gap-6 md:grid-cols-2 md:gap-16">
        <h2 id="historia-titulo" className="display text-3xl md:text-5xl">
          A cor da casa.
        </h2>
        <p className="max-w-[36rem] text-lg md:pt-3">
          Jordan jogava no Chicago Bulls. O tênis vestiu a camisa: cabedal branco, couro vermelho por cima, Swoosh preto.
        </p>
      </div>
      <div className="mt-12 md:mt-16">
        <Regua
          marcos={[
            { marca: "1985", texto: "O original. Desenho de Peter Moore, cores do time." },
            { marca: "1994", texto: "O primeiro retrô. Nove anos depois, o Chicago volta." },
            { marca: "2015", texto: "Volta de novo." },
            {
              marca: "2022",
              texto:
                "Lost & Found. A Nike relançou o Chicago como um par de 1985 achado num estoque: couro craquelado, lingueta amarelada, caixa com a tampa trocada.",
            },
          ]}
        />
      </div>
      {/* Fecho em plano vermelho: o vermelho em grande área, não em detalhe (DIRECAO, riscos) */}
      <p className="display mt-16 text-balance bg-sola px-5 py-8 text-2xl text-asfalto md:mt-24 md:px-10 md:py-14 md:text-5xl">
        Toda volta do Chicago olha para 1985.
      </p>
    </section>
  );
}
