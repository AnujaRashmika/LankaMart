import { products } from './products.js'
import { deals, bestSellers } from './deals.js'

export const catalog = [...products, ...deals, ...bestSellers]

export const getProductById = (id) => catalog.find((p) => String(p.id) === String(id))

export const getRelated = (product, limit = 4) => {
  const same = catalog.filter((p) => p.category === product.category && p.id !== product.id)
  const others = catalog.filter((p) => p.category !== product.category && p.id !== product.id)
  return [...same, ...others].slice(0, limit)
}

// Shelf life / storage info shown on the product page, by category
export const categoryInfo = {
  Fruits: { shelf: '5–7 days', storage: 'Keep in a cool, dry place. Refrigerate once ripe.' },
  Vegetables: { shelf: '4–6 days', storage: 'Store in the refrigerator crisper drawer.' },
  Dairy: { shelf: '5–10 days', storage: 'Keep refrigerated at 1–4°C.' },
  Bakery: { shelf: '2–3 days', storage: 'Store in a cool, dry place in an airtight bag.' },
  Snacks: { shelf: '6 months', storage: 'Store in a cool, dry place. Reseal after opening.' },
  Meat: { shelf: '2 days', storage: 'Keep refrigerated at 0–4°C, or freeze for up to 3 months.' },
  Seafood: { shelf: '2 days', storage: 'Keep refrigerated at 0–2°C, or freeze for up to 3 months.' },
}
