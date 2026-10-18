import { bestSellers } from '../data/deals.js'
import ProductCard from './ProductCard.jsx'
import '../styles/Products.css'
import '../styles/Sections.css'

export default function BestSellers({ onAdd }) {
  return (
    <section className="section">
      <div className="section__head">
        <h2>Best Selling Products</h2>
      </div>
      <div className="product-grid product-grid--4">
        {bestSellers.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  )
}
