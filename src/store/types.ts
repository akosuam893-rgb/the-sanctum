export interface Member {
  id: string
  name: string
  email: string
  // Demo-only: a lightly obfuscated password. Never do this in a real backend.
  passwordHash: string
  since: number
  tier: 'Founding' | 'Member'
}

export interface Product {
  id: string
  name: string
  tagline: string
  price: number
  art: ProductArt
  description: string
  features: string[]
  category: 'Journal' | 'Home' | 'Wellness' | 'Accessory'
}

export type ProductArt = 'journal' | 'edit' | 'sanctuary' | 'concierge' | 'spa' | 'dinner'

export interface CartItem {
  productId: string
  qty: number
}

export interface OrderLine {
  productId: string
  name: string
  price: number
  qty: number
}

export interface Order {
  id: string
  createdAt: number
  lines: OrderLine[]
  subtotal: number
  shipping: number
  total: number
  ship: { name: string; address: string; city: string; postcode: string }
  status: 'Confirmed' | 'Preparing' | 'On its way'
}

export interface Experience {
  id: string
  title: string
  when: string
  where: string
  art: ProductArt
  blurb: string
}

export interface ConciergeRequest {
  id: string
  createdAt: number
  category: string
  detail: string
  status: 'Received' | 'In progress' | 'Arranged'
}

export interface AppState {
  members: Member[]
  currentUserId: string | null
  cart: CartItem[]
  orders: Order[]
  requests: ConciergeRequest[]
  rsvps: string[] // experience ids
  saved: string[] // product ids
}
