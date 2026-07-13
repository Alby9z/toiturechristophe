"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

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
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes={
                item.featured
                  ? "(min-width: 1024px) 66vw, 100vw"
                  : "(min-width: 1024px) 33vw, 100vw"
              }
              className="object-cover transition duration-700 group-hover:scale-105"
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

export default function GalleryClient({ items }) {
  const categories = useMemo(() => {
    return ["Tous", ...Array.from(new Set(items.map((item) => item.category)))];
  }, [items]);

  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "Tous") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  return (
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

            <div className="grid lg:grid-cols-[1.2fr_.8fr]">
              <div className="relative aspect-[16/11] bg-neutral-900 lg:aspect-auto">
                {selectedItem.src ? (
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
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
    </section>
  );
}
