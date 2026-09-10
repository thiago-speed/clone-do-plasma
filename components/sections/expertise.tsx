"use client"

import { Plus } from "lucide-react"
import { useTranslations } from "next-intl"
import { SectionShell } from "@/components/landing/section-shell"
import { SectionHeader } from "@/components/landing/section-header"
import { FadeIn } from "@/components/landing/fade-in"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  useAccordionItem,
} from "@/components/landing/accordion"
import { StepMedia } from "@/components/landing/step-media"
import { PillButton } from "@/components/landing/pill-button"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"

type Step = {
  number: string
  title: string
  tagline: string
  stat: string
  statLabel: string
  body: string
}

function ExpertiseStep({
  step,
  index,
  cta,
  mediaAlt,
}: {
  step: Step
  index: number
  cta: string
  mediaAlt: string
}) {
  const { open } = useAccordionItem(index)

  return (
    <AccordionItem
      index={index}
      className="border-t border-white/10 first:border-t-0"
    >
      <AccordionTrigger
        index={index}
        className="flex flex-col gap-4 py-6 min-[810px]:flex-row min-[810px]:items-start min-[810px]:gap-[60px]"
      >
        <div className="flex w-full items-center gap-4 min-[810px]:w-[34%]">
          <span className="text-sm tabular-nums text-white/50">{step.number}</span>
          <StepMedia
            alt={mediaAlt}
            className="relative h-[180px] w-full shrink-0 min-[810px]:h-[88px] min-[810px]:w-[140px]"
          />
        </div>

        <div className="flex min-w-0 flex-1 items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-xl font-medium tracking-tight text-white min-[1200px]:text-2xl">
              {step.title}
            </h3>
            <p className="mt-1 text-sm text-white/50">{step.tagline}</p>
          </div>
          <span
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors",
              open && "bg-brand-blue",
            )}
          >
            <Plus
              className={cn(
                "h-4 w-4 transition-transform duration-300",
                open && "rotate-45",
              )}
            />
          </span>
        </div>
      </AccordionTrigger>

      <AccordionContent index={index}>
        <div className="flex flex-col pb-8 min-[810px]:flex-row min-[810px]:gap-[60px]">
          <div className="hidden min-[810px]:block min-[810px]:w-[34%]" />
          <div className="flex min-w-0 flex-1 items-end justify-between gap-4">
            <div>
              <p className="text-4xl font-medium tracking-tight text-white">
                {step.stat}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/40">
                {step.statLabel}
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
                {step.body}
              </p>
            </div>
            <PillButton
              href={siteConfig.links.contact}
              tone="light"
              className="hidden px-4 py-2 text-xs min-[810px]:inline-flex"
            >
              {cta}
            </PillButton>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

export function ExpertiseSection({ id }: { id: string }) {
  const t = useTranslations("expertise")
  const steps = t.raw("steps") as Step[]

  return (
    <SectionShell id={id} variant="darkCard">
      <div className="flex flex-col gap-12 min-[1200px]:flex-row min-[1200px]:justify-between">
        <FadeIn y={40}>
          <SectionHeader
            title={t("title")}
            description={t("description")}
            crosshair
            tone="dark"
            className="min-[1200px]:max-w-[42%]"
          />
        </FadeIn>
        <Accordion
          defaultOpen={0}
          className="w-full min-[810px]:max-[1199px]:h-[740px] min-[810px]:max-[1199px]:overflow-y-auto min-[1200px]:max-w-[54%]"
        >
          {steps.map((step, index) => (
            <ExpertiseStep
              key={step.number}
              step={step}
              index={index}
              cta={t("cta")}
              mediaAlt={t("mediaAlt", { number: step.number })}
            />
          ))}
        </Accordion>
      </div>
    </SectionShell>
  )
}
