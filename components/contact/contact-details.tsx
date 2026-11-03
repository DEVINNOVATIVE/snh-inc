import { Mail, MapPin } from 'lucide-react'
import { company } from '@/lib/content'

export function ContactDetails() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start gap-4 rounded-2xl bg-white p-6 ring-1 ring-sand-400/60">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ocean-900 text-gold-400">
          <MapPin className="size-5" />
        </span>
        <div>
          <p className="font-medium text-ocean-900">Our base</p>
          <p className="mt-1 leading-normal text-ink-500">{company.location}</p>
        </div>
      </div>
      <a
        href={`mailto:${company.email}`}
        className="group flex items-start gap-4 rounded-2xl bg-white p-6 ring-1 ring-sand-400/60 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ocean-900/5"
      >
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ocean-900 text-gold-400">
          <Mail className="size-5" />
        </span>
        <div>
          <p className="font-medium text-ocean-900">Email us</p>
          <p className="mt-1 leading-normal text-ink-500 transition-colors group-hover:text-ocean-900">{company.email}</p>
        </div>
      </a>
    </div>
  )
}
