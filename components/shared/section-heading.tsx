import { Reveal } from '@/components/shared/reveal'

export function SectionHeading({
  eyebrow,
  title,
  body,
  tone = 'light',
  align = 'left',
}: {
  eyebrow: string
  title: React.ReactNode
  body?: string
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
}) {
  const isDark = tone === 'dark'
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col gap-5 ${alignment}`}>
      <Reveal>
        <p className={`text-xs font-medium uppercase tracking-[0.3em] ${isDark ? 'text-gold-400' : 'text-gold-600'}`}>
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className={`max-w-3xl font-serif text-4xl leading-[1.02] tracking-[-0.025em] md:text-6xl ${isDark ? 'text-sand-100' : 'text-ocean-900'}`}
        >
          {title}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={0.2}>
          <p className={`max-w-2xl text-lg leading-normal ${isDark ? 'text-ocean-100' : 'text-ink-500'}`}>{body}</p>
        </Reveal>
      )}
    </div>
  )
}
