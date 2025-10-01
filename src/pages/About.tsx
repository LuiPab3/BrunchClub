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
          <div className="grid sm:grid-cols-[minmax(280px,1fr)_1fr] gap-6 items-start">
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
                  Meet the founder:
                  Hello, I’m Linda Fernandez Noack, founder of The Brunch Club. With a Bachelor’s
                  degree in Business Administration and a Master’s in Neuromarketing and
                  Consumer Behavior, I discovered in the world of events the perfect stage to bring
                  together strategy, creativity, and luxury.
                  As a Wedding &amp; Event Planner specialized in destination weddings, my purpose is
                  to design unique celebrations that reflect the essence of each client, carefully
                  curating every detail with precision and sophistication.
                  Together with a passionate and visionary team, at The Brunch Club we have
                  transformed the art of celebrating into memorable experiences that transcend time
                  and place. Let&apos;s connect.
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
                The Brunch Club was born in 2024 from a passion for transforming moments into
                unique experiences, where every detail is crafted with precision and creativity.
                At The Brunch Club, we believe that every celebration tells a unique story. Our
                passion lies in listening, dreaming alongside our clients, and bringing their vision
                for their special day to life.
                More than organizing events, we create tailor-made experiences where every
                detail reflects the essence of those who trust us. We are inspired by the magic of
                transforming ideas into authentic atmospheres, filled with emotion, style, and
                personality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
