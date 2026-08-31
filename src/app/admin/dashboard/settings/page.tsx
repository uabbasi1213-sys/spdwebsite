"use client";

import { useState, useEffect, useCallback } from "react";
import { Save, Loader2, Building, Phone, Mail, MapPin, User, Globe } from "lucide-react";
import toast from "react-hot-toast";

interface ContentData {
  company: {
    name: string;
    tagline: string;
    description: string;
    route: string;
    phone: string;
    whatsapp: string;
    email: string;
    address: {
      line1: string;
      line2: string;
      line3: string;
    };
    owner: string;
    mapEmbedUrl: string;
  };
}

export default function AdminSettingsPage() {
  const [content, setContent] = useState<ContentData | null>(null);
  const [saving, setSaving] = useState(false);

  const loadSettings = useCallback(async () => {
    try {
      const res = await fetch("/api/content");
      const data = await res.json();
      setContent(data);
    } catch {
      toast.error("Failed to load settings");
    }
  }, []);

  useEffect(() => {
    loadSettings();
  }, [loadSettings]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content) return;

    setSaving(true);
    try {
      const res = await fetch("/api/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });

      if (res.ok) {
        toast.success("Settings updated successfully!");
      } else {
        toast.error("Failed to update settings.");
      }
    } catch {
      toast.error("An error occurred while saving.");
    } finally {
      setSaving(false);
    }
  };

  if (!content) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="w-8 h-8 text-accent animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-white font-black text-2xl">Company Settings</h1>
          <p className="text-primary-400 text-sm mt-1">
            Update company contact details, address, and owner information
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6 max-w-4xl">
        {/* Company Identity */}
        <div className="bg-primary-800/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <Building className="w-5 h-5 text-accent" />
            Company Identity
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Company Name</label>
              <input
                type="text"
                value={content.company.name}
                onChange={(e) =>
                  setContent({
                    ...content,
                    company: { ...content.company, name: e.target.value },
                  })
                }
                className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white text-sm outline-none"
              />
            </div>
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Main Route</label>
              <input
                type="text"
                value={content.company.route}
                onChange={(e) =>
                  setContent({
                    ...content,
                    company: { ...content.company, route: e.target.value },
                  })
                }
                className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white text-sm outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-white/80 text-sm font-medium mb-2">Tagline</label>
              <input
                type="text"
                value={content.company.tagline}
                onChange={(e) =>
                  setContent({
                    ...content,
                    company: { ...content.company, tagline: e.target.value },
                  })
                }
                className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white text-sm outline-none"
              />
            </div>
          </div>
        </div>

        {/* Owner Info */}
        <div className="bg-primary-800/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-accent" />
            Ownership
          </h2>
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">Owner Name</label>
            <input
              type="text"
              value={content.company.owner}
              onChange={(e) =>
                setContent({
                  ...content,
                  company: { ...content.company, owner: e.target.value },
                })
              }
              className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white text-sm outline-none"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-primary-800/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <Phone className="w-5 h-5 text-accent" />
            Contact Info
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Phone Number</label>
              <input
                type="text"
                value={content.company.phone}
                onChange={(e) =>
                  setContent({
                    ...content,
                    company: { ...content.company, phone: e.target.value },
                  })
                }
                className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white text-sm outline-none"
              />
            </div>
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                value={content.company.email}
                onChange={(e) =>
                  setContent({
                    ...content,
                    company: { ...content.company, email: e.target.value },
                  })
                }
                className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white text-sm outline-none"
              />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="bg-primary-800/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent" />
            Company Address
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Address Line 1</label>
              <input
                type="text"
                value={content.company.address.line1}
                onChange={(e) =>
                  setContent({
                    ...content,
                    company: {
                      ...content.company,
                      address: { ...content.company.address, line1: e.target.value },
                    },
                  })
                }
                className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white text-sm outline-none"
              />
            </div>
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Address Line 2</label>
              <input
                type="text"
                value={content.company.address.line2}
                onChange={(e) =>
                  setContent({
                    ...content,
                    company: {
                      ...content.company,
                      address: { ...content.company.address, line2: e.target.value },
                    },
                  })
                }
                className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white text-sm outline-none"
              />
            </div>
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Address Line 3</label>
              <input
                type="text"
                value={content.company.address.line3}
                onChange={(e) =>
                  setContent({
                    ...content,
                    company: {
                      ...content.company,
                      address: { ...content.company.address, line3: e.target.value },
                    },
                  })
                }
                className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white text-sm outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="btn-primary disabled:opacity-60"
          >
            {saving ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Saving Settings...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Save Settings
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
