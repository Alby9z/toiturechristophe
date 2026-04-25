import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import PageHeader from '@/components/PageHeader'
import CTABand from '@/components/CTABand'

/**
 * ServicePage — page générique réutilisée pour Couverture, Zinguerie, Étanchéité.
 * Données injectées depuis services.json via les pages parentes.
 */
export default function ServicePage({ service }) {
  if (!service) return null

  return (
    <>
      <SEOHead
        title={service.heroTitle}
        description={service.metaDesc}
        canonical={service.slug}
      />

      <PageHeader
        tag={service.label}
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        breadcrumb={[{ label: service.label }]}
      />

      {/* ── INTRO ── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="bg-gradient-to-br from-ardoise-700 to-ardoise-600 rounded-xl
                          h-72 flex items-center justify-center text-8xl order-2 lg:order-1">
            {service.icon}
          </div>
          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="section-tag">{service.label}</span>
            <h2 className="section-title">Notre expertise<br />{service.label.toLowerCase()}</h2>
            <p className="text-stone-500 font-light leading-relaxed mb-8">
              {service.description}
            </p>
            <ul className="check-list mb-8">
              {service.avantages.map((a) => <li key={a}>{a}</li>)}
            </ul>
            <Link to="/contact" className="btn-primary">
              Demander un devis <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRESTATIONS ── */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">Détail des prestations</span>
            <h2 className="section-title">Ce que nous réalisons</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {service.prestations.map((p) => (
              <div key={p.title}
                   className="bg-white border border-stone-200 rounded-lg p-8
                              hover:shadow-card hover:border-cuivre-300 transition-all">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-display text-xl text-ardoise-600 mb-3">{p.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MATÉRIAUX ── */}
      <section className="py-16 px-4 bg-ardoise-700">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-tag">Matériaux utilisés</span>
          <h2 className="font-display text-3xl text-white mb-8">
            Des matériaux sélectionnés avec soin
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {service.materiaux.map((m) => (
              <span key={m}
                    className="bg-ardoise-600 border border-cuivre-500/30 text-stone-300
                               text-sm px-5 py-2.5 rounded-sm">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
