'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks } from '@/lib/content'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isHome = pathname === '/'
  const overlay = isHome && !scrolled && !open

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setScrolled(window.scrollY > 24)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'top-0 z-50 transition-all duration-500',
        isHome ? 'sticky inset-x-0' : 'sticky',
        overlay
          ? 'border-b border-transparent bg-transparent'
          : 'border-b border-sand-300/70 bg-sand-50/95 shadow-sm backdrop-blur-md',
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-3 px-6 sm:h-[4.75rem] lg:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className={cn(
            'font-serif text-xl tracking-wide transition-colors',
            overlay ? 'text-sand-100' : 'text-ocean-900',
          )}
        >
          SNH-INC <span className="text-gold-400">Bahamas</span>
        </Link>

        <nav
          className={cn(
            'hidden items-center rounded-full border p-1 backdrop-blur-sm md:flex',
            overlay
              ? 'border-sand-100/15 bg-sand-100/5'
              : 'border-sand-300/70 bg-white/50',
          )}
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors lg:px-5',
                  overlay
                    ? active
                      ? 'bg-gold-400 text-ocean-950 shadow-sm'
                      : 'text-sand-100/75 hover:text-sand-100'
                    : active
                      ? 'bg-ocean-900 text-sand-100 shadow-sm'
                      : 'text-ink-500 hover:text-ocean-900',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden h-11 items-center rounded-full bg-gold-400 px-6 text-sm font-semibold text-ocean-950 shadow-md shadow-gold-400/20 transition-all hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/30 md:inline-flex"
        >
          Get in touch
        </Link>

        <button
          type="button"
          className={cn(
            'inline-flex size-10 shrink-0 items-center justify-center rounded-xl border backdrop-blur-sm md:hidden',
            overlay
              ? 'border-sand-100/20 bg-sand-100/10 text-sand-100'
              : 'border-sand-300/70 bg-white/50 text-ocean-900',
          )}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-sand-300/70 bg-sand-50/95 backdrop-blur-md md:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4 lg:px-8"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={cn(
                  'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                  isActive(link.href)
                    ? 'bg-ocean-900 text-sand-100'
                    : 'text-ink-500 hover:bg-sand-200 hover:text-ocean-900',
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold-400 px-4 py-3 text-center text-sm font-semibold text-ocean-950"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
