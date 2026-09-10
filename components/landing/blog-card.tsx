import Image from "next/image"
import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/landing/fade-in"
import { siteConfig } from "@/config/site"

export function BlogCard({
  title,
  excerpt,
  date,
  src = siteConfig.assets.placeholder,
  delay = 0,
  className,
}: {
  title: string
  excerpt: string
  date: string
  src?: string
  delay?: number
  className?: string
}) {
  return (
    <FadeIn delay={delay} className={cn(className)}>
      <article className="flex flex-col gap-4">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white">
          <Image src={src} alt={title} fill className="object-cover" sizes="400px" />
        </div>
        <p className="text-xs uppercase tracking-[0.16em] text-black/40">{date}</p>
        <h3 className="text-xl font-medium tracking-tight">{title}</h3>
        <p className="text-sm leading-relaxed text-black/55">{excerpt}</p>
      </article>
    </FadeIn>
  )
}
