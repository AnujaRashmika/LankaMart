import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Leaf, Sprout, Truck, ShieldCheck, PackageCheck, ShoppingBasket, ArrowRight } from 'lucide-react'
import { imageCandidates } from '../utils/imageSources.js'
import '../styles/About.css'

// Images go in public/images/ as about1, about2, about3, about4 (jpg / png / webp all work)

function AboutImage({ name, caption }) {
  const list = imageCandidates(`/images/${name}`)
  const [i, setI] = useState(0)
  const failed = i >= list.length
  return (
    <figure className="about__photo">
      {!failed && (
        <img
          src={list[i]}
          alt={caption}
          loading="lazy"
          onError={() => setI(i + 1)}
        />
      )}
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

const photos = [
  { name: 'about1', caption: 'From local farms' },
  { name: 'about2', caption: 'Hand-picked daily' },
  { name: 'about3', caption: 'Packed with care' },
  { name: 'about4', caption: 'Delivered to you' },
]

const stats = [
  { value: '10K+', label: 'Happy customers' },
  { value: '150+', label: 'Local suppliers' },
  { value: '500+', label: 'Fresh products' },
]

const features = [
  { Icon: Leaf, title: 'Fresh & Natural', text: 'Produce is sourced daily and checked before it reaches you.' },
  { Icon: Sprout, title: 'Supporting Farmers', text: 'We buy directly from Sri Lankan farmers and local suppliers.' },
  { Icon: Truck, title: 'Fast Delivery', text: 'Same-day delivery so your groceries arrive at their best.' },
  { Icon: ShieldCheck, title: 'Quality Promise', text: 'Not happy with an item? We will replace it or refund you.' },
]

const steps = [
  { Icon: Sprout, title: 'We buy from farmers', text: 'Our team works with growers across the island and pays them a fair price.' },
  { Icon: PackageCheck, title: 'We check and pack', text: 'Every item is checked by hand, then packed carefully to stay fresh.' },
  { Icon: ShoppingBasket, title: 'You get it the same day', text: 'Order before the cut-off and your groceries arrive at your door.' },
]

export default function About() {
  return (
    <div className="about">
      <section className="about__intro">
        <div className="about__text">
          <span className="about__eyebrow">About us</span>
          <h1>Fresh food, delivered by people who care</h1>
          <p>
            LankaMart started with a simple idea: everyone should be able to get fresh, good-quality
            groceries without the hassle. We work with local farmers and trusted suppliers, and our team
            picks, packs and delivers every order with care.
          </p>
          <p>
            From farm to your doorstep, we want to make everyday shopping easier, fairer and fresher for
            families across Sri Lanka.
          </p>
          <div className="about__stats">
            {stats.map((s) => (
              <div key={s.label} className="about__stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about__photos">
          {photos.map((p) => (
            <AboutImage key={p.name} {...p} />
          ))}
        </div>
      </section>

      <section className="about__features" aria-label="Why choose LankaMart">
        {features.map(({ Icon, title, text }) => (
          <div key={title} className="about__feature">
            <span className="about__icon"><Icon size={18} /></span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="about__how">
        <h2>How your groceries reach you</h2>
        <div className="about__steps">
          {steps.map(({ Icon, title, text }, i) => (
            <div key={title} className="about__step">
              <span className="about__step-no">{i + 1}</span>
              <Icon size={26} strokeWidth={1.6} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about__cta">
        <div>
          <h2>Ready for fresher groceries?</h2>
          <p>Browse today's produce and get it delivered to your door.</p>
        </div>
        <Link to="/" className="btn btn--white btn--icon">
          Start shopping <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  )
}
