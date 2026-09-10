"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type AppearFrom = "top" | "bottom" | "scale" | "heroImage"

export function AppearOnMount({
  children,
  className,
  from = "top",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  from?: AppearFrom
  delay?: number
}) {
  return (
    <div
      className={cn(`appear-${from}`, className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
