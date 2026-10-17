import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Categories from './components/Categories.jsx'
import Offers from './components/Offers.jsx'
import PopularProducts from './components/PopularProducts.jsx'
import DailyDeals from './components/DailyDeals.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [cartCount, setCartCount] = useState(0)
  const addToCart = () => setCartCount((c) => c + 1)

  return (
    <>
      <Header cartCount={cartCount} />
      <main className="container">
        <Hero />
        <Categories />
        <Offers />
        <PopularProducts onAdd={addToCart} />
        <DailyDeals />
      </main>
      <Footer />
    </>
  )
}
