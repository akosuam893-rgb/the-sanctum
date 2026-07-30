import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import StatusBar from '../components/StatusBar'
import StillLife from '../components/StillLife'
import { Back, Bookmark, ChevronRight, Cutlery, Plane, Calendar, Sparkle } from '../components/Icons'
import './Concierge.css'

const services = [
  { label: 'Dining & Reservations', Icon: Cutlery },
  { label: 'Travel Arrangements', Icon: Plane },
  { label: 'Event Planning', Icon: Calendar },
  { label: 'Personal Requests', Icon: Sparkle },
]

export default function Concierge() {
  const nav = useNavigate()
  const [saved, setSaved] = useState(false)
  const [requested, setRequested] = useState(false)

  return (
    <>
      <StatusBar />
      <div className="screen concierge">
        <div className="topbar concierge__bar">
          <button className="iconbtn" onClick={() => nav('/home')} aria-label="Back">
            <Back />
          </button>
          <span className="topbar__title">Concierge</span>
          <button
            className="iconbtn"
            onClick={() => setSaved((s) => !s)}
            aria-label="Save"
            style={{ color: saved ? 'var(--blush-deep)' : undefined }}
          >
            <Bookmark fill={saved ? 'var(--blush)' : 'none'} />
          </button>
        </div>

        <div className="concierge__hero">
          <StillLife variant="concierge" className="concierge__img" />
        </div>

        <div className="concierge__pad">
          <h1 className="concierge__title serif">Concierge</h1>
          <p className="concierge__sub serif">
            Exceptional details.
            <br />
            Seamless experiences.
          </p>

          <div className="rule">
            <span className="rule__star">✦</span>
          </div>

          <p className="concierge__desc">
            Our team anticipates so you can be. From reservations to rare
            requests, we handle the details—so you can focus on what matters.
          </p>

          <ul className="services">
            {services.map(({ label, Icon }) => (
              <li key={label} className="service">
                <span className="service__icon">
                  <Icon />
                </span>
                <span className="service__label">{label}</span>
                <ChevronRight className="service__chev" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="concierge__foot">
        <button className="btn-primary" onClick={() => setRequested(true)}>
          {requested ? 'Assistance requested ✦' : 'Request Assistance'}
        </button>
      </div>
    </>
  )
}
