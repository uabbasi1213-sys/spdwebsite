import Link from "next/link";
import {
  Truck,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "LCL Services", href: "/services/lcl" },
  { label: "FCL Services", href: "/services/fcl" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  "LCL Transportation",
  "FCL Transportation",
  "Karachi–Lahore Route",
  "Door-to-Door Delivery",
  "Commercial Freight",
  "Cargo Transportation",
];

export default function Footer() {
  return (
    <footer className="bg-primary-950 border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-white font-black text-base leading-tight tracking-tight block">
                  SUPER PAK DATA
                </span>
                <span className="text-accent text-xs font-medium tracking-wide">
                  Karachi → Lahore
                </span>
              </div>
            </Link>
            <p className="text-primary-400 text-sm leading-relaxed mb-6">
              Professional goods transportation and logistics services connecting
              Karachi and Lahore with reliability and care.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-primary-400 text-sm leading-relaxed">
                  <p>Pl. No. 580, Gate No. 1, Gali No. 3,</p>
                  <p>Hawksbay Rd., Karachi,</p>
                  <p>Sindh, Pakistan.</p>
                </div>
              </div>
              <a
                href="tel:+923000000000"
                className="flex items-center gap-3 text-primary-400 hover:text-accent transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                +92 300 0000000
              </a>
              <a
                href="mailto:info@superpakdata.com"
                className="flex items-center gap-3 text-primary-400 hover:text-accent transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                info@superpakdata.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent rounded-full" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-primary-400 hover:text-accent transition-colors text-sm group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 relative">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent rounded-full" />
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2 text-primary-400 text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 relative">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent rounded-full" />
            </h3>
            <p className="text-primary-400 text-sm mb-6 leading-relaxed">
              Ready to ship your cargo? Contact us today for a free,
              no-obligation quote.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-600 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-all duration-200 hover:shadow-orange-glow w-full justify-center"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-white/60 text-xs mb-1">Owner</p>
              <p className="text-white font-semibold text-sm">
                Faisal Hussain Bhatti
              </p>
              <p className="text-primary-400 text-xs mt-1">SUPER PAK DATA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-primary-500 text-sm text-center sm:text-left">
            © 2024 SUPER PAK DATA. All rights reserved.
          </p>
          <p className="text-primary-500 text-xs text-center sm:text-right">
            Goods Transportation · Karachi to Lahore · LCL & FCL Services
          </p>
        </div>
      </div>
    </footer>
  );
}
