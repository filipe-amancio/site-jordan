// Régua de marcos: cada item é uma marca na régua, com o rótulo grande em vermelho.
type Props = {
  marcos: { marca: string; texto: string }[];
};

export function Regua({ marcos }: Props) {
  return (
    <ol className="border-t border-couro">
      {marcos.map((m) => (
        <li
          key={m.marca}
          className="grid gap-2 border-b border-borracha py-6 md:grid-cols-[minmax(10rem,16rem)_1fr] md:gap-10"
        >
          <span className="display text-4xl text-sola md:text-5xl">{m.marca}</span>
          <p className="max-w-[42rem] text-lg md:pt-2">{m.texto}</p>
        </li>
      ))}
    </ol>
  );
}
