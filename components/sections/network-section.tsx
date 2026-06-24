import { useTranslations } from "next-intl"
import { networkTiles } from "@/config/site"
import { siteConfig } from "@/config/site"

export function NetworkSection() {
  const t = useTranslations("network")

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-section-gray">
          <div className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
            <div className="flex flex-col justify-center">
              <p className="text-sm text-muted-foreground">{t("eyebrow")}</p>
              <h2 className="mt-5 text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
                {t("title")}
              </h2>
              <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
                {t("description")}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href={siteConfig.links.networkPrimary}
                  className="inline-flex rounded-full bg-brand-green px-6 py-3 text-[15px] font-medium text-neutral-900 transition-transform hover:scale-[1.03]"
                >
                  {t("primaryCta")}
                </a>
                <a
                  href={siteConfig.links.networkSecondary}
                  className="text-[15px] font-medium underline-offset-4 transition-colors hover:text-brand-blue hover:underline"
                >
                  {t("secondaryCta")}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {networkTiles.map((tile, i) => (
                <div
                  key={i}
                  className={`aspect-[4/3] rounded-2xl ${tile}`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
