import { Regua } from "@/components/Regua";

export function Legado() {
  return (
    <section aria-labelledby="legado-titulo" className="moldura py-20 md:py-32">
      <div className="grid gap-6 md:grid-cols-2 md:gap-16">
        <h2 id="legado-titulo" className="display text-3xl md:text-5xl">
          1985 tem nome e sobrenome.
        </h2>
        <p className="max-w-[36rem] text-lg md:pt-3">
          Antes de virar linha, foi aposta. Jordan assinou com a Nike em 1984. No ano seguinte, saía o primeiro tênis
          assinatura de basquete da marca.
        </p>
      </div>
      <div className="mt-12 md:mt-16">
        <Regua
          marcos={[
            { marca: "1984", texto: "Jordan assina com a Nike." },
            { marca: "1985", texto: "Sai o Air Jordan 1, desenhado por Peter Moore." },
            {
              marca: "Wings",
              texto:
                "Segundo Peter Moore, ele desenhou as asas num guardanapo, durante um voo, depois de ver uma criança com asas de piloto de plástico.",
            },
            {
              marca: "Banned",
              texto: "A Nike fez da carta da NBA uma propaganda. Detalhe: a carta falava de outro tênis, o Air Ship.",
            },
            { marca: "1994", texto: "O Chicago ganha seu primeiro retrô." },
          ]}
        />
      </div>
    </section>
  );
}
