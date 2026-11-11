import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { company, navLinks } from '@/lib/content'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ocean-950 text-sand-200">
      <div className="pointer-events-none absolute -right-24 -top-32 size-80 rounded-full border border-gold-400/10" />
      <div className="pointer-events-none absolute -right-12 -top-20 size-56 rounded-full border border-gold-400/10" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-serif text-3xl tracking-tight text-sand-100">
              SNH-INC <span className="text-gold-400">Bahamas</span>
            </p>
            <div className="mt-5 h-px w-16 bg-gold-400" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-ocean-100">
              Housing, land, and business opportunities rooted in the Bahamas.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-gold-400">Explore</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-ocean-100 transition-colors hover:text-gold-400"
                  >
                    <span className="h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-gold-400">Visit</p>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg shadow-black/10">
              <p className="flex gap-3 text-sm leading-7 text-ocean-100">
                <MapPin className="mt-1 size-4 shrink-0 text-gold-400" />
                <span>{company.address}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ocean-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SNH-INC Bahamas. All rights reserved.</p>
          <p className="text-ocean-300/70">Rooted in the islands.</p>
        </div>
      </div>
    </footer>
  )
}
