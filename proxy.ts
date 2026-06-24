import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

// No Next.js 16 o middleware do next-intl vive em proxy.ts (antes middleware.ts).
export default createMiddleware(routing)

export const config = {
  // Intercepta tudo, exceto /api, /trpc, internos do Next/Vercel e arquivos
  // com extensão (ex.: favicon.ico, hero.mp4, imagens).
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
}
