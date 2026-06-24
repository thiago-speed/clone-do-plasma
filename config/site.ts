/**
 * Configuração não-traduzível do site: links, assets e dados estruturais.
 * Centralizar aqui facilita a manutenção (um único lugar para trocar URLs).
 */
export const siteConfig = {
  /** Links/CTAs do site. Troque por URLs reais quando disponíveis. */
  links: {
    headerCta: "#",
    contact: "#",
    downloadIos: "#",
    getCard: "#",
    networkPrimary: "#",
    networkSecondary: "#",
    nav: "#",
    footer: "#",
  },
  /** Assets estáticos em /public. */
  assets: {
    heroVideo: "/hero.mp4",
    cardVideo: "/card-workflow.mp4",
    qrCode: "/qr-code.png",
  },
} as const

/** Códigos de país (ISO) usados nas faixas de bandeiras da seção de moedas. */
export const flagRows = {
  rowOne: ["TH", "VN", "MY", "ID", "PH", "SG", "PK", "IN", "JP", "AU", "US", "FI", "GR", "RO", "HU", "ZA"],
  rowTwo: ["BR", "AR", "CL", "PE", "CO", "VE", "EC", "MX", "GB", "IE", "FR", "DE", "ES", "PT", "IT", "NL"],
} as const

/** Gradientes decorativos da grade da seção de rede (paleta da marca). */
export const networkTiles = [
  "bg-gradient-to-br from-[#73c916] to-[#0093fc]",
  "bg-gradient-to-br from-[#0093fc] to-[#73c916]",
  "bg-gradient-to-br from-[#73c916] via-[#5bb70f] to-neutral-900",
  "bg-gradient-to-br from-[#0093fc] via-[#0077cc] to-neutral-900",
  "bg-gradient-to-br from-[#73c916]/80 to-[#0093fc]/50",
  "bg-gradient-to-br from-neutral-200 via-[#73c916]/40 to-[#0093fc]/50",
] as const
