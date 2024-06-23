import { NextPageProps } from "@/lib/types";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import iconCalendarDays from "/public/fa-icons/calendar-days-solid.svg";
import iconChampagneGlasses from "/public/fa-icons/champagne-glasses-solid.svg";
import iconPlaneArrival from "/public/fa-icons/plane-arrival-solid.svg";
import iconRoad from "/public/fa-icons/road-solid.svg";
import iconShip from "/public/fa-icons/ship-solid.svg";
import iconSuitcase from "/public/fa-icons/suitcase-solid.svg";
import iconTaxi from "/public/fa-icons/taxi-solid.svg";
import backgroundImg from "/public/images/calling.jpg";
import { Button } from "@/components/ui/button";

const icons = [
  iconPlaneArrival,
  iconShip,
  iconSuitcase,
  iconTaxi,
  iconRoad,
  iconChampagneGlasses,
  iconCalendarDays,
];

const Services = ({ params: { locale } }: NextPageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("services");
  const tGeneral = useTranslations("general");

  return (
    <main>
      <section
        className="relative bg-cover bg-center py-32"
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
        {t.rich("description", {
          h2: (chunks) => (
            <h2 className="text-h3 mb-4 mt-10 font-bold first:!mt-0 lg:mt-14">
              {chunks}
            </h2>
          ),
          p: (chunks) => <p className="mb-4 leading-relaxed">{chunks}</p>,
        })}

        <div className="mt-16 grid grid-cols-1 gap-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "airport_transfers",
            "cruise_port_transfers",
            "business_travel",
            "leisure_trips_and_days_out",
            "road_shows",
            "social_occasion",
            "fairs_and_events",
          ].map((key, index) => {
            const heading = t(`${key}.heading`);

            return (
              <div key={key}>
                <Image
                  src={icons[index].src}
                  alt={`icon of ${heading}`}
                  width={28}
                  height={28}
                  className="mb-6 h-7 w-auto"
                />
                <h3 className="text-h4 mb-2 font-bold">
                  {t(`${key}.heading`)}
                </h3>
                <p className="leading-relaxed">{t(`${key}.description`)}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-default mx-auto flex max-w-section flex-col items-center justify-center gap-3 pb-16 lg:pb-20">
        <h2 className="text-center text-xl">{t("cta_heading")}</h2>
        <Button>{tGeneral("book_now")}</Button>
      </section>
    </main>
  );
};

export default Services;
