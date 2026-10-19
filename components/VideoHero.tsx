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
  // Começa como "tocando" porque o autoPlay já roda antes da hidratação (o rótulo não pisca);
  // movimento reduzido e autoplay bloqueado corrigem pelo onPause e pelo catch do play()
  const [tocando, setTocando] = useState(true);

  // O vídeo começa sozinho ao entrar no site (autoPlay nativo, não espera o JS). Só para se o
  // sistema pedir movimento reduzido.
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      // pause() num vídeo que ainda não começou não dispara o evento pause: sincroniza o rótulo
      const quadro = requestAnimationFrame(() => setTocando(!video.paused));
      return () => cancelAnimationFrame(quadro);
    }
    if (video.paused) video.play().catch(() => setTocando(false));
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
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={rotulo}
        onPlay={() => setTocando(true)}
        onPause={() => setTocando(false)}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={alternar}
        className="cota absolute bottom-0 right-0 flex min-h-11 items-center border-l border-t border-cota/60 bg-asfalto px-3 text-base text-couro underline-offset-4 hover:underline"
      >
        {tocando ? "Pausar vídeo" : "Tocar vídeo"}
      </button>
    </div>
  );
}
