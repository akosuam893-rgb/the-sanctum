import type { ReactNode } from 'react'

export default function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="phone">
      <div className="phone__screen">{children}</div>
      <div className="home-indicator" />
    </div>
  )
}
