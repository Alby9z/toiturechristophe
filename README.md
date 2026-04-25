# Toitures Martin — Site Vitrine

Site vitrine statique pour un artisan couvreur zingueur.  
Stack : **React 18 + Vite + Tailwind CSS 3 + react-router-dom + react-helmet-async**

---

## Structure du projet

```
toitures-martin/
├── public/
│   ├── index.html          ← HTML de base + SEO + JSON-LD
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.svg         ← À remplacer par le logo du client
│
├── src/
│   ├── assets/             ← Logos, images (à ajouter)
│   │
│   ├── components/
│   │   ├── SEOHead.jsx     ← Balises meta par page (react-helmet-async)
│   │   ├── Navbar.jsx      ← Navigation responsive + hamburger
│   │   ├── Footer.jsx      ← Footer avec liens et coordonnées
│   │   ├── CookieBanner.jsx← Bandeau RGPD cookies
│   │   ├── ScrollToTop.jsx ← Reset scroll au changement de route
│   │   ├── PageHeader.jsx  ← En-tête réutilisable (breadcrumb, titre)
│   │   └── CTABand.jsx     ← Bande CTA réutilisable
│   │
│   ├── data/
│   │   ├── company.json    ← ⭐ Infos société (nom, tél, adresse…)
│   │   ├── services.json   ← ⭐ Données des 3 services
│   │   ├── zones.json      ← ⭐ Zones d'intervention
│   │   └── navigation.json ← Liens de navigation
│   │
│   ├── hooks/
│   │   ├── useScrollTop.js ← Scroll to top au changement de page
│   │   └── useReveal.js    ← Animations d'apparition au scroll
│   │
│   ├── pages/
│   │   ├── Accueil.jsx     ← Page d'accueil (Hero + Services + Why Us)
│   │   ├── APropos.jsx     ← Qui sommes-nous (équipe, valeurs)
│   │   ├── ServicePage.jsx ← Template générique service
│   │   ├── Services.jsx    ← Couverture / Zinguerie / Étanchéité
│   │   ├── Secteur.jsx     ← Zone d'intervention
│   │   ├── Contact.jsx     ← Formulaire de contact (EmailJS)
│   │   ├── MentionsLegales.jsx ← ML + RGPD + Cookies
│   │   └── NotFound.jsx    ← Page 404
│   │
│   ├── utils/
│   │   ├── validators.js   ← Règles de validation react-hook-form
│   │   └── emailService.js ← Service d'envoi via EmailJS
│   │
│   ├── App.jsx             ← Routing React Router
│   ├── main.jsx            ← Point d'entrée React
│   └── index.css           ← Tailwind + styles globaux
│
├── tailwind.config.js      ← Design tokens (couleurs, fonts…)
├── vite.config.js
├── postcss.config.js
├── package.json
└── .env.example            ← Variables EmailJS à configurer
```

---

## Installation & lancement

```bash
# 1. Installer les dépendances
npm install

# 2. Copier le fichier d'environnement
cp .env.example .env

# 3. Démarrer en développement
npm run dev

# 4. Build de production
npm run build

# 5. Prévisualiser le build
npm run preview
```

---

## ⭐ Personnalisation — à faire avant mise en ligne

### 1. Données société (`src/data/company.json`)
Remplacer toutes les valeurs fictives :
- `name`, `phone`, `email`, `address`, `siret`, `rcs`, `director`
- `socials.facebook`, `socials.instagram`

### 2. Services (`src/data/services.json`)
Adapter les descriptions, prestations et matériaux aux activités réelles.

### 3. Zones (`src/data/zones.json`)
Mettre à jour les villes et distances selon la zone réelle d'intervention.

### 4. Formulaire de contact — EmailJS

1. Créer un compte gratuit sur [emailjs.com](https://www.emailjs.com)
2. Créer un **Service** (Gmail, SMTP OVH, etc.)
3. Créer un **Template** avec les variables :
   ```
   {{from_prenom}} {{from_nom}}
   {{from_email}} — {{from_phone}}
   Service : {{service_type}}
   Message : {{message}}
   ```
4. Copier les identifiants dans `.env` :
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```

### 5. SEO
- Mettre à jour `public/sitemap.xml` avec la vraie URL
- Mettre à jour `public/robots.txt` avec la vraie URL
- Remplacer le JSON-LD dans `public/index.html` avec les vraies coordonnées GPS
- Inscrire le site sur **Google Search Console** après mise en ligne

### 6. Logo & images
- Remplacer `public/favicon.svg` par le logo du client
- Ajouter des photos de chantiers dans `src/assets/`
- Remplacer les emojis/placeholders par les vraies images dans les composants

---

## Déploiement

### Vercel (recommandé — gratuit)
```bash
npm i -g vercel
vercel
```
Vercel détecte automatiquement Vite. Ajouter les variables `VITE_*` dans le dashboard.

### OVH / Hébergement classique
```bash
npm run build
# Uploader le dossier dist/ via FTP
```

### Netlify
```bash
npm run build
# Drag & drop du dossier dist/ sur netlify.com
```

---

## HTTPS & SSL
- **Vercel / Netlify** : SSL automatique (Let's Encrypt) ✅
- **OVH** : activer le certificat SSL dans l'espace client OVH

---

## RGPD — checklist
- [x] Bandeau cookies avec accepter/refuser
- [x] Consentement mémorisé en localStorage
- [x] Checkbox RGPD dans le formulaire de contact
- [x] Page mentions légales complète (éditeur, hébergeur, CNIL)
- [x] Politique de confidentialité détaillée
- [x] Tableau des cookies
- [ ] Inscrire l'entreprise comme responsable de traitement CNIL si besoin
- [ ] Configurer le DPO si volume > 5000 personnes

---

## Performances cibles (Lighthouse)
| Métrique       | Cible  |
|---------------|--------|
| Performance   | > 90   |
| Accessibilité | > 90   |
| Bonnes pratiques | > 95 |
| SEO           | 100    |
