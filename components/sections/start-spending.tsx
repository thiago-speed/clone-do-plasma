import { Apple } from "lucide-react"
import { useTranslations } from "next-intl"
import { SpeedLogo } from "@/components/layout/speed-logo"
import { siteConfig } from "@/config/site"

export function StartSpending() {
  const t = useTranslations("startSpending")

  return (
    <section className="bg-background py-24 lg:py-36">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 text-center lg:px-8">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <SpeedLogo textClassName="text-lg" className="opacity-70" />
          <span className="text-lg">{t("one")}</span>
        </div>
        <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          {t("title")}
        </h2>
        <a
          href={siteConfig.links.downloadIos}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-[15px] font-medium text-neutral-900 transition-transform hover:scale-[1.03]"
        >
          <Apple className="h-5 w-5" />
          {t("cta")}
        </a>
      </div>
    </section>
  )
}
