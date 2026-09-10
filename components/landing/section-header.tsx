import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Crosshair } from "@/components/landing/crosshair"

export function SectionHeader({
  title,
  description,
  crosshair = false,
  tone = "light",
  className,
  children,
}: {
  title: string
  description?: string
  crosshair?: boolean
  tone?: "light" | "dark"
  className?: string
  children?: ReactNode
}) {
  return (
    <div className={cn("flex max-w-[800px] flex-1 flex-col gap-5", className)}>
      <div className="flex items-start gap-4">
        <h2
          className={cn(
            "text-balance text-4xl font-medium leading-[1.1] tracking-tight min-[810px]:text-5xl min-[1200px]:text-6xl",
            tone === "dark" ? "text-white" : "text-black",
          )}
        >
          {title}
        </h2>
        {crosshair ? (
          <Crosshair
            className={cn(
              "mt-2 shrink-0",
              tone === "dark" ? "text-white" : "text-black",
            )}
          />
        ) : null}
      </div>
      {description ? (
        <p
          className={cn(
            "max-w-md text-pretty text-base leading-relaxed",
            tone === "dark" ? "text-white/70" : "text-black/60",
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  )
}
