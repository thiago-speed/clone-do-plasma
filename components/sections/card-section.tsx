import { useTranslations } from "next-intl"
import { PhoneFrame } from "@/components/shared/phone-frame"
import { siteConfig } from "@/config/site"

export function CardSection() {
  const t = useTranslations("cardSection")

  return (
    <section className="bg-section-gray py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-2xl text-balance text-4xl font-medium tracking-tight sm:text-5xl">
            {t("title")}
          </h2>
          <a
            href={siteConfig.links.getCard}
            className="mt-8 inline-flex rounded-full bg-brand-green px-7 py-3.5 text-[15px] font-medium text-neutral-900 transition-transform hover:scale-[1.03]"
          >
            {t("cta")}
          </a>
        </div>

        <div className="mt-16 flex justify-center">
          <PhoneFrame>
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={siteConfig.assets.cardVideo} type="video/mp4" />
            </video>
          </PhoneFrame>
        </div>
      </div>
    </section>
  )
}
