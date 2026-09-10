import Image from "next/image"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"

export function StepMedia({
  src = siteConfig.assets.placeholder,
  alt,
  children,
  className,
}: {
  src?: string
  alt: string
  children?: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-white/10",
        className,
      )}
    >
      {children ? (
        children
      ) : (
        <Image src={src} alt={alt} fill className="object-cover" sizes="200px" />
      )}
    </div>
  )
}
