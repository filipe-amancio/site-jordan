// Régua de marcos, desenhada como régua técnica: marcações finas a cada 16px e um traço
// maior em cada marco. Horizontal no desktop (uma coluna por marco), vertical no celular.
type Props = {
  marcos: { marca: string; texto: string }[];
};

const colunas: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

export function Regua({ marcos }: Props) {
  return (
    <div className="relative">
      {/* Marcações finas: na lateral no celular, no topo no desktop */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-2 bg-[repeating-linear-gradient(180deg,var(--color-cota)_0_1px,transparent_1px_16px)] lg:inset-x-0 lg:bottom-auto lg:top-0 lg:h-2 lg:w-auto lg:bg-[repeating-linear-gradient(90deg,var(--color-cota)_0_1px,transparent_1px_16px)]"
      />
      <ol
        className={`grid border-l border-couro lg:border-l-0 lg:border-t ${colunas[marcos.length] ?? "lg:grid-cols-4"}`}
      >
        {marcos.map((m, i) => (
          <li
            key={m.marca}
            className="relative pb-10 pl-8 pt-1 last:pb-0 lg:border-l lg:border-couro lg:pb-0 lg:pl-5 lg:pr-6 lg:pt-8"
          >
            {/* Traço maior do marco */}
            <span aria-hidden="true" className="absolute left-0 top-3 h-px w-5 bg-couro lg:top-0 lg:h-5 lg:w-px" />
            <span className="cota block">marco {String(i + 1).padStart(2, "0")}</span>
            <span className="display mt-1 block text-4xl text-sola lg:text-[clamp(2rem,3.2vw,3.052rem)]">{m.marca}</span>
            <p className="mt-4 max-w-[30rem] text-base md:text-lg lg:text-base">{m.texto}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
