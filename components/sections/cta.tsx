"use client"

import { useTranslations } from "next-intl"
import { FadeIn } from "@/components/landing/fade-in"
import { PillButton } from "@/components/landing/pill-button"
import { siteConfig } from "@/config/site"

export function CtaSection({ id }: { id: string }) {
  const t = useTranslations("cta")

  return (
    <section
      id={id}
      className="scroll-mt-20 px-4 py-10 min-[810px]:px-6 min-[1200px]:px-6"
    >
      <div className="mx-auto flex min-h-[95vh] w-full max-w-[1480px] items-center overflow-hidden rounded-[24px] bg-black px-6 py-20 text-white min-[810px]:px-12 min-[1200px]:px-20">
        <FadeIn y={40} className="flex max-w-3xl flex-col gap-8">
          <h2 className="text-balance text-4xl font-medium leading-[1.1] tracking-tight min-[810px]:text-6xl min-[1200px]:text-7xl">
            {t("title")}
          </h2>
          <p className="max-w-lg text-pretty text-white/65">{t("description")}</p>
          <div className="flex flex-wrap gap-3">
            <PillButton href={siteConfig.links.contact} tone="light">
              {t("primary")}
            </PillButton>
            <PillButton href="#services" tone="accent">
              {t("secondary")}
            </PillButton>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
