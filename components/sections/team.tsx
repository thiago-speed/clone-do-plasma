"use client"

import { useTranslations } from "next-intl"
import { SectionShell } from "@/components/landing/section-shell"
import { SectionHeader } from "@/components/landing/section-header"
import { TeamCard } from "@/components/landing/team-card"
import { FadeIn } from "@/components/landing/fade-in"

type Member = { name: string; role: string }

export function TeamSection({ id }: { id: string }) {
  const t = useTranslations("team")
  const items = t.raw("items") as Member[]

  return (
    <SectionShell id={id}>
      <FadeIn y={40}>
        <SectionHeader title={t("title")} description={t("description")} />
      </FadeIn>
      <div className="mt-12 grid grid-cols-2 gap-4 min-[810px]:grid-cols-4 min-[810px]:gap-6">
        {items.map((item, index) => (
          <TeamCard
            key={item.name}
            name={item.name}
            role={item.role}
            delay={index * 0.06}
          />
        ))}
      </div>
    </SectionShell>
  )
}
