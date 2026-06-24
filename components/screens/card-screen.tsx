import { Wifi } from "lucide-react"
import { useTranslations } from "next-intl"

export function CardScreen({ tab = "virtual" }: { tab?: "virtual" | "physical" }) {
  const t = useTranslations("screens.card")
  const tabs = [
    { id: "virtual", label: t("virtual") },
    { id: "physical", label: t("physical") },
  ] as const

  return (
    <div className="flex h-full flex-col bg-white px-4 pt-12 text-neutral-900">
      <div className="flex items-center justify-between text-[11px] font-medium">
        <span>15:12</span>
        <Wifi className="h-3 w-3" />
      </div>

      <div className="mt-10 px-1">
        {/* card */}
        <div className="relative aspect-[1.586/1] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-800 via-emerald-900 to-neutral-900 p-4 text-white shadow-lg">
          <div className="flex items-center gap-1.5 text-sm font-medium">
            <span className="text-xs">◍</span> Speed
          </div>
          <div className="mt-5 h-7 w-9 rounded-md bg-gradient-to-br from-yellow-200/80 to-yellow-400/60 ring-1 ring-white/20" />
          <div className="absolute bottom-4 right-4 text-right">
            <p className="text-xl font-bold italic tracking-tight">VISA</p>
            <p className="text-[8px] tracking-wide text-white/70">Signature</p>
          </div>
        </div>
      </div>

      <div className="mt-auto mb-10 flex flex-col items-center gap-3">
        <div className="flex items-center gap-1 rounded-full bg-neutral-100 p-1 ring-1 ring-neutral-200">
          {tabs.map((tabItem) => (
            <span
              key={tabItem.id}
              className={`rounded-full px-5 py-1.5 text-xs font-medium ${
                tab === tabItem.id ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-400"
              }`}
            >
              {tabItem.label}
            </span>
          ))}
        </div>
        <p className="text-[11px] text-neutral-400">{t("holdNearReader")}</p>
      </div>
    </div>
  )
}
