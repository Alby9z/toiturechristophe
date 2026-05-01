import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import navigation from '@/data/navigation.json'
import company from '@/data/company.json'

export default function Navbar() {
  const [isOpen,    setIsOpen]    = useState(false)
  const [scrolled,  setScrolled]  = useState(false)
  const { pathname } = useLocation()

  /* close mobile menu on route change */
  useEffect(() => { setIsOpen(false) }, [pathname])

  /* shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkClass = ({ isActive }) =>
    `text-xs tracking-widest uppercase px-3 py-1.5 rounded-sm transition-colors duration-200 ${
      isActive
        ? 'text-cuivre-400'
        : 'text-stone-400 hover:text-cuivre-300'
    }`

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-ardoise-900/97 backdrop-blur-sm
          border-b border-cuivre-500/20 transition-shadow duration-300
          ${scrolled ? 'shadow-nav' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-17" style={{ height: '68px' }}>

            {/* Logo */}
            <Link
              to="/"
              className="font-display text-xl text-white hover:text-cuivre-300 transition-colors"
            >
              Toitures <span className="text-cuivre-500">Martin</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <NavLink key={item.id} to={item.path} className={navLinkClass}>
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                className="hidden md:flex items-center gap-2 text-cuivre-400 text-sm font-bold
                           hover:text-cuivre-300 transition-colors"
                aria-label="Appeler Les Toitures de christophe"
              >
                <Phone size={15} strokeWidth={2.5} />
                <span className="hidden xl:inline">{company.phone}</span>
              </a>

              <Link to="/contact" className="hidden md:inline-flex btn-primary text-xs py-2.5 px-5">
                Devis gratuit
              </Link>

              {/* Hamburger */}
              <button
                className="lg:hidden p-2 text-stone-400 hover:text-white transition-colors"
                onClick={() => setIsOpen((v) => !v)}
                aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300
          ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300
            ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer */}
        <nav
          className={`absolute top-[68px] left-0 right-0 bg-ardoise-900 border-b border-cuivre-500/20
            flex flex-col transition-all duration-300
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        >
          {navigation.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `px-6 py-4 text-sm tracking-wider uppercase border-b border-ardoise-700
                 transition-colors ${isActive ? 'text-cuivre-400' : 'text-stone-400 hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="px-6 py-5 flex flex-col gap-3">
            <a
              href={`tel:${company.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-cuivre-400 font-bold"
            >
              <Phone size={15} /> {company.phone}
            </a>
            <Link to="/contact" className="btn-primary justify-center">
              Devis gratuit
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
