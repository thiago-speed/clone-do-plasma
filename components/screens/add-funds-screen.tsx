import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { useTranslations } from "next-intl"

function Row({
  symbol,
  title,
  sub,
  badge,
  action = "chevron",
}: {
  symbol: string
  title: string
  sub: string
  badge?: string
  action?: "chevron" | "plus"
}) {
  return (
    <div className="flex items-center gap-3 py-2.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-700">
        {symbol}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-1.5">
          <p className="text-sm font-medium">{title}</p>
          {badge && (
            <span className="rounded bg-green-100 px-1.5 py-0.5 text-[9px] font-medium text-green-700">
              {badge}
            </span>
          )}
        </div>
        <p className="text-[10px] text-neutral-400">{sub}</p>
      </div>
      {action === "chevron" ? (
        <ChevronRight className="h-4 w-4 text-neutral-300" />
      ) : (
        <Plus className="h-4 w-4 text-neutral-400" />
      )}
    </div>
  )
}

export function AddFundsScreen() {
  const t = useTranslations("screens.addFunds")

  return (
    <div className="flex h-full flex-col bg-white px-4 pt-12 text-neutral-900">
      <div className="flex items-center justify-between text-[11px] font-medium">
        <span>10:32</span>
        <span />
      </div>

      <div className="mt-3 flex items-center">
        <ChevronLeft className="h-5 w-5" />
        <p className="flex-1 text-center text-sm font-semibold">{t("title")}</p>
        <span className="w-5" />
      </div>

      <div className="mt-4 flex-1 overflow-hidden">
        <p className="text-[10px] font-medium uppercase tracking-wide text-neutral-400">
          {t("stablecoins")}
        </p>
        <Row symbol="USDT" title="USDT" sub="Speed  BSC  Arbitrum  +4" badge="" />
        <Row symbol="USDC" title="USDC" sub="Solana  Base  Optimism  +5" />

        <p className="mt-3 text-[10px] font-medium uppercase tracking-wide text-neutral-400">
          {t("tokens")}
        </p>
        <Row symbol="XPL" title="XPL" sub="Speed" badge="Free" />

        <p className="mt-3 text-[10px] font-medium uppercase tracking-wide text-neutral-400">
          {t("cashDeposit")}
        </p>
        <Row symbol="USD" title="USD" sub="ACH  Wire" />
        <Row symbol="EUR" title="EUR" sub="SEPA" />
        <Row symbol="GBP" title="GBP" sub="FPS" action="plus" />
        <Row symbol="MXN" title="MXN" sub="CLABE" action="plus" />
      </div>
    </div>
  )
}
