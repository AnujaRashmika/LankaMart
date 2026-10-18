import { useState } from 'react'
import { imageCandidates } from '../utils/imageSources.js'

// Shows the product photo, trying the common locations and extensions.
// If no file is found it shows a plain soft-green block (no icon).
// While developing (npm run dev) the block also says which file it was looking for.
function Img({ src, alt, className }) {
  const list = imageCandidates(src)
  const [i, setI] = useState(0)

  if (i >= list.length) {
    return (
      <div className={`${className} img-fallback`} role="img" aria-label={alt}>
        {import.meta.env.DEV && <small className="img-fallback__hint">{src.replace(/^\//, '')}.png not found</small>}
      </div>
    )
  }
  return <img className={className} src={list[i]} alt={alt} onError={() => setI(i + 1)} />
}

export default function ProductImage({ src, alt, className = '' }) {
  if (!src) return <div className={`${className} img-fallback`} role="img" aria-label={alt} />
  // key restarts the search when the product changes
  return <Img key={src} src={src} alt={alt} className={className} />
}
