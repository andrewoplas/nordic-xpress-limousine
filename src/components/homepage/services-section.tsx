import { Link } from "@/lib/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "../ui/button";
import iconPlaneArrival from "/public/fa-icons/plane-arrival-solid.svg";
import iconPrivateTours from "/public/fa-icons/private-tours.svg";
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
    {
      heading: t("private_tours.heading"),
      description: t("private_tours.description"),
      imgSrc: iconPrivateTours.src,
    },
  ];

  return (
    <section className="px-default mx-auto flex max-w-section flex-col gap-14 py-16 sm:gap-16 md:py-20 lg:gap-20">
      <h2 className="text-h2 text-center font-semibold text-app-orange">
        {t("heading")}
      </h2>

      <div className="-mx-6 grid grid-cols-1 gap-4 divide-dashed divide-[#E0E0E0] sm:grid-cols-2 lg:-mx-8 lg:grid-cols-5 lg:gap-0 lg:divide-x-[1px]">
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

        <Button asChild aria-label={t("cta.button_text")}>
          <Link href="/services">{t("cta.button_text")}</Link>
        </Button>
      </div>
    </section>
  );
};
