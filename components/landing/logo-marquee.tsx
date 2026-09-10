import { cn } from "@/lib/utils"

export function LogoMarquee({
  labels,
  className,
}: {
  labels: string[]
  className?: string
}) {
  const loop = [...labels, ...labels]

  return (
    <div
      className={cn(
        "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      <div className="animate-marquee flex w-max gap-12 py-2">
        {loop.map((label, index) => (
          <span
            key={`${label}-${index}`}
            className="text-xs font-medium uppercase tracking-[0.2em] text-black/40"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
