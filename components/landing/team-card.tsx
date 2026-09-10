import Image from "next/image"
import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/landing/fade-in"
import { siteConfig } from "@/config/site"

export function TeamCard({
  name,
  role,
  src = siteConfig.assets.placeholder,
  delay = 0,
  className,
}: {
  name: string
  role: string
  src?: string
  delay?: number
  className?: string
}) {
  return (
    <FadeIn delay={delay} className={cn(className)}>
      <article className="flex flex-col gap-4">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white">
          <Image src={src} alt={name} fill className="object-cover" sizes="320px" />
        </div>
        <div>
          <h3 className="text-lg font-medium tracking-tight">{name}</h3>
          <p className="text-sm text-black/50">{role}</p>
        </div>
      </article>
    </FadeIn>
  )
}
