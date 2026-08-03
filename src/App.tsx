import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'
import { AppProvider, useApp } from './store/AppContext'
import PhoneFrame from './components/PhoneFrame'
import Welcome from './screens/Welcome'
import Auth from './screens/Auth'
import Home from './screens/Home'
import Shop from './screens/Shop'
import Product from './screens/Product'
import Cart from './screens/Cart'
import Checkout from './screens/Checkout'
import Orders from './screens/Orders'
import Experiences from './screens/Experiences'
import Concierge from './screens/Concierge'
import ConciergeNew from './screens/ConciergeNew'
import Saved from './screens/Saved'
import Profile from './screens/Profile'

function RequireAuth({ children }: { children: ReactNode }) {
  const { currentUser } = useApp()
  const location = useLocation()
  if (!currentUser) return <Navigate to="/welcome" replace state={{ from: location.pathname }} />
  return <>{children}</>
}

function RootRedirect() {
  const { currentUser } = useApp()
  return <Navigate to={currentUser ? '/home' : '/welcome'} replace />
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/auth" element={<Auth />} />

      <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
      <Route path="/shop" element={<RequireAuth><Shop /></RequireAuth>} />
      <Route path="/shop/:id" element={<RequireAuth><Product /></RequireAuth>} />
      <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
      <Route path="/checkout" element={<RequireAuth><Checkout /></RequireAuth>} />
      <Route path="/orders" element={<RequireAuth><Orders /></RequireAuth>} />
      <Route path="/experiences" element={<RequireAuth><Experiences /></RequireAuth>} />
      <Route path="/concierge" element={<RequireAuth><Concierge /></RequireAuth>} />
      <Route path="/concierge/new" element={<RequireAuth><ConciergeNew /></RequireAuth>} />
      <Route path="/saved" element={<RequireAuth><Saved /></RequireAuth>} />
      <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <AppProvider>
      <div className="stage">
        <aside className="stage__intro">
          <span className="eyebrow">A members club</span>
          <h1>The Sanctum</h1>
          <p>
            A private world curated for a life well lived. Sign in to your
            membership—your concierge, experiences, saved pieces and orders all
            live here, and stay with you between visits.
          </p>
        </aside>

        <PhoneFrame>
          <AppRoutes />
        </PhoneFrame>
      </div>
    </AppProvider>
  )
}
