import { MapPin } from 'lucide-react'
import { LocationMap } from '@/components/shared/location-map'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { company } from '@/lib/content'

export function AddressSection() {
  return (
    <section className="px-6 py-24 md:py-32 lg:px-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <SectionHeading
          align="center"
          eyebrow="Our address"
          title={
            <>
              Find us on <em className="font-normal text-gold-600">Rum Cay.</em>
            </>
          }
        />
        <Reveal delay={0.3}>
          <p className="flex items-center gap-3 text-lg text-ocean-900">
            <MapPin className="size-5 shrink-0 text-gold-600" />
            {company.address}
          </p>
        </Reveal>
      </div>
      <div className="mt-16">
        <LocationMap />
      </div>
    </section>
  )
}
