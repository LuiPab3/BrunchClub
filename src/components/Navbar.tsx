import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Services' },
  { to: '/menu', label: 'Wedding Destinations' },
  { to: '/gallery', label: 'Portfolio' },
  { to: '/reservations', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="container md:flex items-center md:h-16">

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

        <button
          className="md:hidden ml-auto p-2 z-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          <svg className="w-6 h-6 z-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <>
          <div
            className="fixed bg-black/40 z-90 md:hidden top-0 left-0 right-0 bottom-0 w-screen h-screen"
            onClick={() => setOpen(false)}
          />
          <nav className="fixed bg-white/95 z-100 flex flex-col items-center justify-center md:hidden w-full">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className="text-xl font-semibold py-2 active:text-gray-700 active:underline underline-offset-4 active:font-semibold transition-colors w-full text-center"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        </>
      )}
    </header>
  )
}
