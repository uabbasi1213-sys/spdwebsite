import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  User,
  MapPin,
  Package,
  Truck,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | SUPER PAK DATA – Karachi to Lahore Transportation",
  description:
    "Learn about SUPER PAK DATA, a professional goods transportation and logistics company specializing in the Karachi–Lahore freight route. Led by Faisal Hussain Bhatti.",
};

const servicesList = [
  "LCL (Less than Container Load) Transportation",
  "FCL (Full Container Load) Transportation",
  "Karachi to Lahore Freight Route",
  "Door-to-Door Pickup and Delivery",
  "Commercial Goods Transportation",
  "Cargo and Freight Services",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary-900">
      {/* Hero Banner */}
      <div className="relative pt-20 pb-0">
        <div className="relative h-72 sm:h-96 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=80"
            alt="SUPER PAK DATA fleet - professional transportation"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/85 to-primary-900/70" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-sm font-semibold px-4 py-2 rounded-full mb-4">
                <Package className="w-4 h-4" />
                About Us
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-3">
                About <span className="text-accent">SUPER PAK DATA</span>
              </h1>
              <p className="text-primary-300 text-lg max-w-xl">
                Professional goods transportation & logistics — Karachi to
                Lahore
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="section-badge mb-6">
              <Truck className="w-4 h-4" />
              Who We Are
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
              Pakistan&apos;s Reliable Freight & Logistics Partner
            </h2>
            <p className="text-primary-300 text-lg leading-relaxed mb-5">
              <strong className="text-white">SUPER PAK DATA</strong> is a
              professional goods transportation and logistics company
              specializing in reliable freight services between{" "}
              <strong className="text-accent">Karachi and Lahore</strong>. We
              are committed to providing safe, efficient, and cost-effective
              cargo transportation solutions for businesses and individuals
              across Pakistan.
            </p>
            <p className="text-primary-300 leading-relaxed mb-8">
              Our operations are based in Karachi, and we are dedicated to
              making the Karachi–Lahore freight corridor as smooth, reliable,
              and transparent as possible. Whether you have a small shipment
              that needs LCL consolidation or a full container load that
              requires FCL transportation, we have the right solution for you.
            </p>
            <div className="space-y-3">
              {servicesList.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-primary-300 text-sm"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80"
                alt="SUPER PAK DATA cargo operations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
            </div>
            {/* Address card overlay */}
            <div className="absolute -bottom-6 -left-6 bg-primary-800 border border-white/10 rounded-2xl p-5 max-w-xs shadow-2xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">
                    Our Office
                  </p>
                  <p className="text-primary-400 text-xs leading-relaxed">
                    Pl. No. 580, Gate No. 1, Gali No. 3,
                    <br />
                    Hawksbay Rd., Karachi,
                    <br />
                    Sindh, Pakistan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          <div className="bg-primary-800/40 border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-white font-bold text-2xl mb-4">Our Mission</h3>
            <p className="text-primary-300 leading-relaxed">
              To provide the most reliable, secure, and professional goods
              transportation service on the Karachi-to-Lahore route, ensuring
              every shipment is delivered safely and on time — every time.
            </p>
          </div>

          <div className="bg-primary-800/40 border border-white/10 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-400/10 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-white font-bold text-2xl mb-4">Our Vision</h3>
            <p className="text-primary-300 leading-relaxed">
              To be the most trusted name in goods transportation across
              Pakistan, known for integrity, professionalism, and exceptional
              service delivery on every route we operate.
            </p>
          </div>
        </div>

        {/* Owner Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="section-badge mx-auto">
              <User className="w-4 h-4" />
              Leadership
            </div>
            <h2 className="section-heading mt-2">Meet Our Owner</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-primary-800/40 border border-white/10 rounded-3xl p-8 sm:p-12 text-center hover:border-accent/20 transition-all duration-300">
              {/* Avatar placeholder */}
              <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-orange-glow">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-white font-black text-3xl mb-2">
                Faisal Hussain Bhatti
              </h3>
              <p className="text-accent font-semibold text-base mb-6 uppercase tracking-wider">
                Owner & Director — SUPER PAK DATA
              </p>
              <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
              <p className="text-primary-300 leading-relaxed text-lg">
                Faisal Hussain Bhatti is the founder and owner of SUPER PAK
                DATA. With a deep understanding of Pakistan&apos;s freight and
                logistics industry, he established the company with a vision to
                provide reliable and professional goods transportation services,
                particularly on the Karachi–Lahore corridor.
              </p>
              <p className="text-primary-300 leading-relaxed mt-4">
                Under his leadership, SUPER PAK DATA is committed to delivering
                honest, professional service to every client — from small
                businesses shipping their first LCL consignment to large
                commercial enterprises requiring regular FCL transportation.
              </p>
            </div>
          </div>
        </div>

        {/* Services Summary */}
        <div className="bg-primary-800/30 border border-white/10 rounded-3xl p-10 sm:p-14">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-4">What We Do</h2>
            <p className="text-primary-300 text-lg max-w-2xl mx-auto leading-relaxed">
              SUPER PAK DATA offers a comprehensive range of freight and cargo
              transportation services tailored to the Karachi–Lahore corridor.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="btn-primary"
            >
              View Our Services
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
