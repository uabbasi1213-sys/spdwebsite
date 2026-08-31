"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Truck, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "All Services", href: "/services" },
      { label: "LCL Services", href: "/services/lcl" },
      { label: "FCL Services", href: "/services/fcl" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-primary-900/95 backdrop-blur-md shadow-lg border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-orange-glow group-hover:scale-105 transition-transform">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-white font-black text-lg leading-tight tracking-tight block">
                SUPER PAK DATA
              </span>
              <span className="text-accent text-xs font-medium tracking-wide">
                Karachi → Lahore
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative group">
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      pathname.startsWith("/services")
                        ? "text-accent"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    )}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-1 w-48 bg-primary-800 border border-white/10 rounded-xl shadow-2xl overflow-hidden transition-all duration-200",
                      servicesOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    )}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors border-b border-white/5 last:border-0"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "text-accent"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+923000000000"
              className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all duration-200 shadow-orange-glow hover:shadow-none hover:scale-[1.02] active:scale-[0.98]"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden bg-primary-900/98 backdrop-blur-md border-t border-white/10 transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors"
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      servicesOpen && "rotate-180"
                    )}
                  />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 text-sm transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-accent bg-accent/10"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="pt-3 pb-2 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:+923000000000"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
            <Link
              href="/contact"
              className="block bg-accent hover:bg-accent-600 text-white font-semibold px-4 py-3 rounded-xl text-sm text-center transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
