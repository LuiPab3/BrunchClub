const PORTFOLIO_IMAGES = [
<<<<<<< HEAD
  { name: 'Antigua',       img: '/src/assets/photos/gallery/dest-antigua.jpg' },
  { name: 'Atitlan',       img: '/src/assets/photos/gallery/dest-atitlan.jpg' },
  { name: 'Tikal',         img: '/src/assets/photos/gallery/dest-tikal.jpg' },
  { name: 'Guatemala City',img: '/src/assets/photos/gallery/dest-guate.jpg' },
  { name: 'Alotenango',    img: '/src/assets/photos/gallery/dest-alotenango.jpg' },
=======
  { img: '/src/assets/photos/portfolio/Port1.webp' },
  { img: '/src/assets/photos/portfolio/port2.webp' },
  { img: '/src/assets/photos/portfolio/port3.webp' },
  { img: '/src/assets/photos/portfolio/port4.webp' },
  { img: '/src/assets/photos/portfolio/port5.webp' },
  { img: '/src/assets/photos/portfolio/port6.webp' },
  { img: '/src/assets/photos/portfolio/port7.webp' },
  { img: '/src/assets/photos/portfolio/port8.webp' },
  
>>>>>>> a4895cf079f061c6e9187f602c3301cfaa86f576
]

export default function Gallery() {
  return (
    <div className="container py-10">
<<<<<<< HEAD
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
      

=======
      <h1 className="text-5xl md:text-7xl font-greatvibes text-center mt-4 md:mt-20">Our portfolio</h1>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          {PORTFOLIO_IMAGES.map(({img}) => (
              <div className="h-96 rounded-lg overflow-hidden shadow-sm border bg-gray-100">
                <img
                  src={img}
                  loading='lazy'
                  className="w-full h-full object-cover"
                />
              </div>
          ))}
        </div>
>>>>>>> a4895cf079f061c6e9187f602c3301cfaa86f576
    </div>
  )
}
