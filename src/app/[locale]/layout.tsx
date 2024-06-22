import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { locales } from "@/lib/config";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { Source_Sans_3 } from "next/font/google";
import "../globals.css";

const font = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nordic Xpress Limousine Service",
  description:
    "Affordable transportation that doesn't compromise on quality. Enjoy reliable and cost-effective services today",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

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
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          {children}
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
