import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CallToAction from "@/components/home/CallToAction";

export const metadata: Metadata = {
  title: "SUPER PAK DATA | Goods Transportation Karachi to Lahore",
  description:
    "SUPER PAK DATA provides professional LCL and FCL goods transportation services from Karachi to Lahore. Reliable, secure and efficient cargo delivery across Pakistan.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesPreview />
      <WhyChooseUs />
      <CallToAction />
    </>
  );
}
