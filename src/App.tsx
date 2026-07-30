import { Routes, Route, Navigate } from 'react-router-dom'
import PhoneFrame from './components/PhoneFrame'
import Welcome from './screens/Welcome'
import Home from './screens/Home'
import Concierge from './screens/Concierge'
import Collection from './screens/Collection'
import Experiences from './screens/Experiences'
import Profile from './screens/Profile'

export default function App() {
  return (
    <div className="stage">
      <aside className="stage__intro">
        <span className="eyebrow">A members club</span>
        <h1>The Sanctum</h1>
        <p>
          A private world curated for a life well lived. Concierge, experiences,
          wellness and a considered collection — gathered into one quiet,
          beautiful place.
        </p>
      </aside>

      <PhoneFrame>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/concierge" element={<Concierge />} />
          <Route path="/sanctuary" element={<Collection />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PhoneFrame>
    </div>
  )
}
