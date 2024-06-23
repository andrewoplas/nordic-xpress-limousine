import { useTranslations } from "next-intl";
import Image from "next/image";
import iconPlaneArrival from "/public/fa-icons/plane-arrival-solid.svg";
import iconShip from "/public/fa-icons/ship-solid.svg";
import iconSuitcase from "/public/fa-icons/suitcase-solid.svg";
import iconTaxi from "/public/fa-icons/taxi-solid.svg";

export const ServicesSection = () => {
  const t = useTranslations("homepage.services_section");

  const services = [
    {
      heading: t("airport_transfers.heading"),
      description: t("airport_transfers.description"),
      imgSrc: iconPlaneArrival.src,
    },
    {
      heading: t("cruise_port_transfers.heading"),
      description: t("cruise_port_transfers.description"),
      imgSrc: iconShip.src,
    },
    {
      heading: t("business_travel.heading"),
      description: t("business_travel.description"),
      imgSrc: iconSuitcase.src,
    },
    {
      heading: t("leisure_travel.heading"),
      description: t("leisure_travel.description"),
      imgSrc: iconTaxi.src,
    },
  ];

  return (
    <section className="px-default mx-auto flex max-w-section flex-col gap-14 py-16 sm:gap-16 md:py-20 lg:gap-20">
      <h2 className="text-h2 text-center font-semibold text-app-orange">
        {t("heading")}
      </h2>

      <div className="-mx-6 grid grid-cols-1 gap-4 divide-dashed divide-[#E0E0E0] sm:grid-cols-2 lg:-mx-8 lg:grid-cols-4 lg:gap-0 lg:divide-x-[1px]">
        {services.map((type) => (
          <div
            className="flex flex-col items-center px-6 py-4 sm:items-start lg:px-8"
            key={type.heading}
          >
            <Image
              src={type.imgSrc}
              alt={`icon of ${type.heading}`}
              width={50}
              height={45}
              className="h-8 w-auto lg:h-10"
            />
            <h3 className="text-h3 mt-4 text-center text-app-orange sm:text-left lg:mt-6">
              {type.heading}
            </h3>
            <p className="mt-4 text-center text-[15px] leading-5 tracking-[0.1em] text-white sm:text-left">
              {type.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <h3 className="text-h3 text-center font-semibold text-white">
          {t("cta.heading")}
        </h3>

        <button
          aria-label={t("cta.button_text")}
          className="shadow-[0px 4px 8px 0px rgba(0, 0, 0, 0.15)] rounded-full bg-app-orange px-6 py-2 text-sm font-semibold uppercase leading-7 text-white transition-all hover:saturate-150 md:px-7 md:py-3"
        >
          {t("cta.button_text")}
        </button>
      </div>
    </section>
  );
};
