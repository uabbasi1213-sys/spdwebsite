"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Package, Container, Home, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    id: "lcl",
    title: "LCL Transportation",
    subtitle: "Less than Container Load",
    description:
      "For customers who do not need a full container. We provide reliable, economical transportation for smaller cargo shipments from Karachi to Lahore.",
    icon: Package,
    href: "/services/lcl",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    imageAlt: "LCL cargo transportation service",
    color: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10",
    borderColor: "hover:border-blue-400/40",
  },
  {
    id: "fcl",
    title: "FCL Transportation",
    subtitle: "Full Container Load",
    description:
      "For customers requiring complete container capacity. We provide dedicated full-container transportation ensuring maximum security for large volume cargo.",
    icon: Container,
    href: "/services/fcl",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80",
    imageAlt: "FCL full container transportation service",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    borderColor: "hover:border-accent/40",
  },
  {
    id: "door-to-door",
    title: "Door-to-Door Service",
    subtitle: "Pickup & Delivery",
    description:
      "We pick up your cargo directly from your Karachi location and deliver it to your specified destination in Lahore — convenient and hassle-free.",
    icon: Home,
    href: "/services",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80",
    imageAlt: "Door-to-door cargo delivery service",
    color: "from-green-500/20 to-green-600/5",
    iconColor: "text-green-400",
    iconBg: "bg-green-400/10",
    borderColor: "hover:border-green-400/40",
  },
  {
    id: "commercial",
    title: "Commercial Freight",
    subtitle: "Business Cargo Solutions",
    description:
      "Specialized commercial freight services for businesses that need regular, reliable shipments between Karachi and Lahore.",
    icon: Briefcase,
    href: "/services",
    image:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80",
    imageAlt: "Commercial freight transportation service",
    color: "from-purple-500/20 to-purple-600/5",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-400/10",
    borderColor: "hover:border-purple-400/40",
  },
];

export default function ServicesPreview() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="section-badge mx-auto">
            <span className="w-2 h-2 rounded-full bg-accent" />
            What We Offer
          </div>
          <h2 className="section-heading mt-2">Our Transportation Services</h2>
          <p className="section-subheading mx-auto text-center">
            From small shipments to full container loads, we handle all types of
            commercial cargo with care and professionalism.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <Link href={service.href} className="group block h-full">
                <div
                  className={`h-full bg-primary-800/40 border border-white/10 ${service.borderColor} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1`}
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} via-transparent to-transparent opacity-60`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
                    {/* Icon on image */}
                    <div className={`absolute bottom-4 left-4 w-10 h-10 ${service.iconBg} backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10`}>
                      <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className={`text-xs font-semibold ${service.iconColor} mb-1 uppercase tracking-wider`}>
                      {service.subtitle}
                    </p>
                    <h3 className="text-white font-bold text-lg mb-3 group-hover:text-accent transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-primary-400 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className={`flex items-center gap-1 ${service.iconColor} text-sm font-semibold group-hover:gap-2 transition-all`}>
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold px-8 py-4 rounded-2xl text-base transition-all duration-200"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
