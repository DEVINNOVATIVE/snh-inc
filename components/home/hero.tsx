import Image from 'next/image'
import { ButtonLink } from '@/components/shared/button-link'
import { Reveal } from '@/components/shared/reveal'
import { heroHighlights } from '@/lib/content'

export function Hero() {
  return (
    <section className="relative -mt-[4.5rem] flex min-h-svh flex-col overflow-hidden bg-ocean-900 text-sand-100 sm:-mt-[4.75rem]">
      <div className="absolute inset-0 animate-hero-zoom">
        <Image
          src="/images/hero.jpg"
          alt="Turquoise Bahamian shoreline"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-ocean-950/95 via-ocean-900/70 to-ocean-900/20" />
      <div className="absolute inset-0 bg-linear-to-t from-ocean-950 via-ocean-950/20 to-ocean-950/45" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:4rem_4rem]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pb-40 pt-32 sm:px-8 sm:pb-44 sm:pt-40 lg:px-12">
        <div className="w-full max-w-3xl">
          <Reveal>
            <p className="mb-5 inline-flex max-w-full items-center gap-3 rounded-full border border-gold-400/40 bg-ocean-950/40 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold-300 backdrop-blur-md sm:mb-6 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.3em]">
              <span className="relative flex size-2 shrink-0">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-gold-400" />
              </span>
              SNH-INC Bahamas
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-3 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-sand-100/55 sm:text-xs sm:tracking-[0.4em]">
              Rum Cay · Long Island · Bahamas
            </p>
            <h1 className="font-serif text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              The good life <em className="font-normal text-gold-400">island-side.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-6 h-px w-20 bg-linear-to-r from-gold-400 to-transparent sm:mt-8 sm:w-28" />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-sand-100/80 sm:mt-7 sm:text-xl">
              Thoughtful homes, land, and ventures for people building a more beautiful future in the Bahamas.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="relative z-10 mt-8 flex w-full flex-col items-start gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
              <ButtonLink href="/services">Explore our services</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Start a conversation
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <div className="absolute inset-x-6 bottom-8 sm:inset-x-8 lg:inset-x-12">
            <div className="grid grid-cols-3 gap-3 border-t border-sand-100/15 pt-5 sm:gap-5 sm:pt-7">
              {heroHighlights.map((item) => (
                <div key={item.label}>
                  <item.icon className="mb-2 size-4 text-gold-400 sm:size-5" />
                  <p className="font-serif text-base text-sand-100 sm:text-xl">{item.label}</p>
                  <p className="mt-1 hidden max-w-44 text-xs leading-snug text-sand-100/55 sm:block">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
