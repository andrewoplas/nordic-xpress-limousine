import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

export const HeroSection = () => {
  const t = useTranslations("homepage.hero_section");
  const tGeneral = useTranslations("general");

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-[#A3A7AD]">
      <div className="w-full">
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-bl from-zinc-500 to-zinc-800 opacity-50"></div>

        <video
          // className="min-h-full w-auto min-w-full max-w-none"
          className="w-full"
          loop
          autoPlay
          muted
          playsInline
          preload="none"
        >
          <source src="videos/hero-background-v2.mp4" type="video/mp4" />
          <source src="videos/hero-background-v2.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="px-default absolute z-10 flex w-full max-w-section justify-center md:justify-start lg:-mt-[10%] xl:-mt-[20%]">
        <div className="flex flex-col items-center md:items-start">
          <h1
            className="flex flex-col gap-0 text-center text-2xl font-normal text-white md:gap-4 md:text-left md:text-3xl"
            style={{ textShadow: "3px -1px 5px rgba(0, 0, 0, 0.5)" }}
          >
            {t("welcome")}
            <span className="text-4xl text-app-orange md:text-6xl">
              {t("xpress")}
            </span>
            {t("service_name")}
          </h1>

          <Button
            aria-label={tGeneral("book_now")}
            className="mt-4 lg:mt-8"
          >
            {tGeneral("book_now")}
          </Button>
        </div>
      </div>
    </section>
  );
};
