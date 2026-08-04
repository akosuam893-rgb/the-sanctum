import { useNavigate } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import { ChevronRight, Bookmark, Bag, Compass, Bell } from '../components/Icons'
import { useApp } from '../store/AppContext'
import './Profile.css'

export default function Profile() {
  const nav = useNavigate()
  const { currentUser, state, logout } = useApp()

  if (!currentUser) return null
  const initial = currentUser.name.trim().charAt(0).toUpperCase() || 'S'
  const memberSince = new Date(currentUser.since).getFullYear()

  const rows = [
    { label: 'Orders', value: `${state.orders.length}`, Icon: Bag, to: '/orders' },
    { label: 'Saved', value: `${state.saved.length} ${state.saved.length === 1 ? 'piece' : 'pieces'}`, Icon: Bookmark, to: '/saved' },
    { label: 'Requests', value: `${state.requests.length}`, Icon: Bell, to: '/concierge' },
    { label: 'Experiences', value: `${state.rsvps.length} reserved`, Icon: Compass, to: '/experiences' },
  ]

  return (
    <>
      <StatusBar />
      <div className="screen pad profile">
        <header className="profile__head">
          <div className="profile__avatar">{initial}</div>
          <h1 className="profile__name serif">{currentUser.name}</h1>
          <p className="eyebrow">{currentUser.tier} Member · Since {memberSince}</p>
        </header>

        <div className="profile__card">
          <span className="eyebrow">Your Sanctum</span>
          <p className="profile__quote serif">A life of beauty, curated for you.</p>
        </div>

        <ul className="profile__rows">
          {rows.map(({ label, value, Icon, to }) => (
            <li key={label} className="prow" onClick={() => nav(to)}>
              <span className="prow__icon"><Icon /></span>
              <span className="prow__label">{label}</span>
              <span className="prow__value">{value}</span>
              <ChevronRight className="prow__chev" />
            </li>
          ))}
        </ul>

        <button className="profile__signout" onClick={() => { logout(); nav('/welcome') }}>
          <span className="btn-ghost">Sign out</span>
        </button>
      </div>
      <BottomNav />
    </>
  )
}
