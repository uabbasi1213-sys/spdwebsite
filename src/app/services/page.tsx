import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Package,
  Container,
  Home,
  Briefcase,
  Truck,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | SUPER PAK DATA – LCL, FCL & Cargo Transportation",
  description:
    "Explore SUPER PAK DATA's comprehensive cargo transportation services including LCL, FCL, door-to-door, and commercial freight from Karachi to Lahore.",
};

const services = [
  {
    id: "lcl",
    title: "LCL Transportation",
    subtitle: "Less than Container Load",
    description:
      "For customers who do not require a full container, our LCL service provides an economical and reliable option to transport smaller cargo shipments from Karachi to Lahore.",
    features: [
      "Cost-effective for smaller shipments",
      "Shared container space",
      "Regular departure schedule",
      "Safe consolidation handling",
      "Full documentation",
    ],
    icon: Package,
    href: "/services/lcl",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    imageAlt: "LCL cargo consolidation and transportation",
    accentColor: "text-blue-400",
    borderColor: "border-blue-400/30",
    iconBg: "bg-blue-400/10",
    badge: "Most Popular",
  },
  {
    id: "fcl",
    title: "FCL Transportation",
    subtitle: "Full Container Load",
    description:
      "For customers requiring complete container capacity, our FCL service provides dedicated full-container transportation ensuring maximum security and efficiency for large volume cargo.",
    features: [
      "Dedicated full container",
      "Maximum cargo security",
      "Faster transit times",
      "Ideal for bulk shipments",
      "Cost-effective for large volumes",
    ],
    icon: Container,
    href: "/services/fcl",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
    imageAlt: "FCL full container load transportation Karachi Lahore",
    accentColor: "text-accent",
    borderColor: "border-accent/30",
    iconBg: "bg-accent/10",
    badge: "Premium",
  },
  {
    id: "karachi-lahore",
    title: "Karachi to Lahore Route",
    subtitle: "Inter-City Freight",
    description:
      "Our primary and most established route. We provide reliable, scheduled freight transportation between Karachi and Lahore, covering the entire distance with professional drivers and maintained vehicles.",
    features: [
      "Dedicated Karachi–Lahore route",
      "Experienced drivers",
      "Well-maintained fleet",
      "Consistent schedules",
      "Professional service",
    ],
    icon: MapPin,
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
    imageAlt: "Karachi to Lahore transportation highway route",
    accentColor: "text-green-400",
    borderColor: "border-green-400/30",
    iconBg: "bg-green-400/10",
    badge: null,
  },
  {
    id: "goods-cargo",
    title: "Goods & Cargo Transportation",
    subtitle: "Commercial Freight",
    description:
      "We handle a wide range of commercial goods and cargo types. Our experienced team ensures proper loading, securing, and transportation of your goods to prevent any damage during transit.",
    features: [
      "Wide range of cargo accepted",
      "Proper loading & securing",
      "Commercial goods expertise",
      "Safe handling protocols",
      "Competitive pricing",
    ],
    icon: Truck,
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80",
    imageAlt: "Commercial goods cargo transportation service",
    accentColor: "text-purple-400",
    borderColor: "border-purple-400/30",
    iconBg: "bg-purple-400/10",
    badge: null,
  },
  {
    id: "door-to-door",
    title: "Door-to-Door Transportation",
    subtitle: "Pickup & Delivery",
    description:
      "Our door-to-door service means we pick up your cargo directly from your location in Karachi and deliver it to your specified destination in Lahore — no need to transport goods to a depot.",
    features: [
      "Pickup from your location",
      "Direct delivery to destination",
      "No depot visits required",
      "Convenient scheduling",
      "Full tracking provided",
    ],
    icon: Home,
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?w=800&q=80",
    imageAlt: "Door-to-door cargo pickup and delivery service",
    accentColor: "text-yellow-400",
    borderColor: "border-yellow-400/30",
    iconBg: "bg-yellow-400/10",
    badge: "Convenient",
  },
  {
    id: "commercial-freight",
    title: "Commercial Freight",
    subtitle: "Business Cargo Solutions",
    description:
      "Specialized commercial freight transportation designed for businesses that require regular, reliable shipments between Karachi and Lahore. We work with businesses of all sizes.",
    features: [
      "Business-focused service",
      "Regular shipment handling",
      "Flexible scheduling",
      "Professional documentation",
      "Reliable partnership",
    ],
    icon: Briefcase,
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1586528116493-a029325540fa?w=800&q=80",
    imageAlt: "Commercial freight business transportation service",
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-400/30",
    iconBg: "bg-cyan-400/10",
    badge: null,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-primary-900">
      {/* Hero Banner */}
      <div className="relative pt-20">
        <div className="relative h-72 sm:h-80 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
            alt="SUPER PAK DATA transportation services"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/85 to-primary-900/60" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-sm font-semibold px-4 py-2 rounded-full mb-4">
                <Truck className="w-4 h-4" />
                Our Services
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-3">
                Comprehensive <span className="text-accent">Cargo Services</span>
              </h1>
              <p className="text-primary-300 text-lg max-w-xl">
                Tailored freight solutions for every business need — Karachi to
                Lahore
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group bg-primary-800/40 border border-white/10 ${service.borderColor} rounded-2xl overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-transparent" />
                {service.badge && (
                  <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {service.badge}
                  </div>
                )}
                <div className={`absolute bottom-4 left-4 w-11 h-11 ${service.iconBg} backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10`}>
                  <service.icon className={`w-6 h-6 ${service.accentColor}`} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className={`text-xs font-bold ${service.accentColor} uppercase tracking-widest mb-1`}>
                  {service.subtitle}
                </p>
                <h2 className="text-white font-bold text-xl mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h2>
                <p className="text-primary-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2 text-primary-300 text-sm"
                    >
                      <CheckCircle className={`w-4 h-4 ${service.accentColor} flex-shrink-0`} />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className={`inline-flex items-center gap-2 ${service.accentColor} hover:text-white font-semibold text-sm transition-colors group/link`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-br from-accent-800 to-accent-900 rounded-3xl p-10 sm:p-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Contact us and our team will help you choose the best
            transportation option for your cargo.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-accent-700 hover:bg-primary-50 font-bold px-8 py-4 rounded-2xl text-base transition-all duration-200 hover:scale-[1.02]"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
