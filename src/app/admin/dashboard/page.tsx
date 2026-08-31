"use client";

import Link from "next/link";
import { FileText, Images, Settings, ExternalLink, ChevronRight, Truck } from "lucide-react";

const quickActions = [
  {
    title: "Edit Content",
    description: "Update homepage text, about us, service descriptions, and all page content.",
    href: "/admin/dashboard/content",
    icon: FileText,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    title: "Gallery Manager",
    description: "Upload new images, delete old ones, add captions and manage the gallery.",
    href: "/admin/dashboard/gallery",
    icon: Images,
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    title: "Settings",
    description: "Update company phone, email, address, owner name and other company details.",
    href: "/admin/dashboard/settings",
    icon: Settings,
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
  },
];

export default function AdminDashboardPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
            <Truck className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-white font-black text-2xl">Admin Dashboard</h1>
            <p className="text-primary-400 text-sm">SUPER PAK DATA — Content Management</p>
          </div>
        </div>

        <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
          <p className="text-white text-sm">
            👋 Welcome to the SUPER PAK DATA admin panel. Use the sections below
            to manage your website content, gallery, and settings.
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {quickActions.map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className={`group bg-primary-800/60 border ${action.border} rounded-2xl p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
          >
            <div className={`w-12 h-12 ${action.bg} rounded-xl flex items-center justify-center mb-4`}>
              <action.icon className={`w-6 h-6 ${action.color}`} />
            </div>
            <h2 className="text-white font-bold text-lg mb-2 group-hover:text-accent transition-colors flex items-center justify-between">
              {action.title}
              <ChevronRight className="w-5 h-5 text-primary-500 group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </h2>
            <p className="text-primary-400 text-sm leading-relaxed">
              {action.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Info Cards */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-primary-800/40 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-bold mb-4">How to Edit Content</h3>
          <div className="space-y-3 text-primary-400 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-accent font-bold">1.</span>
              <p>Go to <strong className="text-white">Edit Content</strong> to update page text, headings, and descriptions.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-accent font-bold">2.</span>
              <p>Go to <strong className="text-white">Gallery Manager</strong> to upload, delete, or reorder images.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-accent font-bold">3.</span>
              <p>Go to <strong className="text-white">Settings</strong> to update phone number, email, address, etc.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-accent font-bold">4.</span>
              <p>Click <strong className="text-white">Save</strong> on any page to apply your changes immediately.</p>
            </div>
          </div>
        </div>

        <div className="bg-primary-800/40 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-bold mb-4">Website Links</h3>
          <div className="space-y-3">
            {["/", "/about", "/services", "/gallery", "/contact"].map((link) => (
              <Link
                key={link}
                href={link}
                target="_blank"
                className="flex items-center justify-between px-4 py-2.5 bg-primary-700/50 rounded-xl text-primary-300 hover:text-accent hover:bg-primary-700 transition-all text-sm"
              >
                {link === "/" ? "Home" : link.slice(1).charAt(0).toUpperCase() + link.slice(2)}
                <ExternalLink className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
