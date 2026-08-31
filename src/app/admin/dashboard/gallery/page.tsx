"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Upload,
  Trash2,
  Edit3,
  Loader2,
  ImageIcon,
  X,
  Check,
  Plus,
} from "lucide-react";
import toast from "react-hot-toast";

interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: string;
  order: number;
}

export default function AdminGalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editCaption, setEditCaption] = useState("");
  const [editCategory, setEditCategory] = useState("");

  // URL add state
  const [showUrlForm, setShowUrlForm] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [urlCaption, setUrlCaption] = useState("");
  const [urlCategory, setUrlCategory] = useState("fleet");
  const [addingUrl, setAddingUrl] = useState(false);

  const loadImages = useCallback(async () => {
    const res = await fetch("/api/gallery");
    const data = await res.json();
    setImages(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    let uploadedCount = 0;

    for (const file of Array.from(files)) {
      try {
        // Upload file
        const formData = new FormData();
        formData.append("file", file);
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!uploadRes.ok) {
          const err = await uploadRes.json();
          toast.error(err.error || `Failed to upload ${file.name}`);
          continue;
        }

        const { url, filename } = await uploadRes.json();

        // Add to gallery
        const galleryRes = await fetch("/api/gallery", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "add",
            filename,
            url,
            caption: file.name.replace(/\.[^/.]+$/, "").replace(/-|_/g, " "),
            category: "fleet",
            order: images.length + uploadedCount + 1,
          }),
        });

        if (galleryRes.ok) uploadedCount++;
      } catch {
        toast.error(`Failed to upload ${file.name}`);
      }
    }

    if (uploadedCount > 0) {
      toast.success(`${uploadedCount} image(s) uploaded successfully!`);
      await loadImages();
    }
    setUploading(false);
    e.target.value = "";
  };

  const handleAddUrl = async () => {
    if (!urlInput.trim()) return;
    setAddingUrl(true);
    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "add",
          filename: urlInput,
          url: urlInput,
          caption: urlCaption || "Gallery image",
          category: urlCategory,
          order: images.length + 1,
        }),
      });
      if (res.ok) {
        toast.success("Image added successfully!");
        setUrlInput("");
        setUrlCaption("");
        setShowUrlForm(false);
        await loadImages();
      }
    } catch {
      toast.error("Failed to add image");
    } finally {
      setAddingUrl(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;
    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete", id }),
      });
      if (res.ok) {
        toast.success("Image deleted");
        setImages((prev) => prev.filter((img) => img.id !== id));
      }
    } catch {
      toast.error("Failed to delete image");
    }
  };

  const handleUpdateCaption = async (id: string) => {
    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "update",
          id,
          updates: { caption: editCaption, category: editCategory },
        }),
      });
      if (res.ok) {
        toast.success("Caption updated!");
        setImages((prev) =>
          prev.map((img) =>
            img.id === id
              ? { ...img, caption: editCaption, category: editCategory }
              : img
          )
        );
        setEditingId(null);
      }
    } catch {
      toast.error("Failed to update");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="w-8 h-8 text-accent animate-spin" />
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-white font-black text-2xl">Gallery Manager</h1>
          <p className="text-primary-400 text-sm mt-1">
            {images.length} image(s) in gallery
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowUrlForm(!showUrlForm)}
            className="btn-secondary text-sm py-2.5 px-4"
          >
            <Plus className="w-4 h-4" />
            Add by URL
          </button>
          <label className="btn-primary text-sm py-2.5 px-4 cursor-pointer">
            {uploading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="w-4 h-4" />
                Upload Images
              </>
            )}
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
              disabled={uploading}
            />
          </label>
        </div>
      </div>

      {/* URL Input Form */}
      {showUrlForm && (
        <div className="bg-primary-800/60 border border-white/10 rounded-2xl p-6 mb-8">
          <h3 className="text-white font-semibold mb-4">Add Image from URL</h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div className="sm:col-span-3">
              <label className="block text-white/70 text-sm mb-1">Image URL</label>
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-2.5 text-white text-sm outline-none transition-all"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-white/70 text-sm mb-1">Caption</label>
              <input
                type="text"
                value={urlCaption}
                onChange={(e) => setUrlCaption(e.target.value)}
                placeholder="Image caption"
                className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-2.5 text-white text-sm outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-1">Category</label>
              <select
                value={urlCategory}
                onChange={(e) => setUrlCategory(e.target.value)}
                className="w-full bg-primary-700/50 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm outline-none appearance-none"
              >
                <option value="fleet">Fleet</option>
                <option value="operations">Operations</option>
                <option value="containers">Containers</option>
                <option value="cargo">Cargo</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleAddUrl}
              disabled={addingUrl || !urlInput}
              className="btn-primary text-sm py-2.5 disabled:opacity-60"
            >
              {addingUrl ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
              Add Image
            </button>
            <button
              onClick={() => setShowUrlForm(false)}
              className="btn-secondary text-sm py-2.5"
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Upload instructions */}
      <div className="bg-primary-800/30 border border-white/5 rounded-xl p-4 mb-8">
        <div className="flex items-start gap-3">
          <ImageIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div className="text-primary-400 text-sm space-y-1">
            <p><strong className="text-white">Upload Images:</strong> Click &quot;Upload Images&quot; to upload from your computer (JPEG, PNG, WebP, max 10MB each).</p>
            <p><strong className="text-white">Add by URL:</strong> Add images from external URLs (e.g. Unsplash, your website).</p>
            <p><strong className="text-white">Edit caption:</strong> Click the ✏️ icon on any image to update its caption or category.</p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      {images.length === 0 ? (
        <div className="text-center py-24 border-2 border-dashed border-white/10 rounded-2xl">
          <ImageIcon className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h3 className="text-white font-bold text-xl mb-2">No Images Yet</h3>
          <p className="text-primary-400 mb-6">Upload images using the button above.</p>
          <label className="btn-primary cursor-pointer">
            <Upload className="w-4 h-4" />
            Upload First Image
            <input type="file" multiple accept="image/*" onChange={handleFileUpload} className="hidden" />
          </label>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative bg-primary-800 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.url}
                  alt={image.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Action overlay */}
                <div className="absolute inset-0 bg-primary-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setEditingId(image.id);
                      setEditCaption(image.caption);
                      setEditCategory(image.category);
                    }}
                    className="w-9 h-9 bg-blue-500 rounded-xl flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                    title="Edit caption"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(image.id)}
                    className="w-9 h-9 bg-red-500 rounded-xl flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                    title="Delete image"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Edit form */}
              {editingId === image.id ? (
                <div className="p-3 bg-primary-800 border-t border-white/10">
                  <input
                    value={editCaption}
                    onChange={(e) => setEditCaption(e.target.value)}
                    placeholder="Caption"
                    className="w-full bg-primary-700 text-white text-xs px-3 py-2 rounded-lg outline-none mb-2 border border-white/10"
                  />
                  <select
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value)}
                    className="w-full bg-primary-700 text-white text-xs px-3 py-2 rounded-lg outline-none mb-2 border border-white/10 appearance-none"
                  >
                    <option value="fleet">Fleet</option>
                    <option value="operations">Operations</option>
                    <option value="containers">Containers</option>
                    <option value="cargo">Cargo</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleUpdateCaption(image.id)}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white text-xs py-2 rounded-lg flex items-center justify-center gap-1 transition-colors"
                    >
                      <Check className="w-3 h-3" />
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="flex-1 bg-primary-600 hover:bg-primary-500 text-white text-xs py-2 rounded-lg flex items-center justify-center gap-1 transition-colors"
                    >
                      <X className="w-3 h-3" />
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-3">
                  <p className="text-white text-xs font-medium truncate">
                    {image.caption || "No caption"}
                  </p>
                  <p className="text-primary-400 text-xs capitalize mt-0.5">
                    {image.category}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
