import { ButtonLink } from '@/components/shared/button-link'
import { ContactDetails } from '@/components/contact/contact-details'
import { ContactForm } from '@/components/contact/contact-form'
import { LocationMap } from '@/components/shared/location-map'
import { PageHero } from '@/components/shared/page-hero'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'

export default function Contact() {
  return (
    <main className="bg-sand-100">
      <PageHero
        image="https://images.pexels.com/photos/1637117/pexels-photo-1637117.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        eyebrow="Let's connect"
        title={
          <>
            Let&apos;s make <em className="font-normal text-gold-400">something real.</em>
          </>
        }
        body="Share a little about your idea, property, or partnership. Our team will get back to you soon."
      >
        <ButtonLink href="#contact-form">Send a message</ButtonLink>
      </PageHero>

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
          <div id="contact-form" className="scroll-mt-28 rounded-3xl bg-sand-300/60 p-6 md:p-10">

            <ContactForm />
          </div>
        </Reveal>
      </section>

      <LocationMap />
    </main>
  )
}
