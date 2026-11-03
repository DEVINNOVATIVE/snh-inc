import { ButtonLink } from '@/components/shared/button-link'
import { ProjectCard } from '@/components/shared/project-card'
import { SectionHeading } from '@/components/shared/section-heading'
import { projects } from '@/lib/content'

export function ProjectsPreview() {
  return (
    <section className="px-6 py-24 md:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured work"
            title={
              <>
                Opportunities we are <em className="font-normal text-gold-600">shaping.</em>
              </>
            }
          />
          <ButtonLink href="/projects" variant="dark">
            See all projects
          </ButtonLink>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
