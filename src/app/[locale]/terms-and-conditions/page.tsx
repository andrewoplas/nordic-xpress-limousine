import { Button } from "@/components/ui/button";
import { getAlternatesMetadata, getSiteName } from "@/lib/helper";
import { pathnames } from "@/lib/i18n/pathnames";
import { NextPageProps } from "@/lib/types";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";
import backgroundImg from "/public/images/about-us-bg.webp";
import { TermsAndConditionsEn } from "@/components/terms-and-conditions/content-en";
import { TermsAndConditionsDa } from "@/components/terms-and-conditions/content-da";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "terms_and_conditions",
  });

  return {
    title: `${t("heading")} - ${getSiteName()}`,
    ...getAlternatesMetadata(pathnames["/terms-and-conditions"]),
  };
}

const TermsAndConditions = ({ params: { locale } }: NextPageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("terms_and_conditions");

  return (
    <main>
      <section
        className="relative bg-cover bg-center py-16 sm:py-24 lg:py-32"
        style={{ backgroundImage: `url(${backgroundImg.src})` }}
      >
        <div className="px-default mx-auto max-w-section">
          <h1 className="text-h1 relative z-10 font-bold text-white">
            {t("heading")}
          </h1>
        </div>

        <div className="absolute left-0 top-0 z-0 h-full w-full bg-[#00000080]"></div>
      </section>

      <section className="px-default terms-and-conditions-content mx-auto max-w-section py-16 lg:py-20">
        {locale === "en" && <TermsAndConditionsEn />}
        {locale === "da" && <TermsAndConditionsDa />}
      </section>
    </main>
  );
};

export default TermsAndConditions;
