import { useState } from 'react'
import { products, productTabs } from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import '../styles/Products.css'

export default function PopularProducts({ onAdd }) {
  const [tab, setTab] = useState('All')
  const list = tab === 'All' ? products : products.filter((p) => p.category === tab)

  return (
    <section className="section">
      <div className="section__head">
        <h2>Popular Products</h2>
        <div className="tabs">
          {productTabs.map((t) => (
            <button key={t} className={t === tab ? 'on' : ''} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>
      </div>
      <div className="product-grid">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  )
}
