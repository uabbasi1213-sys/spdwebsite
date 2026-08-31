"use client";

import { ShieldCheck, Lock, Clock, Users, Package, Home } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: ShieldCheck,
    title: "Reliable Delivery",
    description:
      "Consistent and dependable transportation service that you can count on for every shipment, every time.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    icon: Lock,
    title: "Secure Cargo Handling",
    description:
      "Your goods are handled with utmost care from pickup to delivery, ensuring they arrive in perfect condition.",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
  },
  {
    icon: Clock,
    title: "Timely Transportation",
    description:
      "We understand the value of your time. Our fleet ensures your cargo reaches Lahore on schedule.",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    icon: Users,
    title: "Professional Team",
    description:
      "Experienced drivers and logistics personnel dedicated to providing the best service on every route.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
  {
    icon: Package,
    title: "LCL & FCL Options",
    description:
      "Whether you have a small shipment or a full container load, we have the right solution for you.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
  },
  {
    icon: Home,
    title: "Door-to-Door Service",
    description:
      "Convenient pickup and delivery directly from your premises to your destination in Lahore.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
  },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-24 bg-primary-950 relative overflow-hidden"
    >
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="section-badge mx-auto">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Why Choose Us
          </div>
          <h2 className="section-heading mt-2">The SUPER PAK DATA Advantage</h2>
          <p className="section-subheading mx-auto text-center">
            We are committed to delivering your goods safely, on time, and with
            full transparency throughout the journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 80 + 200}ms` }}
            >
              <div
                className={`group h-full bg-white/3 border ${feature.border} rounded-2xl p-6 hover:bg-white/6 hover:scale-[1.02] transition-all duration-300`}
              >
                <div
                  className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-primary-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
