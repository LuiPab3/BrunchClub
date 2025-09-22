// src/pages/Home.tsx
import Hero from '../components/Hero'

const DESTINATIONS = [
  { name: 'Antigua',       img: '/src/assets/photos/home/dest-antigua.jpg' },
  { name: 'Atitlan',       img: '/src/assets/photos/home/dest-atitlan.jpg' },
  { name: 'Tikal',         img: '/src/assets/photos/home/dest-tikal.jpg' },
  { name: 'Guatemala City',img: '/src/assets/photos/home/dest-guate.jpg' },
  { name: 'Alotenango',    img: '/src/assets/photos/home/dest-alotenango.jpg' },
]

const SERVICES = [
  { title: 'Weddings',     desc: 'Elegant and timeless celebrations' },
  { title: 'Baby Showers', desc: 'Gatherings to celebrate new beginnings' },
  { title: 'Brunches',     desc: 'Stylish brunches and private events' },
  { title: 'Proposals',    desc: 'Romantic and unforgettable setups' },
]

const PORTFOLIO = [
  '/src/assets/photos/home/port-1.jpg',
  '/src/assets/photos/home/port-2.jpg',
  '/src/assets/photos/home/port-3.jpg',
  '/src/assets/photos/home/port-4.jpg',
]

export default function Home() {
  return (
    <div className="bg-white text-foreground">
      {/* Hero con carrusel + texto encima */}
      <Hero />

      {/* Welcome */}
      <section className="container py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
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

      {/* Wedding destinations */}
      <section className="container py-10 md:py-14">
        <h3 className="text-2xl md:text-3xl font-medium">Wedding destinations</h3>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {DESTINATIONS.map((d) => (
            <figure key={d.name} className="space-y-2">
              <div className="h-28 md:h-32 rounded-lg overflow-hidden shadow-sm border bg-gray-100">
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-center text-sm md:text-base">{d.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Our services (franja beige) */}
      <section className="w-full py-14 md:py-16 bg-[#ede3dd]">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 items-start">
            <div className="md:col-span-1">
              <h3 className="text-2xl md:text-3xl font-medium">Our services</h3>
              <p className="mt-3 text-gray-700">
                We create unforgettable experiences tailored to your vision.
              </p>
            </div>

            <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((s) => (
                <div
                  key={s.title}
                  className="bg-white rounded-lg border shadow-[0_2px_0_rgba(0,0,0,0.1)] p-5 text-center"
                >
                  <div className="font-serif text-lg">{s.title}</div>
                  <div className="text-xs text-gray-600 mt-2 leading-snug">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore our portafolio */}
      <section className="container py-14 md:py-16">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <h3 className="text-4xl md:text-5xl font-semibold leading-tight">
              Explore our<br/> portafolio
            </h3>
          </div>

          <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PORTFOLIO.map((src, i) => (
              <div
                key={i}
                className="aspect-[3/4] rounded-lg overflow-hidden border shadow-sm bg-gray-100"
              >
                <img src={src} alt={`Portfolio ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
