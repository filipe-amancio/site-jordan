import { BotaoComprar } from "@/components/Compra";
import { Carimbo, classeBotaoCarimbo } from "@/components/Carimbo";
import { FotoProvisoria } from "@/components/FotoProvisoria";

export function HeroChicago() {
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
              <br />
              CHICAGO
            </h1>
            <p className="mt-5 max-w-[36rem] text-lg">
              Branco, vermelho e preto: as cores do Chicago Bulls. Assim ele chegou em 1985. Assim ele fica.
            </p>
          </div>
          <Carimbo
            className="hidden md:block"
            linhas={[
              { rotulo: "Linha", valor: "Air Jordan 1" },
              { rotulo: "Colorway", valor: "Chicago" },
              { rotulo: "Vista", valor: "lateral externa" },
            ]}
          >
            <BotaoComprar className={classeBotaoCarimbo} />
          </Carimbo>
        </div>
      </div>

      {/* No celular o carimbo vira barra fixa no rodapé com o "Comprar" (DIRECAO) */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-couro bg-asfalto md:hidden">
        <div className="flex items-stretch">
          <p className="flex flex-1 items-center px-4 text-base font-medium">Air Jordan 1 Chicago</p>
          <BotaoComprar className="largura-expandida flex min-h-14 items-center bg-sola px-6 text-lg font-extrabold uppercase text-asfalto" />
        </div>
      </div>
    </section>
  );
}
