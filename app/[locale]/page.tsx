import { setRequestLocale } from "next-intl/server"
import type { Locale } from "@/i18n/routing"
import { SiteHeader } from "@/components/layout/site-header"
import { landingSections } from "@/config/landing"

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <main className="bg-background">
      <SiteHeader />
      {landingSections.map(({ id, Section }) => (
        <Section key={id} id={id} />
      ))}
    </main>
  )
}
