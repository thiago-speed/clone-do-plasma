"use client"

import { useTranslations } from "next-intl"
import { SectionShell } from "@/components/landing/section-shell"
import { SectionHeader } from "@/components/landing/section-header"
import { TestimonialCard } from "@/components/landing/testimonial-card"
import { FadeIn } from "@/components/landing/fade-in"

type Item = { quote: string; name: string; role: string }

export function TestimonialsSection({ id }: { id: string }) {
  const t = useTranslations("testimonials")
  const items = t.raw("items") as Item[]

  return (
    <SectionShell id={id}>
      <FadeIn y={40}>
        <SectionHeader title={t("title")} description={t("description")} />
      </FadeIn>
      <div className="mt-12 grid grid-cols-1 gap-4 min-[810px]:grid-cols-3">
        {items.map((item, index) => (
          <TestimonialCard
            key={item.name}
            quote={item.quote}
            name={item.name}
            role={item.role}
            delay={index * 0.08}
          />
        ))}
      </div>
    </SectionShell>
  )
}
