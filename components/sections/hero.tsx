"use client"

import Image from "next/image"
import { ShieldCheck, Workflow, BadgeCheck } from "lucide-react"
import { useTranslations } from "next-intl"
import { useScrollVideo } from "@/hooks/use-scroll-video"
import { siteConfig } from "@/config/site"

const tagIcons = [ShieldCheck, Workflow, BadgeCheck]

export function Hero() {
  const t = useTranslations("hero")
  const tags = t.raw("tags") as string[]
  const { containerRef, videoRef } = useScrollVideo(siteConfig.assets.heroVideo)

  return (
    <section id="hero" ref={containerRef} className="relative h-[300vh] w-full bg-neutral-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
        >
          <source src={siteConfig.assets.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/40" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"
        />

        <div className="relative mx-auto flex h-screen max-w-[1600px] flex-col justify-end px-5 pb-16 lg:px-12 lg:pb-20">
          <h1 className="max-w-3xl text-balance text-5xl font-medium leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-white/80">
            {t("description")}
          </p>

          <div className="mt-8">
            <a
              href={siteConfig.links.contact}
              className="inline-flex rounded-full bg-brand-green px-7 py-3.5 text-[15px] font-medium text-neutral-900 transition-transform hover:scale-[1.03]"
            >
              {t("cta")}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            {tags.map((label, i) => {
              const Icon = tagIcons[i] ?? ShieldCheck
              return (
                <div key={label} className="flex items-center gap-2 text-white/90">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                  <span className="text-sm">{label}</span>
                </div>
              )
            })}
          </div>

          <div className="absolute bottom-16 right-0 hidden rounded-xl bg-white p-1.5 shadow-lg lg:right-0 lg:block">
            <Image
              src={siteConfig.assets.qrCode}
              alt={t("qrAlt")}
              width={104}
              height={104}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
