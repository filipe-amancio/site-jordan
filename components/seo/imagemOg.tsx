import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Imagem de compartilhamento (1200×630) na identidade da direção B: asfalto, grade de 80px,
// título em Archivo expandida 800 e o carimbo em vermelho. O Satori ignora o eixo wdth, por
// isso a fonte é a instância estática (assets/, licença OFL em assets/Archivo-OFL.txt).
export const tamanhoOg = { width: 1200, height: 630 };

const fonte = readFile(join(process.cwd(), "assets/Archivo_Expanded-ExtraBold.ttf"));

export async function imagemOg(linhas: string[]) {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 64,
          backgroundColor: "#16171a",
          backgroundImage:
            "linear-gradient(#2a2c31 1px, transparent 1px), linear-gradient(90deg, #2a2c31 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          color: "#f2f2f0",
          fontFamily: "Archivo",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", fontSize: 104, lineHeight: 0.95, letterSpacing: -1 }}>
          {linhas.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div
            style={{
              display: "flex",
              backgroundColor: "#e0283f",
              color: "#16171a",
              fontSize: 34,
              padding: "22px 30px",
              border: "2px solid #f2f2f0",
            }}
          >
            Projeto conceitual · BrandForge
          </div>
        </div>
      </div>
    ),
    {
      ...tamanhoOg,
      fonts: [{ name: "Archivo", data: await fonte, weight: 800, style: "normal" }],
    },
  );
}
