import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { locales, pathnames } from "./pathnames";

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({ locales, pathnames });
