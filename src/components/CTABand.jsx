import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import company from '@/data/company.json'

/**
 * CTABand — Bande d'appel à l'action réutilisable en bas de chaque page.
 */
export default function CTABand({
  title = 'Besoin d\'un devis ?',
  subtitle = 'Contactez-nous, nous répondons sous 48h et nous déplaçons gratuitement.',
}) {
  return (
    <section className="bg-gradient-cuivre py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-3">
          {title}
        </h2>
        <p className="text-white/75 font-light mb-8 text-lg">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="btn-white">
            Demander un devis <ArrowRight size={16} />
          </Link>
          <a
            href={`tel:${company.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-white/80 hover:text-white
                       font-bold text-sm transition-colors"
          >
            <Phone size={16} /> {company.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
