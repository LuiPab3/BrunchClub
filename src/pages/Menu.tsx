import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function Menu() {
  return (
    <div>
      <section className="w-full container py-10 md:py-14">
        <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-6">
          {/*Columna Izquierda: Imagen del lado Izquierdo*/}
          <div className="h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-md border bg-gray-100">
            <LazyLoadImage
              src="/src/assets/photos/wedding destinations/table.jpeg"
              alt="Main"
              className="w-full h-full object-cover"
              effect="blur"
              wrapperClassName="w-full h-full"
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
                <LazyLoadImage
                  src="/src/assets/photos/wedding destinations/food.jpeg"
                  alt="Right 1"
                  className="w-full h-full object-cover"
                  effect="blur"
                  wrapperClassName="w-full h-full"
                />
              </div>
              <div className="h-[150px] md:h-[245px] rounded-lg overflow-hidden shadow-sm border bg-gray-100">
                <LazyLoadImage
                  src="/src/assets/photos/wedding destinations/flowers.jpeg"
                  alt="Right 2"
                  className="w-full h-full object-cover"
                  effect="blur"
                  wrapperClassName="w-full h-full"
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
                At The Brunch Club, we design destination weddings as emotional journeys. Each
                celebration becomes a tailor-made universe: iconic venues, captivating
                atmospheres, and an experience as personal as it is unforgettable.
                With us, your wedding goes beyond expectations and becomes an everlasting
                memory.
              </p>
            </div>
            {/*Fotos*/}
            <div className="bg-[#F1EBE8] flex grid grid-cols-3 rounded-lg">
              {/*Columna Izquierda */}
              <div className="flex flex-col gap-3 mt-10 mb-4 ml-5">
                <div className="h-[120px] md:h-[140px] rounded-lg overflow-hidden shadow-sm border bg-gray-100">
                  <LazyLoadImage
                    src="/src/assets/photos/wedding destinations/cd.webp"
                    alt="Image 1"
                    className="w-full h-full object-cover"
                    loading='lazy'
                    effect="blur"
                    wrapperClassName="w-full h-full"
                  />
                </div>
                <div className="ml-5 h-[120px] md:h-[140px] rounded-lg overflow-hidden shadow-sm border bg-gray-100">
                  <LazyLoadImage
                    src="/src/assets/photos/wedding destinations/tikal.webp"
                    alt="Image 2"
                    className="w-full h-full object-cover"
                    loading='lazy'
                    effect="blur"
                    wrapperClassName="w-full h-full"
                  />
                </div>
              </div>
              {/*Columna en medio */}
              <div className="flex flex-col gap-9 mt-6 mb-6 ml-4 mr-4">
                <div className="h-[120px] md:h-[140px] rounded-lg overflow-hidden shadow-sm border bg-gray-100">
                  <LazyLoadImage
                    src="/src/assets/photos/wedding destinations/atitlan.webp"
                    alt="Image 1"
                    className="w-full h-full object-cover"
                    loading='lazy'
                    effect="blur"
                    wrapperClassName="w-full h-full"
                  />
                </div>
                <div className="h-[120px] md:h-[140px] rounded-lg overflow-hidden shadow-sm border bg-gray-100">
                  <LazyLoadImage
                    src="/src/assets/photos/wedding destinations/antigua.webp"
                    alt="Image 2"
                    className="w-full h-full object-cover"
                    loading='lazy'
                    effect="blur"
                    wrapperClassName="w-full h-full"
                  />
                </div>
              </div>

              {/*Columna Derecha*/}
              <div className="flex flex-col gap-3 mt-10 mb-4 mr-5">
                <div className="mr-5 h-[120px] md:h-[140px] rounded-lg overflow-hidden shadow-sm border bg-gray-100">
                  <LazyLoadImage
                    src="/src/assets/photos/wedding destinations/alta-verapaz.webp"
                    alt="Image 1"
                    className="w-full h-full object-cover"
                    loading='lazy'
                    effect="blur"
                    wrapperClassName="w-full h-full"
                  />
                </div>
                <div className="h-[120px] md:h-[140px] rounded-lg overflow-hidden shadow-sm border bg-gray-100">
                  <LazyLoadImage
                    src="/src/assets/photos/wedding destinations/alotenango.webp"
                    alt="Image 2"
                    className="w-full h-full object-cover"
                    loading='lazy'
                    effect="blur"
                    wrapperClassName="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
