import { Link } from 'react-router-dom'
import { SearchX } from 'lucide-react'
import '../styles/ProductDetail.css'

export default function NotFound({ message = 'Page not found' }) {
  return (
    <section className="notfound">
      <SearchX size={56} strokeWidth={1.4} />
      <h2>{message}</h2>
      <p>The page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="btn">Back to Home</Link>
    </section>
  )
}
