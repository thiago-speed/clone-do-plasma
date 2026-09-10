import Image from "next/image"
import type { ReactNode } from "react"
import { Play } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"

export function MediaCard({
  src = siteConfig.assets.placeholder,
  alt,
  playLabel,
  sticky = false,
  children,
  className,
}: {
  src?: string
  alt: string
  playLabel?: string
  sticky?: boolean
  children?: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        sticky && "min-[810px]:sticky min-[810px]:top-8",
        className,
      )}
    >
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-2xl bg-white",
          sticky && "min-[810px]:h-[460px]",
        )}
      >
        {children ? (
          children
        ) : (
          <Image src={src} alt={alt} fill className="object-cover" sizes="600px" />
        )}
        {playLabel ? (
          <button
            type="button"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow-lg backdrop-blur-sm"
            aria-label={playLabel}
          >
            <Play className="h-6 w-6 fill-current" />
          </button>
        ) : null}
      </div>
    </div>
  )
}
