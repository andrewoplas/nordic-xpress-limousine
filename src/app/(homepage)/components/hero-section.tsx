import Image from "next/image";
import React from "react";
import imgHero from "/public/images/mercedes-cars.png";

export const HeroSection = () => (
  <section className="relative overflow-hidden pb-0 pt-16 md:py-24 bg-[#A3A7AD]">
    <div className="px-default relative z-[1] mx-auto flex max-w-section min-h-[40dvh]">
      <div className="flex flex-col items-center gap-20 md:flex-row md:gap-12">
        <div className="flex shrink-0 flex-col items-center md:items-start">
          <h1
            className="flex flex-col gap-1 text-center text-3xl font-normal text-white md:gap-4 md:text-left"
            style={{
              textShadow: "3px -1px 5px rgba(0, 0, 0, 0.5);",
            }}
          >
            Velkommen til Nordic
            <span className="text-6xl text-app-orange">Xpress</span>
            Limousine Service
          </h1>

          <button className="shadow-[0px 4px 8px 0px rgba(0, 0, 0, 0.15)] mt-8 rounded-full bg-app-orange px-5 py-3 text-sm font-semibold leading-7 text-white transition-all hover:saturate-150 xl:px-7">
            BOOK NOW
          </button>
        </div>

        <Image src={imgHero} alt="photo of mercedes cars" className="w-full" />
      </div>
    </div>

    <div className="absolute left-0 top-0 w-full h-full overflow-hidden hidden md:block">
      <div
        className="absolute left-0 top-0 h-full w-full opacity-50 bg-gradient-to-bl from-zinc-500 to-zinc-800" 
      ></div>
      
      <video className="w-auto min-w-full min-h-full max-w-none" loop autoPlay muted playsInline preload="none">
        <source src="videos/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
);
