import { Search, User, Heart, ShoppingCart, Menu, MapPin } from 'lucide-react'
import Logo from './Logo.jsx'
import '../styles/Header.css'

const links = ['Home', 'Shop', 'Deals', 'About Us', 'Contact']

export default function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="container header__top">
        <Logo />
        <form className="search" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Search for fresh fruits, vegetables, groceries..." />
          <button type="submit" aria-label="Search">
            <Search size={18} />
          </button>
        </form>
        <div className="header__actions">
          <button className="icon-btn" type="button">
            <User size={22} strokeWidth={1.9} />
            Account
          </button>
          <button className="icon-btn" type="button">
            <Heart size={22} strokeWidth={1.9} />
            Wishlist
          </button>
          <button className="icon-btn cart" type="button">
            <ShoppingCart size={22} strokeWidth={1.9} />
            Cart
            {cartCount > 0 && <b className="badge">{cartCount}</b>}
          </button>
        </div>
      </div>
      <div className="container header__nav">
        <button className="all-cat" type="button">
          <Menu size={18} /> All Categories
        </button>
        <nav>
          {links.map((l, i) => (
            <a key={l} href="#" className={i === 0 ? 'active' : ''}>{l}</a>
          ))}
        </nav>
        <div className="deliver">
          <MapPin size={16} /> Deliver to <b>Piliyandala, Colombo</b>
        </div>
      </div>
    </header>
  )
}
