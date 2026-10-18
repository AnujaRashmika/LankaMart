import { Link, useLocation } from 'react-router-dom'
import { Search, User, ShoppingCart, Menu } from 'lucide-react'
import Logo from './Logo.jsx'
import '../styles/Header.css'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/' },
  { label: 'Deals', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/#contact' },
]

export default function Header({ cartCount }) {
  const { pathname, hash } = useLocation()
  const isActive = (label) =>
    label === 'Contact' ? hash === '#contact' : label === 'About Us' ? pathname === '/about' : label === 'Home' ? pathname === '/' && !hash : false

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
          {links.map(({ label, to }) => (
            <Link key={label} to={to} className={isActive(label) ? 'active' : ''}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
