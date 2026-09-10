"use client"

import { ReactLenis } from "lenis/react"
import { useReducedMotion } from "motion/react"

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion()

  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        duration: reduceMotion ? 0 : 1.2,
        lerp: reduceMotion ? 1 : 0.1,
      }}
    >
      {children}
    </ReactLenis>
  )
}
