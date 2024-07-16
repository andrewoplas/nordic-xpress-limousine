import { Pathnames } from "next-intl/routing";

export const locales = ["en", "da"];

export const pathnames = {
  "/": "/",
  "/about-us": {
    en: "/about-us",
    da: "/om-os",
  },
  "/car-fleet": {
    en: "/car-fleet",
    da: "/bilflaade",
  },
  "/chauffeurs": {
    en: "/chauffeurs",
    da: "/chauffoerer",
  },
  "/career": {
    en: "/career",
    da: "/karriere",
  },
  "/faq": {
    en: "/faq",
    da: "/spoergsmaal-svar",
  },
  "/contact": {
    en: "/contact",
    da: "/kontakt",
  },
  "/services": {
    en: "/services",
    da: "/services",
  },
  "/privacy-policy": {
    en: "/privacy-policy",
    da: "/privatlivspolitik",
  },
  "/terms-and-conditions": {
    en: "/terms-and-conditions",
    da: "/vilkaar-og-betingelser",
  },
} satisfies Pathnames<typeof locales>;
