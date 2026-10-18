import Link from "next/link";
import { FotoProvisoria } from "@/components/FotoProvisoria";
import { MarcasDeCanto } from "@/components/MarcasDeCanto";

// Posição de cada marcador sobre a vista lateral (em % da imagem). PROVISÓRIO: ajustar
// contra a foto oficial quando chegar (pendência no ESTADO).
const chamadas = [
  {
    peca: "Cano alto",
    texto: "Sobe acima do tornozelo. Lá em cima, na aba do tornozelo, mora o Wings.",
    posicao: "left-[34%] top-[16%]",
  },
  {
    peca: "Biqueira perfurada",
    texto: "A frente furada que você reconhece do outro lado da rua.",
    posicao: "left-[82%] top-[62%]",
  },
  {
    peca: "Couro em camadas",
    texto:
      "Sobreposições no bico, nos ilhós e no talão, costuradas por cima do cabedal. Cada camada é uma peça; cada peça pode ganhar uma cor.",
    posicao: "left-[16%] top-[58%]",
  },
];

function Marcador({ numero, className = "" }: { numero: number; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`display flex size-9 items-center justify-center bg-sola text-lg text-asfalto ${className}`}
    >
      {numero}
    </span>
  );
}

export function Forma() {
  return (
    <section aria-labelledby="forma-titulo" className="grade border-y border-borracha">
      <div className="moldura py-20 md:py-32">
        <h2 id="forma-titulo" className="display text-3xl md:text-5xl">
          Muda a cor. A forma fica.
        </h2>
        <p className="mt-5 max-w-[36rem] text-lg">No AJ1, a cor troca de lugar. As peças, não.</p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16">
          <figure>
            <div className="relative">
              <FotoProvisoria
                alt="Air Jordan 1 Chicago em vista lateral externa: cabedal branco, sobreposições vermelhas, Swoosh preto e solado vermelho."
                rotulo="vista lateral com chamadas"
                proporcao="aspect-[4/3]"
              />
              {chamadas.map((c, i) => (
                <Marcador key={c.peca} numero={i + 1} className={`absolute -translate-x-1/2 -translate-y-1/2 ${c.posicao}`} />
              ))}
              <MarcasDeCanto />
            </div>
            <figcaption className="cota mt-4">vista lateral · chamadas 1 a 3</figcaption>
          </figure>

          <ol className="grid gap-px self-center bg-borracha">
            {chamadas.map((c, i) => (
              <li key={c.peca} className="grid grid-cols-[2.25rem_1fr] gap-5 bg-asfalto py-6 first:pt-0 last:pb-0">
                <Marcador numero={i + 1} />
                <div>
                  <h3 className="display text-lg uppercase">{c.peca}</h3>
                  <p className="mt-2 text-base md:text-lg">{c.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <Link
          href="/chicago#vistas"
          className="largura-expandida mt-12 inline-flex min-h-14 items-center bg-sola px-5 text-lg font-extrabold uppercase text-asfalto hover:bg-couro"
        >
          Ver o Chicago
        </Link>
      </div>
    </section>
  );
}
