'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

export function Hero() {
  return <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[#082c36] text-[#f8f3e9]">
    <Image src="/images/hero.jpg" alt="Turquoise Bahamian shoreline" fill priority className="object-cover opacity-65" sizes="100vw" />
    <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(8,44,54,.98)_0%,rgba(8,44,54,.68)_42%,rgba(8,44,54,.05)_100%)]" />
    <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1400px] flex-col justify-between px-6 pb-10 pt-32 lg:px-12">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[.3em] text-[#b9ddd5]"><span>01 / 03</span><span className="hidden md:block">Rum Cay · Long Island · Bahamas</span></div>
      <motion.div initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{duration:.9,ease:[.22,1,.36,1]}} className="max-w-4xl">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[.34em] text-[#d8b76a]">A place to put down roots</p>
        <h1 className="font-serif text-[clamp(4rem,11vw,10rem)] leading-[.82] tracking-[-.07em]">The good life<br /><em className="font-normal text-[#d8b76a]">island-side.</em></h1>
        <div className="mt-10 flex flex-col gap-7 md:flex-row md:items-center"><p className="max-w-sm text-base leading-7 text-[#d4e5e1]">Thoughtful homes, land, and ventures for people building a more beautiful future in the Bahamas.</p><Link href="/contact" className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#d8b76a] px-6 py-3 text-sm font-semibold text-[#082c36] transition hover:bg-[#f8f3e9]">Explore the possibility <ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></div>
      </motion.div>
      <div className="flex items-center justify-between border-t border-white/25 pt-5 text-xs uppercase tracking-[.2em] text-[#b9ddd5]"><span>Scroll to discover</span><ArrowDownRight className="size-5" /></div>
    </div>
  </section>
}
