import { NextPageProps } from "@/lib/types";
import { unstable_setRequestLocale } from "next-intl/server";
import Head from "next/head";
import { CtaSection } from "../../components/homepage/cta-section";
import { FeaturesSection } from "../../components/homepage/features-section";
import { HeroSection } from "../../components/homepage/hero-section";
import { ServicesSection } from "../../components/homepage/services-section";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.nordicxpresslimousine.dk/en/booking/",
      url: "https://www.nordicxpresslimousine.dk/en/booking/",
      name: "Booking - Nordic Xpress Limousine Service",
      isPartOf: {
        "@id": "https://www.nordicxpresslimousine.dk/en/homepage/#website",
      },
      datePublished: "2023-04-09T10:41:45+00:00",
      dateModified: "2023-04-10T15:53:30+00:00",
      breadcrumb: {
        "@id": "https://www.nordicxpresslimousine.dk/en/booking/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.nordicxpresslimousine.dk/en/booking/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.nordicxpresslimousine.dk/en/booking/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.nordicxpresslimousine.dk/en/homepage/",
        },
        { "@type": "ListItem", position: 2, name: "Booking" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.nordicxpresslimousine.dk/en/homepage/#website",
      url: "https://www.nordicxpresslimousine.dk/en/homepage/",
      name: "Nordic Xpress Limousine Service",
      description: "",
      publisher: {
        "@id": "https://www.nordicxpresslimousine.dk/en/homepage/#organization",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "4279",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.nordicxpresslimousine.dk/en/homepage/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://www.nordicxpresslimousine.dk/en/homepage/#organization",
      name: "Nordic Xpress Limousine Service",
      alternateName: "NXLS",
      url: "https://www.nordicxpresslimousine.dk/en/homepage/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id":
          "https://www.nordicxpresslimousine.dk/en/homepage/#/schema/logo/image/",
        url: "https://www.nordicxpresslimousine.dk/wp-content/uploads/2017/11/nordic-xpress-limousine-logo-8.png",
        contentUrl:
          "https://www.nordicxpresslimousine.dk/wp-content/uploads/2017/11/nordic-xpress-limousine-logo-8.png",
        width: 176,
        height: 60,
        caption: "Nordic Xpress Limousine Service",
      },
      image: {
        "@id":
          "https://www.nordicxpresslimousine.dk/en/homepage/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61556833815560",
        "https://www.linkedin.com/company/nordic-xpress-limousine-service/",
      ],
    },
  ],
};

export default function Home({ params: { locale } }: NextPageProps) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <main className="min-h-screen overflow-x-hidden bg-[#1E1E1E]">
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <CtaSection />
      </main>
    </>
  );
}
