import Link from "next/link";
import { FotoProvisoria } from "@/components/FotoProvisoria";
import { site } from "@/lib/site";

// Amostras das cores de cada colorway (só ilustração da cota; o texto continua sendo a cota)
const amostra: Record<string, string> = {
  branco: "bg-couro",
  vermelho: "bg-sola",
  preto: "bg-black",
  "azul royal": "bg-[#1f4fb4]",
};

type Props = {
  semChicago?: boolean;
};

export function CardsCores({ semChicago = false }: Props) {
  const cores = semChicago ? site.cores.filter((c) => c.rota !== "/chicago") : site.cores;

  return (
    <ul
      className={`grid gap-px border border-borracha bg-borracha sm:grid-cols-2 ${
        semChicago ? "lg:grid-cols-3" : "lg:grid-cols-[1.4fr_1fr]"
      }`}
    >
      {cores.map((cor) => {
        const ativa = Boolean(cor.rota);
        // Na home: Chicago ocupa a coluna da esquerda; as outras empilham à direita, em linha
        const emLinha = !ativa && !semChicago;
        return (
          <li
            key={cor.nome}
            className={`flex flex-col gap-5 bg-asfalto p-4 md:p-6 ${ativa && !semChicago ? "lg:row-span-3" : ""} ${
              emLinha ? "grid grid-cols-[6rem_1fr] items-center gap-x-4 gap-y-3 lg:grid-cols-[9rem_1fr] lg:gap-x-6" : ""
            }`}
          >
            <FotoProvisoria
              alt={
                ativa
                  ? "Air Jordan 1 Chicago em vista lateral externa: cabedal branco, sobreposições vermelhas, Swoosh preto e solado vermelho."
                  : `Silhueta do Air Jordan 1, cor ${cor.nome}. Página em breve.`
              }
              rotulo={ativa ? "vista lateral" : "silhueta"}
              proporcao="aspect-[4/3]"
              className={`${ativa ? "" : "border-dashed opacity-60"} ${emLinha ? "row-span-2" : ""}`}
            />
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className={`display ${ativa ? "text-2xl md:text-3xl" : "text-xl"}`}>{cor.nome}</h3>
                <p className="cota mt-1 text-base">{cor.cotaDeCores}</p>
              </div>
              <span aria-hidden="true" className="mt-1 flex shrink-0 border border-cota/60">
                {cor.cotaDeCores.split(", ").map((c) => (
                  <span key={c} className={`size-4 ${amostra[c] ?? "bg-borracha"}`} />
                ))}
              </span>
            </div>
            {ativa ? (
              <Link
                href={cor.rota!}
                className="largura-expandida mt-auto flex min-h-14 items-center bg-sola px-4 text-lg font-extrabold uppercase text-asfalto hover:bg-couro"
              >
                Ver o Chicago
              </Link>
            ) : (
              <p
                className={`mt-auto flex min-h-14 items-center border border-dashed border-borracha px-4 text-cota ${
                  emLinha ? "mt-0 min-h-11 px-3" : ""
                }`}
              >
                Página em breve
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
