import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { services } from '@/lib/content'

export function ServicesPreview() {
  return (
    <section className="bg-sand-300/60 px-6 py-24 md:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Three ways to <em className="font-normal text-gold-600">build.</em>
              </>
            }
          />
          <Reveal delay={0.2}>
            <Link href="/services" className="group inline-flex items-center gap-2 text-sm font-medium text-ocean-900">
              View all services
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.id} delay={index * 0.1} className="h-full">
                <Link
                  href="/services"
                  className="group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl bg-ocean-900 p-8 text-sand-100"
                >
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-75"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ocean-900 via-ocean-900/50 to-transparent" />
                  <div className="relative flex flex-col gap-4">
                    <span className="flex size-11 items-center justify-center rounded-full bg-gold-400 text-ocean-900">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-serif text-3xl leading-tight">{service.title}</h3>
                    <p className="leading-normal text-ocean-100">{service.summary}</p>
                    <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-gold-300">
                      Learn more
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
