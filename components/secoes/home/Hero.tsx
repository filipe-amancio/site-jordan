import Link from "next/link";
import { Carimbo, classeBotaoCarimbo } from "@/components/Carimbo";
import { FotoProvisoria } from "@/components/FotoProvisoria";

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="grade border-b border-borracha">
      <div className="moldura pb-10 pt-8 md:pb-16 md:pt-16">
        <figure className="mx-auto max-w-[62rem]">
          <FotoProvisoria
            alt="Air Jordan 1 Chicago em vista lateral externa: cabedal branco, sobreposições vermelhas, Swoosh preto e solado vermelho."
            rotulo="vista lateral, recorte sem halo"
          />
          <figcaption className="cota mt-2 border-t border-cota pt-1 text-center">vista lateral</figcaption>
        </figure>

        <div className="mt-8 grid gap-8 md:mt-12 lg:grid-cols-[1fr_22rem] lg:items-end">
          <div>
            <h1 id="hero-titulo" className="display text-[clamp(2.2rem,6.6vw,6rem)] uppercase">
              AIR JORDAN 1
            </h1>
            <p className="mt-5 max-w-[36rem] text-lg">
              Saiu em 1985: o primeiro tênis com o nome de Michael Jordan. Cano alto, couro em camadas e zero pedido de
              desculpa.
            </p>
          </div>
          <Carimbo
            linhas={[
              { rotulo: "Linha", valor: "Air Jordan 1" },
              { rotulo: "Colorway", valor: "Chicago" },
              { rotulo: "Vista", valor: "lateral externa" },
            ]}
          >
            <Link href="/chicago" className={classeBotaoCarimbo}>
              Ver o Chicago
            </Link>
          </Carimbo>
        </div>
      </div>
    </section>
  );
}
