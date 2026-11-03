import Image from 'next/image'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'

const gallery = [
  { src: '/images/development-map.png', alt: 'Development plan of Rum Cay', caption: 'Development plan' },
  { src: '/images/marina.jpg', alt: 'Treasure Cay marina', caption: 'Treasure Cay marina' },
  { src: '/images/beach-house.jpg', alt: 'Beachfront home', caption: 'Beachfront home' },
  { src: '/images/hero.jpg', alt: 'Bahamas shoreline', caption: 'Bahamas shoreline' },
]

export function RumCayHistory() {
  return (
    <section className="bg-sand-300/60 px-6 py-24 md:py-32 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-16">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Our home island"
            title={
              <>
                Rum Cay, <em className="font-normal text-gold-600">Bahamas.</em>
              </>
            }
          />
          <Reveal delay={0.3}>
            <p className="mt-8 text-lg leading-normal text-ink-500">
              In the early days, Rum Cay was home to Arawak Indians. But by the start of the 16th century, after the
              arrival of Christopher Columbus, a majority of the Indians had left the island. Evidence, such as cave
              drawings, bowls and utensils, suggest that a small group of them lived in Hartford Cave before departing.
              By 1901, Rum Cay had five distinct settlements, with a majority of residents calling Port Nelson home.
              Today, Port Nelson is the only inhabited village remaining on the island. Tourism plays a significant role
              to island residents, as many of them are employed by the marinas and restaurants that attract seafarers
              and other visitors.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {gallery.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.1}>
              <figure className="group flex flex-col gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width:640px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="text-center text-sm italic text-ink-500">{image.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
