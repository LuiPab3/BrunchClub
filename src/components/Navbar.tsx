import { NavLink } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Services' },
  { to: '/menu', label: 'Wedding Destinations' },
  { to: '/gallery', label: 'Portfolio' },
  { to: '/reservations', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="container flex items-center h-16">

        {/* Navegación — por defecto a la derecha */}
        <nav className="hidden md:flex gap-6 ml-auto">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                'text-sm hover:underline underline-offset-4 ' +
                (isActive ? 'font-semibold' : 'text-gray-700')
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
