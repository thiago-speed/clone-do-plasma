import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

const variants = {
  light: "",
  darkCard: "",
  fullBleed: "",
  viewport: "",
} as const

export function SectionShell({
  id,
  variant = "light",
  className,
  innerClassName,
  children,
}: {
  id?: string
  variant?: keyof typeof variants
  className?: string
  innerClassName?: string
  children: ReactNode
}) {
  const isFullBleed = variant === "fullBleed"
  const isDarkCard = variant === "darkCard"
  const isViewport = variant === "viewport"

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20",
        !isFullBleed &&
          "px-4 py-16 min-[810px]:px-6 min-[810px]:py-[60px] min-[1200px]:px-6 min-[1200px]:py-[100px]",
        isFullBleed && "p-0",
        isViewport && "p-0",
        className,
      )}
    >
      <div
        className={cn(
          !isFullBleed && "mx-auto w-full max-w-[1480px]",
          isDarkCard &&
            "rounded-[24px] bg-black px-6 py-16 text-white min-[810px]:px-8 min-[810px]:py-20 min-[1200px]:px-20",
          isViewport && "w-full",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  )
}
