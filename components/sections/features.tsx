"use client"

import { useTranslations } from "next-intl"
import { SectionShell } from "@/components/landing/section-shell"
import { SectionHeader } from "@/components/landing/section-header"
import { FeatureCard } from "@/components/landing/feature-card"
import { FadeIn } from "@/components/landing/fade-in"

type FeatureItem = { stat: string; title: string; description: string }

export function FeaturesSection({ id }: { id: string }) {
  const t = useTranslations("features")
  const items = t.raw("items") as FeatureItem[]

  return (
    <SectionShell id={id}>
      <FadeIn y={40}>
        <SectionHeader title={t("title")} description={t("description")} />
      </FadeIn>
      <div className="mt-12 grid grid-cols-1 gap-4 min-[810px]:grid-cols-3">
        {items.map((item, index) => (
          <FeatureCard
            key={item.title}
            stat={item.stat}
            title={item.title}
            description={item.description}
            delay={index * 0.08}
          />
        ))}
      </div>
    </SectionShell>
  )
}
