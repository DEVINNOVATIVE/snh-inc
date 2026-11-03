import Image from 'next/image'
import { Building2 } from 'lucide-react'
import { Reveal } from '@/components/shared/reveal'

export function Story() {
  return (
    <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-600">Who we are</p>
        <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight text-ocean-900 md:text-6xl">
          A long view <em className="font-normal text-gold-600">of island life.</em>
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="flex flex-col gap-6">
        <p className="text-2xl leading-normal text-ocean-900 md:text-3xl">
          SNH-INC Bahamas brings together housing, land development, and business opportunities in Rum Cay and across the islands.
        </p>
        <p className="text-lg leading-normal text-ink-500">
          Our work is intentionally human. We create value for families, partners, and communities while respecting the land, history, and natural beauty that make the Bahamas special.
        </p>
        <p className="text-lg leading-normal text-ink-500">
          Every project starts with listening. We take the time to understand the place, the people, and the purpose behind each idea before we build anything.
        </p>
      </Reveal>
    </section>
  )
}

export function FounderNote() {
  return (
    <section className="bg-ocean-900 px-6 py-24 text-sand-100 md:py-32 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/founder.jpg"
              alt="Lord Neil B Gibson, founder of SNH-INC Bahamas"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>
        <div className="flex flex-col gap-6">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-400">The founder&apos;s note</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-6xl">
              Built on trust. <em className="font-normal text-gold-400">Driven by place.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg leading-normal text-ocean-100">
              From early Arawak history to the next generation of builders, Rum Cay has always been a place of possibility. We are here to help that possibility become something real.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="flex items-center gap-3 text-sm font-medium text-sand-100">
              <Building2 className="size-5 text-gold-400" />
              Long-term thinking, local connection
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
