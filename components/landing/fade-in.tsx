"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 20,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  return (
    <div
      className={cn("fade-up", className)}
      style={{
        animationDelay: `${delay}s`,
        ["--fade-y" as string]: `${y}px`,
      }}
    >
      {children}
    </div>
  )
}
