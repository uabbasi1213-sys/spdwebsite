"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, ImageIcon } from "lucide-react";

interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  order: number;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(
    null
  );
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    "all",
    ...Array.from(new Set(images.map((img) => img.category))),
  ];

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  if (images.length === 0) {
    return (
      <div className="text-center py-24">
        <div className="w-20 h-20 bg-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <ImageIcon className="w-10 h-10 text-primary-500" />
        </div>
        <h3 className="text-white font-bold text-xl mb-2">No Images Yet</h3>
        <p className="text-primary-400">
          Gallery images will appear here once uploaded from the admin panel.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 capitalize ${
              filter === cat
                ? "bg-accent text-white shadow-orange-glow"
                : "bg-primary-800 text-primary-300 hover:bg-primary-700 hover:text-white border border-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="group relative bg-primary-800 rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            onClick={() => setLightboxImage(image)}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <Image
              src={image.url}
              alt={image.caption}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Zoom Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
              <ZoomIn className="w-6 h-6 text-white" />
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white font-medium text-sm leading-tight">
                {image.caption}
              </p>
              <p className="text-white/60 text-xs mt-1 capitalize">
                {image.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white transition-colors z-50"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-h-[75vh]">
              <Image
                src={lightboxImage.url}
                alt={lightboxImage.caption}
                width={1200}
                height={800}
                className="object-contain w-full h-full max-h-[75vh] rounded-xl"
              />
            </div>
            {lightboxImage.caption && (
              <div className="mt-4 text-center">
                <p className="text-white font-medium">{lightboxImage.caption}</p>
                <p className="text-white/50 text-sm capitalize mt-1">
                  {lightboxImage.category}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
