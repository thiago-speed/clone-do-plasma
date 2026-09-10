import { cn } from "@/lib/utils"

export function Crosshair({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-7 w-7", className)} aria-hidden>
      <span className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-current" />
      <span className="absolute right-0 top-0 h-1.5 w-1.5 rounded-full bg-current" />
      <span className="absolute bottom-0 left-0 h-1.5 w-1.5 rounded-full bg-current" />
      <span className="absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full bg-current" />
    </div>
  )
}
