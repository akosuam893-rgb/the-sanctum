import { useNavigate } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import AppHeader from '../components/AppHeader'
import StillLife from '../components/StillLife'
import { Bookmark } from '../components/Icons'
import { productById } from '../store/catalog'
import { useApp } from '../store/AppContext'

export default function Saved() {
  const nav = useNavigate()
  const { state, toggleSaved, addToCart } = useApp()

  const items = state.saved.map(productById).filter(Boolean)

  return (
    <>
      <StatusBar />
      <div className="screen pad">
        <AppHeader title="Saved" to="/home" />

        {items.length === 0 ? (
          <div className="empty">
            <span className="empty__mark"><Bookmark /></span>
            <p className="empty__title serif">Nothing saved yet</p>
            <p className="empty__text">Tap the bookmark on any piece to keep it here for later.</p>
            <button className="btn-secondary" onClick={() => nav('/shop')}>Browse the shop</button>
          </div>
        ) : (
          items.map((p) => (
            <article key={p!.id} className="rowcard">
              <StillLife variant={p!.art} className="rowcard__art" />
              <div className="rowcard__body">
                <span className="rowcard__name" onClick={() => nav(`/shop/${p!.id}`)} style={{ cursor: 'pointer' }}>
                  {p!.name}
                </span>
                <span className="rowcard__meta">${p!.price}</span>
                <div className="rowcard__foot">
                  <button className="chip is-active" onClick={() => addToCart(p!.id, 1)}>Add to bag</button>
                  <button className="textbtn" onClick={() => toggleSaved(p!.id)}>Remove</button>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </>
  )
}
