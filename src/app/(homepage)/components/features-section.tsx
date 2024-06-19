import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    heading: "Zero-Emission Luxury Vehicles",
    description:
      "Our commitment to sustainable luxury extends to our extensive fleet of Mercedes-Benz electric vehicles. We offer a variety of options to accommodate your group's needs, ensuring a comfortable and stylish journey for every occasion. Whether it's an airport transfer, a corporate event, or a special celebration, our emission-free fleet is ready to exceed your expectations.",
    imgSrc: "/images/mercedes-cars.png",
    imgAlt: "photo of mercedes cars",
    imgWidth: 782,
    imgHeight: 261,
  },
  {
    heading: "Wide Coverage",
    description:
      "Based in Denmark, we provide luxurious, zero-emission transportation services throughout the Nordic countries (Sweden, Finland, Norway) and to/from major European hubs like Germany and England, as well as Dubai. Whether you need airport transfers, business travel, or a special event chauffeur, our fleet is ready to take you to your destination in comfort and style.",
    imgSrc: "/images/globe-dotted.png",
    imgAlt: "photo of globe with dotted locations",
    imgWidth: 420,
    imgHeight: 385,
    isReversed: true,
  },
  {
    heading: "Affordable Luxury",
    description:
      "Don't settle for less when it comes to your transportation needs.  Our affordable luxury service guarantees a reliable, comfortable, and stylish ride every time. We pride ourselves on delivering exceptional value, ensuring you reach your destination in style without compromising on your budget",
    imgSrc: "/images/mercedes-dashboard.png",
    imgAlt: "photo of mercedes dashboard",
    imgWidth: 420,
    imgHeight: 379,
  },
  {
    heading: "Private Tours with Qualified Guides",
    description:
      "Experience the best of Denmark with our exclusive private tours, led by knowledgeable and passionate local guides. Whether you're interested in history, culture, cuisine, or nature, we can customize a tour to match your unique interests and preferences.",
    imgSrc: "/images/denmark.png",
    imgAlt: "photo of denmark",
    imgWidth: 347,
    imgHeight: 318,
    isReversed: true,
  },
];

export const FeaturesSection = () => (
  <section className="mx-auto flex max-w-section flex-col gap-28 py-20">
    {features.map((feature) => (
      <div
        key={feature.heading}
        className={cn("grid items-center gap-16", {
          "grid-cols-[1fr_480px]": feature.isReversed,
          "grid-cols-[480px_1fr]": !feature.isReversed,
        })}
      >
        <div className={cn({ "order-last": feature.isReversed })}>
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

const FeatureContent = ({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) => (
  <>
    <h2 className="text-h3 font-semibold text-app-orange">{heading}</h2>
    <div className="mt-5 text-[15px] leading-5 tracking-[0.1em] text-white">
      <p>{description}</p>

      <Link
        href="/"
        className="mt-5 block text-app-orange transition-all hover:saturate-150"
      >
        Book nu
      </Link>
    </div>
  </>
);
