import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="container my-16 text-center">
      <h2 className="text-2xl font-semibold">¿Ready for your event to be what you always dreamed of?</h2>
      <p className="mt-2 text-gray-700">get in touch with us.</p>
      <Link to="/reservations" className="inline-block mt-4 px-6 py-3 rounded-2xl bg-primary text-white shadow">
        Contact us
      </Link>
    </section>
  )
}
