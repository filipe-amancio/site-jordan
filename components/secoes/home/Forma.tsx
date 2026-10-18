import Link from "next/link";
import { FotoProvisoria } from "@/components/FotoProvisoria";

const chamadas = [
  { peca: "Cano alto", texto: "Sobe acima do tornozelo. Lá em cima, na aba do tornozelo, mora o Wings." },
  { peca: "Biqueira perfurada", texto: "A frente furada que você reconhece do outro lado da rua." },
  {
    peca: "Couro em camadas",
    texto:
      "Sobreposições no bico, nos ilhós e no talão, costuradas por cima do cabedal. Cada camada é uma peça; cada peça pode ganhar uma cor.",
  },
];

export function Forma() {
  return (
    <section aria-labelledby="forma-titulo" className="grade border-y border-borracha">
      <div className="moldura py-20 md:py-32">
        <h2 id="forma-titulo" className="display text-3xl md:text-5xl">
          Muda a cor. A forma fica.
        </h2>
        <p className="mt-5 max-w-[36rem] text-lg">No AJ1, a cor troca de lugar. As peças, não.</p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <FotoProvisoria
            alt="Air Jordan 1 Chicago em vista lateral externa: cabedal branco, sobreposições vermelhas, Swoosh preto e solado vermelho."
            rotulo="vista lateral com chamadas"
            proporcao="aspect-[4/3]"
          />
          <ol className="grid content-start self-start gap-px bg-borracha">
            {chamadas.map((c, i) => (
              <li key={c.peca} className="grid grid-cols-[3rem_1fr] gap-4 bg-asfalto py-5">
                <span className="display text-3xl text-sola">{i + 1}</span>
                <div>
                  <h3 className="display text-lg uppercase">{c.peca}</h3>
                  <p className="mt-2 text-base">{c.texto}</p>
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
