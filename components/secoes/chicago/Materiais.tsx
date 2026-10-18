const materiais = [
  {
    nome: "Couro",
    onde: "cabedal e sobreposições",
    frase: "Onde mora a cor. Cada camada vermelha é couro costurado por cima do branco.",
  },
  {
    nome: "Nylon",
    onde: "lingueta",
    frase: "A lingueta é de nylon. No Lost & Found de 2022, até o amarelado do tempo foi reproduzido.",
  },
  { nome: "Borracha", onde: "solado", frase: "O vermelho que encosta no chão." },
];

export function Materiais() {
  return (
    <section aria-labelledby="materiais-titulo" className="moldura py-20 md:py-32">
      <h2 id="materiais-titulo" className="display text-3xl md:text-5xl">
        Couro, nylon, borracha. Só.
      </h2>
      {/* Grade assimétrica: couro largo, nylon estreito, borracha em plano vermelho */}
      <ul className="mt-12 grid gap-px bg-borracha md:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr_1.5fr]">
        {materiais.map((m, i) => {
          const plano = i === materiais.length - 1;
          return (
            <li
              key={m.nome}
              className={`flex min-h-64 flex-col justify-between gap-8 p-6 md:p-8 ${
                plano ? "bg-sola text-asfalto md:col-span-2 lg:col-span-1" : "bg-asfalto"
              }`}
            >
              <div>
                <h3 className="display text-3xl md:text-4xl">{m.nome}</h3>
                <p className={`cota mt-2 text-base ${plano ? "text-asfalto" : ""}`}>{m.onde}</p>
              </div>
              <p className="max-w-[28rem] text-lg">{m.frase}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
