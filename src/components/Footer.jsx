import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'
import Logo from './Logo.jsx'
import '../styles/Footer.css'

const shop = ['Fresh Vegetables', 'Fruits', 'Dairy & Eggs', 'Bakery & Bread', 'Meat & Seafood', 'Pantry Staples']
const help = ['About Us', 'Contact Us', 'Delivery Information', 'Returns & Refunds', 'FAQs', 'Privacy Policy']

const Facebook = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21h3z" />
  </svg>
)
const Instagram = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
)
const Youtube = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z" />
  </svg>
)

const socials = [
  { name: 'Facebook', Icon: Facebook },
  { name: 'Instagram', Icon: Instagram },
  { name: 'YouTube', Icon: Youtube },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>
            Your trusted online supermarket. Fresh groceries, everyday essentials and great prices —
            delivered right to your doorstep.
          </p>
          <div className="footer__social">
            {socials.map(({ name, Icon }) => (
              <a key={name} href="#" aria-label={name}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5>Shop</h5>
          <ul>
            {shop.map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h5>Help</h5>
          <ul>
            {help.map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h5>Contact</h5>
          <ul className="footer__contact">
            <li><MapPin size={16} /> Piliyandala, Colombo, Sri Lanka</li>
            <li><Phone size={16} /> +94 11 234 5678</li>
            <li><Mail size={16} /> hello@lankamart.lk</li>
            <li><Clock size={16} /> Daily 7:00 AM – 10:00 PM</li>
          </ul>
          <form className="footer__news" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" aria-label="Email address" />
            <button type="submit" aria-label="Subscribe">
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} LankaMart. Fresh Food • Better Life</p>
          <p>Made with care in Sri Lanka</p>
        </div>
      </div>
    </footer>
  )
}
