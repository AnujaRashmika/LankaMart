import { ArrowRight } from 'lucide-react'
import { categories } from '../data/categories.js'
import '../styles/Categories.css'

export default function Categories() {
  return (
    <section className="section">
      <div className="section__head">
        <h2>Shop by Category</h2>
        <a href="#">View All <ArrowRight size={16} /></a>
      </div>
      <div className="cat-grid">
        {categories.map((c) => (
          <a key={c.id} href="#" className="cat" style={{ background: c.tint }}>
            <img src={c.image} alt={c.name} />
            <span>{c.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
