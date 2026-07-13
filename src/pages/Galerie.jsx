import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

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

function PlaceholderVisual({ title, category, featured }) {
  return (
    <div
      className={[
        "absolute inset-0 overflow-hidden",
        featured
          ? "bg-[radial-gradient(circle_at_top_left,#f6d365,transparent_35%),linear-gradient(135deg,#1f1f1f,#3a3327)]"
          : "bg-[radial-gradient(circle_at_top_right,#f6d365,transparent_30%),linear-gradient(135deg,#242424,#4a4031)]",
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:42px_42px] opacity-25" />

      <div className="absolute bottom-6 left-6 right-6">
        <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
          Photo à ajouter
        </div>

        <div className="text-xl font-semibold text-white">{title}</div>
        <div className="mt-1 text-sm text-white/60">{category}</div>
      </div>
    </div>
  );
}

function GalleryCard({ item, onOpen }) {
  return (
    <article
      className={[
        "group relative overflow-hidden rounded-[1.75rem] bg-neutral-900 shadow-sm ring-1 ring-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl",
        item.featured ? "lg:col-span-2" : "",
      ].join(" ")}
    >
      <button
        type="button"
        onClick={() => onOpen(item)}
        className="block w-full text-left"
        aria-label={`Voir ${item.title}`}
      >
        <div
          className={[
            "relative overflow-hidden",
            item.featured ? "aspect-[16/10]" : "aspect-[4/5]",
          ].join(" ")}
        >
          {item.src ? (
            <img
              src={item.src}
              alt={item.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <PlaceholderVisual
              title={item.title}
              category={item.category}
              featured={item.featured}
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

          <div className="absolute left-5 top-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900">
              {item.category}
            </span>
            <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              {item.year}
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <div className="text-sm text-white/60">{item.location}</div>

            <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/65">
              {item.description}
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
              Voir le détail
              <span className="transition group-hover:translate-x-1">→</span>
            </div>
          </div>
        </div>
      </button>
    </article>
  );
}

export default function Galerie() {
  const categories = useMemo(() => {
    return ["Tous", ...Array.from(new Set(galleryItems.map((item) => item.category)))];
  }, []);

  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "Tous") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#171717]">
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
                to="/contact"
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
              L’objectif n’est pas juste d’afficher des images. Une bonne galerie
              doit rassurer : montrer la qualité des finitions, expliquer le type
              d’intervention et donner envie de demander un devis.
            </p>
          </div>
        </div>
      </section>

      <section id="realisations" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
                Réalisations
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
                Une sélection claire, filtrable et pensée pour convertir.
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={isActive}
                    className={[
                      "rounded-full px-4 py-2 text-sm font-semibold transition",
                      isActive
                        ? "bg-[#151515] text-white"
                        : "bg-white text-neutral-700 ring-1 ring-black/10 hover:bg-neutral-100",
                    ].join(" ")}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <GalleryCard key={item.id} item={item} onOpen={setSelectedItem} />
            ))}
          </div>
        </div>
      </section>

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
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#151515] transition hover:bg-amber-100"
            >
              Prendre contact
            </Link>
          </div>
        </div>
      </section>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-white"
              aria-label="Fermer"
            >
              Fermer
            </button>

            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[16/11] bg-neutral-900 lg:aspect-auto">
                {selectedItem.src ? (
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <PlaceholderVisual
                    title={selectedItem.title}
                    category={selectedItem.category}
                    featured
                  />
                )}
              </div>

              <div className="p-7 sm:p-10">
                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                    {selectedItem.category}
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700">
                    {selectedItem.year}
                  </span>
                </div>

                <h3 className="text-3xl font-semibold tracking-tight">
                  {selectedItem.title}
                </h3>

                <p className="mt-3 text-sm font-medium text-neutral-500">
                  {selectedItem.location}
                </p>

                <p className="mt-6 leading-8 text-neutral-600">
                  {selectedItem.description}
                </p>

                <div className="mt-8 rounded-2xl bg-neutral-50 p-5 ring-1 ring-black/5">
                  <div className="text-sm font-semibold text-neutral-900">
                    Conseil
                  </div>

                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    Ajoutez idéalement une photo avant, une photo pendant, puis
                    une photo finale pour chaque réalisation. C’est plus
                    convaincant qu’une simple image finale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
