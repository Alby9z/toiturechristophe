import { Link } from 'react-router-dom'
import SEOHead from '@/components/SEOHead'

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Page introuvable"
        description="La page que vous cherchez n'existe pas."
        canonical="/404"
      />
      <div className="min-h-screen bg-gradient-ardoise flex items-center justify-center px-4">
        <div className="text-center">
          <p className="font-display text-[8rem] text-cuivre-500/30 leading-none mb-4">404</p>
          <h1 className="font-display text-3xl text-white mb-3">Page introuvable</h1>
          <p className="text-stone-400 mb-8">
            La page que vous cherchez n'existe pas ou a été déplacée.
          </p>
          <Link to="/" className="btn-primary">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </>
  )
}
