import { Button } from "@/components/ui/button";
import { NextPageProps } from "@/lib/types";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import aboutUsBackgroundImg from "/public/images/about-us-bg.webp";

const CarFleet = ({ params: { locale } }: NextPageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("car_fleet");
  const tGeneral = useTranslations("general");

  return (
    <main>
      <section
        className="relative bg-cover bg-center py-32"
        style={{ backgroundImage: `url(${aboutUsBackgroundImg.src})` }}
      >
        <div className="px-default mx-auto max-w-section">
          <h1 className="text-h1 relative z-10 font-bold text-white">
            {t("heading")}
          </h1>
        </div>

        <div className="absolute left-0 top-0 z-0 h-full w-full bg-[#00000080]"></div>
      </section>

      <section className="px-default mx-auto max-w-section py-16 lg:py-20">
        {t.rich("content", {
          h2: (chunks) => (
            <h2 className="text-h3 mb-4 mt-10 font-bold first:!mt-0 lg:mt-14">
              {chunks}
            </h2>
          ),
          p: (chunks) => <p className="mb-4 leading-relaxed">{chunks}</p>,
        })}
      </section>

      <section className="px-default mx-auto flex max-w-section flex-col items-center justify-center gap-3 py-16 lg:py-20">
        <h2 className="text-h3 text-center">{t("cta_heading")}</h2>
        <Button>{tGeneral("book_now")}</Button>
      </section>
    </main>
  );
};

export default CarFleet;
