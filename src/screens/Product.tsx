import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import AppHeader from '../components/AppHeader'
import StillLife from '../components/StillLife'
import { Bag, Check, Bookmark } from '../components/Icons'
import { productById } from '../store/catalog'
import { useApp } from '../store/AppContext'
import './Product.css'

export default function Product() {
  const { id = '' } = useParams()
  const nav = useNavigate()
  const { addToCart, cartCount, toggleSaved, isSaved } = useApp()
  const [toast, setToast] = useState('')

  const product = productById(id)
  if (!product) {
    return (
      <>
        <StatusBar />
        <AppHeader title="Not found" to="/shop" />
        <div className="empty">
          <span className="empty__mark">✦</span>
          <p className="empty__title serif">Piece not found</p>
          <button className="btn-secondary" onClick={() => nav('/shop')}>Back to shop</button>
        </div>
      </>
    )
  }

  const saved = isSaved(product.id)

  const add = () => {
    addToCart(product.id, 1)
    setToast('Added to bag')
    setTimeout(() => setToast(''), 1500)
  }

  return (
    <>
      <StatusBar />
      <div className="screen product">
        <AppHeader
          title="The Collection"
          to="/shop"
          right={
            <button className="iconbtn iconbtn--badge" aria-label="Cart" onClick={() => nav('/cart')}>
              <Bag />
              {cartCount > 0 && <span>{cartCount}</span>}
            </button>
          }
        />

        <div className="product__hero">
          <StillLife variant={product.art} className="product__img" />
          <button
            className={'product__save' + (saved ? ' is-saved' : '')}
            aria-label={saved ? 'Saved' : 'Save'}
            onClick={() => toggleSaved(product.id)}
          >
            <Bookmark fill={saved ? 'var(--blush)' : 'none'} />
          </button>
        </div>

        <div className="product__pad">
          <span className="pcard__cat">{product.category}</span>
          <h1 className="product__title serif">{product.name}</h1>
          <p className="product__sub serif">{product.tagline}</p>

          <div className="product__pricerow">
            <span className="product__price serif">${product.price}</span>
            <span className="collection__badge">
              <span className="collection__dot">✦</span> Members Exclusive
            </span>
          </div>

          <p className="product__desc">{product.description}</p>

          <ul className="checklist">
            {product.features.map((f) => (
              <li key={f} className="checklist__item">
                <Check className="checklist__icon" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {toast && <div className="toast">{toast} ✦</div>}

      <div className="footbar">
        <button className="btn-primary" onClick={add}>Add to Bag · ${product.price}</button>
      </div>
    </>
  )
}
