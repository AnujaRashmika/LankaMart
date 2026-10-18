import { ShieldCheck, Truck, CreditCard } from 'lucide-react'
import '../styles/Hero.css'

const perks = [
  { Icon: ShieldCheck, title: 'Fresh & Quality', sub: 'Products' },
  { Icon: Truck, title: 'Fast & Reliable', sub: 'Delivery' },
  { Icon: CreditCard, title: 'Secure', sub: 'Payments' },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <small>FRESH • HEALTHY • ALWAYS</small>
        <h1>Fresh Groceries Delivered to Your Doorstep</h1>
        <p>
          Shop from a wide range of fresh fruits, vegetables, dairy, pantry staples and more.
          Quality you can trust, convenience you'll love.
        </p>
        <ul className="perks">
          {perks.map(({ Icon, title, sub }) => (
            <li key={title}>
              <span className="perks__icon">
                <Icon size={22} strokeWidth={1.9} />
              </span>
              <div>
                <b>{title}</b>
                <br />
                {sub}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="hero__img">
        <img src="/images/hero.png" alt="Basket of fresh fruits and vegetables" />
        <div className="hero__badge">
          <span>Good Food</span>
          <strong>Better Life</strong>
        </div>
      </div>
    </section>
  )
}
