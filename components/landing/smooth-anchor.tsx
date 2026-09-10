"use client"

import type { ComponentPropsWithoutRef, MouseEvent } from "react"
import { useLenis } from "lenis/react"
import { cn } from "@/lib/utils"

type SmoothAnchorProps = ComponentPropsWithoutRef<"a"> & {
  href: string
}

export function SmoothAnchor({
  href,
  className,
  onClick,
  children,
  ...props
}: SmoothAnchorProps) {
  const lenis = useLenis()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented || !href.startsWith("#")) return
    event.preventDefault()
    const target = document.querySelector(href)
    if (!target) return
    if (lenis) {
      lenis.scrollTo(target as HTMLElement, { offset: -80 })
    } else {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <a href={href} onClick={handleClick} className={cn(className)} {...props}>
      {children}
    </a>
  )
}
