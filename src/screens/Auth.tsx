import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import Logo from '../components/Logo'
import { AuthError, useApp } from '../store/AppContext'
import './Auth.css'

export default function Auth() {
  const nav = useNavigate()
  const [params, setParams] = useSearchParams()
  const mode = params.get('mode') === 'login' ? 'login' : 'signup'
  const { signup, login } = useApp()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isSignup = mode === 'signup'

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      if (isSignup) {
        if (name.trim().length < 2) throw new AuthError('Please enter your name.')
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) throw new AuthError('Please enter a valid email.')
        if (password.length < 6) throw new AuthError('Password must be at least 6 characters.')
        signup(name, email, password)
      } else {
        login(email, password)
      }
      nav('/home', { replace: true })
    } catch (err) {
      setError(err instanceof AuthError ? err.message : 'Something went wrong.')
    }
  }

  const swap = () => {
    setError('')
    setParams({ mode: isSignup ? 'login' : 'signup' })
  }

  return (
    <>
      <StatusBar />
      <div className="screen auth">
        <button className="auth__back btn-ghost" onClick={() => nav('/welcome')}>
          ← Back
        </button>

        <div className="auth__brand">
          <Logo size={58} />
          <h1 className="auth__title serif">
            {isSignup ? 'Join the Sanctum' : 'Welcome back'}
          </h1>
          <p className="auth__sub">
            {isSignup
              ? 'A membership curated around you.'
              : 'Sign in to your membership.'}
          </p>
        </div>

        <form onSubmit={submit} className="auth__form">
          {error && <div className="form-error">{error}</div>}

          {isSignup && (
            <div className="field">
              <label className="field__label" htmlFor="name">Name</label>
              <input
                id="name"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                autoComplete="name"
              />
            </div>
          )}

          <div className="field">
            <label className="field__label" htmlFor="email">Email</label>
            <input
              id="email"
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div className="field">
            <label className="field__label" htmlFor="password">Password</label>
            <input
              id="password"
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={isSignup ? 'At least 6 characters' : 'Your password'}
              autoComplete={isSignup ? 'new-password' : 'current-password'}
            />
          </div>

          <button className="btn-primary" type="submit" style={{ marginTop: 8 }}>
            {isSignup ? 'Create membership' : 'Sign in'}
          </button>

          <button type="button" className="link-line" onClick={swap}>
            {isSignup ? (
              <>Already a member? <b>Sign in</b></>
            ) : (
              <>New here? <b>Join the Sanctum</b></>
            )}
          </button>
        </form>

        <p className="auth__note">
          Your membership is stored privately on this device.
        </p>
      </div>
    </>
  )
}
