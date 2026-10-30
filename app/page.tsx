import { Hero } from '@/components/hero'
import { Gallery, Intro, WhoWeAre, WhyUs } from '@/components/sections'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Home(){return <><SiteHeader/><main className="bg-[#f8f3e9]"><Hero/><Intro/><WhoWeAre/><Gallery/><WhyUs/></main><SiteFooter/></>}
