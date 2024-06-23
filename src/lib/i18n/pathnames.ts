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
} satisfies Pathnames<typeof locales>;
