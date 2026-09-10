import type { ComponentType } from "react"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { ProjectsSection } from "@/components/sections/projects"
import { ExpertiseSection } from "@/components/sections/expertise"
import { AboutSection } from "@/components/sections/about"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { BlogSection } from "@/components/sections/blog"
import { CtaSection } from "@/components/sections/cta"
import { FaqSection } from "@/components/sections/faq"
import { TeamSection } from "@/components/sections/team"
import { SiteFooter } from "@/components/layout/site-footer"
import { siteConfig } from "@/config/site"

export type LandingSection = {
  id: string
  Section: ComponentType<{ id: string }>
}

/**
 * Ordem das seções da landing. Reorganizar = alterar este array.
 */
export const landingSections: LandingSection[] = [
  { id: siteConfig.anchors.hero, Section: HeroSection },
  { id: siteConfig.anchors.features, Section: FeaturesSection },
  { id: siteConfig.anchors.projects, Section: ProjectsSection },
  { id: siteConfig.anchors.services, Section: ExpertiseSection },
  { id: siteConfig.anchors.about, Section: AboutSection },
  { id: siteConfig.anchors.testimonials, Section: TestimonialsSection },
  { id: siteConfig.anchors.blog, Section: BlogSection },
  { id: siteConfig.anchors.cta, Section: CtaSection },
  { id: siteConfig.anchors.faq, Section: FaqSection },
  { id: siteConfig.anchors.team, Section: TeamSection },
  { id: siteConfig.anchors.footer, Section: SiteFooter },
]
