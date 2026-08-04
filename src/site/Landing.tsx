import { useState } from 'react'
import Logo from '../components/Logo'
import StillLife from '../components/StillLife'
import { Bell, Sparkle, Leaf, Bag, Check } from '../components/Icons'
import { PRODUCTS } from '../store/catalog'
import { useRevealOnScroll, useScrolled, useScrollTo } from './hooks'
import './site.css'

const BENEFITS = [
  { Icon: Bell, title: 'Concierge', text: 'A dedicated team who anticipates. Reservations, travel, rare requests—handled, day or night.' },
  { Icon: Sparkle, title: 'Experiences', text: 'Private dinners, cellar tastings and cultural evenings—curated for a life well lived.' },
  { Icon: Leaf, title: 'Wellness', text: 'Restorative rituals and quiet spaces designed to return you to yourself.' },
  { Icon: Bag, title: 'The Collection', text: 'Considered objects and member-exclusive pieces, beautifully made and delivered with intention.' },
]

const STATS = [
  { n: '2,400+', l: 'Members' },
  { n: '18', l: 'Cities' },
  { n: '600+', l: 'Experiences a year' },
  { n: '24/7', l: 'Concierge' },
]

const QUOTES = [
  { text: 'The Sanctum quietly gives me back my time. It has become the most useful thing I own.', name: 'Eleanor V.', role: 'Founding Member · London', av: 'E' },
  { text: 'Every detail is considered. From the concierge to the collection, it simply feels like home.', name: 'Marcus R.', role: 'Member · New York', av: 'M' },
  { text: 'I joined for the experiences and stayed for the calm. Nothing else comes close.', name: 'Aisha K.', role: 'Member · Paris', av: 'A' },
]

const FAQS = [
  { q: 'How do I become a member?', a: 'Request an invitation below. Our membership team reviews each application personally and responds within a few days. Membership is intentionally limited.' },
  { q: 'What does membership include?', a: 'A dedicated concierge, access to private experiences, the wellness programme, and the member-only Collection—plus everything in the app, saved between visits.' },
  { q: 'Is there a waiting list?', a: 'Founding places are capped each season. When a season is full, new applications join the waiting list and are offered places as they open.' },
  { q: 'Can I cancel anytime?', a: 'Yes. Membership renews annually and can be paused or cancelled at any time from your profile—no questions, no friction.' },
]

