import Link from "next/link";
import { Carimbo, classeBotaoCarimbo } from "@/components/Carimbo";
import { VideoHero } from "@/components/VideoHero";

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="grade border-b border-borracha">
      <div className="moldura pb-10 pt-8 md:pb-12 md:pt-10">
        {/* Altura do vídeo limitada pela tela para o H1 e o carimbo caberem acima da dobra */}
        <figure className="mx-auto max-w-[min(62rem,max(20rem,calc((100dvh-27rem)*16/9)))]">
          <VideoHero
            src="/videos/hero.mp4"
            poster="/videos/hero-poster.jpg"
            rotulo="Air Jordan 1 Chicago em vista lateral externa: cabedal branco, sobreposições vermelhas, Swoosh preto e solado vermelho."
          />
          <figcaption className="cota mt-2 border-t border-cota pt-1 text-center">vista lateral</figcaption>
        </figure>

        <div className="mt-8 grid gap-8 md:mt-8 lg:grid-cols-[1fr_22rem] lg:items-end">
          <div>
            <h1 id="hero-titulo" translate="no" className="display text-[clamp(2.2rem,6.6vw,6rem)] uppercase">
              Air Jordan 1
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
