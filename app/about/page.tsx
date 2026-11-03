import { CtaBand } from '@/components/shared/cta-band'
import { FounderNote, Story } from '@/components/about/story'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/shared/section-heading'
import { ValuesGrid } from '@/components/shared/values-grid'

export default function About() {
  return (
    <main className="bg-sand-100">
      <PageHero
        eyebrow="About SNH-INC"
        title={
          <>
            Rooted in the Bahamas. <em className="font-normal text-gold-400">Built for tomorrow.</em>
          </>
        }
        body="We bring together homes, land, and business opportunities for people who care about the islands and want to build something lasting."
      />
      <Story />
      <section className="bg-sand-300/60 px-6 py-24 md:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What guides us"
            title={
              <>
                The principles behind <em className="font-normal text-gold-600">every project.</em>
              </>
            }
          />
          <div className="mt-16">
            <ValuesGrid />
          </div>
        </div>
      </section>
      <FounderNote />
      <CtaBand
        title="Let us learn about your goals."
        body="Whether you are looking for a home, a parcel of land, or a business partner, we would love to hear from you."
      />
    </main>
  )
}
