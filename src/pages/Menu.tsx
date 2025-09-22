const SERVICES = [
  { title: 'Weddings', desc: 'Elegant and timeless celebrations' },
  { title: 'Baby Showers', desc: 'Gatherings to celebrate new beginnings' },
  { title: 'Brunches', desc: 'Stylish brunches and private events' },
  { title: 'Proposals', desc: 'Romantic and unforgettable setups' },
]

const PORTFOLIO = [
  '/src/assets/photos/home/port-1.jpg',
  '/src/assets/photos/home/port-2.jpg',
  '/src/assets/photos/home/port-3.jpg',
  '/src/assets/photos/home/port-4.jpg',
]

export default function Menu() {
  return (
    <div>
      <section className="w-full container py-10 md:py-14">
        <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-6">
          {/*Columna Izquierda: Imagen del lado Izquierdo*/}
          <div className="h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-md border bg-gray-100">
            <img
              src=""
              alt="Main"
              className="w-full h-full object-cover"
            />
          </div>

          {/*Columna Derecha: Titulo + Imagenes en la parte inferior*/}
          <div className="flex flex-col space-y-4 md:space-y-6">
            {/*Titulo*/}
            <h2 className="text-5xl md:text-7xl font-greatvibes text-center mt-4 md:mt-20">Wedding Destinations</h2>
            {/*Boton*/}
            <div className="flex justify-center">
              <button
                onClick={() => window.location.href = "/reservations"}
                className="bg-[#e9ddd8] text-[16px] md:text-[18px] font-montserrat rounded-lg overflow-hidden shadow-sm px-10 py-1 mb-4 md:mb-6">
                Get in Touch
              </button>
            </div>
            {/*Imagenes en la parte inferior*/}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="h-[150px] md:h-[245px] rounded-lg overflow-hidden shadow-sm border bg-gray-100">
                <img
                  src=""
                  alt="Right 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-sm border bg-gray-100">
                <img
                  src=""
                  alt="Right 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Descripción del Wedding*/}
      <section className="w-full py-14 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/*Titulo*/}
            <div className="flex px-6 md:px-10 items-center">
              <p className="font-montserrat">
                We specialize in creating warm, elegant atmospheres at iconic and historic wedding venues along East Coast and beyond. From rooftops to museums to French Chàteaux, experience the magic of our favorite moments
              </p>
            </div>
            {/*Fotos*/}
            <div className="bg-[#F1EBE8] flex grid grid-cols-3 rounded-lg">
              {/*Columna Izquierda */}
              <div className="flex flex-col gap-3 mt-10 mb-4 ml-5">
                <div className="h-[120px] md:h-[140px] rounded-lg overflow-hidden shadow-sm border bg-gray-100">
                  <img
                    src=""
                    alt="Image 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-5 h-[120px] md:h-[140px] rounded-lg overflow-hidden shadow-sm border bg-gray-100">
                  <img
                    src=""
                    alt="Image 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/*Columna en medio */}
              <div className="flex flex-col gap-9 mt-6 mb-6 ml-4 mr-4">
                <div className="h-[120px] md:h-[140px] rounded-lg overflow-hidden shadow-sm border bg-gray-100">
                  <img
                    src=""
                    alt="Image 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[120px] md:h-[140px] rounded-lg overflow-hidden shadow-sm border bg-gray-100">
                  <img
                    src=""
                    alt="Image 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/*Columna Derecha*/}
              <div className="flex flex-col gap-3 mt-10 mb-4 mr-5">
                <div className="mr-5 h-[120px] md:h-[140px] rounded-lg overflow-hidden shadow-sm border bg-gray-100">
                  <img
                    src=""
                    alt="Image 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[120px] md:h-[140px] rounded-lg overflow-hidden shadow-sm border bg-gray-100">
                  <img
                    src=""
                    alt="Image 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
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
              Explore our<br /> portafolio
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
