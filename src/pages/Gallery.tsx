// src/pages/Gallery.tsx
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import ImageModal from '../components/ImageModal'

const PORTFOLIO_IMAGES = [
  { img: '/src/assets/photos/portfolio/port1.webp',  enlarge: true },
  { img: '/src/assets/photos/portfolio/port2.webp',  enlarge: true },
  { img: '/src/assets/photos/portfolio/port3.webp',  enlarge: true },
  { img: '/src/assets/photos/portfolio/port4.webp',  enlarge: true },
  { img: '/src/assets/photos/portfolio/port5.webp',  enlarge: true },
  { img: '/src/assets/photos/portfolio/port6.webp',  enlarge: true },
  { img: '/src/assets/photos/portfolio/port7.webp',  enlarge: true },
  { img: '/src/assets/photos/portfolio/port8.webp',  enlarge: true },
  { img: '/src/assets/photos/portfolio/port9.webp',  enlarge: true },
  { img: '/src/assets/photos/portfolio/port10.webp', enlarge: true },
  { img: '/src/assets/photos/portfolio/port11.webp', enlarge: true },
  { img: '/src/assets/photos/portfolio/port12.webp', enlarge: true },
  { img: '/src/assets/photos/portfolio/port13.webp', enlarge: true },
  { img: '/src/assets/photos/portfolio/port14.webp', enlarge: true },
  { img: '/src/assets/photos/portfolio/port15.webp', enlarge: true },
  { img: '/src/assets/photos/portfolio/port16.webp', enlarge: true },
  { img: '/src/assets/photos/portfolio/port17.webp', enlarge: true },
  { img: '/src/assets/photos/portfolio/port18.webp', enlarge: true },
  { img: '/src/assets/photos/portfolio/port19.webp', enlarge: true },
  { img: '/src/assets/photos/portfolio/port20.webp', enlarge: true },

]

// --- Modo Fallback ---
// Mientras generas miniaturas, mantenlo en false (usa la full como thumb).
// Cuando ya tengas '/portfolio/thumbs/', cámbialo a true.
const USE_THUMBS = false;

const toThumb = (full: string) =>
  full.replace('/portfolio/', '/portfolio/thumbs/')

const toThumbSrcSet = (full: string) => {
  const base = toThumb(full)
  const noExt = base.replace(/\.webp$/i, '')
  return [
    `${noExt}-320.webp 320w`,
    `${noExt}-480.webp 480w`,
    `${noExt}-640.webp 640w`,
  ].join(', ')
}

export default function Gallery() {
  return (
    <div className="container py-10">
      <h1 className="text-5xl md:text-7xl font-greatvibes text-center mt-4 md:mt-20">
        Our portfolio
      </h1>

      <div className="tb-gallery-grid">
        {PORTFOLIO_IMAGES.map(({ img, enlarge }, i) => {
          const alt = `Portfolio ${i + 1}`
          const thumb = USE_THUMBS ? toThumb(img) : img

          return (
            <div key={i} className="tb-thumb-card">
              {enlarge ? (
                <ImageModal
                  // Miniatura (si no existe y USE_THUMBS=true, el onError interno debe caer a full)
                  thumbSrc={thumb}
                  // Imagen grande en el modal
                  fullSrc={img}
                  alt={alt}
                  // Activa cuando tengas varias escalas de thumb:
                  // thumbSrcSet={USE_THUMBS ? toThumbSrcSet(img) : undefined}
                  // thumbSizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                  className="tb-thumb-img cursor-zoom-in"
                />
              ) : (
                <LazyLoadImage
                  src={thumb}
                  alt={alt}
                  loading="lazy"
                  effect="blur"
                  className="tb-thumb-img"
                  wrapperClassName="w-full h-full"
                  // Si USE_THUMBS=true pero la miniatura no existe, reintenta con la full
                  onError={(e: any) => (e.currentTarget.src = img)}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}