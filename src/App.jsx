import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const [cartCount, setCartCount] = useState(0)
  const addToCart = (qty = 1) => setCartCount((c) => c + qty)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header cartCount={cartCount} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home onAdd={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail onAdd={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
