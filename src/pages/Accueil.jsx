import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Shield, Clock, Star, Award } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import CTABand from '@/components/CTABand'
import company from '@/data/company.json'
import services from '@/data/services.json'

const WHY_US = [
  {
    icon: <Shield size={28} className="text-cuivre-400" />,
    title: 'Garantie décennale',
    desc: 'Tous nos travaux sont couverts par une assurance décennale. Vous êtes protégé 10 ans.',
  },
  {
    icon: <Award size={28} className="text-cuivre-400" />,
    title: 'Artisan RGE certifié',
    desc: 'Qualification Qualibat RGE vous permettant de bénéficier des aides de l\'État.',
  },
  {
    icon: <Clock size={28} className="text-cuivre-400" />,
    title: 'Délais respectés',
    desc: 'Nous nous engageons sur des délais précis et les tenons, chantier après chantier.',
  },
  {
    icon: <Star size={28} className="text-cuivre-400" />,
    title: 'Devis gratuit',
    desc: 'Déplacement et établissement du devis offerts, sans engagement de votre part.',
  },
]

export default function Accueil() {
  return (
    <>
      <SEOHead
        title={null}
        description="Toitures Martin, artisan couvreur zingueur à Vesoul. Couverture, zinguerie, étanchéité en Haute-Saône. Devis gratuit."
        canonical="/"
      />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center
                          bg-gradient-ardoise overflow-hidden">
        {/* Texture */}
        <div className="absolute inset-0 bg-hero-pattern pointer-events-none" />
        {/* Glow */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cuivre-500/10
                        rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28
                        grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="animate-fade-up">
            <span className="section-tag">Artisan couvreur certifié — Vesoul (70)</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white
                           leading-[1.05] mb-6">
              L'art de<br />
              couvrir <em className="text-cuivre-400 not-italic">juste</em>
            </h1>
            <p className="text-stone-400 font-light text-lg leading-relaxed mb-8 max-w-lg">
              Depuis plus de 20 ans, Toitures Martin intervient sur tous vos projets
              de couverture, zinguerie et étanchéité en Haute-Saône. Qualité artisanale,
              délais respectés, devis gratuit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Devis gratuit <ArrowRight size={16} />
              </Link>
              <Link to="/a-propos" className="btn-outline-white">
                Notre histoire
              </Link>
            </div>

            {/* Certs */}
            <div className="flex flex-wrap gap-3 mt-10">
              {company.certifications.map((c) => (
                <span
                  key={c}
                  className="text-xs text-cuivre-500 border border-cuivre-500/30
                             px-3 py-1 rounded-sm tracking-wider"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-5
                          animate-fade-up [animation-delay:150ms]">
            {company.stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/4 border border-cuivre-500/20 rounded-lg
                           p-5 lg:p-6 text-center lg:text-left
                           lg:flex lg:items-center lg:gap-5"
              >
                <span className="font-display text-4xl lg:text-5xl text-cuivre-400
                                 block lg:inline">
                  {s.value}
                </span>
                <span className="text-xs text-stone-500 tracking-wider uppercase
                                 mt-1 lg:mt-0 block">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="section-tag">Nos prestations</span>
            <h2 className="section-title">
              Trois métiers,<br />une seule exigence
            </h2>
            <p className="section-desc max-w-lg">
              Couverture, zinguerie et étanchéité : notre savoir-faire couvre l'ensemble
              des besoins de votre toiture, du neuf à la rénovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.id}
                to={s.slug}
                className="service-card group"
              >
                {/* Colored top */}
                <div className={`h-40 flex items-center justify-center text-6xl
                  ${s.id === 'couverture' ? 'bg-gradient-to-br from-ardoise-700 to-ardoise-600' : ''}
                  ${s.id === 'zinguerie'  ? 'bg-gradient-to-br from-stone-800 to-stone-700' : ''}
                  ${s.id === 'etancheite' ? 'bg-gradient-to-br from-ardoise-800 to-ardoise-700' : ''}
                `}>
                  {s.icon}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-ardoise-600 mb-2">
                    {s.label}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4">
                    {s.shortDesc}
                  </p>
                  <span className="text-xs text-cuivre-500 font-bold tracking-widest
                                   uppercase flex items-center gap-1.5
                                   group-hover:gap-3 transition-all">
                    Découvrir <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 px-4 bg-ardoise-700">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="section-tag">Pourquoi nous choisir</span>
            <h2 className="font-display text-3xl md:text-4xl text-white leading-tight mb-4">
              L'artisanat au service<br />de votre confiance
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_US.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-lg bg-ardoise-600 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg text-white">{item.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTEUR APERÇU ── */}
      <section className="py-20 px-4 bg-stone-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="section-tag">Zone d'intervention</span>
            <h2 className="section-title">Nous intervenons<br />près de chez vous</h2>
            <p className="section-desc mb-6">
              Basés à Vesoul, nous intervenons dans un rayon de 50 km sur l'ensemble
              de la Haute-Saône et départements limitrophes.
            </p>
            <Link to="/secteur" className="btn-outline-dark">
              Voir notre secteur <ArrowRight size={15} />
            </Link>
          </div>
          <div className="flex-1 flex flex-wrap gap-2 justify-center lg:justify-end">
            {['Vesoul', 'Gray', 'Luxeuil-les-Bains', 'Lure', 'Port-sur-Saône',
              'Héricourt', 'Rioz', 'Jussey', 'Champlitte', 'Faverney'].map((v) => (
              <span
                key={v}
                className="text-sm bg-ardoise-600 text-stone-300 px-4 py-2 rounded-sm"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
