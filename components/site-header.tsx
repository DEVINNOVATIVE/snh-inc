'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/content'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-sand-100 transition-all duration-300 ${
        scrolled || open ? 'bg-ocean-900/95 shadow-lg shadow-black/10 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 lg:px-8 ${scrolled ? 'h-16' : 'h-20'}`}>
        <Link href="/" className="font-serif text-xl tracking-wide" onClick={() => setOpen(false)}>
          SNH-INC <span className="text-gold-400">Bahamas</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`relative py-2 transition-colors hover:text-gold-400 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-gold-400 after:transition-transform after:duration-300 ${
                isActive(link.href) ? 'text-gold-400 after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex size-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/10 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-6 pb-8 pt-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`border-b border-white/10 py-4 font-serif text-2xl ${isActive(link.href) ? 'text-gold-400' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
