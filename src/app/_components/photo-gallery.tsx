"use client";

import { useEffect, useId, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import type { PhotoGalleryContent } from "@/contents/photo-galleries";

interface PhotoGalleryProps {
  gallery: PhotoGalleryContent;
}

export function PhotoGallery({ gallery }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const titleId = useId();

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current - 1 + gallery.photos.length) % gallery.photos.length,
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % gallery.photos.length,
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null
            ? null
            : (current - 1 + gallery.photos.length) % gallery.photos.length,
        );
      }
      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? null : (current + 1) % gallery.photos.length,
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, gallery.photos.length]);

  const selectedPhoto =
    selectedIndex === null ? null : gallery.photos[selectedIndex];

  return (
    <section className="bg-white py-16" aria-labelledby={titleId}>
      <div className="container mx-auto px-6">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <div className="max-w-3xl">
            <h2
              id={titleId}
              className="text-4xl font-bold tracking-tight text-gray-900"
            >
              {gallery.title}
            </h2>
            {gallery.description && (
              <p className="mt-3 text-base leading-7 text-gray-600">
                {gallery.description}
              </p>
            )}
          </div>
          <p className="shrink-0 text-base text-gray-600">{gallery.details}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {gallery.photos.map((photo, index) => (
            <button
              type="button"
              key={photo.src}
              onClick={() => setSelectedIndex(index)}
              className={`group relative overflow-hidden rounded-2xl bg-gray-200 text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
                photo.width / photo.height > 1.75 ? "md:col-span-2" : ""
              }`}
              style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
              aria-label={`Open photo ${index + 1} of ${gallery.photos.length}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.015] group-hover:brightness-95"
              />
            </button>
          ))}
        </div>
      </div>

      {selectedPhoto && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${gallery.title}, photo ${selectedIndex + 1} of ${gallery.photos.length}`}
          onClick={() => setSelectedIndex(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-4 top-4 rounded-full bg-black/45 p-2 text-white transition hover:bg-black/70 sm:right-6 sm:top-6"
            aria-label="Close photo"
          >
            <XMarkIcon className="h-7 w-7" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-3 rounded-full bg-black/45 p-2 text-white transition hover:bg-black/70 sm:left-6"
            aria-label="Previous photo"
          >
            <ChevronLeftIcon className="h-7 w-7" />
          </button>

          <figure
            className="flex max-h-full max-w-6xl flex-col items-center gap-3"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-h-[82vh] max-w-full rounded-xl object-contain shadow-2xl"
            />
            <figcaption className="text-sm text-white/75">
              {selectedIndex + 1} / {gallery.photos.length}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 rounded-full bg-black/45 p-2 text-white transition hover:bg-black/70 sm:right-6"
            aria-label="Next photo"
          >
            <ChevronRightIcon className="h-7 w-7" />
          </button>
        </div>
      )}
    </section>
  );
}