export default function Landing() {
  useRevealOnScroll()
  const scrolled = useScrolled(20)
  const scrollTo = useScrollTo()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (name.trim().length < 2) return setError('Please enter your name.')
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return setError('Please enter a valid email.')
    try {
      const key = 'the-sanctum:invitations'
      const list = JSON.parse(localStorage.getItem(key) || '[]')
      list.push({ name: name.trim(), email: email.trim().toLowerCase(), at: Date.now() })
      localStorage.setItem(key, JSON.stringify(list))
    } catch { /* ignore storage errors */ }
    setDone(true)
  }

  return (
    <div className="site">
      {/* NAV */}
      <header className={'nav' + (scrolled ? ' is-scrolled' : '')}>
        <div className="wrap nav__inner">
          <div className="nav__brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo size={30} />
            <span className="nav__brand-name">The Sanctum</span>
          </div>
          <nav className="nav__links">
            <button onClick={() => scrollTo('club')}>The Club</button>
            <button onClick={() => scrollTo('experience')}>Experience</button>
            <button onClick={() => scrollTo('collection')}>Collection</button>
            <button onClick={() => scrollTo('membership')}>Membership</button>
          </nav>
          <div className="nav__actions">
            <button className="nav__signin" onClick={() => scrollTo('apply')}>Sign in</button>
            <button className="cta" onClick={() => scrollTo('apply')}>Request Invitation</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero__arch" aria-hidden />
        <div className="wrap hero__grid">
          <div>
            <span className="hero__eyebrow kicker"><i className="dot" /> By invitation · Limited membership</span>
            <h1>A life of beauty,<br /><em>curated for you.</em></h1>
            <p className="hero__sub">
              The Sanctum is a private members club for those who value their time.
              One quiet place for your concierge, experiences, wellness and a
              considered collection.
            </p>
            <div className="hero__actions">
              <button className="cta" onClick={() => scrollTo('apply')}>Request an Invitation</button>
              <button className="cta cta--ghost" onClick={() => scrollTo('experience')}>Explore the club</button>
            </div>
            <div className="hero__trust">
              <div className="hero__avatars" aria-hidden>
                {['E', 'M', 'A', 'S'].map((c) => <span key={c}>{c}</span>)}
              </div>
              <span>Joined by 2,400+ members across 18 cities</span>
            </div>
          </div>
          <div className="hero__visual">
            <StillLife variant="edit" />
            <div className="hero__badge">
              <b>Members only</b>
              <span>A world curated around you</span>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <div className="logos">
        <div className="wrap logos__row">
          {['Aesop', 'Aman', 'Frette', 'Officine', 'Le Labo', 'Soho House'].map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
      </div>

      {/* BENEFITS */}
      <section className="section" id="club">
        <div className="wrap">
          <div className="section__head reveal">
            <span className="kicker">Why members join</span>
            <h2>Everything a considered life asks for—in one place</h2>
            <p>Membership brings the details together, so the everyday feels effortless and the extraordinary feels within reach.</p>
          </div>
          <div className="benefits">
            {BENEFITS.map(({ Icon, title, text }) => (
              <div key={title} className="benefit reveal">
                <div className="benefit__icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE ROWS */}
      <section className="section section--tint" id="experience">
        <div className="wrap">
          <div className="section__head reveal">
            <span className="kicker">The experience</span>
            <h2>Considered. Calm. Entirely yours.</h2>
          </div>

          <div className="frow reveal">
            <div className="frow__art"><StillLife variant="concierge" /></div>
            <div>
              <span className="kicker">Concierge</span>
              <h3>A team that anticipates, so you can simply be.</h3>
              <p>From a table across town to a villa across the world, your concierge handles the details—quietly, precisely, and always on your terms.</p>
              <ul className="frow__list">
                <li><Check /> Dining, travel &amp; event planning</li>
                <li><Check /> Rare and personal requests</li>
                <li><Check /> One team, available 24/7</li>
              </ul>
            </div>
          </div>

          <div className="frow frow--flip reveal">
            <div className="frow__art"><StillLife variant="spa" /></div>
            <div>
              <span className="kicker">Experiences &amp; Wellness</span>
              <h3>Time that returns you to yourself.</h3>
              <p>Private dinners, cellar tastings and restorative rituals—curated for presence, not performance. Reserve in a tap; remembered for you.</p>
              <ul className="frow__list">
                <li><Check /> Members-only events &amp; experiences</li>
                <li><Check /> Wellness rituals and quiet spaces</li>
                <li><Check /> Reserved and tracked in your app</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="section" id="collection">
        <div className="wrap">
          <div className="section__head reveal">
            <span className="kicker">The Collection</span>
            <h2>Beautifully made. Member-exclusive.</h2>
            <p>A small, considered collection of objects for everyday rituals—chosen by The Sanctum and offered only to members.</p>
          </div>
          <div className="coll">
            {PRODUCTS.slice(0, 6).map((p) => (
              <article key={p.id} className="pitem reveal" onClick={() => scrollTo('apply')}>
                <StillLife variant={p.art} className="pitem__art" />
                <div className="pitem__body">
                  <span className="pitem__cat">{p.category}</span>
                  <div className="pitem__name">{p.name}</div>
                  <div className="pitem__foot">
                    <span className="pitem__price">${p.price}</span>
                    <span className="pitem__tag">Members only</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section section--tint">
        <div className="wrap">
          <div className="stats">
            {STATS.map((s) => (
              <div key={s.l} className="stat reveal">
                <b>{s.n}</b>
                <span>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="wrap">
          <div className="section__head reveal">
            <span className="kicker">In their words</span>
            <h2>Loved by members who value their time</h2>
          </div>
          <div className="quotes">
            {QUOTES.map((q) => (
              <figure key={q.name} className="quote reveal">
                <div className="quote__stars">★★★★★</div>
                <blockquote className="quote__text">“{q.text}”</blockquote>
                <figcaption className="quote__who">
                  <span className="quote__av">{q.av}</span>
                  <span>
                    <span className="quote__name">{q.name}</span><br />
                    <span className="quote__role">{q.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP TIERS */}
      <section className="section section--tint" id="membership">
        <div className="wrap">
          <div className="section__head reveal">
            <span className="kicker">Membership</span>
            <h2>Choose how you belong</h2>
            <p>One membership, two ways to begin. Every place includes the full club—concierge, experiences, wellness and the Collection.</p>
          </div>
          <div className="tiers">
            <div className="tier reveal">
              <div className="tier__name">Member</div>
              <p className="tier__desc">The full Sanctum, renewed each year.</p>
              <div className="tier__price"><b>$240</b><span>/ year</span></div>
              <ul className="tier__list">
                <li><Check /> 24/7 concierge</li>
                <li><Check /> Members-only experiences</li>
                <li><Check /> Wellness programme</li>
                <li><Check /> Access to the Collection</li>
              </ul>
              <button className="cta cta--ghost cta--block" onClick={() => scrollTo('apply')}>Request Invitation</button>
            </div>

            <div className="tier tier--feature reveal">
              <span className="tier__flag">Founding · limited</span>
              <div className="tier__name">Founding Member</div>
              <p className="tier__desc">For the first members. Priority, forever.</p>
              <div className="tier__price"><b>$390</b><span>/ year</span></div>
              <ul className="tier__list">
                <li><Check /> Everything in Member</li>
                <li><Check /> Priority concierge &amp; reservations</li>
                <li><Check /> First access to every experience</li>
                <li><Check /> Founding pricing, locked for life</li>
              </ul>
              <button className="cta cta--block" onClick={() => scrollTo('apply')}>Claim a founding place</button>
              <p className="tier__scarce">Only 50 founding places this season</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <div className="section__head reveal">
            <span className="kicker">Questions</span>
            <h2>Everything you might ask</h2>
          </div>
          <div className="faq reveal">
            {FAQS.map((f, i) => (
              <div key={f.q} className={'faq__item' + (openFaq === i ? ' is-open' : '')}>
                <button className="faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}
                  <span className="faq__sign">+</span>
                </button>
                <div className="faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA / FORM */}
      <section className="final" id="apply">
        <div className="final__arch" aria-hidden />
        <div className="wrap">
          <div className="final__inner reveal">
            {done ? (
              <div className="success">
                <span className="success__mark"><Check /></span>
                <h3 className="serif">You're on the list</h3>
                <p>Thank you, {name.split(' ')[0]}. Our membership team will be in touch at {email} within a few days.</p>
              </div>
            ) : (
              <>
                <span className="kicker">Request an invitation</span>
                <h2>Begin your membership</h2>
                <p>Membership is limited and by invitation. Tell us where to reach you and our team will personally follow up.</p>
                <form className="form" onSubmit={submit} noValidate>
                  {error && <div className="form__err">{error}</div>}
                  <div className="form__row">
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" autoComplete="name" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" type="email" autoComplete="email" />
                  </div>
                  <button className="cta cta--block" type="submit">Request my invitation</button>
                  <p className="form__note">No commitment. Reviewed personally within a few days.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer__top">
            <div className="footer__brand">
              <Logo size={30} />
              <div className="footer__brand-name">The Sanctum</div>
              <p>A members club for a life well lived. By invitation.</p>
            </div>
            <div className="footer__col">
              <h4>The Club</h4>
              <button onClick={() => scrollTo('club')}>Why join</button>
              <button onClick={() => scrollTo('experience')}>Experience</button>
              <button onClick={() => scrollTo('collection')}>Collection</button>
            </div>
            <div className="footer__col">
              <h4>Membership</h4>
              <button onClick={() => scrollTo('membership')}>Tiers</button>
              <button onClick={() => scrollTo('apply')}>Request invitation</button>
              <button onClick={() => scrollTo('apply')}>Member sign in</button>
            </div>
            <div className="footer__col">
              <h4>Contact</h4>
              <button onClick={() => scrollTo('apply')}>Membership team</button>
              <button onClick={() => scrollTo('apply')}>Press</button>
              <button onClick={() => scrollTo('apply')}>Careers</button>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} The Sanctum. All rights reserved.</span>
            <span>Privacy · Terms · Cookies</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
