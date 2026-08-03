import { useNavigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import { Back } from './Icons'

export default function AppHeader({
  title,
  to,
  right,
}: {
  title: string
  to?: string | number
  right?: ReactNode
}) {
  const nav = useNavigate()
  return (
    <div className="topbar" style={{ padding: '8px 12px 12px' }}>
      <button
        className="iconbtn"
        aria-label="Back"
        onClick={() => (typeof to === 'string' ? nav(to) : nav(-1))}
      >
        <Back />
      </button>
      <span className="topbar__title">{title}</span>
      <div style={{ width: 40, display: 'flex', justifyContent: 'flex-end' }}>{right}</div>
    </div>
  )
}
