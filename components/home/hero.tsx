import Image from 'next/image'
import { ButtonLink } from '@/components/shared/button-link'
import { Reveal } from '@/components/shared/reveal'
import { heroHighlights } from '@/lib/content'

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-ocean-900 text-sand-100">
      <div className="absolute inset-0">
        <Image
          src="/images/Untitled-1321.jpg"
          alt="White sand beach and oceanfront homes in the Bahamas"
          fill
          priority
          className="animate-hero-slide-1 object-cover object-center brightness-[0.72] saturate-[1.2] sm:object-[center_45%]"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0">
        <Image
          src="/images/marina.jpg"
          alt=""
          fill
          className="animate-hero-slide-2 object-cover object-[68%_center] brightness-[0.72] saturate-[1.25]"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0">
        <Image
          src="/images/33bf7a69c1379ca490d64521f4e85025-blue-hole-bahamas.jpg"
          alt=""
          fill
          className="animate-hero-slide-3 object-cover object-center brightness-[0.72] saturate-[1.25]"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-ocean-950/90 via-ocean-950/45 to-ocean-950/5" />
      <div className="absolute inset-0 bg-linear-to-t from-ocean-950/80 via-ocean-950/15 to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:4rem_4rem]" />
      <div className="pointer-events-none absolute -right-32 top-1/4 size-96 rounded-full border border-gold-400/15 sm:size-[30rem]" />
      <div className="pointer-events-none absolute -right-16 top-[30%] size-64 rounded-full border border-sand-100/10 sm:size-80" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pb-36 pt-32 sm:px-8 sm:pb-44 sm:pt-40 lg:px-12">
        <div className="w-full max-w-2xl">
          <Reveal>
            <p className="mb-6 inline-flex max-w-full items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold-300 sm:text-xs sm:tracking-[0.32em]">
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
            <h1 className="animate-hero-title max-w-xl font-serif text-[3.25rem] font-semibold leading-[0.94] tracking-[-0.04em] text-balance sm:text-7xl lg:text-8xl xl:text-[6.5rem]">
              A slower <em className="animate-hero-glow font-normal text-gold-400">kind</em> of beautiful.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-7 flex items-center gap-3 sm:mt-9">
              <div className="h-px w-16 bg-gold-400 sm:w-24" />
              <span className="text-[0.6rem] font-medium uppercase tracking-[0.25em] text-sand-100/45">
                Find your horizon
              </span>
            </div>
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

        <Reveal delay={0.35}>
          <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block xl:right-12">
            <div className="flex size-20 animate-pulse items-center justify-center rounded-full border border-gold-300/60 bg-gold-400 text-center text-[0.55rem] font-bold uppercase leading-tight tracking-[0.15em] text-ocean-950 shadow-xl shadow-gold-400/25">
              Scroll<br />to explore
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="absolute inset-x-6 bottom-8 sm:inset-x-8 lg:inset-x-12">
            <div className="grid grid-cols-3 gap-3 border-t border-sand-100/20 pt-5 sm:gap-5 sm:pt-7">
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
