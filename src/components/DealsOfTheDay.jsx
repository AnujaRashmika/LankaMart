import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { deals } from '../data/deals.js'
import ProductCard from './ProductCard.jsx'
import '../styles/Sections.css'

// Seconds left until local midnight
const secondsToMidnight = () => {
  const now = new Date()
  const end = new Date(now)
  end.setHours(24, 0, 0, 0)
  return Math.max(0, Math.floor((end - now) / 1000))
}

const pad = (n) => String(n).padStart(2, '0')

function Countdown() {
  const [left, setLeft] = useState(secondsToMidnight)

  useEffect(() => {
    const id = setInterval(() => setLeft(secondsToMidnight()), 1000)
    return () => clearInterval(id)
  }, [])

  const parts = [Math.floor(left / 3600), Math.floor((left % 3600) / 60), left % 60]

  return (
    <div className="countdown" aria-label="Time left for today's deals">
      {parts.map((n, i) => (
        <span key={i}>{pad(n)}</span>
      ))}
    </div>
  )
}

export default function DealsOfTheDay({ onAdd }) {
  return (
    <section className="section">
      <div className="section__head">
        <div className="deal-title">
          <h2>Deals of the Day</h2>
          <Countdown />
        </div>
        <Link to="/">
          View All Deals <ArrowRight size={16} />
        </Link>
      </div>
      <div className="product-grid product-grid--4">
        {deals.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  )
}
