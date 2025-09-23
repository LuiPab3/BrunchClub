const DESTINATIONS = [
  { name: 'Antigua',       img: '/src/assets/photos/home/dest-antigua.jpg' },
  { name: 'Atitlan',       img: '/src/assets/photos/home/dest-atitlan.jpg' },
  { name: 'Tikal',         img: '/src/assets/photos/home/dest-tikal.jpg' },
  { name: 'Guatemala City',img: '/src/assets/photos/home/dest-guate.jpg' },
  { name: 'Alotenango',    img: '/src/assets/photos/home/dest-alotenango.jpg' },
]

export default function WeddingDestinations({fontFamily='Montserrat'}) {
  return (
    <section className="container py-10 md:py-14">
      <h3 className={`text-2xl md:text-3xl font-medium px-24 font-${fontFamily}`}>Wedding destinations</h3>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-24">
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
  )
}