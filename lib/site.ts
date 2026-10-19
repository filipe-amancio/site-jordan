// Fonte única dos dados do negócio. Alimenta metadata, JSON-LD, sitemap e robots.
// Preenchido na fase 6 (construção) a partir de projeto/BRIEF.md. Nunca invente dados:
// campo sem informação real fica vazio e o JSON-LD omite o que estiver vazio.
//
// Este site é um projeto conceitual da BrandForge sobre o Air Jordan 1 (BRIEF §1). Não há negócio
// local: os campos de endereço, telefone e horário ficam vazios de propósito.

export type Endereco = {
  rua: string; // "Rua Exemplo, 123"
  bairro: string;
  cidade: string;
  uf: string; // "DF"
  cep: string; // "70000-000"
};

export type Negocio = {
  // Subtipo mais preciso de schema.org quando existir: "Dentist", "BarberOrHairSalon", "Attorney"...
  tipoSchema: string;
  telefone: string; // formato internacional: "+55-61-90000-0000"
  whatsapp: string; // só dígitos com DDI: "5561900000000"
  email: string;
  endereco: Endereco | null; // null se o negócio não atende em endereço físico
  horario: string[]; // formato schema.org: ["Mo-Fr 09:00-19:00", "Sa 09:00-14:00"]
  redes: string[]; // URLs completas dos perfis oficiais
  registroProfissional: string; // "CRO-DF 12345", se o nicho exigir
};

export type Cor = {
  nome: string;
  cotaDeCores: string;
  rota: string | null; // null = "Página em breve"
};

export type Fonte = {
  veiculo: string;
  url: string;
};

export type Site = {
  nome: string;
  descricao: string; // até ~155 caracteres; vira a meta description padrão
  paginas: string[]; // rotas públicas e indexáveis; o sitemap é gerado a partir desta lista
  negocio: Negocio;
  navegacao: { rotulo: string; href: string }[];
  cores: Cor[];
  // Contato da BrandForge para "Falar com a BrandForge" (rodapé e modal). Pendência no ESTADO.
  contatoBrandForge: string;
  tamanhos: number[]; // seletor do modal de compra: só visual (pendência no ESTADO)
  fontes: Fonte[]; // "Créditos e fontes" do rodapé (COPY.md, "Fontes dos fatos")
};

export const site: Site = {
  nome: "Air Jordan 1 | Projeto conceitual BrandForge",
  descricao:
    "O Air Jordan 1 em português: o legado de 1985, a forma peça por peça e as cores da linha. Projeto conceitual, sem vínculo com a Nike.",
  paginas: ["/", "/chicago"],
  negocio: {
    tipoSchema: "WebSite",
    telefone: "",
    whatsapp: "",
    email: "",
    endereco: null,
    horario: [],
    redes: [],
    registroProfissional: "",
  },
  navegacao: [
    { rotulo: "A linha", href: "/" },
    { rotulo: "Chicago", href: "/chicago" },
    { rotulo: "Cores", href: "/#cores" },
  ],
  cores: [
    { nome: "Chicago", cotaDeCores: "branco, vermelho, preto", rota: "/chicago" },
    { nome: "Bred", cotaDeCores: "preto, vermelho", rota: null },
    { nome: "Royal", cotaDeCores: "preto, azul royal", rota: null },
    { nome: "Black Toe", cotaDeCores: "branco, preto, vermelho", rota: null },
  ],
  contatoBrandForge: "",
  tamanhos: [37, 38, 39, 40, 41, 42, 43, 44],
  fontes: [
    { veiculo: "Laced", url: "https://blog.laced.com/a-brief-history-of-air-jordans-chicago-colourway" },
    { veiculo: "Crep Protect", url: "https://crepprotect.com/blogs/crepdaily/history-of-the-air-jordan-1-high-og-chicago" },
    { veiculo: "Sneaker Freaker", url: "https://sneakerfreaker.com/news/peter-moore-nike-air-jordan-adidas-designer-passed-away" },
    { veiculo: "Sneaker Freaker", url: "https://sneakerfreaker.com/features/setting-straight-the-story-of-the-nike-air-ship" },
    { veiculo: "Complex", url: "https://www.complex.com/sneakers/a/brendan-dunne/peter-moore-air-jordan-1" },
    { veiculo: "Complex", url: "https://www.complex.com/sneakers/a/marvin-barias/the-true-story-behind-the-banned-air-jordan" },
    { veiculo: "SoleSavy", url: "https://news.solesavy.com/the-history-of-the-air-jordan-wings-logo" },
    { veiculo: "Sotheby's", url: "https://www.sothebys.com/en/buy/_1994-nike-air-jordan-1-chicago-e2d6" },
    { veiculo: "Sneaker News", url: "https://sneakernews.com/2015/05/28/four-generations-of-the-air-jordan-1-chicago" },
    { veiculo: "StockX", url: "https://stockx.com/news/fr-fr/air-jordan-1-lost-found-lheritage-de-lair-jordan-1-chicago-fr-fr" },
    { veiculo: "StockX", url: "https://stockx.com/news/what-are-banned-jordans" },
  ],
};

// Base do Open Graph. O merge do metadata é raso: página que define openGraph substitui o do
// layout inteiro, então toda página espalha esta base para não perder siteName, locale e type.
export const ogBase = {
  type: "website",
  locale: "pt_BR",
  siteName: site.nome,
} as const;

// URL canônica do site: variável explícita, depois o domínio de produção da Vercel, depois localhost.
export function urlDoSite(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

// Nada é indexado até o lançamento (fase 9), quando SITE_INDEXAVEL=true é definida no ambiente de
// produção da Vercel. Assim o endereço provisório (projeto.vercel.app) enviado ao cliente na fase 8,
// os previews e os builds locais nunca aparecem no Google antes da hora.
export function siteIndexavel(): boolean {
  return process.env.SITE_INDEXAVEL === "true";
}
