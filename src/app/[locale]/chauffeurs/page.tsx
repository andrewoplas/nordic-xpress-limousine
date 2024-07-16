import { Button } from "@/components/ui/button";
import { getAlternatesMetadata, getSiteName } from "@/lib/helper";
import { pathnames } from "@/lib/i18n/pathnames";
import { NextPageProps } from "@/lib/types";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";
import backgroundImg from "/public/images/opening-car-door-bg.png";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "chauffeurs",
  });

  return {
    title: `${t("heading")} - ${getSiteName()}`,
    ...getAlternatesMetadata(pathnames["/chauffeurs"]),
  };
}

const Chauffeurs = ({ params: { locale } }: NextPageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("chauffeurs");
  const tGeneral = useTranslations("general");

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

      <section className="px-default mx-auto max-w-section py-16 lg:py-20">
        {t.rich("content")}
      </section>

      <section className="px-default mx-auto flex max-w-section flex-col items-center justify-center gap-3 pb-16 lg:pb-20">
        <h2 className="text-center text-xl">{t("cta_heading")}</h2>
        <Button asChild className="mt-4">
          <Link href="https://www.booking.nordicxpresslimousine.dk/en/booking/">
            {tGeneral("book_now")}
          </Link>
        </Button>
      </section>
    </main>
  );
};

export default Chauffeurs;
