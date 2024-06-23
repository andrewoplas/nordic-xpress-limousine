import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getSiteName } from "@/lib/helper";
import { locales } from "@/lib/i18n/pathnames";
import type { Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { Source_Sans_3 } from "next/font/google";
import Head from "next/head";
import "../globals.css";
import { jsonLd } from "@/lib/config";
import Script from "next/script";

const font = Source_Sans_3({ subsets: ["latin"] });

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
    openGraph: {
      images: "/opengraph-image.jpg",
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
    <html lang={locale} className={font.className}>
      <body className="overflow-x-hidden">
        <Script
          id="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
