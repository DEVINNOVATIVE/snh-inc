import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'
import { company, navLinks } from '@/lib/content'

export function SiteFooter() {
  return (
    <footer className="bg-ocean-950 text-sand-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-5 lg:col-span-1">
          <p className="font-serif text-2xl text-sand-100">
            SNH-INC <span className="text-gold-400">Bahamas</span>
          </p>
          <p className="max-w-xs leading-normal text-ocean-100">
            Housing, land, and business opportunities rooted in the Bahamas.
          </p>
        </div>

        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-gold-400">Explore</p>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ocean-100 transition-colors hover:text-gold-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-gold-400">Visit</p>
          <p className="flex gap-3 leading-normal text-ocean-100">
            <MapPin className="mt-1 size-4 shrink-0 text-gold-400" />
            {company.address}
          </p>
        </div>

        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-gold-400">Get in touch</p>
          <a
            href={`mailto:${company.email}`}
            className="flex items-center gap-3 text-ocean-100 transition-colors hover:text-gold-400"
          >
            <Mail className="size-4 shrink-0 text-gold-400" />
            {company.email}
          </a>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full border border-sand-100/30 px-5 py-2.5 text-sm transition-colors hover:border-gold-400 hover:text-gold-400"
          >
            Send a message
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-ocean-300 lg:px-8">
        © {new Date().getFullYear()} SNH-INC Bahamas. All rights reserved.
      </div>
    </footer>
  )
}
