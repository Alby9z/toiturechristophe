import Link from "next/link";
import GalleryClient from "./GalleryClient";

export const metadata = {
  title: "Galerie de réalisations | Chantiers et finitions",
  description:
    "Découvrez une sélection de réalisations : couverture, zinguerie, étanchéité, rénovations et finitions.",
  alternates: {
    canonical: "/galerie",
  },
};

const galleryItems = [
  {
    id: "renovation-toiture-complete",
    title: "Rénovation complète de toiture",
    category: "Couverture",
    location: "Pays de Montbéliard",
    year: "2026",
    description:
      "Réfection complète avec reprise des points sensibles, traitement des finitions et rendu propre.",
    src: null,
    featured: true,
  },
  {
    id: "zinguerie-sur-mesure",
    title: "Zinguerie sur mesure",
    category: "Zinguerie",
    location: "Doubs",
    year: "2026",
    description:
      "Pose et ajustement des éléments de zinguerie pour une évacuation fiable et une finition nette.",
    src: null,
    featured: false,
  },
  {
    id: "etancheite-toiture-plate",
    title: "Étanchéité toiture plate",
    category: "Étanchéité",
    location: "Belfort / Montbéliard",
    year: "2025",
    description:
      "Intervention ciblée sur les zones exposées à l’eau, avec contrôle des raccords et protections.",
    src: null,
    featured: false,
  },
  {
    id: "reparation-apres-intemperies",
    title: "Réparation après intempéries",
    category: "Réparation",
    location: "Franche-Comté",
    year: "2025",
    description:
      "Diagnostic, sécurisation et réparation rapide après infiltrations ou éléments endommagés.",
    src: null,
    featured: true,
  },
  {
    id: "habillage-rives",
    title: "Habillage de rives",
    category: "Finitions",
    location: "Doubs",
    year: "2026",
    description:
      "Travail de finition pour protéger durablement les bordures et améliorer le rendu visuel.",
    src: null,
    featured: false,
  },
  {
    id: "nettoyage-controle-toiture",
    title: "Nettoyage et contrôle toiture",
    category: "Entretien",
    location: "Aire urbaine",
    year: "2025",
    description:
      "Nettoyage, inspection et vérification des éléments sensibles pour prolonger la durée de vie du toit.",
    src: null,
    featured: false,
  },
];

const stats = [
  { label: "Types de travaux", value: "6" },
  { label: "Photos à venir", value: "HD" },
  { label: "Détails visibles", value: "Avant / Après" },
];

export default function GaleriePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Galerie de réalisations",
    description:
      "Galerie de chantiers et réalisations : couverture, zinguerie, étanchéité, réparations et finitions.",
    url: "/galerie",
  };

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#171717]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative isolate overflow-hidden bg-[#151515] text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-amber-500/20 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur">
              Galerie professionnelle · Réalisations & finitions
            </div>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
              Des réalisations visibles, propres et rassurantes.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Une galerie pensée pour montrer le sérieux du travail : photos de
              chantiers, détails techniques, finitions, rénovations et
              interventions avant / après.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#151515] transition hover:bg-amber-100"
              >
                Demander un devis
              </Link>

              <a
                href="#realisations"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Voir la galerie
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur"
              >
                <div className="text-3xl font-semibold">{stat.value}</div>
                <div className="mt-2 text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_.7fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              Galerie
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Une page qui inspire confiance avant même le premier appel.
            </h2>
          </div>

          <div className="text-base leading-8 text-neutral-600">
            <p>
              L’objectif n’est pas juste d’afficher des images. Une bonne
              galerie doit rassurer : montrer la qualité des finitions,
              expliquer le type d’intervention et donner envie de demander un
              devis.
            </p>
          </div>
        </div>
      </section>

      <GalleryClient items={galleryItems} />

      <section className="bg-[#151515] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Votre projet
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Vous voulez un rendu aussi propre ?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-white/65">
            Contactez-nous pour une intervention, une rénovation, un diagnostic
            ou un devis personnalisé.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#151515] transition hover:bg-amber-100"
            >
              Prendre contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
