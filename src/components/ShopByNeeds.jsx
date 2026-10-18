import { ChefHat, HeartPulse, PiggyBank, Users } from 'lucide-react'
import '../styles/Sections.css'

const needs = [
  { Icon: ChefHat, title: 'Quick Meals', sub: 'Ready to Cook', color: '#e8590c', bg: '#fff0e3' },
  { Icon: HeartPulse, title: 'Healthy Living', sub: 'Fresh & Organic', color: '#2b8a3e', bg: '#e6f6e9' },
  { Icon: PiggyBank, title: 'Budget Friendly', sub: 'Save More', color: '#1c7ed6', bg: '#e7f1fc' },
  { Icon: Users, title: 'Family Packs', sub: 'Great Value', color: '#ae3ec9', bg: '#f6eafb' },
]

export default function ShopByNeeds() {
  return (
    <section className="section">
      <div className="section__head">
        <h2>Shop by Needs</h2>
      </div>
      <div className="needs">
        {needs.map(({ Icon, title, sub, color, bg }) => (
          <a key={title} href="#" className="need">
            <span className="need__icon" style={{ background: bg, color }}>
              <Icon size={30} strokeWidth={1.8} />
            </span>
            <b>{title}</b>
            <small>{sub}</small>
          </a>
        ))}
      </div>
    </section>
  )
}
