import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'

const STORAGE_KEY = 'tm_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
    // Ici : initialiser Google Analytics ou autre si accepté
  }

  const refuse = () => {
    localStorage.setItem(STORAGE_KEY, 'refused')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Gestion des cookies"
      className="fixed bottom-0 left-0 right-0 z-50
                 bg-ardoise-800 border-t-2 border-cuivre-500/50
                 shadow-[0_-4px_30px_rgba(0,0,0,0.4)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4
                      flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Text */}
        <p className="flex-1 text-sm text-stone-400 leading-relaxed">
          Nous utilisons des cookies pour améliorer votre expérience de navigation.
          En cliquant sur « Accepter », vous consentez à leur utilisation.{' '}
          <Link
            to="/mentions-legales#cookies"
            className="text-cuivre-400 underline underline-offset-2 hover:text-cuivre-300"
          >
            En savoir plus
          </Link>
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={refuse}
            className="text-xs text-stone-500 hover:text-stone-300 underline
                       transition-colors cursor-pointer"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="btn-primary py-2 px-5 text-xs"
          >
            Accepter
          </button>
          <button
            onClick={refuse}
            className="p-1.5 text-stone-500 hover:text-stone-300 transition-colors"
            aria-label="Fermer"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
