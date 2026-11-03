import Image from 'next/image'
import { ButtonLink } from '@/components/shared/button-link'
import { HeroHighlights } from '@/components/shared/hero-highlights'
import { Reveal } from '@/components/shared/reveal'
import { heroHighlights } from '@/lib/content'

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-ocean-900 text-sand-100">
      <div className="absolute inset-0 animate-hero-zoom">
        <Image src="/images/hero.jpg" alt="Turquoise Bahamian shoreline" fill priority className="object-cover" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-ocean-950/95 via-ocean-900/75 to-ocean-900/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-ocean-950/80 to-transparent" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-16 pt-36 lg:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold-400/40 bg-ocean-950/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-gold-300 backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-gold-400" />
              Rum Cay · Long Island · Bahamas
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif text-5xl leading-tight tracking-tight md:text-7xl lg:text-8xl">
              The good life <em className="font-normal text-gold-400">island-side.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg leading-normal text-ocean-100 md:text-xl">
              Thoughtful homes, land, and ventures for people building a more beautiful future in the Bahamas.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/services">Explore our services</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Start a conversation
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-20">
            <HeroHighlights items={heroHighlights} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
