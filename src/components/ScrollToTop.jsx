import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to top on page change, or to the section when the URL has a #hash (e.g. /#about)
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return undefined
    }
    const t = setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
    return () => clearTimeout(t)
  }, [pathname, hash])

  return null
}
