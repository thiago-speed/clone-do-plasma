"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { useTranslations } from "next-intl"
import { useLenis } from "lenis/react"
import { SpeedLogo } from "@/components/layout/speed-logo"
import { LanguageSwitcher } from "@/components/layout/language-switcher"
import { Link } from "@/i18n/navigation"
import { SmoothAnchor } from "@/components/landing/smooth-anchor"
import { PillButton } from "@/components/landing/pill-button"
import { siteConfig } from "@/config/site"

type NavItem = { label: string; href: string }

export function SiteHeader() {
  const t = useTranslations("nav")
  const items = t.raw("items") as NavItem[]
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useLenis((lenis) => {
    const next = lenis.scroll > window.innerHeight * 0.7
    setScrolled((prev) => (prev === next ? prev : next))
  })

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > window.innerHeight * 0.7
      setScrolled((prev) => (prev === next ? prev : next))
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const onDark = !scrolled

  return (
    <header
      className="site-header fixed inset-x-0 top-0 z-50 border-b text-white"
    >
      <div className="mx-auto flex h-20 max-w-[1480px] items-center justify-between px-4 min-[810px]:px-6 min-[1200px]:px-6">
        <Link href="/" className="text-current" aria-label={t("home")}>
          <SpeedLogo textClassName="text-current" />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 min-[810px]:flex">
          {items.map((item) => (
            <SmoothAnchor
              key={item.href}
              href={item.href}
              className="text-[15px] text-current transition-opacity hover:opacity-60"
            >
              {item.label}
            </SmoothAnchor>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="block text-current" />
          <PillButton
            href={siteConfig.links.headerCta}
            tone={onDark ? "light" : "dark"}
            className="hidden min-[810px]:inline-flex"
          >
            {t("cta")}
          </PillButton>
          <button
            type="button"
            className="rounded-full p-2 text-current min-[810px]:hidden"
            aria-label={menuOpen ? t("close") : t("menu")}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="min-[810px]:hidden">
          <div className="flex flex-col gap-6 bg-white px-6 py-8 text-black">
            {items.map((item) => (
              <SmoothAnchor
                key={item.href}
                href={item.href}
                className="text-lg"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </SmoothAnchor>
            ))}
            <PillButton
              href={siteConfig.links.headerCta}
              tone="dark"
              onClick={() => setMenuOpen(false)}
            >
              {t("cta")}
            </PillButton>
          </div>
        </div>
      ) : null}
    </header>
  )
}
