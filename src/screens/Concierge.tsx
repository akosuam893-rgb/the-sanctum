import { useNavigate } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import StillLife from '../components/StillLife'
import { ChevronRight, Cutlery, Plane, Calendar, Sparkle } from '../components/Icons'
import { CONCIERGE_CATEGORIES } from '../store/catalog'
import { useApp } from '../store/AppContext'
import './Concierge.css'

const ICONS = [Cutlery, Plane, Calendar, Sparkle]
const fmt = (t: number) =>
  new Date(t).toLocaleDateString(undefined, { day: 'numeric', month: 'short' })

export default function Concierge() {
  const nav = useNavigate()
  const { state } = useApp()

  return (
    <>
      <StatusBar />
      <div className="screen pad concierge">
        <div className="concierge__hero">
          <StillLife variant="concierge" className="concierge__img" />
        </div>

        <div className="concierge__pad">
          <h1 className="concierge__title serif">Concierge</h1>
          <p className="concierge__sub serif">Exceptional details. Seamless experiences.</p>

          <div className="rule"><span className="rule__star">✦</span></div>

          <p className="concierge__desc">
            Our team anticipates so you can be. Choose a service to make a request—we
            handle the details.
          </p>

          <ul className="services">
            {CONCIERGE_CATEGORIES.map((label, i) => {
              const Icon = ICONS[i]
              return (
                <li
                  key={label}
                  className="service"
                  onClick={() => nav(`/concierge/new?category=${encodeURIComponent(label)}`)}
                >
                  <span className="service__icon"><Icon /></span>
                  <span className="service__label">{label}</span>
                  <ChevronRight className="service__chev" />
                </li>
              )
            })}
          </ul>

          {state.requests.length > 0 && (
            <>
              <span className="eyebrow" style={{ display: 'block', margin: '26px 0 12px' }}>
                Your requests
              </span>
              {state.requests.map((r) => (
                <article key={r.id} className="req">
                  <div className="req__top">
                    <span className="req__cat">{r.category}</span>
                    <span className="status">{r.status}</span>
                  </div>
                  <p className="req__detail">{r.detail}</p>
                  <span className="req__date">Requested {fmt(r.createdAt)}</span>
                </article>
              ))}
            </>
          )}

          <button
            className="btn-primary"
            style={{ marginTop: 26 }}
            onClick={() => nav('/concierge/new')}
          >
            Request Assistance
          </button>
        </div>
      </div>

      <BottomNav />
    </>
  )
}
