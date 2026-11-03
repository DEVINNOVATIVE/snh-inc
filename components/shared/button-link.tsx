import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const variants = {
  primary: 'bg-gold-400 text-ocean-900 hover:bg-sand-100',
  secondary: 'border border-sand-100/40 text-sand-100 hover:border-gold-400 hover:text-gold-400',
  dark: 'bg-ocean-900 text-sand-100 hover:bg-ocean-700',
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
      className={`group inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 ${variants[variant]}`}
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  )
}
