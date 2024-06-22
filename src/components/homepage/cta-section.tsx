import React from "react";
import imgBg from "/public/images/opening-car-door-bg.png";
import { useTranslations } from "next-intl";

export const CtaSection = () => {
  const t = useTranslations("homepage.quality_section");
  const tGeneral = useTranslations("general");

  const stats = [
    {
      value: "23.076",
      label: t("stats_section.transfers"),
    },
    {
      value: "409",
      label: t("stats_section.city_covered"),
    },
    {
      value: "26",
      label: t("stats_section.premium_vehicles"),
    },
  ];

  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imgBg.src})` }}
    >
      <div className="px-default mx-auto max-w-section py-20">
        <div className="flex flex-col items-center">
          <h2 className="text-h2 text-center text-app-orange">
            {t("heading")}
          </h2>
          <p className="mt-4 text-center text-2xl text-white">
            {t("description")}
          </p>
          <button
            aria-label="book now"
            className="shadow-[0px 4px 8px 0px rgba(0, 0, 0, 0.15)] mx-auto mt-12 rounded-full bg-app-orange px-5 py-3 text-sm font-semibold leading-7 text-white transition-all hover:saturate-150 xl:px-7"
          >
            {[tGeneral("book_now")]}
          </button>
        </div>

        <div className="mt-20 flex flex-col gap-8 text-app-orange lg:flex-row lg:gap-4">
          <h2 className="text-h2 grow text-center font-semibold lg:text-left">
            <span className="block w-full lg:max-w-[350px]">
              {t("stats_section.heading")}
            </span>
          </h2>

          <div className="grid items-center gap-10 sm:grid-cols-3 sm:gap-8 md:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center font-semibold">
                <h3 className="text-5xl lg:text-6xl">{stat.value}</h3>
                <span className="text-xl lg:text-2xl">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};