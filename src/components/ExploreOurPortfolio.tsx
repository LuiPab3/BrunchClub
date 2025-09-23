const PORTFOLIO = [
  '/src/assets/photos/home/port-1.jpg',
  '/src/assets/photos/home/port-2.jpg',
  '/src/assets/photos/home/port-3.jpg',
  '/src/assets/photos/home/port-4.jpg',
]

export default function ExploreOurPortfolio({fontFamily='Montserrat'}) {
  return (
    <section className="container py-14 md:py-16">
      <div className="grid md:grid-cols-5 gap-8 items-start px-24">
        <div className="md:col-span-2">
          <h3 className={`text-4xl md:text-5xl font-medium leading-tight font-${fontFamily}`}>
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
  )
}