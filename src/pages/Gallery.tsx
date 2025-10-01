const PORTFOLIO_IMAGES = [
  { name: 'Antigua',       img: '/src/assets/photos/gallery/dest-antigua.jpg' },
  { name: 'Atitlan',       img: '/src/assets/photos/gallery/dest-atitlan.jpg' },
  { name: 'Tikal',         img: '/src/assets/photos/gallery/dest-tikal.jpg' },
  { name: 'Guatemala City',img: '/src/assets/photos/gallery/dest-guate.jpg' },
  { name: 'Alotenango',    img: '/src/assets/photos/gallery/dest-alotenango.jpg' },
]

export default function Gallery() {
  return (
    <div className="container py-10">
      <h1 className="text-5xl md:text-7xl font-greatvibes text-center mt-4 md:mt-20">Wedding Destinations</h1>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          {PORTFOLIO_IMAGES.map(({name, img}) => (
            <figure key={name} className="space-y-2 my-10">
              <div className="h-96 rounded-lg overflow-hidden shadow-sm border bg-gray-100">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
            </figure>
          ))}
        </div>
      

    </div>
  )
}
