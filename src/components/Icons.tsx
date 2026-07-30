import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
}

export const Bell = (p: P) => (
  <svg {...base} {...p}>
    <path d="M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" />
    <path d="M13.7 20a2 2 0 0 1-3.4 0" />
  </svg>
)

export const Sparkle = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3c.4 4.3 1.7 5.6 6 6-4.3.4-5.6 1.7-6 6-.4-4.3-1.7-5.6-6-6 4.3-.4 5.6-1.7 6-6Z" />
    <path d="M19 4c.15 1.4.6 1.85 2 2-1.4.15-1.85.6-2 2-.15-1.4-.6-1.85-2-2 1.4-.15 1.85-.6 2-2Z" />
  </svg>
)

export const Leaf = (p: P) => (
  <svg {...base} {...p}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a7 7 0 0 1-11 6" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6" />
  </svg>
)

export const Bag = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 8h12l-1 12H7L6 8Z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
)

export const Home = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V20h14V9.5" />
  </svg>
)

export const Envelope = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M4 7l8 6 8-6" />
  </svg>
)

export const Arch = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 21V11a7 7 0 0 1 14 0v10" />
    <path d="M4 21h16" />
  </svg>
)

export const User = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="8" r="3.6" />
    <path d="M5 20c1-3.6 3.8-5.4 7-5.4s6 1.8 7 5.4" />
  </svg>
)

export const Back = (p: P) => (
  <svg {...base} {...p}>
    <path d="M15 5l-7 7 7 7" />
  </svg>
)

export const ChevronRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M9 5l7 7-7 7" />
  </svg>
)

export const Bookmark = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 4h10a1 1 0 0 1 1 1v15l-6-4-6 4V5a1 1 0 0 1 1-1Z" />
  </svg>
)

export const Share = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 15V4" />
    <path d="M8 8l4-4 4 4" />
    <path d="M6 12v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6" />
  </svg>
)

export const Check = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12.5l4.5 4.5L19 6.5" />
  </svg>
)

export const Cutlery = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 3v7m0 0a2 2 0 0 0 2-2V3m-2 7v11M5 3v5m14-5c-1.5 0-3 1.8-3 5s1.5 4 3 4v9" />
  </svg>
)

export const Plane = (p: P) => (
  <svg {...base} {...p}>
    <path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2c-.3-.1-.6 0-.8.2l-.6.6c-.3.3-.2.7.1.9L9 12l-3 3H4l-1 1 3 2 2 3 1-1v-2l3-3 3.4 5.5c.2.3.6.4.9.1l.6-.6c.2-.2.3-.5.2-.8Z" />
  </svg>
)

export const Calendar = (p: P) => (
  <svg {...base} {...p}>
    <rect x="4" y="5" width="16" height="16" rx="2.5" />
    <path d="M4 9h16M8 3v4M16 3v4" />
  </svg>
)

export const Compass = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5 13.5 13.5 8.5 15.5 10.5 10.5 15.5 8.5Z" />
  </svg>
)

export const Spa = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 22c0-4-2.5-7-6-8 3.5-.5 5.2.3 6 2 .8-1.7 2.5-2.5 6-2-3.5 1-6 4-6 8Z" />
    <path d="M12 13c-2-2-2-5 0-8 2 3 2 6 0 8Z" />
  </svg>
)
