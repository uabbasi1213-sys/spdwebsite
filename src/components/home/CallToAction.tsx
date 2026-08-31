"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CallToAction() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-900 via-accent-800 to-accent-700" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Ready to Ship Your Cargo?
          </h2>
          <p className="text-white/80 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Contact us today for a free quote on your Karachi to Lahore
            transportation needs. Fast response, competitive rates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-accent-700 hover:bg-primary-50 font-bold px-8 py-4 rounded-2xl text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+923000000000"
              className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white font-bold px-8 py-4 rounded-2xl text-base transition-all duration-200 hover:bg-white/10"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
