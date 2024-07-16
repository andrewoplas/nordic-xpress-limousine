import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./lib/i18n/pathnames";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    defaultTranslationValues: {
      h2: (chunks) => (
        <h2 className="text-h3 mb-4 mt-10 font-bold first:!mt-0 lg:mt-14">
          {chunks}
        </h2>
      ),
      p: (chunks) => <p className="mb-4 leading-relaxed">{chunks}</p>,
      strong: (chunks) => <b>{chunks}</b>,
    },
  };
});
