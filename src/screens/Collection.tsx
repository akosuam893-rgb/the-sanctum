import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import StatusBar from '../components/StatusBar'
import StillLife from '../components/StillLife'
import { Back, Bag, Check } from '../components/Icons'
import './Collection.css'

const features = [
  'Premium linen-bound cover',
  'Thoughtfully designed layouts',
  'A Sanctum keepsake',
]

export default function Collection() {
  const nav = useNavigate()
  const [bag, setBag] = useState(2)
  const [added, setAdded] = useState(false)

  const addToBag = () => {
    setBag((n) => n + 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  return (
    <>
      <StatusBar />
      <div className="screen collection">
        <div className="topbar collection__bar">
          <button className="iconbtn" onClick={() => nav('/home')} aria-label="Back">
            <Back />
          </button>
          <span className="topbar__title">The Sanctum Collection</span>
          <button className="iconbtn iconbtn--badge" aria-label="Bag">
            <Bag />
            {bag > 0 && <span>{bag}</span>}
          </button>
        </div>

        <div className="collection__hero">
          <StillLife variant="journal" className="collection__img" />
        </div>

        <div className="collection__pad">
          <h1 className="collection__title serif">The Sanctum Journal</h1>
          <p className="collection__sub serif">
            For thoughts, plans, and beautiful moments.
          </p>

          <div className="collection__pricerow">
            <span className="collection__price serif">$48</span>
            <span className="collection__badge">
              <span className="collection__dot">✦</span> Members Exclusive
            </span>
          </div>

          <p className="collection__desc">
            A timeless companion for your everyday rituals and extraordinary
            aspirations.
          </p>

          <ul className="checklist">
            {features.map((f) => (
              <li key={f} className="checklist__item">
                <Check className="checklist__icon" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="collection__foot">
        <button className="btn-primary" onClick={addToBag}>
          {added ? 'Added to Bag ✦' : 'Add to Bag'}
        </button>
      </div>
    </>
  )
}
