import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function PhoneFrame({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[280px] rounded-[2.75rem] bg-neutral-900 p-2.5 shadow-2xl ring-1 ring-black/10",
        className,
      )}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-3.5 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-neutral-900" />
      <div className="relative h-[580px] overflow-hidden rounded-[2.2rem] bg-white">
        {children}
      </div>
    </div>
  )
}
