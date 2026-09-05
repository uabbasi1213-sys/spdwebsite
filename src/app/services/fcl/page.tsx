import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, CheckCircle, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "FCL Transportation Services | SUPER PAK DATA Karachi Lahore",
  description:
    "Full Container Load (FCL) transportation from Karachi to Lahore. Dedicated container for your entire shipment. Secure, fast and reliable. Get a quote today.",
};

const steps = [
  {
    step: "01",
    title: "Inquiry & Quote",
    description:
      "Contact us with your cargo specifications and we'll provide a detailed FCL quote.",
  },
  {
    step: "02",
    title: "Container Assigned",
    description:
      "A full container is allocated exclusively for your cargo shipment.",
  },
  {
    step: "03",
    title: "Loading",
    description:
      "Your cargo is professionally loaded and secured in the dedicated container.",
  },
  {
    step: "04",
    title: "Transportation",
    description:
      "The sealed container is transported directly from Karachi to Lahore.",
  },
  {
    step: "05",
    title: "Delivery",
    description:
      "Delivered to your destination in Lahore where your cargo is unloaded.",
  },
];

const benefits = [
  "Exclusive use of entire container",
  "Maximum cargo security and privacy",
  "Faster transit — no consolidation delays",
  "Ideal for large volume shipments",
  "Reduced risk of cargo damage",
  "Cost-effective per unit for bulk shipments",
  "Direct pickup to delivery",
  "Priority scheduling available",
];

export default function FCLServicesPage() {
  return (
    <div className="min-h-screen bg-primary-900">
      {/* Hero */}
      <div className="relative pt-20">
        <div className="relative h-80 sm:h-96 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80"
            alt="FCL full container load transportation Karachi Lahore"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/97 via-primary-900/88 to-primary-900/60" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-sm font-semibold px-4 py-2 rounded-full mb-4">
                <Container className="w-4 h-4" />
                FCL Services
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
                FCL Transportation
                <span className="block text-accent text-3xl sm:text-4xl mt-1">
                  Full Container Load
                </span>
              </h1>
              <p className="text-primary-300 text-lg max-w-xl">
                Complete container capacity dedicated exclusively to your cargo,
                from Karachi to Lahore.
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
              What is FCL Transportation?
            </h2>
            <p className="text-primary-300 text-lg leading-relaxed mb-5">
              <strong className="text-white">FCL (Full Container Load)</strong>{" "}
              means booking an entire container exclusively for your cargo. Unlike
              LCL where space is shared,{" "}
              <strong className="text-accent">
                FCL gives you complete control and privacy
              </strong>{" "}
              over the container from pickup to delivery.
            </p>
            <p className="text-primary-300 leading-relaxed mb-5">
              FCL is the preferred choice for large volume shipments, time-sensitive
              cargo, high-value goods, or any situation where you need the
              highest level of security and control over your transportation.
            </p>
            <p className="text-primary-300 leading-relaxed">
              SUPER PAK DATA provides end-to-end FCL transportation from your
              Karachi location directly to your destination in Lahore, with
              full documentation and professional handling throughout.
            </p>

            {/* LCL vs FCL comparison */}
            <div className="mt-8 bg-primary-800/40 border border-white/10 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-2 border-b border-white/10">
                <div className="p-4 border-r border-white/10">
                  <p className="text-blue-400 font-bold text-sm mb-1">LCL</p>
                  <p className="text-primary-400 text-xs">Shared container space</p>
                </div>
                <div className="p-4">
                  <p className="text-accent font-bold text-sm mb-1">FCL</p>
                  <p className="text-primary-400 text-xs">Full dedicated container</p>
                </div>
              </div>
              <div className="grid grid-cols-2 border-b border-white/10">
                <div className="p-4 border-r border-white/10">
                  <p className="text-primary-300 text-xs">Cost-effective for small cargo</p>
                </div>
                <div className="p-4">
                  <p className="text-primary-300 text-xs">Cost-effective for bulk cargo</p>
                </div>
              </div>
              <div className="grid grid-cols-2 border-b border-white/10">
                <div className="p-4 border-r border-white/10">
                  <p className="text-primary-300 text-xs">Consolidation required</p>
                </div>
                <div className="p-4">
                  <p className="text-primary-300 text-xs">Direct transportation</p>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="p-4 border-r border-white/10">
                  <p className="text-primary-300 text-xs">Flexible for small volumes</p>
                </div>
                <div className="p-4">
                  <p className="text-primary-300 text-xs">Maximum security</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="lg:col-span-2">
            <div className="bg-primary-800/40 border border-accent/20 rounded-2xl p-7">
              <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                <Container className="w-5 h-5 text-accent" />
                FCL Benefits
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-primary-300 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
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
            <h2 className="section-heading mt-2">How FCL Works</h2>
            <p className="section-subheading mx-auto text-center">
              A streamlined, professional FCL process from booking to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-accent/10 border-2 border-accent/30 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-accent font-black text-xl">
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

        {/* CTA */}
        <div className="bg-gradient-to-br from-accent-900/60 via-primary-800/40 to-primary-900/40 border border-accent/20 rounded-3xl p-10 sm:p-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Need FCL Transportation?
          </h2>
          <p className="text-primary-300 text-lg mb-8 max-w-xl mx-auto">
            Contact us for a free FCL cargo quote. We&apos;ll provide you with a
            competitive, transparent price for your full container shipment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get FCL Quote
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
