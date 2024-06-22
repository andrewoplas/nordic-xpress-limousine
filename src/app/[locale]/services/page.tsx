import React from "react";
import aboutUsBackgroundImg from "/public/images/about-us-bg.webp";
import { useTranslations } from "next-intl";
import { NextPageProps } from "@/lib/types";
import { unstable_setRequestLocale } from "next-intl/server";

const Services = ({ params: { locale } }: NextPageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("services");

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
        {t.rich("description", {
          h2: (chunks) => (
            <h2 className="text-h3 mb-4 mt-10 font-bold first:!mt-0 lg:mt-14">
              {chunks}
            </h2>
          ),
          p: (chunks) => <p className="mb-4 leading-relaxed">{chunks}</p>,
        })}

        {[
          "airport_transfers",
          "cruise_port_transfers",
          "business_travel",
          "leisure_trips_and_days_out",
          "road_shows",
          "social_occasion",
          "fairs_and_events",
        ].map((key) => {
          return <div>{t(`${key}.heading`)}</div>;
        })}
      </section>
    </main>
  );
};

export default Services;
