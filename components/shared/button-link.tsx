import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const variants = {
  primary: 'bg-gold-400 text-ocean-900 shadow-lg shadow-gold-400/15 hover:-translate-y-0.5 hover:bg-gold-300 hover:shadow-xl',
  secondary: 'border border-sand-100/40 bg-sand-100/5 text-sand-100 backdrop-blur-sm hover:border-gold-400 hover:bg-gold-400/10 hover:text-gold-300',
  dark: 'bg-ocean-900 text-sand-100 shadow-lg shadow-ocean-900/10 hover:-translate-y-0.5 hover:bg-ocean-700',
} as const

export function ButtonLink({
  href,
  children,
  variant = 'primary',
}: {
  href: string
  children: React.ReactNode
  variant?: keyof typeof variants
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex w-fit items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300 ${variants[variant]}`}
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  )
}
