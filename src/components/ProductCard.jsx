import { Link } from 'react-router-dom'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import ProductImage from './ProductImage.jsx'

export default function ProductCard({ product, onAdd }) {
  const { id, name, badge, rating, price, oldPrice, unit, image } = product
  const discount = oldPrice ? Math.round((1 - price / oldPrice) * 100) : 0
  const to = `/product/${id}`

  return (
    <article className="product">
      {discount > 0 ? (
        <span className="tag tag--sale">-{discount}%</span>
      ) : (
        <span className={`tag tag--${badge.toLowerCase().replace(' ', '-')}`}>{badge}</span>
      )}
      <button className="product__wish" type="button" aria-label={`Add ${name} to wishlist`}>
        <Heart size={16} />
      </button>
      <Link to={to} className="product__link" aria-label={`View ${name}`}>
        <ProductImage src={image} alt={name} className="product__img" />
        <h4>{name}</h4>
      </Link>
      <div className="rating">
        <Star size={14} fill="currentColor" /> {rating.toFixed(1)}
      </div>
      <div className="price">
        {oldPrice && <s className="price__old">${oldPrice.toFixed(2)}</s>}
        <span className={oldPrice ? 'price__now price__now--sale' : 'price__now'}>${price.toFixed(2)}</span>
        <small>{unit}</small>
      </div>
      <button className="btn btn--block btn--icon" type="button" onClick={() => onAdd(1)}>
        <ShoppingCart size={16} /> Add to Cart
      </button>
    </article>
  )
}
