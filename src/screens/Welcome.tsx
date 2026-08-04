import { useNavigate } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import Logo from '../components/Logo'
import './Welcome.css'

export default function Welcome() {
  const nav = useNavigate()
  return (
    <>
      <StatusBar />
      <div className="screen welcome">
        <div className="welcome__arch" aria-hidden />

        <div className="welcome__center">
          <Logo size={92} />
          <h1 className="welcome__title serif">
            The
            <br />
            Sanctum
          </h1>
          <p className="welcome__tag eyebrow">
            A members club
            <br />
            for a life well lived
          </p>
          <span className="welcome__star" aria-hidden>
            ✦
          </span>
        </div>

        <div className="welcome__actions">
          <button className="btn-primary" onClick={() => nav('/auth?mode=signup')}>
            Join the Sanctum
          </button>
          <button className="welcome__member" onClick={() => nav('/auth?mode=login')}>
            <span className="btn-ghost">I am a member</span>
          </button>
        </div>
      </div>
    </>
  )
}
