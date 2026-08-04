import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import AppHeader from '../components/AppHeader'
import { Check } from '../components/Icons'
import { useApp } from '../store/AppContext'
import type { Order } from '../store/types'

export default function Checkout() {
  const nav = useNavigate()
  const { currentUser, state, cartSubtotal, placeOrder } = useApp()

  const [name, setName] = useState(currentUser?.name ?? '')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postcode, setPostcode] = useState('')
  const [error, setError] = useState('')
  const [placed, setPlaced] = useState<Order | null>(null)

  const shipping = cartSubtotal > 150 || cartSubtotal === 0 ? 0 : 8
  const total = cartSubtotal + shipping

  if (state.cart.length === 0 && !placed) {
    return (
      <>
        <StatusBar />
        <AppHeader title="Checkout" to="/shop" />
        <div className="empty">
          <span className="empty__mark">✦</span>
          <p className="empty__title serif">Nothing to check out</p>
          <button className="btn-secondary" onClick={() => nav('/shop')}>Browse the shop</button>
        </div>
      </>
    )
  }

  if (placed) {
    return (
      <>
        <StatusBar />
        <div className="screen pad" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="empty" style={{ paddingTop: 90 }}>
            <span className="confirm__check"><Check /></span>
            <p className="empty__title serif">Order confirmed</p>
            <p className="empty__text">
              Thank you, {placed.ship.name.split(' ')[0]}. Your order
              <b> {placed.id.slice(0, 6).toUpperCase()}</b> is being prepared with care.
            </p>
          </div>
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <button className="btn-primary" onClick={() => nav('/orders')}>View orders</button>
            <button className="btn-secondary" onClick={() => nav('/home')}>Back to home</button>
          </div>
        </div>
      </>
    )
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !address.trim() || !city.trim() || !postcode.trim()) {
      setError('Please complete your delivery details.')
      return
    }
    const order = placeOrder({ name: name.trim(), address: address.trim(), city: city.trim(), postcode: postcode.trim() })
    setPlaced(order)
  }

  return (
    <>
      <StatusBar />
      <div className="screen pad pad--footer">
        <AppHeader title="Checkout" to="/cart" />

        <form id="checkout-form" onSubmit={submit}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 14 }}>Delivery</span>
          {error && <div className="form-error">{error}</div>}

          <div className="field">
            <label className="field__label" htmlFor="c-name">Name</label>
            <input id="c-name" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Recipient name" />
          </div>
          <div className="field">
            <label className="field__label" htmlFor="c-addr">Address</label>
            <input id="c-addr" className="input" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Street address" autoComplete="street-address" />
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <div className="field" style={{ flex: 1.4 }}>
              <label className="field__label" htmlFor="c-city">City</label>
              <input id="c-city" className="input" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" />
            </div>
            <div className="field" style={{ flex: 1 }}>
              <label className="field__label" htmlFor="c-post">Postcode</label>
              <input id="c-post" className="input" value={postcode} onChange={(e) => setPostcode(e.target.value)} placeholder="Postcode" />
            </div>
          </div>

          <span className="eyebrow" style={{ display: 'block', margin: '10px 0 12px' }}>Summary</span>
          <div className="footbar__row"><span>Subtotal</span><span>${cartSubtotal}</span></div>
          <div className="footbar__row"><span>Delivery</span><span>{shipping === 0 ? 'Complimentary' : `$${shipping}`}</span></div>
        </form>
      </div>

      <div className="footbar">
        <div className="footbar__row">
          <span>Total</span>
          <span className="footbar__total">${total}</span>
        </div>
        <button className="btn-primary" type="submit" form="checkout-form">Place order</button>
      </div>
    </>
  )
}
