import { cn } from "@/lib/utils"

export function StaggerWords({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const words = text.split(" ")

  return (
    <span className={cn("inline-flex flex-wrap", className)}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="fade-up mr-[0.3em] inline-block"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {word}
        </span>
      ))}
    </span>
  )
}
