"use client";

import { useEffect, useRef, useState } from "react";

// Vídeo do hero: mudo, em loop, com poster (aparece sem JS e enquanto carrega).
// Movimento reduzido: não toca, fica no poster. Botão de pausar porque passa de 5 s (WCAG 2.2.2).
type Props = {
  src: string;
  poster: string;
  rotulo: string; // descrição para leitor de tela
};

export function VideoHero({ src, poster, rotulo }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [tocando, setTocando] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduzido.matches) return;
    video.play().catch(() => setTocando(false));
  }, []);

  function alternar() {
    const video = ref.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => setTocando(false));
    else video.pause();
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden border border-cota/60 bg-black">
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={rotulo}
        onPlay={() => setTocando(true)}
        onPause={() => setTocando(false)}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={alternar}
        className="cota absolute bottom-0 right-0 flex min-h-11 items-center border-l border-t border-cota/60 bg-asfalto px-3 text-base text-couro hover:text-sola"
      >
        {tocando ? "Pausar vídeo" : "Tocar vídeo"}
      </button>
    </div>
  );
}
