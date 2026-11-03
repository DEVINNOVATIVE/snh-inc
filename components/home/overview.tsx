import Image from 'next/image'
import { ButtonLink } from '@/components/shared/button-link'
import { Reveal } from '@/components/shared/reveal'

export function Overview() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:py-32 lg:grid-cols-2 lg:gap-20 lg:px-8">
      <div className="relative">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/founder.jpg"
              alt="Lord Neil B Gibson, founder of SNH-INC Bahamas"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 40vw"
            />
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="absolute -bottom-6 right-4 hidden w-56 overflow-hidden rounded-2xl bg-sand-50 p-5 shadow-xl shadow-ocean-900/10 md:block">
            <p className="font-serif text-2xl text-ocean-900">A slower pace.</p>
            <p className="mt-2 text-sm leading-normal text-ink-500">A bigger horizon for every project.</p>
          </div>
        </Reveal>
      </div>

      <div className="flex flex-col gap-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-600">The island opportunity</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-ocean-900 md:text-6xl">
            Rum Cay is more than a destination.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg leading-normal text-ink-500">
            It is a canvas for a life designed around nature, connection, and possibility. We help families, landowners, and entrepreneurs turn that possibility into something real.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="pt-2">
            <ButtonLink href="/about" variant="dark">
              Read our story
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
