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

export function getGallery(): GalleryImage[] {
  const raw = fs.readFileSync(galleryPath, "utf-8");
  const data = JSON.parse(raw);
  return data.images.sort(
    (a: GalleryImage, b: GalleryImage) => a.order - b.order
  );
}

export function addGalleryImage(image: Omit<GalleryImage, "id" | "addedAt">) {
  const raw = fs.readFileSync(galleryPath, "utf-8");
  const data = JSON.parse(raw);
  const newImage: GalleryImage = {
    ...image,
    id: crypto.randomUUID(),
    addedAt: new Date().toISOString(),
  };
  data.images.push(newImage);
  fs.writeFileSync(galleryPath, JSON.stringify(data, null, 2), "utf-8");
  return newImage;
}

export function deleteGalleryImage(id: string) {
  const raw = fs.readFileSync(galleryPath, "utf-8");
  const data = JSON.parse(raw);
  const image = data.images.find((img: GalleryImage) => img.id === id);
  if (image && image.filename && !image.url.startsWith("https://")) {
    const filePath = path.join(uploadsDir, image.filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }
  data.images = data.images.filter((img: GalleryImage) => img.id !== id);
  fs.writeFileSync(galleryPath, JSON.stringify(data, null, 2), "utf-8");
}

export function updateGalleryImage(id: string, updates: Partial<GalleryImage>) {
  const raw = fs.readFileSync(galleryPath, "utf-8");
  const data = JSON.parse(raw);
  data.images = data.images.map((img: GalleryImage) =>
    img.id === id ? { ...img, ...updates } : img
  );
  fs.writeFileSync(galleryPath, JSON.stringify(data, null, 2), "utf-8");
}

export function reorderGallery(orderedIds: string[]) {
  const raw = fs.readFileSync(galleryPath, "utf-8");
  const data = JSON.parse(raw);
  data.images = data.images.map((img: GalleryImage) => ({
    ...img,
    order: orderedIds.indexOf(img.id) + 1,
  }));
  fs.writeFileSync(galleryPath, JSON.stringify(data, null, 2), "utf-8");
}

export function ensureUploadsDir() {
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }
}
