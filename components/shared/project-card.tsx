import Image from 'next/image'
import { MapPin } from 'lucide-react'
import type { projects } from '@/lib/content'

type Project = (typeof projects)[number]

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-sand-400/60 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-ocean-900/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 400px"
        />
        <span className="absolute left-4 top-4 rounded-full bg-sand-50/95 px-3 py-1 text-xs font-medium text-ocean-900">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-gold-600">
          <MapPin className="size-3.5" />
          {project.location}
        </div>
        <h3 className="font-serif text-2xl leading-tight text-ocean-900">{project.title}</h3>
        <p className="leading-normal text-ink-500">{project.summary}</p>
        <p className="mt-auto pt-4 text-sm font-medium text-ocean-700">{project.status}</p>
      </div>
    </article>
  )
}
