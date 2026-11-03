import { processSteps } from '@/lib/content'
import { Reveal } from '@/components/shared/reveal'

export function ProcessSteps() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((item, index) => (
        <Reveal key={item.step} delay={index * 0.1} className="h-full">
          <article className="h-full rounded-2xl bg-white p-8 ring-1 ring-sand-400/60">
            <span className="font-serif text-4xl text-gold-500">{item.step}</span>
            <h3 className="mt-6 text-xl font-medium text-ocean-900">{item.title}</h3>
            <p className="mt-3 leading-normal text-ink-500">{item.text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  )
}
