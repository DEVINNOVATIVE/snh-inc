import { Reveal } from '@/components/shared/reveal'

export function LocationMap() {
  return (
    <section className="px-6 pb-24 md:pb-32 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl ring-1 ring-sand-400/60">
          <iframe
            title="SNH-INC Bahamas location map"
            src="https://www.google.com/maps?q=Rum+Cay,+The+Bahamas&output=embed"
            className="h-[320px] w-full border-0 md:h-[430px]"
            loading="lazy"
          />
        </div>
      </Reveal>
    </section>
  )
}
