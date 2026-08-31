import { NextResponse } from "next/server";
import {
  getGallery,
  addGalleryImage,
  deleteGalleryImage,
  updateGalleryImage,
  reorderGallery,
} from "@/lib/gallery";
import { cookies } from "next/headers";

function isAuthenticated(cookieStore: Awaited<ReturnType<typeof cookies>>) {
  const token = cookieStore.get("admin_token");
  return token && token.value === "authenticated";
}

export async function GET() {
  try {
    const images = getGallery();
    return NextResponse.json(images);
  } catch {
    return NextResponse.json({ error: "Failed to read gallery" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const cookieStore = await cookies();
  if (!isAuthenticated(cookieStore)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { action, ...data } = body;

    if (action === "add") {
      const newImage = addGalleryImage(data);
      return NextResponse.json(newImage);
    }

    if (action === "update") {
      updateGalleryImage(data.id, data.updates);
      return NextResponse.json({ success: true });
    }

    if (action === "delete") {
      deleteGalleryImage(data.id);
      return NextResponse.json({ success: true });
    }

    if (action === "reorder") {
      reorderGallery(data.orderedIds);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch {
    return NextResponse.json({ error: "Gallery operation failed" }, { status: 500 });
  }
}
