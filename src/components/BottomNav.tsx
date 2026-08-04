import { NavLink } from 'react-router-dom'
import { Home, Bag, Sparkle, Bell, User } from './Icons'

const items = [
  { to: '/home', label: 'Home', Icon: Home },
  { to: '/shop', label: 'Shop', Icon: Bag },
  { to: '/experiences', label: 'Experiences', Icon: Sparkle },
  { to: '/concierge', label: 'Concierge', Icon: Bell },
  { to: '/profile', label: 'Profile', Icon: User },
]

export default function BottomNav() {
  return (
    <nav className="bottomnav">
      {items.map(({ to, label, Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => 'navitem' + (isActive ? ' is-active' : '')}
        >
          <Icon />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
