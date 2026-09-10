"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { AppearOnMount } from "@/components/landing/appear-on-mount"
import { PillButton } from "@/components/landing/pill-button"
import { siteConfig } from "@/config/site"

export function HeroSection({ id }: { id: string }) {
  const t = useTranslations("hero")

  return (
    <section id={id} className="relative h-screen overflow-hidden">
      <AppearOnMount from="heroImage" className="absolute inset-0">
        <Image
          src={siteConfig.assets.placeholder}
          alt=""
          fill
          priority
          className="object-cover saturate-150"
          sizes="100vw"
        />
      </AppearOnMount>
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1480px] flex-col justify-end px-4 pb-16 min-[810px]:px-6 min-[810px]:pb-20 min-[1200px]:px-6 min-[1200px]:pb-24">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-white/70">
          {t("product")}
        </p>
        <AppearOnMount from="top" delay={0.1}>
          <h1 className="max-w-4xl text-balance text-5xl font-medium leading-[1.05] tracking-tight text-white min-[810px]:text-6xl min-[1200px]:text-8xl">
            {t("title")}
          </h1>
        </AppearOnMount>
        <AppearOnMount from="bottom" delay={0.2} className="mt-6 max-w-xl">
          <p className="text-pretty text-base leading-relaxed text-white/75 min-[810px]:text-lg">
            {t("description")}
          </p>
        </AppearOnMount>
        <div className="mt-8 flex flex-col gap-6 min-[810px]:flex-row min-[810px]:items-center min-[810px]:justify-between">
          <AppearOnMount from="scale" delay={0.25}>
            <PillButton href={siteConfig.links.headerCta} tone="light">
              {t("cta")}
            </PillButton>
          </AppearOnMount>
          <AppearOnMount from="bottom" delay={0.3}>
            <p className="text-sm text-white/60">{t("proof")}</p>
          </AppearOnMount>
        </div>
      </div>
    </section>
  )
}
