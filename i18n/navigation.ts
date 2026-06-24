import { createNavigation } from "next-intl/navigation"
import { routing } from "./routing"

// APIs de navegação cientes do idioma. Use estes em vez dos equivalentes
// do next/navigation para preservar o locale atual nas rotas.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
