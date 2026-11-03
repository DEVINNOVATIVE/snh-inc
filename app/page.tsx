import { Hero } from '@/components/home/hero'
import { Overview } from '@/components/home/overview'
import { ProjectsPreview } from '@/components/home/projects-preview'
import { ServicesPreview } from '@/components/home/services-preview'
import { CtaBand } from '@/components/shared/cta-band'
import { ProcessSteps } from '@/components/shared/process-steps'
import { SectionHeading } from '@/components/shared/section-heading'
import { ValuesGrid } from '@/components/shared/values-grid'

export default function Home() {
  return (
    <main className="bg-sand-100">
      <Hero />
      <Overview />
      <ServicesPreview />
      <ProjectsPreview />
      <section className="px-6 py-24 md:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How we work"
            title={
              <>
                From first idea <em className="font-normal text-gold-600">to finished.</em>
              </>
            }
            body="A clear, four-step path that keeps every project grounded, transparent, and moving forward."
          />
          <div className="mt-16">
            <ProcessSteps />
          </div>
        </div>
      </section>
      <section className="bg-sand-300/60 px-6 py-24 md:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our promise"
            title={
              <>
                The details <em className="font-normal text-gold-600">matter.</em>
              </>
            }
          />
          <div className="mt-16">
            <ValuesGrid />
          </div>
        </div>
      </section>
      <CtaBand
        title="Ready to explore what is possible?"
        body="Tell us a little about your idea, property, or partnership. We will take it from there."
      />
    </main>
  )
}
