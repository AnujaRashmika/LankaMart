import { Link } from 'react-router-dom'
import { ShoppingBasket } from 'lucide-react'
import '../styles/Logo.css'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo--light' : ''}`} aria-label="LankaMart home">
      <span className="logo__mark">
        <ShoppingBasket size={22} strokeWidth={2.2} />
      </span>
      <span className="logo__text">
        Lanka<b>Mart</b>
      </span>
    </Link>
  )
}
