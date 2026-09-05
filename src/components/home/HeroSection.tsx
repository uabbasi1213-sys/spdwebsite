"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Shield, CheckCircle } from "lucide-react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=90"
          alt="SUPER PAK DATA cargo truck on Pakistani highway"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Layered overlays for premium look */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/98 via-primary-900/90 to-primary-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-primary-950/30" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              Pakistan&apos;s Trusted Freight Partner
            </div>
          </div>

          {/* Main Heading */}
          <div
            className={`transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-2">
              Reliable Goods
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              <span className="text-accent">Transportation</span>
            </h1>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/90">
                Karachi
              </span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div className="w-8 h-0.5 bg-accent" />
                <ArrowRight className="w-5 h-5 text-accent" />
              </div>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/90">
                Lahore
              </span>
            </div>
          </div>

          {/* Subheading */}
          <div
            className={`transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <p className="text-lg sm:text-xl text-primary-300 leading-relaxed mb-10 max-w-xl">
              Professional <strong className="text-white">LCL & FCL</strong>{" "}
              goods transportation services with reliable, secure and efficient
              cargo delivery across Pakistan.
            </p>
          </div>

          {/* Feature Pills */}
          <div
            className={`transition-all duration-700 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                "LCL Services",
                "FCL Services",
                "Door-to-Door",
                "Commercial Freight",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 bg-white/5 border border-white/15 text-white/80 text-sm font-medium px-4 py-2 rounded-full"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-accent" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-2xl text-base transition-all duration-200 shadow-orange-glow hover:shadow-none hover:scale-[1.02] active:scale-[0.98]"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-2xl text-base transition-all duration-200 hover:bg-white/10 backdrop-blur-sm"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Quick Contact */}
          <div
            className={`transition-all duration-700 delay-[600ms] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/10">
              {/* Contact 1: Owner Faisal Hussain Bhatti */}
              <a
                href="tel:+923002024433"
                className="flex items-center gap-3 group hover:opacity-90 transition-opacity"
              >
                <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-medium">Owner: Faisal Hussain Bhatti</p>
                  <p className="text-white font-bold text-sm tracking-wide">
                    0300-2024433
                  </p>
                </div>
              </a>

              <div className="hidden sm:block h-10 w-px bg-white/10" />

              {/* Contact 2: Hammad Faisal */}
              <a
                href="tel:+923462024433"
                className="flex items-center gap-3 group hover:opacity-90 transition-opacity"
              >
                <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-medium">Hammad Faisal</p>
                  <p className="text-white font-bold text-sm tracking-wide">
                    0346-2024433
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-900 to-transparent pointer-events-none z-10" />
    </section>
  );
}
