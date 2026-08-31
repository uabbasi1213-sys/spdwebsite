"use client";

import { MapPin, Route, Package, Truck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  {
    icon: Route,
    label: "Main Route",
    value: "Karachi → Lahore",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Package,
    label: "Service Type",
    value: "LCL & FCL",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Truck,
    label: "Delivery Mode",
    value: "Door-to-Door",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    icon: MapPin,
    label: "Cargo Type",
    value: "Commercial Freight",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

export default function StatsBar() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-10 bg-primary-800/50 border-t border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex items-center gap-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-primary-400 text-xs font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className={`${stat.color} font-bold text-sm mt-0.5`}>
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
