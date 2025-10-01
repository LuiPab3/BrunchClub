// src/pages/About.tsx
export default function About() {
  return (
    <div className="bg-white">
      {/* Banner superior (puede ser B/N) */}
      <section className="w-full h-[220px] md:h-[300px] overflow-hidden">
        <img
          src="/src/assets/photos/about/ab2.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </section>

      {/* Contenido principal */}
      <section className="container py-10 md:py-14">

        {/* Grid de dos columnas */}
        <div className="mt-10 grid md:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Columna izquierda: retrato + tarjeta de texto */}
          <div className="grid sm:grid-cols-[minmax(220px,1fr)_1fr] gap-6 items-start">
            {/* Foto retrato */}
            <div className="rounded-md overflow-hidden bg-gray-100 border">
              <img
                src="/src/assets/photos/about/Linda.webp"
                alt="Linda portrait"
                className="w-full h-full object-cover"
              />
            </div>

          {/* Tarjeta beige con texto */}
          {/* Nombre + subtítulo */}
          <div>
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Linda Fernandez
              </h1>
              <p className="mt-1 text-2xl italic text-gray-600 font-greatvibes">
                owner, designer, stylist
              </p>
            </div>
              <div className="bg-[#e9ddd8] rounded-md border shadow-sm p-6 leading-relaxed text-gray-800">
                <p>
                  Achiever, optimist, tastemaker, lighting enthusiast, and an all-around
                  sense of chill. She has a quick-witted sense of humor, loves travel,
                  culture, and cuisine, and is decisive and forward-thinking. Her
                  wedding-day energy is calm yet driven, and her background in classical
                  music has shaped her attention to detail and appreciation for the arts,
                  fashion, and interior design. Let&apos;s connect.
                </p>
              </div>
            </div>
          </div>

          {/* Columna derecha: título + foto + tarjeta beige */}
          <div className="space-y-6">
            <h3 className="text-base md:text-lg text-gray-800">
              A few more things you should know:
            </h3>

            {/* Foto horizontal */}
            <div className="rounded-md overflow-hidden bg-gray-100 border w-full h-64 object-center">
              <img
                src="/src/assets/photos/about/ab1.webp"
                alt="Event"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tarjeta beige grande con texto centrado */}
            <div className="bg-[#e9ddd8] rounded-xl border shadow-sm p-8 text-center">
              <h4 className="text-xl md:text-2xl font-thin text-gray-900">
                We value inclusivity and culture.
              </h4>
              <p className="mt-3 text-gray-700 leading-relaxed font-medium">
                Memories aren&apos;t only made on your wedding day. We love crafting
                entire weekend experiences that inspire, yielding a series of iconic
                events. Cheers to the weekend.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
