const PORTFOLIO_IMAGES = [
  { img: '/src/assets/photos/portfolio/Port1.webp' },
  { img: '/src/assets/photos/portfolio/port2.webp' },
  { img: '/src/assets/photos/portfolio/port3.webp' },
  { img: '/src/assets/photos/portfolio/port4.webp' },
  { img: '/src/assets/photos/portfolio/port5.webp' },
  { img: '/src/assets/photos/portfolio/port6.webp' },
  { img: '/src/assets/photos/portfolio/port7.webp' },
  { img: '/src/assets/photos/portfolio/port8.webp' },
  
]

export default function Gallery() {
  return (
    <div className="container py-10">
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
    </div>
  )
}
