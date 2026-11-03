'use client'
import { useState } from 'react'
import { Plus } from 'lucide-react'

export function FaqList({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-sand-400">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-serif text-xl text-ocean-900 md:text-2xl">{item.question}</span>
              <Plus
                className={`size-5 shrink-0 text-gold-600 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
              />
            </button>
            <div
              id={`faq-panel-${index}`}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-6 leading-normal text-ink-500">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
