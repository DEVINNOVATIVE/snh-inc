import { values } from '@/lib/content'
import { Reveal } from '@/components/shared/reveal'

export function ValuesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {values.map((item, index) => {
        const Icon = item.icon
        return (
          <Reveal key={item.title} delay={index * 0.08} className="h-full">
            <div className="group h-full rounded-2xl bg-sand-50 p-8 ring-1 ring-sand-400/70 transition duration-300 hover:bg-white hover:shadow-lg hover:shadow-ocean-900/5">
              <span className="flex size-12 items-center justify-center rounded-full bg-ocean-900 text-gold-400 transition-transform duration-300 group-hover:scale-110">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-6 text-xl font-medium text-ocean-900">{item.title}</h3>
              <p className="mt-3 leading-normal text-ink-500">{item.text}</p>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
