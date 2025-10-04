// src/pages/Events.tsx  (vista "Services")
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const BG_IMAGE = '/src/assets/photos/services/bannerser.webp.jpg'

type Service = {
  title: string
  desc: string
  img: string
}

const SERVICES: Service[] = [
  {
    title: 'Weddings',
    desc:
      'Elegant and timeless celebrations tailored to your story. From ceremony design to reception styling, we craft every detail with intention.',
    img: '/src/assets/photos/services/Wedding.webp',
  },
  {
    title: 'Weddings destination',
    desc:
      'Signature destination weddings across Guatemala: Antigua, Atitlán, Tikal and more. Full planning, vendor coordination and guest experiences.',
    img: '/src/assets/photos/services/wd.webp',
  },
  {
    title: 'Social events',
    desc:
      'From birthdays to baby showers and private brunches. Elevated atmospheres, bespoke décor and seamless hosting for every milestone.',
    img: '/src/assets/photos/services/es.webp',
  },
  {
    title: 'Corporate events',
    desc:
      'Brand launches, offsites and executive dinners. Polished production, premium service partners and guest-first experiences that connect.',
    img: '/src/assets/photos/services/co.webp ',
  },
]

export default function Events() {
  return (
    <div className="bg-white">
      {/* Banner superior */}
      <section className="relative w-full h-[220px] md:h-[280px] overflow-hidden">
        <LazyLoadImage
          src={BG_IMAGE}
          alt=""
          effect="blur"
          className="w-full h-full object-cover"
          wrapperClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-0 flex items-center justify-center">
        </div>
      </section>

      {/* Bloques verticales alternando imagen/texto */}
      {SERVICES.map((s, i) => (
        <section key={s.title} className="container py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Imagen (alterna a izquierda/derecha en desktop) */}
            <div className={`order-1 ${i % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
              <div className="rounded-xl overflow-hidden border border-black/10 shadow">
                <LazyLoadImage
                  src={s.img}
                  alt={s.title}
                  effect="blur"
                  className="w-full h-[260px] md:h-[420px] object-cover"
                  wrapperClassName="w-full h-full"
                />
              </div>
            </div>

            {/* Texto (alterna a derecha/izquierda en desktop) */}
            <div className={`order-2 ${i % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                {s.title}
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed max-w-prose">
                {s.desc}
              </p>

              {/* (Opcional) CTA o bullets
              <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-5">
                <li>Venue scouting & styling</li>
                <li>Vendor management</li>
                <li>On-site coordination</li>
              </ul>
              */}
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
