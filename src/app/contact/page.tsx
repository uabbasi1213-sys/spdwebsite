import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageSquare, Clock } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | SUPER PAK DATA – Get a Free Cargo Quote",
  description:
    "Contact SUPER PAK DATA for a free goods transportation quote from Karachi to Lahore. LCL, FCL, door-to-door and commercial freight services available.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-primary-900">
      {/* Hero Banner */}
      <div className="relative pt-20 bg-primary-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-sm font-semibold px-4 py-2 rounded-full mb-5">
            <MessageSquare className="w-4 h-4" />
            Contact Us
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-primary-300 text-xl max-w-2xl leading-relaxed">
            Ready to ship your cargo from Karachi to Lahore? Contact us today
            for a free, no-obligation quote.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>
            </div>

            {/* Address */}
            <div className="bg-primary-800/40 border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Our Office</h3>
                  <p className="text-primary-300 text-sm leading-relaxed">
                    Pl. No. 580, Gate No. 1, Gali No. 3,
                    <br />
                    Hawksbay Rd., Karachi,
                    <br />
                    Sindh, Pakistan.
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-primary-800/40 border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-400/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Phone / WhatsApp</h3>
                  <a
                    href="tel:+923000000000"
                    className="text-primary-300 hover:text-accent transition-colors text-sm font-medium"
                  >
                    +92 300 0000000
                  </a>
                  <p className="text-primary-500 text-xs mt-1">
                    Available for calls & WhatsApp
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-primary-800/40 border border-white/10 rounded-2xl p-6 hover:border-green-400/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-400/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Email</h3>
                  <a
                    href="mailto:info@superpakdata.com"
                    className="text-primary-300 hover:text-accent transition-colors text-sm font-medium"
                  >
                    info@superpakdata.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-primary-800/40 border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-400/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Business Hours</h3>
                  <p className="text-primary-300 text-sm">
                    Monday – Saturday: 9:00 AM – 6:00 PM
                  </p>
                  <p className="text-primary-300 text-sm">Sunday: By appointment</p>
                </div>
              </div>
            </div>

            {/* Owner */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-6">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-2">
                Owner & Director
              </p>
              <p className="text-white font-bold text-xl">
                Faisal Hussain Bhatti
              </p>
              <p className="text-primary-300 text-sm mt-1">SUPER PAK DATA</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-primary-800/40 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Request a Quote
              </h2>
              <p className="text-primary-400 text-sm mb-8">
                Fill in your cargo details below and we&apos;ll get back to you
                with a competitive quote as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Find Us</h2>
          <div className="bg-primary-800/40 border border-white/10 rounded-2xl overflow-hidden">
            <div className="relative h-80 sm:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.9!2d66.9!3d24.86!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338b5e7afef53%3A0xbcb7f82cfe8a8c!2sHawks%20Bay%20Rd%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2spk!4v1000000000000!5m2!1sen!2spk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale opacity-80"
                title="SUPER PAK DATA Location - Hawksbay Rd, Karachi"
              />
            </div>
            <div className="p-5 bg-primary-800/60">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">
                    SUPER PAK DATA
                  </p>
                  <p className="text-primary-400 text-xs">
                    Pl. No. 580, Gate No. 1, Gali No. 3, Hawksbay Rd., Karachi,
                    Sindh, Pakistan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
