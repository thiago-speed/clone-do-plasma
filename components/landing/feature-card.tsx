import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/landing/fade-in"

export function FeatureCard({
  stat,
  title,
  description,
  delay = 0,
  className,
}: {
  stat: string
  title: string
  description: string
  delay?: number
  className?: string
}) {
  return (
    <FadeIn delay={delay} className={cn("h-full", className)}>
      <article className="flex h-full flex-col gap-4 rounded-2xl bg-white p-6 shadow-[0_1px_0_rgb(0_0_0_/_6%)] min-[810px]:p-8">
        <p className="text-4xl font-medium tracking-tight text-black min-[1200px]:text-5xl">
          {stat}
        </p>
        <h3 className="text-lg font-medium tracking-tight">{title}</h3>
        <p className="text-sm leading-relaxed text-black/55">{description}</p>
      </article>
    </FadeIn>
  )
}
