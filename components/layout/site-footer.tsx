import { useTranslations } from "next-intl"
import { SpeedLogo } from "@/components/layout/speed-logo"
import { siteConfig } from "@/config/site"

type FooterColumn = { title: string; links: string[] }

export function SiteFooter({ id }: { id?: string }) {
  const t = useTranslations("footer")
  const columns = t.raw("columns") as FooterColumn[]

  return (
    <footer
      id={id}
      className="scroll-mt-20 bg-black px-4 py-16 text-white min-[810px]:px-6 min-[810px]:py-20 min-[1200px]:px-6 min-[1200px]:py-[100px]"
    >
      <div className="mx-auto flex min-h-[50vh] w-full max-w-[1480px] flex-col justify-between gap-16">
        <div className="grid grid-cols-2 gap-10 min-[810px]:grid-cols-3 min-[1200px]:grid-cols-5">
          <div className="col-span-2 min-[810px]:col-span-3 min-[1200px]:col-span-1">
            <SpeedLogo textClassName="text-white" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              {t("tagline")}
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm text-white/40">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href={siteConfig.links.footer}
                      className="text-[15px] text-white/80 transition-colors hover:text-brand-blue"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="border-t border-white/10 pt-8 text-sm text-white/40">
          {t("copyright")}
        </p>
      </div>
    </footer>
  )
}
