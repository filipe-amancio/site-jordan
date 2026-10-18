import Link from "next/link";
import { FotoProvisoria } from "@/components/FotoProvisoria";
import { site } from "@/lib/site";

type Props = {
  semChicago?: boolean;
};

export function CardsCores({ semChicago = false }: Props) {
  const cores = semChicago ? site.cores.filter((c) => c.rota !== "/chicago") : site.cores;

  return (
    <ul className={`grid gap-px bg-borracha sm:grid-cols-2 ${semChicago ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
      {cores.map((cor) => (
        <li key={cor.nome} className="flex flex-col gap-4 bg-asfalto p-4 md:p-6">
          <FotoProvisoria
            alt={
              cor.rota
                ? "Air Jordan 1 Chicago em vista lateral externa: cabedal branco, sobreposições vermelhas, Swoosh preto e solado vermelho."
                : `Silhueta do Air Jordan 1, cor ${cor.nome}. Página em breve.`
            }
            rotulo={cor.rota ? "vista lateral" : "silhueta"}
            proporcao="aspect-[4/3]"
          />
          <div>
            <h3 className="display text-xl">{cor.nome}</h3>
            <p className="cota mt-1">{cor.cotaDeCores}</p>
          </div>
          {cor.rota ? (
            <Link
              href={cor.rota}
              className="largura-expandida mt-auto flex min-h-12 items-center bg-sola px-3 font-extrabold uppercase text-asfalto hover:bg-couro"
            >
              Ver o Chicago
            </Link>
          ) : (
            <p className="mt-auto flex min-h-12 items-center border border-borracha px-3 text-cota">
              Página em breve
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
