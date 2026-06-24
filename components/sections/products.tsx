import Image from "next/image"
import { Truck, TrainFront } from "lucide-react"
import { useTranslations } from "next-intl"
import { Reveal } from "@/components/shared/reveal"

type Feature = { title: string; desc: string }
type Product = { name: string; tagline: string; features: Feature[] }
type Integration = { title: string; features: Feature[] }

const productIcons = [Truck, TrainFront]

function FeatureList({ features }: { features: Feature[] }) {
  return (
    <ul className="flex flex-col">
      {features.map((feature, i) => (
        <Reveal
          as="li"
          key={feature.title}
          delay={i * 70}
          className="border-t border-white/10 py-4 first:border-t-0 first:pt-0"
        >
          <p className="text-[15px] font-medium tracking-tight text-neutral-100">
            {feature.title}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-neutral-400">
            {feature.desc}
          </p>
        </Reveal>
      ))}
    </ul>
  )
}

function ProductPanel({
  product,
  index,
  Icon,
}: {
  product: Product
  index: number
  Icon: typeof Truck
}) {
  const reversed = index % 2 === 1

  return (
    <Reveal className="overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-800/70 to-neutral-900/55 shadow-xl shadow-black/25 ring-1 ring-white/5 backdrop-blur-sm">
      <div className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-12">
        <div className={reversed ? "lg:order-2" : ""}>
          <Icon
            className={`h-8 w-8 ${reversed ? "text-brand-blue" : "text-brand-green"}`}
            strokeWidth={1.5}
          />
          <h3 className="mt-5 text-balance text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-4xl">
            {product.name}
          </h3>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-neutral-400">
            {product.tagline}
          </p>
        </div>

        <div
          className={`rounded-2xl bg-neutral-950/60 p-6 ring-1 ring-white/[0.04] backdrop-blur-sm lg:p-8 ${reversed ? "lg:order-1" : ""}`}
        >
          <FeatureList features={product.features} />
        </div>
      </div>
    </Reveal>
  )
}

export function Products() {
  const t = useTranslations("products")
  const items = t.raw("items") as Product[]
  const integration = t.raw("integration") as Integration

  return (
    <section className="relative isolate overflow-hidden bg-neutral-900 py-20 lg:py-28">
      <Image
        src="/containers.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-[0.90]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-900/80 via-neutral-950/85 to-black"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-black to-transparent"
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="text-balance text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-neutral-400">
            {t("description")}
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-6 lg:gap-8">
          {items.map((product, i) => (
            <ProductPanel
              key={product.name}
              product={product}
              index={i}
              Icon={productIcons[i] ?? Truck}
            />
          ))}
        </div>

        <div className="mt-20 lg:mt-28">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h3 className="text-balance text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-4xl">
              {integration.title}
            </h3>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {integration.features.map((feature, i) => (
              <Reveal
                key={feature.title}
                delay={i * 70}
                className="border-t border-white/10 pt-5"
              >
                <p className="text-[15px] font-medium tracking-tight text-neutral-100">
                  {feature.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-400">
                  {feature.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
