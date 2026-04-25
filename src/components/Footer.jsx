import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'
import company from '@/data/company.json'
import navigation from '@/data/navigation.json'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ardoise-900 text-stone-500">
      {/* Top band */}
      <div className="border-t-2 border-cuivre-500/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-display text-2xl text-white mb-1">
              Toitures <span className="text-cuivre-500">Martin</span>
            </p>
            <p className="text-xs tracking-widest uppercase text-cuivre-600 mb-4">
              {company.tagline}
            </p>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              {company.description}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={company.socials.facebook}
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-ardoise-700 hover:bg-cuivre-500
                           flex items-center justify-center text-stone-400
                           hover:text-white transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={company.socials.instagram}
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-ardoise-700 hover:bg-cuivre-500
                           flex items-center justify-center text-stone-400
                           hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs tracking-widest uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="text-sm hover:text-cuivre-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="text-sm hover:text-cuivre-400 transition-colors">
                  Contact & Devis
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="text-sm hover:text-cuivre-400 transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs tracking-widest uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-cuivre-500 mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${company.phone.replace(/\s/g, '')}`}
                  className="text-sm hover:text-cuivre-400 transition-colors"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-cuivre-500 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm hover:text-cuivre-400 transition-colors break-all"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-cuivre-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  {company.address.street}<br />
                  {company.address.zip} {company.address.city}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-cuivre-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  {company.hours.weekdays}<br />
                  {company.hours.saturday}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ardoise-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5
                        flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs">
            © {year} Toitures Martin — {company.legalForm} — {company.rcs}
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/mentions-legales" className="hover:text-cuivre-400 transition-colors">
              Mentions légales
            </Link>
            <span>·</span>
            <Link to="/mentions-legales#confidentialite" className="hover:text-cuivre-400 transition-colors">
              Confidentialité
            </Link>
            <span>·</span>
            <Link to="/mentions-legales#cookies" className="hover:text-cuivre-400 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
