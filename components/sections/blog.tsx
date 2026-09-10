"use client"

import { useTranslations } from "next-intl"
import { SectionShell } from "@/components/landing/section-shell"
import { SectionHeader } from "@/components/landing/section-header"
import { BlogCard } from "@/components/landing/blog-card"
import { FadeIn } from "@/components/landing/fade-in"

type Item = { title: string; excerpt: string; date: string }

export function BlogSection({ id }: { id: string }) {
  const t = useTranslations("blog")
  const items = t.raw("items") as Item[]

  return (
    <SectionShell id={id}>
      <FadeIn y={40}>
        <SectionHeader title={t("title")} description={t("description")} />
      </FadeIn>
      <div className="mt-12 grid grid-cols-1 gap-8 min-[810px]:grid-cols-3">
        {items.map((item, index) => (
          <BlogCard
            key={item.title}
            title={item.title}
            excerpt={item.excerpt}
            date={item.date}
            delay={index * 0.08}
          />
        ))}
      </div>
    </SectionShell>
  )
}
