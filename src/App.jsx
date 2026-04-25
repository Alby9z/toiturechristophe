import { Routes, Route } from 'react-router-dom'
import Navbar        from '@/components/Navbar'
import Footer        from '@/components/Footer'
import CookieBanner  from '@/components/CookieBanner'
import ScrollToTop   from '@/components/ScrollToTop'

import Accueil        from '@/pages/Accueil'
import APropos        from '@/pages/APropos'
import { Couverture, Zinguerie, Etancheite } from '@/pages/Services'
import Secteur        from '@/pages/Secteur'
import Contact        from '@/pages/Contact'
import MentionsLegales from '@/pages/MentionsLegales'
import NotFound       from '@/pages/NotFound'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/"                 element={<Accueil />} />
          <Route path="/a-propos"         element={<APropos />} />
          <Route path="/couverture"       element={<Couverture />} />
          <Route path="/zinguerie"        element={<Zinguerie />} />
          <Route path="/etancheite"       element={<Etancheite />} />
          <Route path="/secteur"          element={<Secteur />} />
          <Route path="/contact"          element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="*"                 element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <CookieBanner />
    </>
  )
}
