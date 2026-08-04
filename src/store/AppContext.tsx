import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react'
import type {
  AppState,
  Member,
  Order,
  ConciergeRequest,
} from './types'
import { productById } from './catalog'

const STORAGE_KEY = 'the-sanctum:v1'

const empty: AppState = {
  members: [],
  currentUserId: null,
  cart: [],
  orders: [],
  requests: [],
  rsvps: [],
  saved: [],
}

function load(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return empty
    return { ...empty, ...(JSON.parse(raw) as AppState) }
  } catch {
    return empty
  }
}

// Demo-only obfuscation. A real app hashes on a server; never trust the client.
const obfuscate = (s: string) => btoa(unescape(encodeURIComponent(s))).split('').reverse().join('')

const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36)

type Action =
  | { type: 'signup'; name: string; email: string; password: string }
  | { type: 'login'; email: string; password: string }
  | { type: 'logout' }
  | { type: 'addToCart'; productId: string; qty?: number }
  | { type: 'setQty'; productId: string; qty: number }
  | { type: 'removeFromCart'; productId: string }
  | { type: 'clearCart' }
  | { type: 'placeOrder'; order: Order }
  | { type: 'submitRequest'; request: ConciergeRequest }
  | { type: 'toggleRsvp'; id: string }
  | { type: 'toggleSaved'; id: string }

export class AuthError extends Error {}

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'signup': {
      const email = action.email.trim().toLowerCase()
      if (state.members.some((m) => m.email === email)) {
        throw new AuthError('An account with this email already exists.')
      }
      const member: Member = {
        id: uid(),
        name: action.name.trim(),
        email,
        passwordHash: obfuscate(action.password),
        since: Date.now(),
        tier: state.members.length === 0 ? 'Founding' : 'Member',
      }
      return { ...state, members: [...state.members, member], currentUserId: member.id }
    }
    case 'login': {
      const email = action.email.trim().toLowerCase()
      const member = state.members.find((m) => m.email === email)
      if (!member || member.passwordHash !== obfuscate(action.password)) {
        throw new AuthError('Email or password is incorrect.')
      }
      return { ...state, currentUserId: member.id }
    }
    case 'logout':
      return { ...state, currentUserId: null }
    case 'addToCart': {
      const qty = action.qty ?? 1
      const existing = state.cart.find((c) => c.productId === action.productId)
      const cart = existing
        ? state.cart.map((c) =>
            c.productId === action.productId ? { ...c, qty: c.qty + qty } : c,
          )
        : [...state.cart, { productId: action.productId, qty }]
      return { ...state, cart }
    }
    case 'setQty': {
      if (action.qty <= 0) {
        return { ...state, cart: state.cart.filter((c) => c.productId !== action.productId) }
      }
      return {
        ...state,
        cart: state.cart.map((c) =>
          c.productId === action.productId ? { ...c, qty: action.qty } : c,
        ),
      }
    }
    case 'removeFromCart':
      return { ...state, cart: state.cart.filter((c) => c.productId !== action.productId) }
    case 'clearCart':
      return { ...state, cart: [] }
    case 'placeOrder':
      return { ...state, orders: [action.order, ...state.orders], cart: [] }
    case 'submitRequest':
      return { ...state, requests: [action.request, ...state.requests] }
    case 'toggleRsvp':
      return {
        ...state,
        rsvps: state.rsvps.includes(action.id)
          ? state.rsvps.filter((x) => x !== action.id)
          : [...state.rsvps, action.id],
      }
    case 'toggleSaved':
      return {
        ...state,
        saved: state.saved.includes(action.id)
          ? state.saved.filter((x) => x !== action.id)
          : [...state.saved, action.id],
      }
    default:
      return state
  }
}

interface AppContextValue {
  state: AppState
  currentUser: Member | null
  cartCount: number
  cartSubtotal: number
  signup: (name: string, email: string, password: string) => void
  login: (email: string, password: string) => void
  logout: () => void
  addToCart: (productId: string, qty?: number) => void
  setQty: (productId: string, qty: number) => void
  removeFromCart: (productId: string) => void
  placeOrder: (ship: Order['ship']) => Order
  submitRequest: (category: string, detail: string) => void
  toggleRsvp: (id: string) => void
  toggleSaved: (id: string) => void
  isSaved: (id: string) => boolean
  hasRsvp: (id: string) => boolean
}

const Ctx = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, load)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const value = useMemo<AppContextValue>(() => {
    const currentUser = state.members.find((m) => m.id === state.currentUserId) ?? null
    const cartSubtotal = state.cart.reduce((sum, c) => {
      const p = productById(c.productId)
      return sum + (p ? p.price * c.qty : 0)
    }, 0)
    const cartCount = state.cart.reduce((n, c) => n + c.qty, 0)

    return {
      state,
      currentUser,
      cartCount,
      cartSubtotal,
      signup: (name, email, password) => dispatch({ type: 'signup', name, email, password }),
      login: (email, password) => dispatch({ type: 'login', email, password }),
      logout: () => dispatch({ type: 'logout' }),
      addToCart: (productId, qty) => dispatch({ type: 'addToCart', productId, qty }),
      setQty: (productId, qty) => dispatch({ type: 'setQty', productId, qty }),
      removeFromCart: (productId) => dispatch({ type: 'removeFromCart', productId }),
      placeOrder: (ship) => {
        const lines = state.cart.map((c) => {
          const p = productById(c.productId)!
          return { productId: c.productId, name: p.name, price: p.price, qty: c.qty }
        })
        const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0)
        const shipping = subtotal > 150 || subtotal === 0 ? 0 : 8
        const order: Order = {
          id: uid(),
          createdAt: Date.now(),
          lines,
          subtotal,
          shipping,
          total: subtotal + shipping,
          ship,
          status: 'Confirmed',
        }
        dispatch({ type: 'placeOrder', order })
        return order
      },
      submitRequest: (category, detail) =>
        dispatch({
          type: 'submitRequest',
          request: { id: uid(), createdAt: Date.now(), category, detail, status: 'Received' },
        }),
      toggleRsvp: (id) => dispatch({ type: 'toggleRsvp', id }),
      toggleSaved: (id) => dispatch({ type: 'toggleSaved', id }),
      isSaved: (id) => state.saved.includes(id),
      hasRsvp: (id) => state.rsvps.includes(id),
    }
  }, [state])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useApp(): AppContextValue {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
