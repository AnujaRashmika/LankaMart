import { ArrowRight } from 'lucide-react'
import '../styles/Sections.css'

export default function StoryBanner() {
  return (
    <section className="story">
      <div className="story__text">
        <h2>Good Food Brings People Together</h2>
        <p>Fresh groceries, healthy families, and a happier tomorrow for all.</p>
        <button className="btn btn--white btn--icon" type="button">
          Shop Now <ArrowRight size={16} />
        </button>
      </div>
      <img src="/images/hero.png" alt="" aria-hidden="true" onError={(e) => { e.currentTarget.style.display = 'none' }} />
    </section>
  )
}
