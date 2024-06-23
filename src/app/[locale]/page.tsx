import { NextPageProps } from "@/lib/types";
import { unstable_setRequestLocale } from "next-intl/server";
import { CtaSection } from "../../components/homepage/cta-section";
import { FeaturesSection } from "../../components/homepage/features-section";
import { HeroSection } from "../../components/homepage/hero-section";
import { ServicesSection } from "../../components/homepage/services-section";
import Head from "next/head";

export default function Home({ params: { locale } }: NextPageProps) {
  unstable_setRequestLocale(locale);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#1E1E1E]">
      <Head>
        <link
          rel="alternate"
          href="https://www.nordicxpresslimousine.dk/en/homepage/"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://www.nordicxpresslimousine.dk/da/forside/"
          hrefLang="da"
        />
        <link
          rel="alternate"
          href="https://www.nordicxpresslimousine.dk/"
          hrefLang="x-default"
        />
      </Head>

      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <CtaSection />
    </main>
  );
}
