"use client";

import { useState, useEffect, useCallback } from "react";
import { Save, Loader2, ChevronDown, ChevronUp } from "lucide-react";
import toast from "react-hot-toast";

interface ContentSection {
  key: string;
  label: string;
  fields: {
    key: string;
    label: string;
    type: "text" | "textarea";
    value: string;
  }[];
}

export default function AdminContentPage() {
  const [content, setContent] = useState<Record<string, unknown> | null>(null);
  const [saving, setSaving] = useState(false);
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(["company"]));

  const loadContent = useCallback(async () => {
    const res = await fetch("/api/content");
    const data = await res.json();
    setContent(data);
  }, []);

  useEffect(() => {
    loadContent();
  }, [loadContent]);

  const updateField = (path: string[], value: string) => {
    setContent((prev) => {
      if (!prev) return prev;
      const updated = JSON.parse(JSON.stringify(prev));
      let obj: Record<string, unknown> = updated;
      for (let i = 0; i < path.length - 1; i++) {
        obj = obj[path[i]] as Record<string, unknown>;
      }
      obj[path[path.length - 1]] = value;
      return updated;
    });
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      if (res.ok) {
        toast.success("Content saved successfully!");
      } else {
        toast.error("Failed to save. Please try again.");
      }
    } catch {
      toast.error("Save failed.");
    } finally {
      setSaving(false);
    }
  };

  const toggleSection = (section: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      next.has(section) ? next.delete(section) : next.add(section);
      return next;
    });
  };

  if (!content) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="w-8 h-8 text-accent animate-spin" />
      </div>
    );
  }

  const c = content as {
    company: Record<string, string>;
    pages: {
      home: {
        hero: Record<string, string>;
        cta: Record<string, string>;
        servicesSection: Record<string, string>;
        whyUsSection: Record<string, string>;
      };
      about: Record<string, string>;
      contact: { formHeading: string; infoHeading: string; heading: string; subheading: string };
    };
    footer: Record<string, string>;
    seo: Record<string, Record<string, string>>;
  };

  const sections: ContentSection[] = [
    {
      key: "company",
      label: "🏢 Company Information",
      fields: [
        { key: "name", label: "Company Name", type: "text", value: c.company.name },
        { key: "tagline", label: "Tagline", type: "text", value: c.company.tagline },
        { key: "description", label: "Description", type: "textarea", value: c.company.description },
        { key: "phone", label: "Phone Number", type: "text", value: c.company.phone },
        { key: "email", label: "Email Address", type: "text", value: c.company.email },
        { key: "owner", label: "Owner Name", type: "text", value: c.company.owner },
      ],
    },
    {
      key: "hero",
      label: "🏠 Home — Hero Section",
      fields: [
        { key: "badge", label: "Badge Text", type: "text", value: c.pages.home.hero.badge },
        { key: "heading", label: "Heading", type: "text", value: c.pages.home.hero.heading },
        { key: "headingHighlight", label: "Heading Highlight", type: "text", value: c.pages.home.hero.headingHighlight },
        { key: "subheading", label: "Subheading", type: "textarea", value: c.pages.home.hero.subheading },
        { key: "primaryButton", label: "Primary Button Text", type: "text", value: c.pages.home.hero.primaryButton },
        { key: "secondaryButton", label: "Secondary Button Text", type: "text", value: c.pages.home.hero.secondaryButton },
      ],
    },
    {
      key: "about",
      label: "👥 About Us Page",
      fields: [
        { key: "heading", label: "Page Heading", type: "text", value: c.pages.about.heading },
        { key: "intro", label: "Introduction Paragraph", type: "textarea", value: c.pages.about.intro },
        { key: "missionHeading", label: "Mission Heading", type: "text", value: c.pages.about.missionHeading },
        { key: "mission", label: "Mission Text", type: "textarea", value: c.pages.about.mission },
        { key: "visionHeading", label: "Vision Heading", type: "text", value: c.pages.about.visionHeading },
        { key: "vision", label: "Vision Text", type: "textarea", value: c.pages.about.vision },
      ],
    },
    {
      key: "contact",
      label: "📞 Contact Page",
      fields: [
        { key: "heading", label: "Page Heading", type: "text", value: c.pages.contact.heading },
        { key: "subheading", label: "Page Subheading", type: "textarea", value: c.pages.contact.subheading },
        { key: "formHeading", label: "Form Heading", type: "text", value: c.pages.contact.formHeading },
        { key: "infoHeading", label: "Info Section Heading", type: "text", value: c.pages.contact.infoHeading },
      ],
    },
    {
      key: "footer",
      label: "🔖 Footer",
      fields: [
        { key: "tagline", label: "Footer Tagline", type: "text", value: c.footer.tagline },
        { key: "description", label: "Footer Description", type: "textarea", value: c.footer.description },
        { key: "copyright", label: "Copyright Notice", type: "text", value: c.footer.copyright },
      ],
    },
    {
      key: "seo-home",
      label: "🔍 SEO — Home Page",
      fields: [
        { key: "title", label: "Page Title", type: "text", value: c.seo.home.title },
        { key: "description", label: "Meta Description", type: "textarea", value: c.seo.home.description },
        { key: "keywords", label: "Keywords", type: "textarea", value: c.seo.home.keywords },
      ],
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-white font-black text-2xl">Edit Content</h1>
          <p className="text-primary-400 text-sm mt-1">
            Update all text content across your website
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="btn-primary disabled:opacity-60"
        >
          {saving ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              Save All Changes
            </>
          )}
        </button>
      </div>

      {/* Notice */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-4 mb-8">
        <p className="text-blue-300 text-sm">
          💡 <strong>How to edit:</strong> Expand any section below, make your changes, and click{" "}
          <strong>Save All Changes</strong> at the top. Changes apply immediately after saving.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {sections.map((section) => (
          <div
            key={section.key}
            className="bg-primary-800/40 border border-white/10 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => toggleSection(section.key)}
              className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors text-left"
            >
              <span className="text-white font-semibold">{section.label}</span>
              {openSections.has(section.key) ? (
                <ChevronUp className="w-5 h-5 text-primary-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-primary-400" />
              )}
            </button>

            {openSections.has(section.key) && (
              <div className="px-6 pb-6 border-t border-white/10 pt-5 space-y-5">
                {section.fields.map((field) => {
                  // Determine path for update
                  const pathMap: Record<string, string[]> = {
                    "company": ["company", field.key],
                    "hero": ["pages", "home", "hero", field.key],
                    "about": ["pages", "about", field.key],
                    "contact": ["pages", "contact", field.key],
                    "footer": ["footer", field.key],
                    "seo-home": ["seo", "home", field.key],
                  };
                  const path = pathMap[section.key] || [field.key];

                  return (
                    <div key={field.key}>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        {field.label}
                      </label>
                      {field.type === "textarea" ? (
                        <textarea
                          value={field.value}
                          onChange={(e) => updateField(path, e.target.value)}
                          rows={3}
                          className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all focus:ring-2 focus:ring-accent/20 resize-y"
                        />
                      ) : (
                        <input
                          type="text"
                          value={field.value}
                          onChange={(e) => updateField(path, e.target.value)}
                          className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all focus:ring-2 focus:ring-accent/20"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Save button at bottom */}
      <div className="mt-8 flex justify-end">
        <button
          onClick={handleSave}
          disabled={saving}
          className="btn-primary disabled:opacity-60"
        >
          {saving ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              Save All Changes
            </>
          )}
        </button>
      </div>
    </div>
  );
}
