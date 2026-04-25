import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import PageHeader from '@/components/PageHeader'
import { validators } from '@/utils/validators'
import { sendContactEmail } from '@/utils/emailService'
import company from '@/data/company.json'
import services from '@/data/services.json'
import { Link } from 'react-router-dom'

const CONTACT_ITEMS = [
  {
    icon: <Phone size={18} className="text-cuivre-400" />,
    label: 'Téléphone',
    value: company.phone,
    href: `tel:${company.phone.replace(/\s/g, '')}`,
  },
  {
    icon: <Mail size={18} className="text-cuivre-400" />,
    label: 'Email',
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: <MapPin size={18} className="text-cuivre-400" />,
    label: 'Adresse',
    value: `${company.address.street}, ${company.address.zip} ${company.address.city}`,
  },
  {
    icon: <Clock size={18} className="text-cuivre-400" />,
    label: 'Horaires',
    value: `${company.hours.weekdays} · ${company.hours.saturday}`,
  },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setStatus('sending')
    try {
      await sendContactEmail(data)
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <SEOHead
        title="Contact & Devis"
        description={`Contactez Toitures Martin pour un devis gratuit. ${company.phone} — ${company.email}. Réponse sous 48h.`}
        canonical="/contact"
      />

      <PageHeader
        tag="Contactez-nous"
        title="Devis gratuit"
        subtitle="Réponse garantie sous 48h. Déplacement et établissement du devis offerts."
        breadcrumb={[{ label: 'Contact' }]}
      />

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">

          {/* ── INFOS ── */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl text-ardoise-600 mb-8">
              Nos coordonnées
            </h2>
            <ul className="space-y-6 mb-10">
              {CONTACT_ITEMS.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-ardoise-600 flex items-center
                                  justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-2xs text-stone-400 tracking-widest uppercase mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href}
                         className="text-sm text-stone-700 font-semibold hover:text-cuivre-600 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-stone-700 font-semibold">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
              <p className="text-xs text-stone-400 tracking-widest uppercase mb-3">
                Certifications
              </p>
              {company.certifications.map((c) => (
                <div key={c} className="flex items-center gap-2 mb-2">
                  <CheckCircle size={14} className="text-cuivre-500 flex-shrink-0" />
                  <span className="text-sm text-stone-600">{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── FORMULAIRE ── */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-stone-200 rounded-xl p-8 shadow-card">
              <h3 className="font-display text-2xl text-ardoise-600 mb-6">
                Votre demande de devis
              </h3>

              {/* SUCCESS */}
              {status === 'success' && (
                <div className="flex flex-col items-center text-center py-8 gap-4">
                  <CheckCircle size={52} className="text-green-500" />
                  <h4 className="font-display text-xl text-ardoise-600">
                    Message envoyé !
                  </h4>
                  <p className="text-stone-500 text-sm max-w-xs">
                    Nous avons bien reçu votre demande et vous répondrons dans les 48h.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-outline-dark mt-2"
                  >
                    Nouvelle demande
                  </button>
                </div>
              )}

              {/* FORM */}
              {status !== 'success' && (
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  {/* Honeypot anti-spam */}
                  <input
                    type="text"
                    name="_honey"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    {...register('_honey')}
                  />

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {/* Prénom */}
                    <div>
                      <label className="form-label">Prénom *</label>
                      <input
                        type="text"
                        className={`form-input ${errors.prenom ? 'border-red-400' : ''}`}
                        placeholder="Jean"
                        autoComplete="given-name"
                        {...register('prenom', validators.prenom)}
                      />
                      {errors.prenom && (
                        <p className="text-red-500 text-xs mt-1">{errors.prenom.message}</p>
                      )}
                    </div>

                    {/* Nom */}
                    <div>
                      <label className="form-label">Nom *</label>
                      <input
                        type="text"
                        className={`form-input ${errors.nom ? 'border-red-400' : ''}`}
                        placeholder="Dupont"
                        autoComplete="family-name"
                        {...register('nom', validators.nom)}
                      />
                      {errors.nom && (
                        <p className="text-red-500 text-xs mt-1">{errors.nom.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {/* Email */}
                    <div>
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        className={`form-input ${errors.email ? 'border-red-400' : ''}`}
                        placeholder="jean@email.fr"
                        autoComplete="email"
                        {...register('email', validators.email)}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Téléphone */}
                    <div>
                      <label className="form-label">Téléphone *</label>
                      <input
                        type="tel"
                        className={`form-input ${errors.phone ? 'border-red-400' : ''}`}
                        placeholder="06 00 00 00 00"
                        autoComplete="tel"
                        {...register('phone', validators.phone)}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Service */}
                  <div className="mb-4">
                    <label className="form-label">Type de prestation *</label>
                    <select
                      className={`form-input ${errors.service ? 'border-red-400' : ''}`}
                      {...register('service', validators.service)}
                    >
                      <option value="">-- Choisissez une prestation --</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.label}>
                          {s.icon} {s.label}
                        </option>
                      ))}
                      <option value="Autre">Autre / Je ne sais pas encore</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-5">
                    <label className="form-label">Votre message *</label>
                    <textarea
                      rows={5}
                      className={`form-input resize-y ${errors.message ? 'border-red-400' : ''}`}
                      placeholder="Décrivez votre projet (surface, localisation, nature des travaux…)"
                      {...register('message', validators.message)}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* RGPD */}
                  <div className="mb-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="mt-1 accent-cuivre-500"
                        {...register('rgpd', validators.rgpd)}
                      />
                      <span className="text-xs text-stone-500 leading-relaxed">
                        J'accepte que mes données soient utilisées pour traiter ma demande,
                        conformément à la{' '}
                        <Link
                          to="/mentions-legales#confidentialite"
                          className="text-cuivre-500 underline"
                        >
                          politique de confidentialité
                        </Link>
                        . *
                      </span>
                    </label>
                    {errors.rgpd && (
                      <p className="text-red-500 text-xs mt-1">{errors.rgpd.message}</p>
                    )}
                  </div>

                  {/* Error */}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200
                                    rounded p-3 mb-4 text-red-600 text-sm">
                      <AlertCircle size={16} />
                      Une erreur s'est produite. Veuillez réessayer ou nous appeler directement.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full justify-center disabled:opacity-60
                               disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white
                                         rounded-full animate-spin" />
                        Envoi en cours…
                      </>
                    ) : (
                      'Envoyer ma demande'
                    )}
                  </button>

                  <p className="text-center text-xs text-stone-400 mt-4">
                    * Champs obligatoires — Réponse sous 48h garantie
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
