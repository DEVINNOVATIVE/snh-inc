import { CtaBand } from '@/components/shared/cta-band'
import { FaqList } from '@/components/shared/faq-list'
import { PageHero } from '@/components/shared/page-hero'
import { ProcessSteps } from '@/components/shared/process-steps'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { ServiceDetail } from '@/components/services/service-detail'
import { faqs, services } from '@/lib/content'

export default function Services() {
  return (
    <main className="bg-sand-100">
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Three ways we help you <em className="font-normal text-gold-400">build.</em>
          </>
        }
        body="Housing, land development, and business opportunities, each shaped by the place and the people behind it."
      />

      {services.map((service, index) => (
        <ServiceDetail key={service.id} service={service} reverse={index % 2 === 1} />
      ))}

      <section className="bg-sand-300/60 px-6 py-24 md:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                A clear path, <em className="font-normal text-gold-600">start to finish.</em>
              </>
            }
          />
          <div className="mt-16">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Questions" title={<>Good to <em className="font-normal text-gold-600">know.</em></>} />
          <Reveal delay={0.2}>
            <FaqList items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Not sure which path fits?"
        body="Tell us about your goals and we will help you choose the right starting point."
      />
    </main>
  )
}
