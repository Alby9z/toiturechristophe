import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

/**
 * PageHeader — En-tête commun à toutes les pages intérieures.
 * Props: tag, title, subtitle, breadcrumb: [{ label, to? }]
 */
export default function PageHeader({ tag, title, subtitle, breadcrumb = [] }) {
  return (
    <section className="bg-gradient-ardoise pt-28 pb-16 relative overflow-hidden">
      {/* Diagonal pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <nav aria-label="Fil d'Ariane" className="flex items-center justify-center gap-1.5 mb-5">
            <Link to="/" className="text-xs text-ardoise-300 hover:text-cuivre-400 transition-colors">
              Accueil
            </Link>
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={12} className="text-ardoise-500" />
                {crumb.to ? (
                  <Link to={crumb.to} className="text-xs text-ardoise-300 hover:text-cuivre-400 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-xs text-cuivre-500">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {tag && <span className="section-tag">{tag}</span>}

        <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-4">
          {title}
        </h1>

        {subtitle && (
          <p className="text-stone-400 font-light text-lg max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
