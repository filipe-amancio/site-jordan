// Marcas de canto da prancha, em volta de uma imagem (o pai precisa de position: relative)
export function MarcasDeCanto() {
  return (
    <>
      <span aria-hidden="true" className="absolute -left-2 -top-2 size-4 border-l border-t border-couro" />
      <span aria-hidden="true" className="absolute -right-2 -top-2 size-4 border-r border-t border-couro" />
      <span aria-hidden="true" className="absolute -bottom-2 -left-2 size-4 border-b border-l border-couro" />
      <span aria-hidden="true" className="absolute -bottom-2 -right-2 size-4 border-b border-r border-couro" />
    </>
  );
}
