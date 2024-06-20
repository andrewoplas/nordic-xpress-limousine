import React from "react";
import imgBg from "/public/images/opening-car-door-bg.png";

const stats = [
  {
    value: "23.076",
    label: "Transfers",
  },
  {
    value: "409",
    label: "City covered",
  },
  {
    value: "26",
    label: "Premium Vehicles",
  },
];

export const CtaSection = () => (
  <section
    className="bg-cover bg-no-repeat bg-center"
    style={{ backgroundImage: `url(${imgBg.src})` }}
  >
    <div className="px-default mx-auto max-w-section py-20">
      <div className="flex flex-col items-center">
        <h2 className="text-h2 text-center text-app-orange">
          Prisvenlig transport med høj kvalitet
        </h2>
        <p className="mt-4 text-center text-2xl text-white">
          Nyd pålidelig og omkostningseffektiv service uden komprimis i dag
        </p>
        <button aria-label="book now" className="shadow-[0px 4px 8px 0px rgba(0, 0, 0, 0.15)] mx-auto mt-12 rounded-full bg-app-orange px-5 py-3 text-sm font-semibold leading-7 text-white transition-all hover:saturate-150 xl:px-7">
          BOOK NOW
        </button>
      </div>

      <div className="mt-20 flex text-app-orange gap-8 lg:gap-4 flex-col lg:flex-row">
        <h2 className="text-h2 grow font-semibold text-center lg:text-left">
          <span className="block w-full lg:max-w-[350px]">
            Your Reliable Transportation Provider
          </span>
        </h2>

        <div className="grid  sm:grid-cols-3 items-center gap-10 sm:gap-8 md:gap-16">
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
