import { Helmet } from 'react-helmet-async'

/**
 * SEOHead — injecte les balises meta SEO par page.
 * Props : title, description, canonical, ogImage
 */
export default function SEOHead({ title, description, canonical, ogImage }) {
  const base = 'https://www.toitures-martin.fr'
  const fullTitle = title
    ? `${title} — Toitures Martin`
    : 'Toitures Martin — Couverture, Zinguerie & Étanchéité à Vesoul'
  const fullCanonical = canonical ? `${base}${canonical}` : base

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={fullCanonical} />
      {ogImage && <meta property="og:image" content={`${base}${ogImage}`} />}
    </Helmet>
  )
}
