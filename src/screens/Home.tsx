import { useNavigate } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import StillLife from '../components/StillLife'
import { Bell, Sparkle, Bookmark, Bag } from '../components/Icons'
import { useApp } from '../store/AppContext'
import { EXPERIENCES, PRODUCTS, experienceById } from '../store/catalog'
import './Home.css'

export default function Home() {
  const nav = useNavigate()
  const { currentUser, cartCount, state } = useApp()

  const firstName = currentUser?.name.split(' ')[0] || 'Member'
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening'

  const nextRsvp = state.rsvps.map(experienceById).find(Boolean) ?? EXPERIENCES[0]
  const featured = PRODUCTS[1]

  const actions = [
    { label: 'Concierge', Icon: Bell, to: '/concierge' },
    { label: 'Experiences', Icon: Sparkle, to: '/experiences' },
    { label: 'Saved', Icon: Bookmark, to: '/saved' },
    { label: 'Shop', Icon: Bag, to: '/shop' },
  ]

  return (
    <>
      <StatusBar />
      <div className="screen screen--pad home">
        <header className="home__head">
          <h1 className="home__greeting serif">
            {greeting},
            <br />
            {firstName} <span className="home__spark">✦</span>
          </h1>
          <button className="home__avatar" aria-label="Cart" onClick={() => nav('/cart')}>
            <Bag />
            {cartCount > 0 && <em className="home__avatarbadge">{cartCount}</em>}
          </button>
        </header>

        <section className="hero" onClick={() => nav('/shop')}>
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
          <div className="block__row">
            <span className="eyebrow block__label">
              {state.rsvps.length ? 'Your next experience' : 'Upcoming'}
            </span>
            <button className="block__link" onClick={() => nav('/experiences')}>
              All
            </button>
          </div>
          <article className="feature" onClick={() => nav('/experiences')}>
            <div className="feature__body">
              <h3 className="feature__title serif">{nextRsvp.title}</h3>
              <p className="feature__meta">{nextRsvp.when}</p>
              <p className="feature__meta feature__meta--soft">{nextRsvp.where}</p>
              <span className="pill" style={{ pointerEvents: 'none' }}>
                {state.rsvps.includes(nextRsvp.id) ? 'Reserved' : 'View'}
              </span>
            </div>
            <StillLife variant={nextRsvp.art} className="feature__art" />
          </article>
        </section>

        <section className="block">
          <div className="block__row">
            <span className="eyebrow block__label">Featured</span>
            <button className="block__link" onClick={() => nav('/shop')}>
              Shop all
            </button>
          </div>
          <article className="feature feature--tall" onClick={() => nav(`/shop/${featured.id}`)}>
            <div className="feature__body">
              <h3 className="feature__title serif">{featured.name}</h3>
              <p className="feature__meta feature__meta--soft">{featured.tagline}</p>
              <span className="feature__price serif">${featured.price}</span>
            </div>
            <StillLife variant={featured.art} className="feature__art" />
          </article>
        </section>
      </div>
      <BottomNav />
    </>
  )
}
