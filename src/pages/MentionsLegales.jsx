import SEOHead from '@/components/SEOHead'
import PageHeader from '@/components/PageHeader'
import company from '@/data/company.json'

const Section = ({ id, title, children }) => (
  <div id={id} className="mb-12 scroll-mt-24">
    <h2 className="font-display text-2xl text-ardoise-600 mb-4 pb-3
                   border-b border-stone-200">
      {title}
    </h2>
    <div className="space-y-3 text-stone-600 text-sm leading-relaxed">
      {children}
    </div>
  </div>
)

export default function MentionsLegales() {
  return (
    <>
      <SEOHead
        title="Mentions légales"
        description="Mentions légales, politique de confidentialité et gestion des cookies de Toitures Martin."
        canonical="/mentions-legales"
      />

      <PageHeader
        tag="Informations légales"
        title="Mentions légales"
        subtitle="Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004."
        breadcrumb={[{ label: 'Mentions légales' }]}
      />

      <article className="py-20 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Sommaire */}
          <nav className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-12">
            <h2 className="font-display text-lg text-ardoise-600 mb-4">Sommaire</h2>
            <ul className="space-y-2">
              {[
                ['#editeur',          '1. Éditeur du site'],
                ['#hebergement',      '2. Hébergement'],
                ['#propriete',        '3. Propriété intellectuelle'],
                ['#responsabilite',   '4. Responsabilité'],
                ['#confidentialite',  '5. Politique de confidentialité (RGPD)'],
                ['#cookies',          '6. Gestion des cookies'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href}
                     className="text-sm text-cuivre-600 hover:text-cuivre-500 underline
                                underline-offset-2 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Section id="editeur" title="1. Éditeur du site">
            <p>Le présent site est édité par :</p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
              <li><strong>Raison sociale :</strong> {company.name}</li>
              <li><strong>Forme juridique :</strong> {company.legalForm}</li>
              <li><strong>Capital social :</strong> {company.capital}</li>
              <li><strong>SIRET :</strong> {company.siret}</li>
              <li><strong>RCS :</strong> {company.rcs}</li>
              <li><strong>Adresse :</strong> {company.address.street}, {company.address.zip} {company.address.city}</li>
              <li><strong>Téléphone :</strong> {company.phone}</li>
              <li><strong>Email :</strong> {company.email}</li>
              <li><strong>Directeur de la publication :</strong> {company.director}</li>
            </ul>
          </Section>

          <Section id="hebergement" title="2. Hébergement">
            <p>Le site est hébergé par :</p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
              <li><strong>Société :</strong> {company.host.name}</li>
              <li><strong>Adresse :</strong> {company.host.address}</li>
              <li><strong>Site web :</strong>{' '}
                <a href={company.host.website} target="_blank" rel="noopener noreferrer"
                   className="text-cuivre-600 underline">{company.host.website}</a>
              </li>
            </ul>
          </Section>

          <Section id="propriete" title="3. Propriété intellectuelle">
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes)
              est la propriété exclusive de {company.name} ou de ses partenaires,
              sauf mention contraire.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou adaptation
              de tout ou partie des éléments du site, quel que soit le moyen ou le procédé
              utilisé, est interdite sauf autorisation écrite préalable de {company.name}.
            </p>
          </Section>

          <Section id="responsabilite" title="4. Limitation de responsabilité">
            <p>
              {company.name} s'efforce d'assurer au mieux de ses possibilités l'exactitude
              et la mise à jour des informations diffusées sur ce site, dont elle se réserve
              le droit de corriger le contenu à tout moment sans préavis.
            </p>
            <p>
              {company.name} décline toute responsabilité pour les dommages résultant
              de l'utilisation du site ou de l'impossibilité d'y accéder.
            </p>
          </Section>

          <Section id="confidentialite" title="5. Politique de confidentialité (RGPD)">
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD)
              et à la loi « Informatique et Libertés » du 6 janvier 1978, vous disposez
              d'un droit d'accès, de rectification, d'effacement et d'opposition
              concernant vos données personnelles.
            </p>

            <h3 className="font-bold text-ardoise-600 mt-4 mb-2">Données collectées</h3>
            <p>
              Via le formulaire de contact, nous collectons : prénom, nom, adresse email,
              numéro de téléphone, et le contenu de votre message.
            </p>

            <h3 className="font-bold text-ardoise-600 mt-4 mb-2">Finalité du traitement</h3>
            <p>
              Ces données sont utilisées exclusivement pour traiter votre demande de devis
              et vous recontacter. Elles ne sont ni cédées, ni vendues à des tiers.
            </p>

            <h3 className="font-bold text-ardoise-600 mt-4 mb-2">Durée de conservation</h3>
            <p>
              Les données sont conservées pendant une durée maximale de 3 ans à compter
              du dernier contact, conformément aux recommandations de la CNIL.
            </p>

            <h3 className="font-bold text-ardoise-600 mt-4 mb-2">Vos droits</h3>
            <p>
              Pour exercer vos droits (accès, rectification, suppression, opposition),
              contactez-nous par email à{' '}
              <a href={`mailto:${company.email}`} className="text-cuivre-600 underline">
                {company.email}
              </a>{' '}
              ou par courrier à notre adresse. Vous pouvez également introduire une
              réclamation auprès de la CNIL (www.cnil.fr).
            </p>

            <h3 className="font-bold text-ardoise-600 mt-4 mb-2">Responsable du traitement</h3>
            <p>
              {company.director} — {company.name}<br />
              {company.address.street}, {company.address.zip} {company.address.city}<br />
              {company.email}
            </p>
          </Section>

          <Section id="cookies" title="6. Gestion des cookies">
            <p>
              Un cookie est un petit fichier texte stocké sur votre appareil lors de
              la visite d'un site web. Ce site peut utiliser des cookies fonctionnels
              (nécessaires au bon fonctionnement du site) et des cookies analytiques
              (mesure d'audience anonymisée).
            </p>

            <h3 className="font-bold text-ardoise-600 mt-4 mb-2">Cookies utilisés</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-stone-200 rounded">
                <thead className="bg-stone-100">
                  <tr>
                    {['Nom', 'Type', 'Durée', 'Finalité'].map((h) => (
                      <th key={h} className="text-left px-3 py-2 text-stone-600 font-bold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-stone-200">
                    <td className="px-3 py-2 font-mono">tm_cookie_consent</td>
                    <td className="px-3 py-2">Fonctionnel</td>
                    <td className="px-3 py-2">1 an</td>
                    <td className="px-3 py-2">Mémorisation du choix de consentement</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              Vous pouvez à tout moment retirer votre consentement en supprimant les cookies
              dans les paramètres de votre navigateur, ou en cliquant sur « Refuser » dans
              la bannière de consentement.
            </p>
          </Section>

          <p className="text-xs text-stone-400 border-t border-stone-200 pt-6 mt-6">
            Dernière mise à jour : janvier 2025
          </p>
        </div>
      </article>
    </>
  )
}
