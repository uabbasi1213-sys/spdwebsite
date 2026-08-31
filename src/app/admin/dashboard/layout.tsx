"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    fetch("/api/auth")
      .then((res) => res.json())
      .then((data) => {
        if (!data.authenticated) {
          router.push("/admin");
        }
      })
      .catch(() => router.push("/admin"));
  }, [router]);

  return (
    <div className="min-h-screen bg-primary-950 flex">
      <AdminSidebar />
      <main className="flex-1 lg:ml-64 min-h-screen">
        <div className="p-6 sm:p-8 pt-16 lg:pt-8">{children}</div>
      </main>
    </div>
  );
}
