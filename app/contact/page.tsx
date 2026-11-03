import { ContactDetails } from '@/components/contact/contact-details'
import { ContactForm } from '@/components/contact/contact-form'
import { PageHero } from '@/components/shared/page-hero'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'

export default function Contact() {
  return (
    <main className="bg-sand-100">
      <PageHero
        eyebrow="Let's connect"
        title={
          <>
            Let&apos;s make <em className="font-normal text-gold-400">something real.</em>
          </>
        }
        body="Share a little about your idea, property, or partnership. Our team will get back to you soon."
      />

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:py-32 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Get in touch"
            title={
              <>
                Every good idea <em className="font-normal text-gold-600">starts here.</em>
              </>
            }
          />
          <Reveal delay={0.2}>
            <ContactDetails />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-3xl bg-sand-300/60 p-6 md:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </section>

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
    </main>
  )
}
