'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Building2, Handshake, Home, MapPin } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhyUs } from '@/components/sections'
import { Hero } from '@/components/hero'

const pillars = [
  { icon: Home, number: '01', title: 'Bahamas housing', text: 'Thoughtful homes that make island living feel effortless, connected, and deeply personal.', image: '/images/beach-house.jpg' },
  { icon: MapPin, number: '02', title: 'Land development', text: 'Opening up land to its highest potential while protecting the character of the place.', image: '/images/hero.jpg' },
  { icon: Handshake, number: '03', title: 'Business opportunity', text: 'Creating room for new ideas, local enterprise, and partners with a long view.', image: '/images/marina.jpg' },
]

export default function About() {
  return <><SiteHeader/><main className="bg-[#f8f3e9]">
    <Hero/>

    <section className="mx-auto grid max-w-[1400px] gap-12 px-6 py-28 lg:grid-cols-[.7fr_1.3fr] lg:px-12 lg:py-36"><div><p className="text-xs font-semibold uppercase tracking-[.3em] text-[#b28335]">Who we are</p><h2 className="mt-5 font-serif text-5xl leading-[.95] tracking-[-.05em] text-[#082c36] md:text-7xl">A long view<br/><em className="font-normal text-[#b28335]">of island life.</em></h2></div><div className="max-w-2xl"><p className="text-2xl leading-10 text-[#082c36] md:text-3xl">SNH-INC Bahamas brings together housing, land development, and business opportunities in Rum Cay and across the islands.</p><p className="mt-8 leading-8 text-[#536b70]">Our work is intentionally human: creating value for families, partners, and communities while respecting the land, history, and natural beauty that make the Bahamas special.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#082c36] px-6 py-3 text-sm font-semibold text-[#f8f3e9] transition hover:bg-[#0b5560]">Start a conversation <ArrowUpRight className="size-4"/></Link></div></section>

    <section className="bg-[#e9dfcf] px-6 py-28 lg:px-12"><div className="mx-auto max-w-[1400px]"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.3em] text-[#b28335]">What we create</p><h2 className="mt-4 font-serif text-5xl tracking-[-.05em] text-[#082c36] md:text-7xl">Three ways<br/><em className="font-normal">to move forward.</em></h2></div><p className="max-w-xs text-sm leading-6 text-[#536b70]">The same belief guides every project: progress should feel like possibility for everyone.</p></div><div className="mt-16 grid gap-4 md:grid-cols-3">{pillars.map((item,index)=>{const Icon=item.icon;return <motion.article key={item.title} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.1}} whileHover={{y:-8}} className="group relative min-h-[360px] overflow-hidden rounded-2xl bg-[#082c36] p-8 text-[#f8f3e9]"><Image src={item.image} alt={item.title} fill className="object-cover opacity-45 transition duration-700 group-hover:scale-105 group-hover:opacity-65" sizes="(max-width:768px) 100vw, 33vw"/><div className="absolute inset-0 bg-gradient-to-t from-[#082c36] via-[#082c36]/40 to-transparent"/><div className="relative flex min-h-[296px] flex-col justify-between"><div className="flex items-center justify-between"><Icon className="size-8 text-[#d8b76a]"/><span className="text-xs text-[#b9ddd5]">{item.number}</span></div><div><h3 className="font-serif text-3xl">{item.title}</h3><p className="mt-4 text-sm leading-6 text-[#d4e5e1]">{item.text}</p></div></div></motion.article>})}</div></div></section>

    <section className="mx-auto grid max-w-[1400px] gap-12 px-6 py-28 lg:grid-cols-2 lg:items-center lg:px-12"><div className="relative aspect-[4/5] overflow-hidden rounded-2xl"><Image src="/images/founder.jpg" alt="Lord Neil B Gibson, founder of SNH-INC Bahamas" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw"/></div><div><p className="text-xs font-semibold uppercase tracking-[.3em] text-[#b28335]">The founder&apos;s note</p><h2 className="mt-5 font-serif text-5xl leading-[.95] tracking-[-.05em] text-[#082c36] md:text-6xl">Built on trust.<br/><em className="font-normal text-[#b28335]">Driven by place.</em></h2><p className="mt-8 leading-8 text-[#536b70]">From early Arawak history to the next generation of builders, Rum Cay has always been a place of possibility. We are here to help that possibility become something real.</p><div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#082c36]"><Building2 className="size-5 text-[#b28335]"/> Long-term thinking, local connection</div></div></section>
    <WhyUs/>
  </main><SiteFooter/></>
}
