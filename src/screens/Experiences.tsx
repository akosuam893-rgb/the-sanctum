import { useNavigate } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import StillLife from '../components/StillLife'
import './Experiences.css'

const items = [
  {
    title: 'Private Dinner',
    when: 'Tonight · 7:00 PM',
    where: 'The Sanctum Lounge',
    variant: 'dinner' as const,
  },
  {
    title: 'Spa Ritual',
    when: 'Tomorrow · 10:00 AM',
    where: 'The Wellness Floor',
    variant: 'spa' as const,
  },
  {
    title: 'Cellar Tasting',
    when: 'Fri · 6:30 PM',
    where: 'The Reserve Room',
    variant: 'sanctuary' as const,
  },
]

export default function Experiences() {
  const nav = useNavigate()
  return (
    <>
      <StatusBar />
      <div className="screen screen--pad exp">
        <header className="exp__head">
          <span className="eyebrow">Curated for you</span>
          <h1 className="exp__title serif">Experiences</h1>
        </header>

        <div className="exp__list">
          {items.map((it) => (
            <article key={it.title} className="expcard" onClick={() => nav('/concierge')}>
              <StillLife variant={it.variant} className="expcard__art" />
              <div className="expcard__body">
                <h3 className="expcard__title serif">{it.title}</h3>
                <p className="expcard__meta">{it.when}</p>
                <p className="expcard__meta expcard__meta--soft">{it.where}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <BottomNav />
    </>
  )
}
