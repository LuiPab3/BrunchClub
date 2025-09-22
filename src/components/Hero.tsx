// src/components/Hero.tsx
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

// Reemplaza estas rutas por tus fotos reales
const IMAGES = [
  '/src/assets/photos/hero-1.jpg',
  '/src/assets/photos/hero-2.jpg',
  // '/src/assets/photos/hero-3.jpg',
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<number | null>(null)

  // autoplay
  useEffect(() => {
    if (paused) return
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length)
    }, 6000)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [paused])

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + IMAGES.length) % IMAGES.length)

  return (
    <section
      className="px-24 relative w-full h-[55vh] md:h-[70vh] overflow-hidden bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={[
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-700',
            i === index ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        />
      ))}

      {/* Degradado para legibilidad (izq a der) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      {/* Contenido superpuesto */}
      <div className="relative z-10 h-full">
        <div className="container h-full flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="font-display font-semibold leading-[0.95] tracking-tight
                           text-4xl md:text-6xl lg:text-7xl">
              Elevate
              <br />
              your event
            </h1>

            <p className="mt-4 text-white/85 text-base md:text-lg">
              “texto pendiente”.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/reservations"
                className="px-5 py-3 rounded-2xl bg-primary text-white shadow-md"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Controles (opcional) */}
      <button
        aria-label="Anterior"
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10
                   inline-flex items-center justify-center w-10 h-10
                   rounded-full bg-black/40 text-white hover:bg-black/60"
      >
        ‹
      </button>
      <button
        aria-label="Siguiente"
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10
                   inline-flex items-center justify-center w-10 h-10
                   rounded-full bg-black/40 text-white hover:bg-black/60"
      >
        ›
      </button>

      {/* Dots (opcional) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ir a slide ${i + 1}`}
            className={[
              'h-2.5 w-2.5 rounded-full',
              i === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80',
            ].join(' ')}
          />
        ))}
      </div>
    </section>
  )
}
