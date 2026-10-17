import { ArrowRight } from 'lucide-react'
import { offers } from '../data/offers.js'
import '../styles/Offers.css'

export default function Offers() {
  return (
    <section className="offers">
      {offers.map((o) => (
        <article key={o.id} className={`offer ${o.className}`}>
          <div className="offer__text">
            <h3>{o.title}</h3>
            <p>{o.text}</p>
            <button className="btn btn--white btn--icon" type="button">
              {o.button} <ArrowRight size={16} />
            </button>
          </div>
          <img src={o.image} alt={o.title} />
        </article>
      ))}
    </section>
  )
}
