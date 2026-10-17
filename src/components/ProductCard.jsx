import { Star, ShoppingCart, Heart } from 'lucide-react'

export default function ProductCard({ product, onAdd }) {
  const { name, badge, rating, price, unit, image } = product
  return (
    <article className="product">
      <span className={`tag tag--${badge.toLowerCase().replace(' ', '-')}`}>{badge}</span>
      <button className="product__wish" type="button" aria-label={`Add ${name} to wishlist`}>
        <Heart size={16} />
      </button>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <div className="rating">
        <Star size={14} fill="currentColor" /> {rating.toFixed(1)}
      </div>
      <div className="price">
        ${price.toFixed(2)}<small>{unit}</small>
      </div>
      <button className="btn btn--block btn--icon" type="button" onClick={onAdd}>
        <ShoppingCart size={16} /> Add to Cart
      </button>
    </article>
  )
}
