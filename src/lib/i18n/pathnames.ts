import { Pathnames } from "next-intl/routing";

export const locales = ["en", "da"];

export const pathnames = {
  // If locales use different paths, you can
  // specify each external path per locale
  "/": "/",
  "/about-us": {
    en: "/about-us",
    da: "/om-os",
  },
} satisfies Pathnames<typeof locales>;
