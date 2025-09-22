// src/pages/Events.tsx  (esta vista será tu "Services")
const BG_IMAGE = '/src/assets/photos/services-banner.jpg' // 🔁 reemplaza por tu imagen

export default function Events() {
  const items = [
    {
      icon: 'fa-archway', // Weddings
      title: 'Weddings',
      desc: 'Elegant and timeless celebrations',
    },
    {
      icon: 'fa-baby', // Baby Showers
      title: 'Baby Showers',
      desc: 'Gatherings to celebrate new beginnings',
    },
    {
      icon: 'fa-utensils', // Brunches
      title: 'Brunches',
      desc: 'Stylish brunches and private events',
    },
    {
      icon: 'fa-ring', // Proposals
      title: 'Proposals',
      desc: 'Romantic and unforgettable setups',
    },
  ]

  return (
    <div className="bg-white">
      {/* Banner superior con título */}
      <section className="relative w-full h-[220px] md:h-[280px] overflow-hidden">
        <img src={BG_IMAGE} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-black drop-shadow-sm">
            Services
          </h1>
        </div>
      </section>

      {/* Íconos + tarjetas */}
      <section className="container py-12 md:py-16">
        {/* Fila de íconos grandes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 place-items-center">
          {items.map((it) => (
            <div key={it.title} className="text-center">
              <div className="inline-flex items-center justify-center">
                <i className={`fa-solid ${it.icon} text-[72px] md:text-[88px]`} />
              </div>
            </div>
          ))}
        </div>

        {/* Tarjetas beige con sombra */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((it) => (
            <div
              key={it.title}
              className="bg-[#f3ece7] rounded-md border border-black/10 shadow-[0_4px_0_rgba(0,0,0,0.12)] px-6 py-6 text-center"
            >
              {/* Título estilo script (si agregas la fuente más abajo, se verá aún más parecido) */}
              <div className="text-xl md:text-2xl font-serif italic text-gray-900">
                {it.title}
              </div>
              <div className="text-sm text-gray-700 mt-2 leading-snug">{it.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
