import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/landing/fade-in"

export function TestimonialCard({
  quote,
  name,
  role,
  delay = 0,
  className,
}: {
  quote: string
  name: string
  role: string
  delay?: number
  className?: string
}) {
  return (
    <FadeIn delay={delay} className={cn("h-full", className)}>
      <article className="flex h-full flex-col gap-6 rounded-2xl bg-white p-6 min-[810px]:p-8">
        <div className="flex gap-1" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-brand-blue text-brand-blue" />
          ))}
        </div>
        <p className="flex-1 text-base leading-relaxed text-black/70">{quote}</p>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-black/50">{role}</p>
        </div>
      </article>
    </FadeIn>
  )
}
