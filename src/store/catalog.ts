import type { Product, Experience } from './types'

export const PRODUCTS: Product[] = [
  {
    id: 'journal',
    name: 'The Sanctum Journal',
    tagline: 'For thoughts, plans, and beautiful moments.',
    price: 48,
    art: 'journal',
    category: 'Journal',
    description:
      'A timeless companion for your everyday rituals and extraordinary aspirations.',
    features: [
      'Premium linen-bound cover',
      'Thoughtfully designed layouts',
      'A Sanctum keepsake',
    ],
  },
  {
    id: 'edit',
    name: 'The Sanctum Edit',
    tagline: 'Curated for a life of beauty and intention.',
    price: 120,
    art: 'edit',
    category: 'Home',
    description:
      'A collection of our most-loved essentials—beautifully chosen, effortlessly yours.',
    features: ['Curated by The Sanctum', 'Member-only access', 'Delivered with intention'],
  },
  {
    id: 'candle',
    name: 'Hearth Candle',
    tagline: 'Warm amber, cedar, and quiet evenings.',
    price: 62,
    art: 'sanctuary',
    category: 'Home',
    description:
      'Hand-poured in small batches. A slow-burning ritual for the end of the day.',
    features: ['60-hour burn', 'Natural wax blend', 'Refillable vessel'],
  },
  {
    id: 'ritual',
    name: 'Morning Ritual Set',
    tagline: 'Begin each day with intention.',
    price: 95,
    art: 'spa',
    category: 'Wellness',
    description:
      'A considered set for the first quiet hour—crafted to slow the morning down.',
    features: ['Ceramic vessel', 'Botanical blend', 'Linen pouch'],
  },
  {
    id: 'carafe',
    name: 'Stillwater Carafe',
    tagline: 'Sculptural, tactile, everyday.',
    price: 78,
    art: 'concierge',
    category: 'Home',
    description:
      'A softly weighted carafe that turns a glass of water into a small ceremony.',
    features: ['Hand-finished stoneware', 'Matte glaze', 'Dishwasher safe'],
  },
  {
    id: 'throw',
    name: 'Cloudweave Throw',
    tagline: 'The softest hour of the day.',
    price: 165,
    art: 'dinner',
    category: 'Home',
    description:
      'A generously sized throw in a brushed, breathable weave. Made to be lived in.',
    features: ['Alpaca-wool blend', 'Woven in Portugal', 'Naturally dyed'],
  },
]

export const EXPERIENCES: Experience[] = [
  {
    id: 'private-dinner',
    title: 'Private Dinner',
    when: 'Tonight · 7:00 PM',
    where: 'The Sanctum Lounge',
    art: 'dinner',
    blurb: 'An intimate tasting menu with the house sommelier. Seating is limited to twelve.',
  },
  {
    id: 'spa-ritual',
    title: 'Spa Ritual',
    when: 'Tomorrow · 10:00 AM',
    where: 'The Wellness Floor',
    art: 'spa',
    blurb: 'A ninety-minute restorative ritual—warm stones, botanicals, and quiet.',
  },
  {
    id: 'cellar-tasting',
    title: 'Cellar Tasting',
    when: 'Friday · 6:30 PM',
    where: 'The Reserve Room',
    art: 'sanctuary',
    blurb: 'A guided journey through six rare pours from the private cellar.',
  },
]

export const CONCIERGE_CATEGORIES = [
  'Dining & Reservations',
  'Travel Arrangements',
  'Event Planning',
  'Personal Requests',
]

export function productById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}

export function experienceById(id: string): Experience | undefined {
  return EXPERIENCES.find((e) => e.id === id)
}
