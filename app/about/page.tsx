import { AddressSection } from '@/components/about/address-section'
import { FounderNote, Story } from '@/components/about/story'
import { RumCayHistory } from '@/components/about/rum-cay-history'
import { VideoSection } from '@/components/about/video-section'
import { ButtonLink } from '@/components/shared/button-link'
import { CtaBand } from '@/components/shared/cta-band'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/shared/section-heading'
import { ValuesGrid } from '@/components/shared/values-grid'

export default function About() {
  return (
    <main className="bg-sand-100">
      <PageHero
        image="/images/hero.jpg"
        eyebrow="About SNH-INC"
        title={
          <>
            Rooted in the Bahamas. <em className="font-normal text-gold-400">Built for tomorrow.</em>
          </>
        }
        body="We bring together homes, land, and business opportunities for people who care about the islands and want to build something lasting."
      >
        <ButtonLink href="/contact">Get in touch</ButtonLink>
        <ButtonLink href="/services" variant="secondary">Our services</ButtonLink>
      </PageHero>
      <Story />
      <RumCayHistory />
      <VideoSection />
      <section className="px-6 py-24 md:py-32 lg:px-8">
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
      {/* <AddressSection /> */}
      <CtaBand
        title="Let us learn about your goals."
        body="Whether you are looking for a home, a parcel of land, or a business partner, we would love to hear from you."
      />
    </main>
  )
}
