import { useNavigate } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import { ChevronRight, Bookmark, Bell, Bag, Compass } from '../components/Icons'
import './Profile.css'

const rows = [
  { label: 'Membership', value: 'Founding', Icon: Compass },
  { label: 'Saved', value: '12 pieces', Icon: Bookmark },
  { label: 'Notifications', value: 'On', Icon: Bell },
  { label: 'Your Bag', value: '2 items', Icon: Bag },
]

export default function Profile() {
  const nav = useNavigate()
  return (
    <>
      <StatusBar />
      <div className="screen screen--pad profile">
        <header className="profile__head">
          <div className="profile__avatar">S</div>
          <h1 className="profile__name serif">Member</h1>
          <p className="eyebrow">Founding Member · Since 2024</p>
        </header>

        <div className="profile__card">
          <span className="eyebrow">Your Sanctum</span>
          <p className="profile__quote serif">
            A life of beauty, curated for you.
          </p>
        </div>

        <ul className="profile__rows">
          {rows.map(({ label, value, Icon }) => (
            <li
              key={label}
              className="prow"
              onClick={() => nav(label === 'Your Bag' ? '/sanctuary' : '/home')}
            >
              <span className="prow__icon">
                <Icon />
              </span>
              <span className="prow__label">{label}</span>
              <span className="prow__value">{value}</span>
              <ChevronRight className="prow__chev" />
            </li>
          ))}
        </ul>

        <button className="profile__signout" onClick={() => nav('/')}>
          <span className="btn-ghost">Sign out</span>
        </button>
      </div>
      <BottomNav />
    </>
  )
}
