import { Reveal } from '@/components/shared/reveal'

export function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: React.ReactNode
  body?: string
}) {
  return (
    <section className="relative overflow-hidden bg-ocean-900 px-6 pb-24 pt-36 text-sand-100 md:pb-32 md:pt-44 lg:px-8">
      <div className="pointer-events-none absolute -right-32 -top-32 size-[520px] rounded-full border border-gold-400/20" />
      <div className="pointer-events-none absolute -right-12 top-0 size-[320px] rounded-full border border-gold-400/15" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-400">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="max-w-4xl font-serif text-5xl leading-tight tracking-tight md:text-7xl">{title}</h1>
        </Reveal>
        {body && (
          <Reveal delay={0.2}>
            <p className="max-w-2xl text-lg leading-normal text-ocean-100">{body}</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
