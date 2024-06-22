import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const FeaturesSection = () => {
  const t = useTranslations("homepage.features_section");

  const features = [
    {
      heading: t("zero_emission.heading"),
      description: t("zero_emission.description"),
      imgSrc: "/images/mercedes-cars.png",
      imgAlt: "photo of mercedes cars",
      imgWidth: 782,
      imgHeight: 261,
      isReversed: false,
    },
    {
      heading: t("wide_coverage.heading"),
      description: t("wide_coverage.description"),
      imgSrc: "/images/globe-dotted.png",
      imgAlt: "photo of globe with dotted locations",
      imgWidth: 420,
      imgHeight: 385,
      isReversed: true,
    },
    {
      heading: t("affordable_luxury.heading"),
      description: t("affordable_luxury.description"),
      imgSrc: "/images/mercedes-dashboard.png",
      imgAlt: "photo of mercedes dashboard",
      imgWidth: 420,
      imgHeight: 379,
      isReversed: false,
    },
    {
      heading: t("private_tours.heading"),
      description: t("private_tours.description"),
      imgSrc: "/images/denmark.png",
      imgAlt: "photo of denmark",
      imgWidth: 347,
      imgHeight: 318,
      isReversed: true,
    },
  ];

  return (
    <section className="px-default mx-auto flex max-w-section flex-col gap-24 py-20 md:gap-28">
      {features.map((feature) => (
        <div
          key={feature.heading}
          className={cn(
            "grid grid-cols-1 items-center gap-10 md:gap-14 lg:gap-16",
            {
              "md:grid-cols-2 lg:grid-cols-[1fr_480px]": feature.isReversed,
              "md:grid-cols-2 lg:grid-cols-[480px_1fr]": !feature.isReversed,
            },
          )}
        >
          <div
            className={cn("max-md:order-last", {
              "md:order-last": feature.isReversed,
            })}
          >
            <FeatureContent
              heading={feature.heading}
              description={feature.description}
            />
          </div>
          <div>
            <Image
              className="mx-auto"
              src={feature.imgSrc}
              alt={feature.imgAlt}
              width={feature.imgWidth}
              height={feature.imgHeight}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

const FeatureContent = ({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) => {
  const t = useTranslations("general");

  return (
    <>
      <h2 className="text-h3 text-center font-semibold text-app-orange md:text-left">
        {heading}
      </h2>
      <div className="mt-5 text-center text-[15px] leading-5 tracking-[0.1em] text-white md:text-left">
        <p>{description}</p>

        <Link
          href="/"
          className="mt-5 block text-app-orange transition-all hover:saturate-150"
        >
          {/* {t("book_now")} */}
        </Link>
      </div>
    </>
  );
};
