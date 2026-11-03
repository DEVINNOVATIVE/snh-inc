import { CtaBand } from '@/components/shared/cta-band'
import { PageHero } from '@/components/shared/page-hero'
import { ProjectBrowser } from '@/components/projects/project-browser'

export default function Projects() {
  return (
    <main className="bg-sand-100">
      <PageHero
        eyebrow="Projects"
        title={
          <>
            Opportunities we are <em className="font-normal text-gold-400">shaping.</em>
          </>
        }
        body="A look at the homes, land, and business ventures we are developing across the islands."
      />
      <section className="px-6 py-24 md:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ProjectBrowser />
        </div>
      </section>
      <CtaBand
        title="See something that fits your plans?"
        body="Reach out to learn more about availability, timing, and the next steps for any project."
      />
    </main>
  )
}
