import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: "SUPER PAK DATA | Goods Transportation Karachi to Lahore",
    template: "%s | SUPER PAK DATA",
  },
  description:
    "SUPER PAK DATA provides professional LCL and FCL goods transportation services from Karachi to Lahore. Reliable, secure and efficient cargo delivery across Pakistan.",
  keywords: [
    "Goods Transport Karachi",
    "Karachi to Lahore Goods Transport",
    "Karachi Lahore Cargo Service",
    "LCL Services Karachi",
    "FCL Services Karachi",
    "Goods Transportation Pakistan",
    "Cargo Transport Karachi",
    "Freight Transport Karachi Lahore",
  ],
  authors: [{ name: "SUPER PAK DATA" }],
  creator: "SUPER PAK DATA",
  publisher: "SUPER PAK DATA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://superpakdata.com",
    siteName: "SUPER PAK DATA",
    title: "SUPER PAK DATA | Goods Transportation Karachi to Lahore",
    description:
      "Professional LCL & FCL goods transportation services from Karachi to Lahore. Reliable, secure and efficient cargo delivery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0F172A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SUPER PAK DATA",
              description:
                "Professional goods transportation and logistics company providing LCL and FCL freight services from Karachi to Lahore.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Pl. No. 580, Gate No. 1, Gali No. 3, Hawksbay Rd.",
                addressLocality: "Karachi",
                addressRegion: "Sindh",
                addressCountry: "PK",
              },
              url: "https://superpakdata.com",
              serviceType: [
                "LCL Transportation",
                "FCL Transportation",
                "Goods Transportation",
                "Cargo Transportation",
              ],
              areaServed: ["Karachi", "Lahore", "Pakistan"],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-primary-900">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#1E293B",
              color: "#F8FAFC",
              border: "1px solid rgba(255,255,255,0.1)",
            },
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
