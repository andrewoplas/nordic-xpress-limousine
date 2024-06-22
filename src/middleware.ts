import createMiddleware from "next-intl/middleware";
import { locales, pathnames } from "./lib/i18n/pathnames";

export default createMiddleware({
  locales,
  defaultLocale: "en",
  pathnames,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(da|en)/:path*"],
};
