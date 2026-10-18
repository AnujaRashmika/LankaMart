import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ChevronRight, Star, Heart, ShoppingCart, Minus, Plus, Check,
  Truck, ShieldCheck, RotateCcw, Leaf,
} from 'lucide-react'
import { getProductById, getRelated, categoryInfo } from '../data/catalog.js'
import ProductImage from '../components/ProductImage.jsx'
import ProductCard from '../components/ProductCard.jsx'
import NotFound from './NotFound.jsx'
import '../styles/Products.css'
import '../styles/ProductDetail.css'

const assurances = [
  { Icon: Truck, text: 'Same-day delivery in Colombo' },
  { Icon: ShieldCheck, text: 'Quality guaranteed' },
  { Icon: RotateCcw, text: 'Easy returns' },
]

const tabs = ['Description', 'Product Details', 'Delivery & Returns']

function Detail({ product, onAdd }) {
  const { id, name, category, badge, rating, price, oldPrice, unit, image, desc, origin } = product
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const [wished, setWished] = useState(false)
  const [tab, setTab] = useState(tabs[0])

  const info = categoryInfo[category] || { shelf: '—', storage: '—' }
  const discount = oldPrice ? Math.round((1 - price / oldPrice) * 100) : 0
  const reviews = 40 + ((id * 37) % 160)
  const related = getRelated(product, 4)

  useEffect(() => {
    if (!added) return undefined
    const t = setTimeout(() => setAdded(false), 1600)
    return () => clearTimeout(t)
  }, [added])

  const handleAdd = () => {
    onAdd(qty)
    setAdded(true)
  }

  return (
    <div className="pd">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <ChevronRight size={14} />
        <span>{category}</span>
        <ChevronRight size={14} />
        <b>{name}</b>
      </nav>

      <div className="pd__main">
        <div className="pd__gallery">
          {discount > 0 ? (
            <span className="tag tag--sale">-{discount}%</span>
          ) : (
            <span className={`tag tag--${badge.toLowerCase().replace(' ', '-')}`}>{badge}</span>
          )}
          <ProductImage src={image} alt={name} className="pd__img" />
        </div>

        <div className="pd__info">
          <span className="pd__cat">{category}</span>
          <h1>{name}</h1>

          <div className="pd__rating">
            <span className="pd__stars" aria-label={`Rated ${rating.toFixed(1)} out of 5`}>
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} size={16} fill={n <= Math.round(rating) ? 'currentColor' : 'none'} />
              ))}
            </span>
            <b>{rating.toFixed(1)}</b>
            <span>({reviews} reviews)</span>
          </div>

          <div className="pd__price">
            <strong>${price.toFixed(2)}</strong>
            <small>{unit}</small>
            {oldPrice && <s>${oldPrice.toFixed(2)}</s>}
            {discount > 0 && <em>Save {discount}%</em>}
          </div>

          <p className="pd__desc">{desc}</p>

          <div className="pd__stock">
            <Check size={16} /> In stock
            <span>·</span>
            <Leaf size={16} /> Origin: {origin}
          </div>

          <div className="pd__buy">
            <div className="qty" role="group" aria-label="Quantity">
              <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
                <Minus size={16} />
              </button>
              <span>{qty}</span>
              <button type="button" onClick={() => setQty((q) => Math.min(20, q + 1))} aria-label="Increase quantity">
                <Plus size={16} />
              </button>
            </div>
            <button className={`btn btn--icon pd__add ${added ? 'is-added' : ''}`} type="button" onClick={handleAdd}>
              {added ? <Check size={18} /> : <ShoppingCart size={18} />}
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>
            <button
              className={`pd__wish ${wished ? 'on' : ''}`}
              type="button"
              aria-pressed={wished}
              aria-label="Add to wishlist"
              onClick={() => setWished((w) => !w)}
            >
              <Heart size={20} fill={wished ? 'currentColor' : 'none'} />
            </button>
          </div>

          <div className="pd__total">
            Total: <b>${(price * qty).toFixed(2)}</b>
          </div>

          <ul className="pd__assure">
            {assurances.map(({ Icon, text }) => (
              <li key={text}>
                <Icon size={18} /> {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="pd__tabs">
        <div className="tabs">
          {tabs.map((t) => (
            <button key={t} type="button" className={t === tab ? 'on' : ''} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>
        <div className="pd__panel">
          {tab === 'Description' && (
            <p>
              {desc} Every LankaMart product is carefully selected and checked for freshness before it
              leaves our store, so you can shop with confidence.
            </p>
          )}
          {tab === 'Product Details' && (
            <table>
              <tbody>
                <tr><th>Category</th><td>{category}</td></tr>
                <tr><th>Pack size</th><td>{unit.replace('/', 'Per ')}</td></tr>
                <tr><th>Origin</th><td>{origin}</td></tr>
                <tr><th>Shelf life</th><td>{info.shelf}</td></tr>
                <tr><th>Storage</th><td>{info.storage}</td></tr>
              </tbody>
            </table>
          )}
          {tab === 'Delivery & Returns' && (
            <ul>
              <li>Order before 2:00 PM for same-day delivery within Colombo.</li>
              <li>Delivery is free on your first order with code WELCOME1.</li>
              <li>Not happy with your item? Contact us within 24 hours for a replacement or refund.</li>
            </ul>
          )}
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2>You May Also Like</h2>
        </div>
        <div className="product-grid product-grid--4">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default function ProductDetail({ onAdd }) {
  const { id } = useParams()
  const product = getProductById(id)
  if (!product) return <NotFound message="Product not found" />
  // key resets quantity, tabs etc. when moving to another product
  return <Detail key={product.id} product={product} onAdd={onAdd} />
}
