import Image from "next/image"
import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/landing/fade-in"
import { siteConfig } from "@/config/site"

export function ProjectCard({
  title,
  tag,
  src = siteConfig.assets.placeholder,
  delay = 0,
  className,
}: {
  title: string
  tag: string
  src?: string
  delay?: number
  className?: string
}) {
  return (
    <FadeIn delay={delay} className={cn(className)}>
      <article className="group flex flex-col gap-4">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white">
          <Image
            src={src}
            alt={title}
            fill
            sizes="(min-width: 1200px) 538px, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-lg font-medium tracking-tight">{title}</h3>
          <p className="text-sm text-black/50">{tag}</p>
        </div>
      </article>
    </FadeIn>
  )
}
