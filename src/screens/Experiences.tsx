import { useState } from 'react'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import StillLife from '../components/StillLife'
import { EXPERIENCES } from '../store/catalog'
import { useApp } from '../store/AppContext'
import './Experiences.css'

export default function Experiences() {
  const { hasRsvp, toggleRsvp } = useApp()
  const [toast, setToast] = useState('')

  const onRsvp = (id: string, title: string) => {
    const wasReserved = hasRsvp(id)
    toggleRsvp(id)
    setToast(wasReserved ? `Reservation released` : `Reserved · ${title}`)
    setTimeout(() => setToast(''), 1600)
  }

  return (
    <>
      <StatusBar />
      <div className="screen pad pad--footer exp">
        <header className="head">
          <span className="eyebrow">Curated for you</span>
          <h1 className="head__title">Experiences</h1>
        </header>

        <div className="exp__list">
          {EXPERIENCES.map((it) => {
            const reserved = hasRsvp(it.id)
            return (
              <article key={it.id} className="expcard">
                <StillLife variant={it.art} className="expcard__art" />
                <div className="expcard__body">
                  <h3 className="expcard__title serif">{it.title}</h3>
                  <p className="expcard__meta">{it.when}</p>
                  <p className="expcard__meta expcard__meta--soft">{it.where}</p>
                  <p className="expcard__blurb">{it.blurb}</p>
                  <button
                    className={reserved ? 'btn-secondary' : 'btn-primary'}
                    style={{ marginTop: 14 }}
                    onClick={() => onRsvp(it.id, it.title)}
                  >
                    {reserved ? 'Reserved ✦ · Cancel' : 'Reserve a place'}
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {toast && <div className="toast">{toast}</div>}
      <BottomNav />
    </>
  )
}
