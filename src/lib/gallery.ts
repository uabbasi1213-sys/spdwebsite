import fs from "fs";
import path from "path";
import crypto from "crypto";

const galleryPath = path.join(process.cwd(), "src/data/gallery.json");
const uploadsDir = path.join(process.cwd(), "public/uploads");

export interface GalleryImage {
  id: string;
  filename: string;
  url: string;
  caption: string;
  order: number;
  category: string;
  addedAt: string;
}

function readGalleryData(): { images: GalleryImage[] } {
  try {
    const raw = fs.readFileSync(galleryPath, "utf-8");
    return JSON.parse(raw);
  } catch {
    return { images: [] };
  }
}

function writeGalleryData(data: { images: GalleryImage[] }) {
  try {
    fs.writeFileSync(galleryPath, JSON.stringify(data, null, 2), "utf-8");
  } catch {
    console.warn("Gallery update: file system write not supported in this environment.");
  }
}

export function getGallery(): GalleryImage[] {
  const data = readGalleryData();
  return data.images.sort(
    (a: GalleryImage, b: GalleryImage) => a.order - b.order
  );
}

export function addGalleryImage(image: Omit<GalleryImage, "id" | "addedAt">) {
  const data = readGalleryData();
  const newImage: GalleryImage = {
    ...image,
    id: crypto.randomUUID(),
    addedAt: new Date().toISOString(),
  };
  data.images.push(newImage);
  writeGalleryData(data);
  return newImage;
}

export function deleteGalleryImage(id: string) {
  const data = readGalleryData();
  const image = data.images.find((img: GalleryImage) => img.id === id);
  if (image && image.filename && !image.url.startsWith("https://")) {
    try {
      const filePath = path.join(uploadsDir, image.filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } catch {
      // Ignore file deletion errors on serverless
    }
  }
  data.images = data.images.filter((img: GalleryImage) => img.id !== id);
  writeGalleryData(data);
}

export function updateGalleryImage(id: string, updates: Partial<GalleryImage>) {
  const data = readGalleryData();
  data.images = data.images.map((img: GalleryImage) =>
    img.id === id ? { ...img, ...updates } : img
  );
  writeGalleryData(data);
}

export function reorderGallery(orderedIds: string[]) {
  const data = readGalleryData();
  data.images = data.images.map((img: GalleryImage) => ({
    ...img,
    order: orderedIds.indexOf(img.id) + 1,
  }));
  writeGalleryData(data);
}

export function ensureUploadsDir() {
  try {
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }
  } catch {
    // Ignore on serverless environments
  }
}
