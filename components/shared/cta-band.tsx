import { ButtonLink } from '@/components/shared/button-link'
import { Reveal } from '@/components/shared/reveal'

export function CtaBand({ title, body }: { title: string; body: string }) {
  return (
    <section className="px-6 py-24 lg:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-ocean-900 px-8 py-16 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(216,183,106,0.22),transparent_55%)]" />
          <div className="relative flex flex-col items-center gap-6">
            <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight text-sand-100 md:text-5xl">
              {title}
            </h2>
            <p className="max-w-xl text-lg leading-normal text-ocean-100">{body}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/contact">Start a conversation</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Explore services
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
