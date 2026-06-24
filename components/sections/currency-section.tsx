import { useTranslations } from "next-intl"
import { PhoneFrame } from "@/components/shared/phone-frame"
import { AddFundsScreen } from "@/components/screens/add-funds-screen"
import { FlagRibbon } from "@/components/shared/flag-ribbon"
import { flagRows } from "@/config/site"

export function CurrencySection() {
  const t = useTranslations("currency")

  return (
    <section className="overflow-hidden bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-3xl text-balance text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            {t("description")}
          </p>
        </div>
      </div>

      <div className="relative mt-16">
        <div className="flex flex-col gap-3">
          <FlagRibbon codes={flagRows.rowOne} />
          <FlagRibbon codes={flagRows.rowTwo} reverse />
        </div>

        <div className="relative z-10 mt-[-2rem] flex justify-center">
          <PhoneFrame>
            <AddFundsScreen />
          </PhoneFrame>
        </div>
      </div>
    </section>
  )
}
