const SERVICES = [
  { title: 'Weddings',     desc: 'Elegant and timeless celebrations' },
  { title: 'Baby Showers', desc: 'Gatherings to celebrate new beginnings' },
  { title: 'Brunches',     desc: 'Stylish brunches and private events' },
  { title: 'Proposals',    desc: 'Romantic and unforgettable setups' },
]

export default function OurServices({fontFamily='Montserrat'}) {
  return (
    <section className="w-full py-14 md:py-16 bg-[#ede3dd] px-24">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 items-start">
          <div className="md:col-span-1">
            <h3 className={`text-2xl md:text-3xl font-medium font-${fontFamily}`}>Our services</h3>
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
  )
}