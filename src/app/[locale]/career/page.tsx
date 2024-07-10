import { Button } from "@/components/ui/button";
import { getAlternatesMetadata, getSiteName } from "@/lib/helper";
import { pathnames } from "@/lib/i18n/pathnames";
import { NextPageProps } from "@/lib/types";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import iconPositiveWorkEnvironment from "/public/fa-icons/group-solid.svg";
import iconProfessionalDevelopment from "/public/fa-icons/grow-solid.svg";
import iconCompetitiveCompensation from "/public/fa-icons/money-bag-solid.svg";
import iconOpportunitiesForAdvancement from "/public/fa-icons/rank-solid.svg";
import backgroundImg from "/public/images/opening-car-door-bg.png";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "career",
  });

  return {
    title: `${t("heading")} - ${getSiteName()}`,
    ...getAlternatesMetadata(pathnames["/career"]),
  };
}

const icons = [
  iconCompetitiveCompensation,
  iconProfessionalDevelopment,
  iconPositiveWorkEnvironment,
  iconOpportunitiesForAdvancement,
];

const Career = ({ params: { locale } }: NextPageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("career");
  const tGeneral = useTranslations("general");

  return (
    <main>
      <section
        className="relative bg-cover bg-center py-24 lg:py-32"
        style={{ backgroundImage: `url(${backgroundImg.src})` }}
      >
        <div className="px-default mx-auto max-w-section">
          <h1 className="text-h1 relative z-10 font-bold text-white">
            {t("heading")}
          </h1>
          <p className="relative z-10 mb-4 mt-2 max-w-[800px] text-lg leading-relaxed text-white/80 lg:text-xl">
            {t("description")}
          </p>
        </div>

        <div className="absolute left-0 top-0 z-0 h-full w-full bg-[#00000080]"></div>
      </section>

      <section className="px-default mx-auto max-w-section py-16 lg:py-20">
        <h2 className="text-h2 mb-4 mt-10 text-center font-bold first:!mt-0 lg:mt-14">
          {t("perks.heading")}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:mt-10 lg:grid-cols-4">
          {[
            "competitive_compensation",
            "professional_development",
            "positive_work_environment",
            "opportunities_for_advancement",
          ].map((key, index) => {
            const heading = t(`perks.${key}.heading`);

            return (
              <div
                key={key}
                className="rounded-md border border-neutral-200 p-6 md:p-8"
              >
                <Image
                  src={icons[index].src}
                  alt={`icon of ${heading}`}
                  width={28}
                  height={28}
                  className="mb-6 h-7 w-auto"
                />
                <h3 className="text-h4 mb-2 w-full font-bold lg:max-w-[200px]">
                  {t(`perks.${key}.heading`)}
                </h3>
                <p className="leading-relaxed">
                  {t(`perks.${key}.description`)}
                </p>
              </div>
            );
          })}
        </div>

        <h2 className="text-h2 mb-4 mt-20 text-center font-bold first:!mt-0 lg:mt-28">
          {t("opening.heading")}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:mt-10">
          {["chauffeurs", "customer_service_representatives"].map(
            (key, index) => {
              const heading = t(`opening.${key}.heading`);

              return (
                <div
                  key={key}
                  className="rounded-md border border-neutral-200 p-6 md:p-8"
                >
                  <h3 className="text-h4 mb-2 font-bold">
                    {t(`opening.${key}.heading`)}
                  </h3>
                  <p className="leading-relaxed">
                    {t(`opening.${key}.description`)}
                  </p>
                </div>
              );
            },
          )}
        </div>
      </section>

      <section className="px-default mx-auto mt-16 flex max-w-section flex-col items-center justify-center gap-3 pb-16 lg:pb-20">
        <h2 className="text-center text-xl">{t("cta_heading")}</h2>
        <Button asChild className="mt-4">
          <Link href="mailto:contact@nordiexpresslimousine.dk">
            {tGeneral("contact_us")}
          </Link>
        </Button>
      </section>
    </main>
  );
};

export default Career;
