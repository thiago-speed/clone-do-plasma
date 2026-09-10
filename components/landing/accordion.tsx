"use client"

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react"
import { cn } from "@/lib/utils"

type AccordionContextValue = {
  open: number | null
  toggle: (index: number) => void
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

export function useAccordion() {
  const ctx = useContext(AccordionContext)
  if (!ctx) {
    throw new Error("Accordion components must be used within Accordion")
  }
  return ctx
}

export function useAccordionItem(index: number) {
  const { open, toggle } = useAccordion()
  return { open: open === index, toggle: () => toggle(index) }
}

export function Accordion({
  children,
  defaultOpen = 0,
  className,
}: {
  children: ReactNode
  defaultOpen?: number | null
  className?: string
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen)

  const toggle = (index: number) => {
    setOpen((current) => (current === index ? null : index))
  }

  return (
    <AccordionContext.Provider value={{ open, toggle }}>
      <div className={cn(className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

export function AccordionItem({
  children,
  className,
}: {
  index: number
  children: ReactNode
  className?: string
}) {
  return <div className={cn(className)}>{children}</div>
}

export function AccordionTrigger({
  index,
  children,
  className,
}: {
  index: number
  children: ReactNode
  className?: string
}) {
  const { open, toggle } = useAccordion()

  return (
    <button
      type="button"
      aria-expanded={open === index}
      onClick={() => toggle(index)}
      className={cn("w-full cursor-pointer text-left", className)}
    >
      {children}
    </button>
  )
}

export function AccordionContent({
  index,
  children,
  className,
}: {
  index: number
  children: ReactNode
  className?: string
}) {
  const { open } = useAccordion()
  const isOpen = open === index

  return (
    <div
      className={cn(
        "grid transition-[grid-template-rows,opacity,transform] duration-500 ease-out",
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        className,
      )}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  )
}
