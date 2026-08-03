import { useNavigate } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import AppHeader from '../components/AppHeader'
import StillLife from '../components/StillLife'
import { productById } from '../store/catalog'
import { useApp } from '../store/AppContext'

export default function Cart() {
  const nav = useNavigate()
  const { state, setQty, removeFromCart, cartSubtotal } = useApp()

  const items = state.cart
    .map((c) => ({ ...c, product: productById(c.productId) }))
    .filter((c) => c.product)

  const shipping = cartSubtotal > 150 || cartSubtotal === 0 ? 0 : 8

  return (
    <>
      <StatusBar />
      <div className="screen pad pad--footer">
        <AppHeader title="Your Bag" to="/shop" />

        {items.length === 0 ? (
          <div className="empty">
            <span className="empty__mark">✦</span>
            <p className="empty__title serif">Your bag is empty</p>
            <p className="empty__text">Beautiful things, thoughtfully chosen, will appear here.</p>
            <button className="btn-secondary" onClick={() => nav('/shop')}>Browse the shop</button>
          </div>
        ) : (
          <>
            {items.map(({ product, qty }) => (
              <article key={product!.id} className="rowcard">
                <StillLife variant={product!.art} className="rowcard__art" />
                <div className="rowcard__body">
                  <span className="rowcard__name">{product!.name}</span>
                  <span className="rowcard__meta">${product!.price} each</span>
                  <div className="rowcard__foot">
                    <div className="stepper">
                      <button aria-label="Decrease" onClick={() => setQty(product!.id, qty - 1)}>−</button>
                      <span>{qty}</span>
                      <button aria-label="Increase" onClick={() => setQty(product!.id, qty + 1)}>+</button>
                    </div>
                    <button className="textbtn" onClick={() => removeFromCart(product!.id)}>Remove</button>
                  </div>
                </div>
              </article>
            ))}

            <div className="banner" style={{ marginTop: 4 }}>
              <span>✦</span>
              <span>
                {shipping === 0
                  ? 'Complimentary delivery included.'
                  : `Add $${150 - cartSubtotal} more for complimentary delivery.`}
              </span>
            </div>
          </>
        )}
      </div>

      {items.length > 0 && (
        <div className="footbar">
          <div className="footbar__row">
            <span>Subtotal</span>
            <span className="footbar__total">${cartSubtotal}</span>
          </div>
          <button className="btn-primary" onClick={() => nav('/checkout')}>Checkout</button>
        </div>
      )}
    </>
  )
}
