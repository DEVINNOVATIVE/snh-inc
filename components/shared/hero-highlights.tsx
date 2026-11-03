import type { LucideIcon } from 'lucide-react'

export function HeroHighlights({ items }: { items: { icon: LucideIcon; label: string; text: string }[] }) {
  return (
    <ul className="grid gap-4 border-t border-white/15 pt-8 sm:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon
        return (
          <li key={item.label} className="flex items-start gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-400">
              <Icon className="size-5" />
            </span>
            <div>
              <p className="font-medium text-sand-100">{item.label}</p>
              <p className="text-sm leading-normal text-ocean-100">{item.text}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
