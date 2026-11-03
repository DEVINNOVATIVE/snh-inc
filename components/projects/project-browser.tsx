'use client'
import { useState } from 'react'
import { ProjectCard } from '@/components/shared/project-card'
import { projects, type ProjectCategory } from '@/lib/content'

const filters: ('All' | ProjectCategory)[] = ['All', 'Housing', 'Land', 'Business']

export function ProjectBrowser() {
  const [active, setActive] = useState<(typeof filters)[number]>('All')
  const visible = active === 'All' ? projects : projects.filter((project) => project.category === active)

  return (
    <div className="flex flex-col gap-12">
      <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = filter === active
          return (
            <button
              key={filter}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActive(filter)}
              className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                isActive
                  ? 'bg-ocean-900 text-sand-100'
                  : 'bg-white text-ocean-900 ring-1 ring-sand-400 hover:ring-gold-500'
              }`}
            >
              {filter}
            </button>
          )
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}
