"use client"

import { useTranslations } from "next-intl"
import { SectionHeader } from "@/components/landing/section-header"
import { ProjectCard } from "@/components/landing/project-card"
import { LogoMarquee } from "@/components/landing/logo-marquee"
import { FadeIn } from "@/components/landing/fade-in"

type ProjectItem = { title: string; tag: string }

export function ProjectsSection({ id }: { id: string }) {
  const t = useTranslations("projects")
  const items = t.raw("items") as ProjectItem[]
  const marquee = t.raw("marquee") as string[]

  return (
    <section
      id={id}
      className="scroll-mt-20 px-4 py-16 min-[810px]:px-6 min-[810px]:py-[60px] min-[1200px]:px-6 min-[1200px]:py-0"
    >
      <div className="mx-auto grid w-full max-w-[1480px] gap-10 min-[1200px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] min-[1200px]:items-start min-[1200px]:gap-16">
        <div className="min-[1200px]:sticky min-[1200px]:top-2.5 min-[1200px]:flex min-[1200px]:h-screen min-[1200px]:flex-col min-[1200px]:justify-center">
          <FadeIn y={20}>
            <SectionHeader title={t("title")} description={t("description")} />
          </FadeIn>
          <LogoMarquee labels={marquee} className="mt-10" />
        </div>
        <div className="flex flex-col gap-10 min-[1200px]:py-[100px]">
          {items.map((item, index) => (
            <ProjectCard
              key={item.title}
              title={item.title}
              tag={item.tag}
              delay={index * 0.06}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
