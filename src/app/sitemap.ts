import { getBaseUrl } from "@/lib/helper";
import { locales, pathnames } from "@/lib/i18n/pathnames";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(pathnames).map((key) => {
    if (key === "/") {
      return {
        url: `${getBaseUrl()}/`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
      };
    }

    // @ts-ignore
    const pathname = pathnames[key];
    const alternates: any = {};

    locales.forEach((locale) => {
      alternates[locale] = `${getBaseUrl()}/${locale}/${pathname}/`;
    });

    return {
      url: `${getBaseUrl()}/${key}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: alternates,
      },
    };
  });
}
