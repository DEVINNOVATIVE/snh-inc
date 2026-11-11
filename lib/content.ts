import { Briefcase, Compass, Handshake, Home, Leaf, Map as MapIcon, Medal, MessagesSquare, Sprout, type LucideIcon } from 'lucide-react'

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export const company = {
  name: 'SNH-INC Bahamas',
  email: 'Lnbg@lnbgllc.com',
  address: '1 Long Beach, Rum Cay, Bahamas, BA10',
  location: 'Rum Cay, Long Island, Bahamas',
}

export const heroHighlights: { icon: LucideIcon; label: string; text: string }[] = [
  { icon: Home, label: 'Housing', text: 'Homes shaped for island living' },
  { icon: MapIcon, label: 'Land', text: 'Thoughtful, long-view development' },
  { icon: Briefcase, label: 'Business', text: 'Room for local and global partners' },
]

export const services: {
  id: 'housing' | 'land' | 'business'
  icon: LucideIcon
  title: string
  summary: string
  description: string
  image: string
  points: string[]
}[] = [
  {
    id: 'housing',
    icon: Home,
    title: 'Bahamas housing',
    summary: 'Thoughtful homes made for the way island life should feel.',
    description:
      'We design and develop residences that work with the climate, light, and rhythm of the islands. Every home is planned for comfort, privacy, and easy connection to the community around it.',
    image: '/images/beach-house.jpg',
    points: [
      'Homes planned around breezes, light, and outdoor living',
      'Options for permanent residence, retirement, and second homes',
      'Clear guidance from first visit to move-in',
      'Build quality that stands up to salt air and weather',
    ],
  },
  {
    id: 'land',
    icon: Compass,
    title: 'Land development',
    summary: 'Opening up land to its highest and best potential.',
    description:
      'From raw parcels to planned communities, we study the land first. Our approach balances smart growth with the protection of shorelines, native vegetation, and the character of each place.',
    image: '/images/hero.jpg',
    points: [
      'Site assessment and feasibility studies',
      'Master planning for residential and mixed-use parcels',
      'Respect for natural features and coastal landscapes',
      'Clear phasing so progress stays steady and responsible',
    ],
  },
  {
    id: 'business',
    icon: Handshake,
    title: 'Business opportunities',
    summary: 'Creating room for local enterprise and global partners.',
    description:
      'We connect ventures, investors, and island entrepreneurs. Whether you are starting something new or looking for a partner in the Bahamas, we help shape the opportunity into something workable.',
    image: '/images/marina.jpg',
    points: [
      'Partnership and joint-venture introductions',
      'Support for local enterprise and small business growth',
      'Opportunities in hospitality, marine, and community services',
      'Transparent, long-term terms built on shared goals',
    ],
  },
]

export type ProjectCategory = 'Housing' | 'Land' | 'Business'

export const projects: {
  title: string
  category: ProjectCategory
  location: string
  status: string
  summary: string
  image: string
}[] = [
  {
    title: 'Beachfront Residences',
    category: 'Housing',
    location: 'Rum Cay',
    status: 'Open for interest',
    summary: 'A small collection of coastal homes with generous outdoor living and sea views.',
    image: '/images/beach-house.jpg',
  },
  {
    title: 'Island Retreat Homes',
    category: 'Housing',
    location: 'Long Island',
    status: 'Design phase',
    summary: 'Private retreat residences designed for weekends, seasons, and slower days.',
    image: '/images/swimming-pool-in-nandana-villas_1.jpg',
  },
  {
    title: 'Coastal Land Parcels',
    category: 'Land',
    location: 'Rum Cay',
    status: 'In planning',
    summary: 'Surveyed parcels mapped for sensible phasing, access, and long-term value.',
    image: '/images/development-map.png',
  },
  {
    title: 'Oceanfront Development',
    category: 'Land',
    location: 'Bahamas',
    status: 'Seeking partners',
    summary: 'A waterfront site prepared for mixed-use development with careful landscape planning.',
    image: '/images/69b08192babf2a612e795e39857a98c0f23aec3a8f0565bc48bb4243a19bae47.jpg',
  },
  {
    title: 'Marina Business Hub',
    category: 'Business',
    location: 'Treasure Cay',
    status: 'Exploring partners',
    summary: 'Space for marine services, hospitality, and local businesses around the water.',
    image: '/images/marina.jpg',
  },
  {
    title: 'Partner Program',
    category: 'Business',
    location: 'Bahamas',
    status: 'Open for applications',
    summary: 'A structured path for local founders and outside investors to build together.',
    image: '/images/lord-neil-benjamin (2).jpg',
  },
]

export const processSteps: { step: string; title: string; text: string }[] = [
  {
    step: '01',
    title: 'Start a conversation',
    text: 'Tell us about your idea, property, or goals. We listen first and learn what matters most to you.',
  },
  {
    step: '02',
    title: 'Explore the possibilities',
    text: 'We review the land, the market, and the options together so you can see what is realistic.',
  },
  {
    step: '03',
    title: 'Plan with purpose',
    text: 'We map out the timeline, the design, and the partnerships that will make the plan work.',
  },
  {
    step: '04',
    title: 'Build and grow',
    text: 'With a clear plan in place, we move forward step by step and stay close through every milestone.',
  },
]

export const values: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Leaf,
    title: 'Leave it better',
    text: 'Progress that respects the place we call home and the people who live here.',
  },
  {
    icon: Medal,
    title: 'Know the landscape',
    text: 'Years of local experience, patience, and a long view on every decision.',
  },
  {
    icon: Sprout,
    title: 'Grow together',
    text: 'Development that creates shared opportunity for families, partners, and communities.',
  },
  {
    icon: MessagesSquare,
    title: 'Plain-spoken always',
    text: 'Clear terms, honest timelines, and straightforward answers from the first conversation.',
  },
]

export const faqs: { question: string; answer: string }[] = [
  {
    question: 'Who do you work with?',
    answer:
      'We work with families looking for a home in the islands, landowners ready to develop, and entrepreneurs or investors who want to build something lasting in the Bahamas.',
  },
  {
    question: 'Where do you operate?',
    answer:
      'Our home base is Rum Cay, with a focus on Long Island and the wider Bahamas. If your project sits elsewhere in the islands, reach out and we will talk through what is possible.',
  },
  {
    question: 'Can I start the conversation from outside the Bahamas?',
    answer:
      'Yes. Many conversations begin remotely. Send us a message through the contact form and we will arrange the next steps that suit your schedule.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Timelines depend on the project and the site. We share a realistic schedule early in the planning stage so you know what to expect before any commitments are made.',
  },
  {
    question: 'What does it cost to get started?',
    answer:
      'The first conversation is free. Once we understand your goals, we outline the next steps and any costs involved, so there are no surprises.',
  },
]

export const interests = [
  'Housing',
  'Land development',
  'Business opportunity',
  'Something else',
] as const
