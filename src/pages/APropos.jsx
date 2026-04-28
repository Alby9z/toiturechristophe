import { Shield, Award, Users, Wrench } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import PageHeader from '@/components/PageHeader'
import CTABand from '@/components/CTABand'
import company from '@/data/company.json'

const VALUES = [
  { icon: <Shield size={24} className="text-cuivre-400" />, title: 'Intégrité',   desc: 'Devis honnêtes, travaux sans mauvaises surprises.' },
  { icon: <Award  size={24} className="text-cuivre-400" />, title: 'Excellence',  desc: 'Matériaux premium, finitions soignées à chaque chantier.' },
  { icon: <Users  size={24} className="text-cuivre-400" />, title: 'Proximité',   desc: 'Un artisan local qui connaît votre région et ses contraintes.' },
  { icon: <Wrench size={24} className="text-cuivre-400" />, title: 'Savoir-faire', desc: '25 ans de métier transmis avec passion et rigueur.' },
]

const TEAM = [
  {
    emoji: '👷',
    name: 'Jean Martin',
    role: 'Fondateur & Maître couvreur',
    bio: 'Fort d\'un CAP et d\'un Brevet Professionnel Couverture, Jean a fondé Toitures Martin en 2005 après 8 ans de compagnonnage. Il supervise chaque chantier et garantit la qualité de l\'ensemble des réalisations.',
  },
  {
    emoji: '🔧',
    name: 'Pierre Durand',
    role: 'Chef d\'équipe — Zinguerie',
    bio: 'Spécialiste du zinc et des métaux, Pierre assure la réalisation de tous les ouvrages de zinguerie avec une précision d\'horloger. 12 ans d\'expérience dans la pose et le façonnage.',
  },
  {
    emoji: '💧',
    name: 'Marc Leroy',
    role: 'Technicien étanchéité',
    bio: 'Expert en membranes bitumineuses et EPDM, Marc intervient sur les toitures-terrasses et toits plats. Certifié par les principaux fabricants de systèmes d\'étanchéité.',
  },
]

export default function APropos() {
  return (
    <>
      <SEOHead
        title="Qui sommes-nous"
        description="Découvrez l'équipe Les Toitures de Christophe, artisan couvreur à Valdieu-Lutran depuis 2025. 25 ans d'expérience, certifié RGE Qualibat, garantie décennale."
        canonical="/a-propos"
      />

      <PageHeader
        tag="Notre histoire"
        title="Qui sommes-nous ?"
        subtitle="Un artisan de confiance, une équipe passionnée, deux décennies d'excellence."
        breadcrumb={[{ label: 'Qui sommes-nous' }]}
      />

      {/* ── HISTOIRE ── */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-tag">Depuis 2025</span>
            <h2 className="section-title">Une entreprise familiale<br />ancrée dans le Haut-Rhin</h2>
            <p className="text-stone-500 font-light leading-relaxed mb-5">
              Les Toitures de Christophe est née de la passion de Goeller Christophe pour le métier de couvreur.
              Après avoir appris son métier auprès des meilleurs artisans de la région,
              il crée sa propre entreprise à Valdieux-Lutran en 2025 avec une conviction simple :
              offrir une qualité d'artisanat irréprochable au juste prix.
            </p>
            <p className="text-stone-500 font-light leading-relaxed mb-8">
              Aujourd'hui, l'entreprise intervient dans le Haut-Rhin et dans les départements
              limitrophes. Notre réputation repose sur la rigueur, la transparence et
              le respect de nos engagements.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {company.certifications.map((c) => (
                <div key={c} className="flex items-center gap-2 bg-stone-50
                                        border border-stone-200 rounded px-4 py-3">
                  <span className="text-cuivre-500 font-bold text-lg">✓</span>
                  <span className="text-sm text-stone-700 font-medium">{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual block */}
          <div className="grid grid-cols-2 gap-4">
            {company.stats.map((s) => (
              <div key={s.label}
                   className="bg-ardoise-600 rounded-lg p-8 text-center">
                <span className="font-display text-5xl text-cuivre-400 block">{s.value}</span>
                <span className="text-xs text-stone-400 tracking-wider uppercase mt-2 block">
                  {s.label}
                </span>
              </div>
            ))}
            <div className="col-span-2 bg-cuivre-500 rounded-lg p-6 text-center">
              <span className="font-display text-2xl text-white">Intervenant local</span>
              <p className="text-white/70 text-sm mt-1">Dannemarie & Département voisin</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE ── */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">Notre équipe</span>
            <h2 className="section-title">Des professionnels<br />à votre service</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((m) => (
              <div key={m.name}
                   className="bg-white border border-stone-200 rounded-lg p-8
                              hover:shadow-card transition-shadow">
                <div className="w-20 h-20 rounded-full bg-ardoise-600 flex items-center
                                justify-center text-4xl mx-auto mb-5">
                  {m.emoji}
                </div>
                <h3 className="font-display text-xl text-ardoise-600 text-center mb-1">
                  {m.name}
                </h3>
                <p className="text-xs text-cuivre-500 tracking-widest uppercase text-center mb-4">
                  {m.role}
                </p>
                <p className="text-stone-500 text-sm leading-relaxed text-center">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALEURS ── */}
      <section className="py-20 px-4 bg-ardoise-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">Nos engagements</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Ce qui nous guide
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((v) => (
              <div key={v.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-ardoise-600 flex items-center
                                justify-center mx-auto mb-4">
                  {v.icon}
                </div>
                <h3 className="font-display text-xl text-white mb-2">{v.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
