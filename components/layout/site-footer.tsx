import Image from "next/image"
import { Globe } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { SpeedLogo } from "@/components/layout/speed-logo"
import { siteConfig } from "@/config/site"

type FooterColumn = { title: string; links: string[] }

export function SiteFooter() {
  const t = useTranslations("footer")
  const tLangNames = useTranslations("languageSwitcher.names")
  const locale = useLocale()

  const columns = t.raw("columns") as FooterColumn[]
  const disclaimers = t.raw("disclaimers") as string[]
  const bottomLinks = t.raw("bottomLinks") as string[]

  return (
    <footer className="bg-neutral-950 text-neutral-300">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <SpeedLogo textClassName="text-xl text-white" className="text-white" />
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm text-neutral-500">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href={siteConfig.links.footer}
                      className="text-[15px] text-neutral-200 transition-colors hover:text-brand-blue"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[200px_1fr]">
            <div className="flex flex-col items-start gap-3">
              <div className="rounded-lg bg-white p-1.5">
                <Image
                  src={siteConfig.assets.qrCode}
                  alt={t("qrAlt")}
                  width={96}
                  height={96}
                  className="rounded"
                />
              </div>
              <span className="text-xs text-neutral-500">{t("androidComingSoon")}</span>
            </div>

            <ol className="space-y-3 text-xs leading-relaxed text-neutral-500">
              {disclaimers.map((d, i) => (
                <li key={i}>
                  {i + 1}. {d}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>{t("copyright")}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {bottomLinks.map((link) => (
              <a
                key={link}
                href={siteConfig.links.footer}
                className="transition-colors hover:text-brand-blue"
              >
                {link}
              </a>
            ))}
            <span className="flex items-center gap-1.5">
              <Globe className="h-4 w-4" strokeWidth={1.5} /> {tLangNames(locale)}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
