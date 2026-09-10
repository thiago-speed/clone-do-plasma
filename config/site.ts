/**
 * Configuração não-traduzível do site: âncoras, links e assets.
 */
export const siteConfig = {
  productName: "GOS",
  links: {
    headerCta: "#cta-section",
    contact: "#cta-section",
    footer: "#",
  },
  assets: {
    placeholder: "/placeholder.svg",
    logo: "/speed-logo-min.png",
  },
  anchors: {
    hero: "hero",
    features: "features",
    projects: "projects",
    services: "services",
    about: "about",
    testimonials: "testimonials",
    blog: "blog",
    cta: "cta-section",
    faq: "faq",
    team: "team",
    footer: "footer-viewer",
  },
} as const
