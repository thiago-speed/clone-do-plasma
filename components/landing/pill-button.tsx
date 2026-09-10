"use client"

import type { ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"
import { SmoothAnchor } from "@/components/landing/smooth-anchor"

type PillButtonProps = {
  href?: string
  children: React.ReactNode
  className?: string
  tone?: "light" | "dark" | "accent"
} & Omit<ComponentPropsWithoutRef<"a">, "href">

export function PillButton({
  href = "#",
  children,
  className,
  tone = "light",
  ...props
}: PillButtonProps) {
  const tones = {
    light: "bg-white text-black hover:bg-brand-blue hover:text-white",
    dark: "bg-black text-white hover:bg-brand-blue",
    accent: "bg-brand-blue text-white hover:bg-black",
  }

  return (
    <SmoothAnchor
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-medium",
        tones[tone],
        className,
      )}
      {...props}
    >
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {children}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 block translate-y-full scale-90 blur-[1px] transition-transform duration-300 ease-out group-hover:translate-y-0 group-hover:scale-100 group-hover:blur-0"
        >
          {children}
        </span>
      </span>
    </SmoothAnchor>
  )
}
