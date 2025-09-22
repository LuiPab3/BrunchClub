// src/pages/Contact.tsx
import { useState } from 'react'

const BG_IMAGE = '/src/assets/photos/contact/contact-bg.jpg' // <-- cámbiala por tu foto

export default function Contact() {
  // (solo estética por ahora; funcionalidad la vemos después)
  const [loading] = useState(false)

  return (
    <section className="relative w-full min-h-[80vh]">
      {/* Fondo con imagen */}
      <div className="absolute inset-0">
        <img
          src={BG_IMAGE}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* capa sutil para legibilidad si la foto es muy clara */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Contenido centrado */}
      <div className="relative z-10 flex items-center justify-center py-12 md:py-16">
        <div className="w-full max-w-2xl mx-4 md:mx-0 bg-[#eadfd9]/95 backdrop-blur rounded-2xl md:rounded-3xl shadow-xl border border-black/5">
          <div className="px-6 md:px-10 py-7 md:py-9">
            <h1 className="text-2xl md:text-[28px] font-semibold text-center tracking-tight text-gray-900">
              Event Quote Request
            </h1>

            {/* Formulario */}
            <form className="mt-6 space-y-4">
              {/* First/Last */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="First name" required>
                  <input className="tb-input" name="firstName" required />
                </Field>
                <Field label="Last name">
                  <input className="tb-input" name="lastName" />
                </Field>
              </div>

              {/* Email */}
              <Field label="Email" required>
                <input className="tb-input" type="email" name="email" required />
              </Field>

              {/* Phone */}
              <Field label="Phone">
                <input className="tb-input" name="phone" />
              </Field>

              {/* Nationality */}
              <Field label="Nationality">
                <input className="tb-input" name="nationality" />
              </Field>

              {/* Event type */}
              <Field label="Event type">
                <select className="tb-input" name="eventType" defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option>Wedding</option>
                  <option>Engagement / Proposal</option>
                  <option>Brunch / Private event</option>
                  <option>Baby Shower</option>
                  <option>Other</option>
                </select>
              </Field>

              {/* Approx date */}
              <Field label="Approximate Event Date">
                <input className="tb-input" type="date" name="date" />
              </Field>

              {/* Message */}
              <Field label="Message" required>
                <textarea className="tb-input h-28 resize-none" name="message" required />
              </Field>

              {/* Botón */}
              <div className="pt-2 flex justify-center">
                <button
                  type="button"
                  disabled={loading}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#1f2e3a] text-white tracking-wide text-sm md:text-base shadow hover:opacity-95 disabled:opacity-60"
                >
                  {loading ? 'SENDING…' : 'SUBMIT'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Sub-componente para etiqueta + control */
function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="block text-[13px] text-gray-700">
        {label} {required && <span className="align-super text-[11px] text-gray-600">(required)</span>}
      </span>
      {children}
    </label>
  )
}
