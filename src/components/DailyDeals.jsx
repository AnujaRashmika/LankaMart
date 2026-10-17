import { ArrowRight } from 'lucide-react'
import '../styles/DailyDeals.css'

export default function DailyDeals() {
  return (
    <section className="deals">
      <div className="deals__text">
        <h2>Daily Fresh Deals</h2>
        <p>Save more on your favourite products.</p>
        <button className="btn btn--white btn--icon" type="button">
          View Deals <ArrowRight size={16} />
        </button>
      </div>
      <img src="/images/flash-deals.png" alt="Daily fresh deals" />
      <div className="deals__off">Up to <b>50%</b> OFF</div>
    </section>
  )
}
