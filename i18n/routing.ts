import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  // Todos os idiomas suportados pelo site.
  locales: ["pt", "en", "es"],

  // Idioma padrão (usado quando nenhum outro corresponde).
  defaultLocale: "pt",

  // "as-needed": o idioma padrão (pt) fica na raiz ("/"), os demais
  // recebem prefixo ("/en", "/es").
  localePrefix: "as-needed",
})

export type Locale = (typeof routing.locales)[number]
