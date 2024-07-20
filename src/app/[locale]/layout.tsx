import { CookieConsentComponent } from "@/components/cookie-consent/cookie-consent";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { jsonLd } from "@/lib/config";
import { getSiteName } from "@/lib/helper";
import { locales } from "@/lib/i18n/pathnames";
import type { Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import localFont from "next/font/local";
import Script from "next/script";
import "../globals.css";
import openGraph from "/public/images/opengraph-image.jpg";
import "vanilla-cookieconsent/dist/cookieconsent.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "general",
  });

  return {
    title: getSiteName(),
    description: t("meta_description"),
    metadataBase: new URL("https://www.nordicxpresslimousine.dk"),
    openGraph: {
      images: [
        {
          url: openGraph.src,
        },
      ],
    },
    icons: [
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        url: "/favicon.ico",
      },
    ],
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const font = localFont({
  src: [
    {
      path: "../../../public/fonts/SourceSansPro-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/SourceSansPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/SourceSansPro-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/SourceSansPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-family",
});

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={font.variable}>
      <body className="overflow-x-hidden">
        <Script
          id="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
        <Script
          src="https://embed.tawk.to/66854b55eaf3bd8d4d17954d/1i1sashbk"
          strategy="beforeInteractive"
        />

        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          {children}
          <Footer />

          <CookieConsentComponent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
