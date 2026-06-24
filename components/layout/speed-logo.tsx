import Image from "next/image"
import { cn } from "@/lib/utils"

export function SpeedLogo({
  className,
  textClassName,
}: {
  className?: string
  textClassName?: string
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Image
        src="/speed-logo-min.png"
        alt="Speed logo"
        width={44}
        height={44}
        className="h-11 w-11 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] saturate-150"
      />
      <span className={cn("font-display text-xl font-bold tracking-[0.15em]", textClassName)}>
        Speed
      </span>
    </div>
  )
}
