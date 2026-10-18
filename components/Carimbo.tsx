import type { ReactNode } from "react";

// Carimbo da prancha: bloco de informação que também leva à ação (navegação ou compra).
type Props = {
  linhas: { rotulo: string; valor: string }[];
  children: ReactNode; // o CTA
  className?: string;
};

export function Carimbo({ linhas, children, className = "" }: Props) {
  return (
    <div className={`border border-couro bg-asfalto ${className}`}>
      <dl>
        {linhas.map((l) => (
          <div key={l.rotulo} className="grid grid-cols-[7rem_1fr] border-b border-borracha">
            <dt className="cota border-r border-borracha px-3 py-3">{l.rotulo}</dt>
            <dd className="px-3 py-3 text-base">{l.valor}</dd>
          </div>
        ))}
      </dl>
      {children}
    </div>
  );
}

export const classeBotaoCarimbo =
  "largura-expandida flex min-h-14 w-full items-center px-3 text-lg font-extrabold uppercase bg-sola text-asfalto hover:bg-couro transition-colors";
