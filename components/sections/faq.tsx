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
import { cn } from "@/lib/utils"

type FaqItem = { question: string; answer: string }

function FaqRow({ item, index }: { item: FaqItem; index: number }) {
  const { open } = useAccordionItem(index)

  return (
    <AccordionItem
      index={index}
      className="overflow-hidden rounded-xl border border-black/10 bg-white"
    >
      <AccordionTrigger
        index={index}
        className="flex items-center justify-between gap-4 px-4 py-5 min-[810px]:px-6"
      >
        <span className="text-left text-base font-medium tracking-tight">
          {item.question}
        </span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/5">
          <Plus
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              open && "rotate-45",
            )}
          />
        </span>
      </AccordionTrigger>
      <AccordionContent index={index} className="px-4 pb-5 min-[810px]:px-6">
        <p className="max-w-2xl text-sm leading-relaxed text-black/60">
          {item.answer}
        </p>
      </AccordionContent>
    </AccordionItem>
  )
}

export function FaqSection({ id }: { id: string }) {
  const t = useTranslations("faq")
  const items = t.raw("items") as FaqItem[]

  return (
    <SectionShell id={id}>
      <FadeIn y={40}>
        <SectionHeader title={t("title")} description={t("description")} />
      </FadeIn>
      <Accordion defaultOpen={0} className="mt-12 flex flex-col gap-3">
        {items.map((item, index) => (
          <FaqRow key={item.question} item={item} index={index} />
        ))}
      </Accordion>
    </SectionShell>
  )
}
