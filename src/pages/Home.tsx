// src/pages/Home.tsx
import Hero from '../components/Hero'
import WeddingDestinations from '../components/WeddingDestinations'
import OurServices from '../components/OurServices'
import ExploreOurPortfolio from '../components/ExploreOurPortfolio'

export default function Home() {
  return (
    <div className="bg-white text-foreground">
      {/* Hero con carrusel + texto encima */}
      <Hero />

      {/* Welcome */}
      <section className="container py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start px-24">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Welcome</h2>
            <p className="mt-4 text-gray-700 max-w-xl">
              We create memorable and seamless events that reflect your unique vision and style.
            </p>
          </div>
          <div
            className="h-[240px] md:h-[300px] rounded-2xl bg-white border shadow-sm overflow-hidden"
            // Reemplaza el bg con una imagen si quieres:
            // style={{ backgroundImage: `url('/src/assets/photos/welcome.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
        </div>
      </section>

      <WeddingDestinations />
      <OurServices />
      <ExploreOurPortfolio />
    </div>
  )
}
