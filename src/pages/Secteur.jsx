import { MapPin, Car } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import PageHeader from '@/components/PageHeader'
import CTABand from '@/components/CTABand'
import zonesData from '@/data/zones.json'

export default function Secteur() {
  const principales = zonesData.zones.filter((z) => z.principal)
  const secondaires = zonesData.zones.filter((z) => !z.principal)

  return (
    <>
      <SEOHead
        title="Secteur d'intervention"
        description={`Les Toitures de Christophe intervient dans un rayon de 70/90 km autour de Dannemarie : ${zonesData.zones.map(z => z.name).join(', ')}. Devis gratuit.`}
        canonical="/secteur"
      />

      <PageHeader
        tag="Zone géographique"
        title="Secteur d'intervention"
        subtitle={`Nous intervenons dans un rayon de 70/90 km autour de Dannemarie, en ${zonesData.department}.`}
        breadcrumb={[{ label: "Secteur d'intervention" }]}
      />

      {/* ── MAP PLACEHOLDER + ZONES ── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Map placeholder */}
          <div className="bg-ardoise-700 rounded-xl overflow-hidden mb-12 relative"
               style={{ height: '340px' }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <MapPin size={48} className="text-cuivre-400" />
              <p className="text-white font-display text-2xl">Dannemarie — Haut-Rhin</p>
              <p className="text-stone-400 text-sm">
                Rayon d'intervention : 70/90 km
              </p>
              <a
                href="https://www.google.com/maps/search/Dannemarie+Haut-Rhin/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 btn-outline-white text-xs py-2 px-5"
              >
                Voir sur Google Maps
              </a>
            </div>
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-hero-pattern opacity-40 pointer-events-none" />
          </div>

          {/* Principales villes */}
          <div className="mb-12">
            <h2 className="font-display text-2xl text-ardoise-600 mb-2">
              Villes principales
            </h2>
            <p className="text-stone-500 text-sm mb-6">
              Nous intervenons régulièrement dans ces communes et leurs environs.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {principales.map((z) => (
                <div key={z.name}
                     className="bg-ardoise-600 rounded-lg p-5 flex items-start gap-3">
                  <MapPin size={18} className="text-cuivre-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-bold">{z.name}</p>
                    <p className="text-stone-400 text-xs mt-0.5 flex items-center gap-1">
                      <Car size={12} /> {z.distance}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Autres communes */}
          <div className="mb-12">
            <h2 className="font-display text-2xl text-ardoise-600 mb-6">
              Autres communes desservies
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {secondaires.map((z) => (
                <span key={z.name}
                      className="text-sm bg-stone-100 border border-stone-200
                                 text-stone-600 px-4 py-2 rounded-sm">
                  {z.name}
                  <span className="text-stone-400 ml-2 text-xs">{z.distance}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Départements */}
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-8">
            <h3 className="font-display text-xl text-ardoise-600 mb-4">
              Départements couverts
            </h3>
            <div className="flex flex-wrap gap-3 mb-5">
              {zonesData.departements.map((d) => (
                <span key={d}
                      className="bg-cuivre-500/10 border border-cuivre-500/30
                                 text-cuivre-600 text-sm font-bold px-4 py-2 rounded-sm">
                  {d}
                </span>
              ))}
            </div>
            <p className="text-stone-500 text-sm italic">{zonesData.note}</p>
          </div>
        </div>
      </section>

      <CTABand
        title="Vous êtes dans notre secteur ?"
        subtitle="Contactez-nous pour un devis gratuit. Nous nous déplaçons sans engagement."
      />
    </>
  )
}
