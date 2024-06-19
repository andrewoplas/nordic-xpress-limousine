import Image from "next/image";
import { TransportationSection } from "./components/transportation-section";
import { FeaturesSection } from "./components/features-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-[#1E1E1E]">
        <TransportationSection />
        <FeaturesSection />
      </div>
    </main>
  );
}
