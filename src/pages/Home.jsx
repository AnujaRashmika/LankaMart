import Hero from '../components/Hero.jsx'
import Categories from '../components/Categories.jsx'
import Offers from '../components/Offers.jsx'
import PopularProducts from '../components/PopularProducts.jsx'
import DealsOfTheDay from '../components/DealsOfTheDay.jsx'
import ShopByNeeds from '../components/ShopByNeeds.jsx'
import BestSellers from '../components/BestSellers.jsx'
import StoryBanner from '../components/StoryBanner.jsx'

export default function Home({ onAdd }) {
  return (
    <>
      <Hero />
      <Categories />
      <Offers />
      <PopularProducts onAdd={onAdd} />
      <DealsOfTheDay onAdd={onAdd} />
      <ShopByNeeds />
      <BestSellers onAdd={onAdd} />
      <StoryBanner />
    </>
  )
}
