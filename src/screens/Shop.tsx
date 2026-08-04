import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import StillLife from '../components/StillLife'
import { Bag } from '../components/Icons'
import { PRODUCTS } from '../store/catalog'
import { useApp } from '../store/AppContext'

const CATEGORIES = ['All', 'Journal', 'Home', 'Wellness'] as const

export default function Shop() {
  const nav = useNavigate()
  const { cartCount } = useApp()
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>('All')

  const products = PRODUCTS.filter((p) => cat === 'All' || p.category === cat)

  return (
    <>
      <StatusBar />
      <div className="screen pad pad--footer">
        <header className="head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <span className="eyebrow">The Collection</span>
            <h1 className="head__title">Shop</h1>
          </div>
          <button className="iconbtn iconbtn--badge" aria-label="Cart" onClick={() => nav('/cart')}>
            <Bag />
            {cartCount > 0 && <span>{cartCount}</span>}
          </button>
        </header>

        <div className="chips">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={'chip' + (cat === c ? ' is-active' : '')}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid2">
          {products.map((p) => (
            <button key={p.id} className="pcard" onClick={() => nav(`/shop/${p.id}`)}>
              <StillLife variant={p.art} className="pcard__art" />
              <div className="pcard__body">
                <span className="pcard__cat">{p.category}</span>
                <span className="pcard__name">{p.name}</span>
                <span className="pcard__price">${p.price}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      <BottomNav />
    </>
  )
}
