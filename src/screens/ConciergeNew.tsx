import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import AppHeader from '../components/AppHeader'
import { CONCIERGE_CATEGORIES } from '../store/catalog'
import { useApp } from '../store/AppContext'

export default function ConciergeNew() {
  const nav = useNavigate()
  const [params] = useSearchParams()
  const { submitRequest } = useApp()

  const initial = params.get('category')
  const [category, setCategory] = useState(
    initial && CONCIERGE_CATEGORIES.includes(initial) ? initial : CONCIERGE_CATEGORIES[0],
  )
  const [detail, setDetail] = useState('')
  const [error, setError] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (detail.trim().length < 5) {
      setError('Please tell us a little more so we can help.')
      return
    }
    submitRequest(category, detail.trim())
    nav('/concierge')
  }

  return (
    <>
      <StatusBar />
      <div className="screen pad pad--footer">
        <AppHeader title="New Request" to="/concierge" />

        <form id="req-form" onSubmit={submit}>
          <div className="banner">
            <span>✦</span>
            <span>Tell us what you need. Your concierge responds personally, day or night.</span>
          </div>

          {error && <div className="form-error">{error}</div>}

          <div className="field">
            <span className="field__label">Service</span>
            <div className="chips" style={{ flexWrap: 'wrap', overflow: 'visible', paddingBottom: 0 }}>
              {CONCIERGE_CATEGORIES.map((c) => (
                <button
                  type="button"
                  key={c}
                  className={'chip' + (category === c ? ' is-active' : '')}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="field" style={{ marginTop: 8 }}>
            <label className="field__label" htmlFor="detail">Your request</label>
            <textarea
              id="detail"
              className="input"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              placeholder="e.g. A table for two at 8pm this Friday, somewhere quiet with a view."
            />
          </div>
        </form>
      </div>

      <div className="footbar">
        <button className="btn-primary" type="submit" form="req-form">Send to concierge</button>
      </div>
    </>
  )
}
