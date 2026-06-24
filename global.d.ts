import type messages from "./messages/pt.json"
import type { routing } from "./i18n/routing"

// Habilita autocomplete e checagem de tipos das chaves de tradução e dos
// idiomas suportados em todo o projeto (useTranslations, getTranslations, etc.).
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number]
    Messages: typeof messages
  }
}
