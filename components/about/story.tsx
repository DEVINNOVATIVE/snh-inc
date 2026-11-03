import Image from 'next/image'
import { Building2 } from 'lucide-react'
import { ButtonLink } from '@/components/shared/button-link'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'

const objectives = [
  {
    step: '01',
    text: 'Development of open land into its highest and best use potential.',
  },
  {
    step: '02',
    text: 'Creation of new business and community job opportunities over a 5 year period.',
  },
  {
    step: '03',
    text: 'Promotion of existing business and community through this development.',
  },
]

export function Story() {
  return (
    <section className="px-6 py-24 md:py-32 lg:px-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <SectionHeading
          align="center"
          eyebrow="Who we are"
          title={
            <>
              Built around <em className="font-normal text-gold-600">the islands.</em>
            </>
          }
        />
        <Reveal>
          <p className="text-lg leading-normal text-ink-500">
            Through our management teams we straddle several synergistic business sectors that enable us to achieve
            superior financial results, while improving the economic and natural environments, as well as the safety
            and security of our communities. Our primary goal is to improve the social, economic, physical and
            aesthetic of a given project and in this case the Bahamas Development.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg leading-normal text-ink-500">
            This will be accomplished through the implementation of a strategic development plan, which incorporates
            the following objectives:
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
        {objectives.map((item, index) => (
          <Reveal key={item.step} delay={index * 0.1} className="h-full">
            <article className="h-full rounded-2xl bg-white p-8 ring-1 ring-sand-400/60">
              <span className="font-serif text-3xl text-gold-500">{item.step}</span>
              <p className="mt-5 leading-normal text-ocean-900">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="mt-16 flex justify-center">
          <ButtonLink href="/contact" variant="dark">
            Get in touch
          </ButtonLink>
        </div>
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
              From early Arawak history to the next generation of builders, Rum Cay has always been a place of
              possibility. We are here to help that possibility become something real.
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
