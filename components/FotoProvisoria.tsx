// PROVISÓRIO: moldura no lugar da foto oficial (pendência no ESTADO). Sai quando as fotos
// chegarem e vira next/image com o mesmo alt. O alt já é o aprovado no COPY.md.
type Props = {
  alt: string;
  rotulo: string;
  proporcao?: string; // classe aspect-*
  className?: string;
};

export function FotoProvisoria({ alt, rotulo, proporcao = "aspect-[16/9]", className = "" }: Props) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex w-full items-center justify-center border border-cota/60 ${proporcao} ${className}`}
    >
      <span aria-hidden="true" className="cota border border-dashed border-cota px-3 py-2">
        foto oficial: {rotulo}
      </span>
    </div>
  );
}
