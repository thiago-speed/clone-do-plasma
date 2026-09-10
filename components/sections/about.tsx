"use client"

import { useTranslations } from "next-intl"
import { SectionShell } from "@/components/landing/section-shell"
import { MediaCard } from "@/components/landing/media-card"
import { StaggerWords } from "@/components/landing/stagger-words"
import { PillButton } from "@/components/landing/pill-button"
import { FadeIn } from "@/components/landing/fade-in"
import { siteConfig } from "@/config/site"

export function AboutSection({ id }: { id: string }) {
  const t = useTranslations("about")

  return (
    <SectionShell id={id}>
      <div className="grid grid-cols-1 items-start gap-10 min-[810px]:grid-cols-2 min-[810px]:gap-16">
        <MediaCard
          alt={t("mediaAlt")}
          playLabel={t("play")}
          sticky
          className="aspect-[4/3] min-[810px]:aspect-auto min-[810px]:min-h-[460px]"
        />
        <div className="flex min-h-[460px] flex-col justify-center gap-8 min-[810px]:py-8">
          <h2 className="text-balance text-4xl font-medium leading-[1.15] tracking-tight min-[1200px]:text-5xl">
            <StaggerWords text={t("headline")} />
          </h2>
          <FadeIn>
            <p className="max-w-md text-pretty leading-relaxed text-black/60">
              {t("description")}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <PillButton href={siteConfig.links.contact} tone="dark">
              {t("cta")}
            </PillButton>
          </FadeIn>
        </div>
      </div>
    </SectionShell>
  )
}
