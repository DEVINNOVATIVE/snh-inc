import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'

export function VideoSection() {
  return (
    <section className="px-6 py-24 md:py-32 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12">
        <SectionHeading
          align="center"
          eyebrow="Watch"
          title={
            <>
              See the islands <em className="font-normal text-gold-600">in motion.</em>
            </>
          }
        />
        <Reveal delay={0.2} className="w-full">
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-ocean-900 ring-1 ring-sand-400/60">
            <iframe
              title="SNH-INC Bahamas video"
              src="https://www.youtube-nocookie.com/embed/K2eml89S8Lk?start=41"
              className="absolute inset-0 size-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
