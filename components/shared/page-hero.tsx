import Image from 'next/image'
import { Reveal } from '@/components/shared/reveal'

export function PageHero({
  eyebrow,
  title,
  body,
  image,
  children,
}: {
  eyebrow: string
  title: React.ReactNode
  body?: string
  image: string
  children?: React.ReactNode
}) {
  return (
    <section className="relative isolate flex min-h-[76svh] items-end overflow-hidden bg-ocean-900 text-sand-100">
      <div className="absolute inset-0 animate-hero-zoom">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-ocean-950 via-ocean-950/55 to-ocean-900/20" />
      <div className="absolute inset-0 bg-linear-to-r from-ocean-950/90 via-ocean-900/35 to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:4rem_4rem]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-8 md:pb-28">
        <Reveal>
          <span className="inline-flex items-center gap-3 rounded-full border border-gold-400/40 bg-ocean-950/40 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold-300 backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-gold-400" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.03em] md:text-7xl lg:text-8xl">{title}</h1>
        </Reveal>
        {body && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-normal text-ocean-100 md:text-xl">{body}</p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
