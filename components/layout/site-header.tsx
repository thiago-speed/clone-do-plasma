"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { SpeedLogo } from "@/components/layout/speed-logo"
import { LanguageSwitcher } from "@/components/layout/language-switcher"
import { Link } from "@/i18n/navigation"
import { siteConfig } from "@/config/site"

export function SiteHeader({ variant = "light" }: { variant?: "light" | "dark" }) {
  const t = useTranslations("nav")
  const navItems = t.raw("items") as string[]
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const getHeroEnd = () => {
      const hero = document.getElementById("hero")
      if (!hero) return 0
      return hero.offsetTop + hero.offsetHeight - window.innerHeight
    }

    const onScroll = () => {
      const heroEnd = getHeroEnd()
      const scrollY = window.scrollY

      // Hero sticky: o scroll só faz o scrubbing do vídeo, o layout fica fixo.
      // O efeito glass ativa quando o hero solta e a página realmente rola.
      setScrolled(scrollY >= heroEnd)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  // Mantém sempre as cores do estado sobre o vídeo (texto branco + glass escuro),
  // independentemente da seção sob a navbar.
  const onDark = variant === "dark"
  const textColor = onDark ? "text-white" : "text-foreground"

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500 ease-out ${
        scrolled
          ? onDark
            ? "border-b border-white/10 bg-white/10 shadow-lg shadow-black/5 backdrop-blur-2xl backdrop-saturate-150"
            : "border-b border-border/40 bg-background/55 shadow-lg shadow-black/5 backdrop-blur-2xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent shadow-none backdrop-blur-none backdrop-saturate-100"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 lg:px-12">
        <Link href="/" className={textColor} aria-label={t("home")}>
          <SpeedLogo />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={siteConfig.links.nav}
              className={`text-[15px] transition-opacity hover:opacity-60 ${textColor}`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher className={textColor} />
          <a
            href={siteConfig.links.headerCta}
            className="rounded-full bg-brand-green px-5 py-2.5 text-[15px] font-medium text-neutral-900 transition-transform hover:scale-[1.03]"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </header>
  )
}
