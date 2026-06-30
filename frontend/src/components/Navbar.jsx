import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navItem = ({ isActive }) =>
  `px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? 'text-salon-btn' : 'text-gray-700 hover:text-salon-btn'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#FFE9F0] backdrop-blur shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        
        {/* Kontainer Link Logo */}
        <Link to="/" className="relative flex items-center z-50">
          {/* Perubahan: Ukuran diperbesar (h-20 md:h-24) dan diposisikan sedikit menonjol ke bawah */}
          <img 
            src="/assets/logo.png" 
            alt="Logo Erna Esa Studio" 
            className="h-20 w-auto md:h-24 object-contain drop-shadow-sm transform origin-top transition-transform" 
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navItem} end>
            HOME
          </NavLink>
          <NavLink to="/about" className={navItem}>
            ABOUT
          </NavLink>
          <NavLink to="/service" className={navItem}>
            SERVICE
          </NavLink>
          <NavLink to="/price" className={navItem}>
            PRICE
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-salon-btn">
              PAGES ▾
            </button>
            {pagesOpen && (
              <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md py-2 border border-salon-soft">
                <Link
                  to="/gallery"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-salon-bg"
                  onClick={() => setPagesOpen(false)}
                >
                  GALLERY
                </Link>
                <Link
                  to="/product-course"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-salon-bg"
                  onClick={() => setPagesOpen(false)}
                >
                  PRODUCT & COURSE
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/contact" className={navItem}>
            CONTACT US
          </NavLink>
        </div>

        <div className="hidden md:block">
          <Link
            to="/book-appointment"
            className="inline-block bg-[#C84870] hover:bg-[#58001C] text-white font-bold px-5 py-2 rounded-full text-sm font-semibold transition-colors shadow-sm"
            >
            BOOK APPOINTMENT
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-2xl text-salon-btn"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-salon-soft bg-white px-4 py-3 flex flex-col gap-1">
          <NavLink to="/" className={navItem} end onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={navItem} onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to="/service" className={navItem} onClick={() => setOpen(false)}>
            Service
          </NavLink>
          <NavLink to="/price" className={navItem} onClick={() => setOpen(false)}>
            Price
          </NavLink>
          <NavLink to="/gallery" className={navItem} onClick={() => setOpen(false)}>
            Gallery
          </NavLink>
          <NavLink to="/product-course" className={navItem} onClick={() => setOpen(false)}>
            Product & Course
          </NavLink>
          <NavLink to="/contact" className={navItem} onClick={() => setOpen(false)}>
            Contact Us
          </NavLink>
          <Link
            to="/book-appointment"
            className="mt-2 bg-salon-btn text-white text-sm font-medium px-5 py-2 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  )
}
