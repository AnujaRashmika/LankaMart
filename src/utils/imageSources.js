// Finds a product / page image by name, forgiving about where it was saved and its extension.
//   1. any image inside src/ (e.g. src/images/deals1.png, src/assets/deals1.jpg)
//   2. public/images/<name> with .jpg / .png / .webp / .jpeg (upper or lower case)
const bundled = import.meta.glob('/src/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const bundledByName = {}
for (const [path, url] of Object.entries(bundled)) {
  const file = path.split('/').pop().replace(/\.\w+$/, '').toLowerCase()
  bundledByName[file] = url
}

const EXTS = ['jpg', 'png', 'webp', 'jpeg', 'JPG', 'PNG', 'WEBP', 'JPEG']

// "/images/deals1" or "/images/deals1.png" -> ordered list of URLs to try
export function imageCandidates(src) {
  const m = src.match(/^(.*?)(?:\.(\w+))?$/)
  const base = m[1]
  const first = m[2]
  const name = base.split('/').pop().toLowerCase()

  const list = []
  if (bundledByName[name]) list.push(bundledByName[name])
  const exts = [...new Set([first, ...EXTS].filter(Boolean))]
  exts.forEach((e) => list.push(`${base}.${e}`))
  // Windows hides extensions, so a file saved as "deals1.png.png" is common
  list.push(`${base}.png.png`, `${base}.jpg.jpg`)
  return list
}
