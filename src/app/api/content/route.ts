import { NextResponse } from "next/server";
import { getContent, updateContent } from "@/lib/content";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const content = getContent();
    return NextResponse.json(content);
  } catch {
    return NextResponse.json({ error: "Failed to read content" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  // Check admin auth
  const cookieStore = await cookies();
  const adminToken = cookieStore.get("admin_token");
  if (!adminToken || adminToken.value !== "authenticated") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const newContent = await request.json();
    updateContent(newContent);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to update content" }, { status: 500 });
  }
}
