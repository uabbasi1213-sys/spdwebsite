import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Package, CheckCircle, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "LCL Transportation Services | SUPER PAK DATA Karachi Lahore",
  description:
    "Cost-effective LCL (Less than Container Load) transportation from Karachi to Lahore. Pay only for the space you use. Contact SUPER PAK DATA for a free quote.",
};

const steps = [
  {
    step: "01",
    title: "Contact Us",
    description:
      "Reach out to us with your cargo details — size, weight, type, and destination in Lahore.",
  },
  {
    step: "02",
    title: "Get a Quote",
    description:
      "We provide you with a competitive, transparent quote based on your actual cargo volume.",
  },
  {
    step: "03",
    title: "Cargo Collection",
    description:
      "We collect your cargo from your location in Karachi and consolidate it securely.",
  },
  {
    step: "04",
    title: "Transportation",
    description:
      "Your cargo is transported safely in our container fleet along with other shipments.",
  },
  {
    step: "05",
    title: "Delivery",
    description:
      "Your cargo is delivered to your specified location in Lahore, safely and on time.",
  },
];

const benefits = [
  "Pay only for the space your cargo uses",
  "No minimum volume requirements",
  "Regular departure schedules",
  "Suitable for all types of commercial goods",
  "Professional cargo consolidation",
  "Full documentation provided",
  "Safe and secure handling throughout",
  "Cost-effective for small to medium businesses",
];

export default function LCLServicesPage() {
  return (
    <div className="min-h-screen bg-primary-900">
      {/* Hero */}
      <div className="relative pt-20">
        <div className="relative h-80 sm:h-96 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
            alt="LCL cargo transportation service Karachi to Lahore"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/97 via-primary-900/88 to-primary-900/60" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="inline-flex items-center gap-2 bg-blue-400/15 border border-blue-400/30 text-blue-400 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                <Package className="w-4 h-4" />
                LCL Services
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
                LCL Transportation
                <span className="block text-blue-400 text-3xl sm:text-4xl mt-1">
                  Less than Container Load
                </span>
              </h1>
              <p className="text-primary-300 text-lg max-w-xl">
                The smart, economical choice for smaller cargo shipments from
                Karachi to Lahore.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Intro */}
        <div className="grid lg:grid-cols-5 gap-16 items-start mb-24">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-black text-white mb-6">
              What is LCL Transportation?
            </h2>
            <p className="text-primary-300 text-lg leading-relaxed mb-5">
              <strong className="text-white">LCL (Less than Container Load)</strong>{" "}
              is a shipping method where multiple smaller shipments from
              different customers are consolidated into a single container. This
              allows you to{" "}
              <strong className="text-accent">
                pay only for the space your cargo uses
              </strong>
              , rather than paying for an entire container.
            </p>
            <p className="text-primary-300 leading-relaxed mb-5">
              Our LCL service is designed for businesses and individuals who
              need to transport cargo from Karachi to Lahore but don&apos;t have
              enough goods to fill a full container. It&apos;s the most
              cost-effective option for smaller, regular shipments.
            </p>
            <p className="text-primary-300 leading-relaxed">
              SUPER PAK DATA carefully consolidates your goods with other
              shipments, ensuring proper handling, labeling, and security
              throughout the transportation process.
            </p>
          </div>

          {/* Benefits */}
          <div className="lg:col-span-2">
            <div className="bg-primary-800/40 border border-blue-400/20 rounded-2xl p-7">
              <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                <Package className="w-5 h-5 text-blue-400" />
                LCL Benefits
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-primary-300 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="section-badge mx-auto">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Process
            </div>
            <h2 className="section-heading mt-2">How LCL Works</h2>
            <p className="section-subheading mx-auto text-center">
              From inquiry to delivery — a simple, transparent process.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <div
                  key={step.step}
                  className="relative text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-20 h-20 bg-blue-400/10 border-2 border-blue-400/30 rounded-full flex items-center justify-center mx-auto mb-5 relative z-10">
                    <span className="text-blue-400 font-black text-xl">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-primary-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-900/40 via-primary-800/40 to-primary-900/40 border border-blue-400/20 rounded-3xl p-10 sm:p-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Need LCL Transportation?
          </h2>
          <p className="text-primary-300 text-lg mb-8 max-w-xl mx-auto">
            Contact us today for a free LCL cargo quote. We&apos;ll provide you
            with a transparent, competitive price for your shipment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get LCL Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+923002024433"
              className="btn-secondary flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call 0300-2024433
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
