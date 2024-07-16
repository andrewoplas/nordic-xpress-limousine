import { getAlternatesMetadata, getSiteName } from "@/lib/helper";
import { pathnames } from "@/lib/i18n/pathnames";
import { NextPageProps } from "@/lib/types";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "privacy_policy",
  });

  return {
    title: `${t("heading")} - ${getSiteName()}`,
    ...getAlternatesMetadata(pathnames["/privacy-policy"]),
  };
}

const PrivacyPolicy = ({ params: { locale } }: NextPageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("privacy_policy");

  return (
    <main>
      <section className="relative bg-[#10131D] bg-cover bg-center py-16 sm:py-24 lg:py-32">
        <div className="px-default mx-auto max-w-section">
          <h1 className="text-h1 relative z-10 font-bold text-white">
            {t("heading")}
          </h1>
        </div>

        <div className="absolute left-0 top-0 z-0 h-full w-full bg-[#00000080]"></div>
      </section>

      <section className="px-default mx-auto max-w-section py-16 lg:py-20">
        {t.rich("content", {
          ol: (chunks) => <ol className="list-decimal pl-4">{chunks}</ol>,
          li: (chunks) => <li className="">{chunks}</li>,
          contact: () => (
            <a
              href="mailto:Contact@nordicxpresslimousine.dk"
              className="text-app-orange"
            >
              Contact@nordicxpresslimousine.dk
            </a>
          ),
        })}
      </section>
    </main>
  );
};

export default PrivacyPolicy;
