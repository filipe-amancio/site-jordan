// Cartela de amostras: cada material ganha uma amostra desenhada em CSS (sem foto), como as
// cartelas de modelagem. O texto fica sempre sobre o asfalto (contraste AA); o vermelho é só plano.
const materiais = [
  {
    nome: "Couro",
    onde: "cabedal e sobreposições",
    frase: "Onde mora a cor. Cada camada vermelha é couro costurado por cima do branco.",
    // branco couro com uma sobreposição vermelha e a linha de costura por cima
    amostra: (
      <div className="relative h-full bg-couro">
        <div className="absolute inset-y-0 right-0 w-[38%] bg-sola" />
        <div className="absolute inset-y-3 right-[calc(38%-0.75rem)] border-l-2 border-dashed border-asfalto/70" />
      </div>
    ),
  },
  {
    nome: "Nylon",
    onde: "lingueta",
    frase: "A lingueta é de nylon. No Lost & Found de 2022, até o amarelado do tempo foi reproduzido.",
    // trama de tecido
    amostra: (
      <div className="h-full bg-borracha bg-[repeating-linear-gradient(45deg,var(--color-cota)_0_1px,transparent_1px_7px),repeating-linear-gradient(-45deg,var(--color-cota)_0_1px,transparent_1px_7px)]" />
    ),
  },
  {
    nome: "Borracha",
    onde: "solado",
    frase: "O vermelho que encosta no chão.",
    // plano vermelho com o desenho de aderência do solado
    amostra: (
      <div className="h-full bg-sola bg-[radial-gradient(circle,var(--color-asfalto)_0_2px,transparent_2.5px)] bg-[length:14px_14px]" />
    ),
  },
];

export function Materiais() {
  return (
    <section aria-labelledby="materiais-titulo" className="moldura py-20 md:py-32">
      <h2 id="materiais-titulo" className="display text-3xl md:text-5xl">
        Couro, nylon, borracha. Só.
      </h2>
      {/* Grade assimétrica: couro largo, nylon estreito, borracha médio */}
      <ul className="mt-12 grid gap-px border border-borracha bg-borracha md:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr_1.5fr]">
        {materiais.map((m, i) => (
          <li
            key={m.nome}
            className={`flex flex-col gap-6 bg-asfalto p-4 md:p-6 ${i === materiais.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
            <div aria-hidden="true" className="h-40 border border-cota/60 md:h-56">
              {m.amostra}
            </div>
            <div>
              <h3 className="display text-3xl md:text-4xl">{m.nome}</h3>
              <p className="cota mt-2 text-base">{m.onde}</p>
            </div>
            <p className="mt-auto max-w-[28rem] text-lg">{m.frase}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
