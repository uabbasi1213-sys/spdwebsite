import type { Metadata } from "next";
import { Camera, Images } from "lucide-react";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { getGallery } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery | SUPER PAK DATA Fleet & Operations",
  description:
    "View SUPER PAK DATA's fleet of cargo trucks, trailers, and container transportation vehicles operating on the Karachi–Lahore route.",
};

export default function GalleryPage() {
  const images = getGallery();

  return (
    <div className="min-h-screen bg-primary-900">
      {/* Hero Banner */}
      <div className="relative pt-20 bg-primary-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-sm font-semibold px-4 py-2 rounded-full mb-5">
            <Camera className="w-4 h-4" />
            Our Gallery
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Our Fleet &{" "}
            <span className="text-accent">Operations</span>
          </h1>
          <p className="text-primary-300 text-xl max-w-2xl leading-relaxed">
            A glimpse into our professional transportation operations and fleet
            serving the Karachi–Lahore route.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {images.length > 0 ? (
          <GalleryGrid images={images} />
        ) : (
          <div className="text-center py-24">
            <div className="w-24 h-24 bg-primary-800/60 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Images className="w-12 h-12 text-primary-500" />
            </div>
            <h2 className="text-white font-bold text-2xl mb-3">
              Gallery Coming Soon
            </h2>
            <p className="text-primary-400 max-w-md mx-auto">
              We are currently uploading our fleet and operations images. Please
              check back soon or contact us for more information.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
