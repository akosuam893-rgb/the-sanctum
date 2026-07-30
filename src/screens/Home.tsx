import { useNavigate } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import StillLife from '../components/StillLife'
import { Bell, Sparkle, Leaf, Bag } from '../components/Icons'
import './Home.css'

const actions = [
  { label: 'Concierge', Icon: Bell, to: '/concierge' },
  { label: 'Experiences', Icon: Sparkle, to: '/experiences' },
  { label: 'Wellness', Icon: Leaf, to: '/experiences' },
  { label: 'Shop', Icon: Bag, to: '/sanctuary' },
]

export default function Home() {
  const nav = useNavigate()
  return (
    <>
      <StatusBar />
      <div className="screen screen--pad home">
        <header className="home__head">
          <h1 className="home__greeting serif">
            Good Morning,
            <br />
            Member <span className="home__spark">✦</span>
          </h1>
          <button className="home__avatar" aria-label="Profile" onClick={() => nav('/profile')}>
            S
          </button>
        </header>

        <section className="hero">
          <div className="hero__text">
            <span className="eyebrow">Your Sanctum</span>
            <p className="hero__line serif">
              A life of beauty,
              <br />
              curated for you.
            </p>
          </div>
          <div className="hero__art">
            <StillLife variant="edit" className="hero__img" />
          </div>
        </section>

        <nav className="quick">
          {actions.map(({ label, Icon, to }) => (
            <button key={label} className="quick__item" onClick={() => nav(to)}>
              <span className="quick__icon">
                <Icon />
              </span>
              <span className="quick__label">{label}</span>
            </button>
          ))}
        </nav>

        <section className="block">
          <span className="eyebrow block__label">Upcoming</span>
          <article className="feature">
            <div className="feature__body">
              <h3 className="feature__title serif">Private Dinner</h3>
              <p className="feature__meta">Tonight, 7:00 PM</p>
              <p className="feature__meta feature__meta--soft">The Sanctum Lounge</p>
              <button className="pill" onClick={() => nav('/experiences')}>
                View
              </button>
            </div>
            <StillLife variant="dinner" className="feature__art" />
          </article>
        </section>

        <section className="block">
          <span className="eyebrow block__label">Featured</span>
          <article className="feature feature--tall" onClick={() => nav('/sanctuary')}>
            <div className="feature__body">
              <h3 className="feature__title serif">New in Sanctuary</h3>
              <p className="feature__meta feature__meta--soft">
                Thoughtfully chosen pieces.
                <br />
                Beautifully yours.
              </p>
            </div>
            <StillLife variant="sanctuary" className="feature__art" />
          </article>
        </section>
      </div>
      <BottomNav />
    </>
  )
}
