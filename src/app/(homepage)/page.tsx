import Image from "next/image";
import { TransportationSection } from "./components/transportation-section";
import { FeaturesSection } from "./components/features-section";
import { HeroSection } from "./components/hero-section";
import { CtaSection } from "./components/cta-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#1E1E1E]">
      <HeroSection />
      <TransportationSection />
      <FeaturesSection />
      <CtaSection />
    </main>
  );
}
