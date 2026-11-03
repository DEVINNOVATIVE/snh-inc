import Image from 'next/image'
import { Check } from 'lucide-react'
import { ButtonLink } from '@/components/shared/button-link'
import { Reveal } from '@/components/shared/reveal'
import type { services } from '@/lib/content'

type Service = (typeof services)[number]

export function ServiceDetail({ service, reverse }: { service: Service; reverse: boolean }) {
  const Icon = service.icon
  return (
    <section id={service.id} className="scroll-mt-24 px-6 py-24 md:py-32 lg:px-8">
      <div className={`mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <Reveal>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal>
            <span className="flex size-12 items-center justify-center rounded-full bg-ocean-900 text-gold-400">
              <Icon className="size-5" />
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-ocean-900 md:text-5xl">{service.title}</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg leading-normal text-ink-500">{service.description}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <ul className="mt-2 flex flex-col gap-4">
              {service.points.map((point) => (
                <li key={point} className="flex items-start gap-3 leading-normal text-ocean-900">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold-400/25 text-gold-600">
                    <Check className="size-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="pt-4">
              <ButtonLink href="/contact" variant="dark">
                Discuss this service
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
