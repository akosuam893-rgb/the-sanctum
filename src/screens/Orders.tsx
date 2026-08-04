import { useNavigate } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import AppHeader from '../components/AppHeader'
import { useApp } from '../store/AppContext'
import './Orders.css'

const fmtDate = (t: number) =>
  new Date(t).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })

export default function Orders() {
  const nav = useNavigate()
  const { state } = useApp()

  return (
    <>
      <StatusBar />
      <div className="screen pad">
        <AppHeader title="Your Orders" to="/profile" />

        {state.orders.length === 0 ? (
          <div className="empty">
            <span className="empty__mark">✦</span>
            <p className="empty__title serif">No orders yet</p>
            <p className="empty__text">When you order from the collection, it will be kept here.</p>
            <button className="btn-secondary" onClick={() => nav('/shop')}>Browse the shop</button>
          </div>
        ) : (
          state.orders.map((o) => (
            <article key={o.id} className="order">
              <div className="order__top">
                <div>
                  <div className="order__id">Order {o.id.slice(0, 6).toUpperCase()}</div>
                  <div className="order__date">{fmtDate(o.createdAt)}</div>
                </div>
                <span className="status">{o.status}</span>
              </div>
              <ul className="order__lines">
                {o.lines.map((l) => (
                  <li key={l.productId}>
                    <span>{l.qty} × {l.name}</span>
                    <span>${l.price * l.qty}</span>
                  </li>
                ))}
              </ul>
              <div className="order__total">
                <span>Total</span>
                <span className="footbar__total">${o.total}</span>
              </div>
            </article>
          ))
        )}
      </div>
    </>
  )
}
