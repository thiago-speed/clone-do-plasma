import * as Flags from "country-flag-icons/react/3x2"

function FlagCircle({ code }: { code: string }) {
  const Flag = (Flags as Record<string, React.ComponentType<{ className?: string; title?: string }>>)[code]
  if (!Flag) return null
  return (
    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-black/5 sm:h-16 sm:w-16">
      <Flag className="h-full w-full object-cover [&>*]:h-full" title={code} />
    </div>
  )
}

export function FlagRibbon({
  codes,
  reverse = false,
}: {
  codes: readonly string[]
  reverse?: boolean
}) {
  const doubled = [...codes, ...codes]
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex w-max gap-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {doubled.map((code, i) => (
          <FlagCircle key={`${code}-${i}`} code={code} />
        ))}
      </div>
    </div>
  )
}
