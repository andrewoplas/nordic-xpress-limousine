import React from "react";
import aboutUsBackgroundImg from "/public/images/about-us-bg.webp";
import { useTranslations } from "next-intl";
import { NextPageProps } from "@/lib/types";
import { unstable_setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/button";

const AboutUs = ({ params: { locale } }: NextPageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("about");
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

      <section className="px-default mx-auto flex max-w-section flex-col items-center justify-center gap-3 pb-16 lg:pb-20">
        <h2 className="text-center text-xl">{t("cta_heading")}</h2>
        <Button>{tGeneral("contact_us")}</Button>
      </section>
    </main>
  );
};

export default AboutUs;
