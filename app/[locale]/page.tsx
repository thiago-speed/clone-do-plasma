import { setRequestLocale } from 'next-intl/server'
import type { Locale } from '@/i18n/routing'
import { SiteHeader } from '@/components/layout/site-header'
import { Hero } from '@/components/sections/hero'
import { HeroProductsBlend } from '@/components/sections/hero-products-blend'
import { Products } from '@/components/sections/products'
import { CardSection } from '@/components/sections/card-section'
import { CurrencySection } from '@/components/sections/currency-section'
import { NetworkSection } from '@/components/sections/network-section'
import { StartSpending } from '@/components/sections/start-spending'
import { SiteFooter } from '@/components/layout/site-footer'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <main className="bg-background">
      <SiteHeader variant="dark" />
      <Hero />
      <HeroProductsBlend />
      <Products />
      <CardSection />
      <CurrencySection />
      <NetworkSection />
      <StartSpending />
      <SiteFooter />
    </main>
  )
}
