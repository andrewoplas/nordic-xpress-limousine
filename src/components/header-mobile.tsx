"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Link as NavigationLink } from "../navigation";

type Props = {
  menuItems: {
    text: string;
    link: string;
  }[];
  languages: {
    imgSrc: string;
    imgAlt: string;
    text: string;
    locale: string;
  }[];
};

export const HeaderMobile = ({ menuItems, languages }: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <li className="hidden md:block xl:ml-3">
        <button
          aria-label="book now"
          className="shadow-[0px 4px 8px 0px rgba(0, 0, 0, 0.15)] rounded-full bg-app-orange px-5 py-3 text-sm font-semibold leading-7 text-white transition-all hover:saturate-150 xl:px-7"
        >
          BOOK NOW
        </button>
      </li>

      <li className="ml-5 grid place-items-center lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen((currentValue) => !currentValue)}
          className="flex flex-col justify-center"
          aria-label="mobile menu icon"
        >
          <span
            className={cn(
              "block h-0.5 w-[26px] rounded-full bg-white transition-all duration-300 ease-out",
              {
                "translate-y-1 rotate-45": isMobileMenuOpen,
                "-translate-y-1": !isMobileMenuOpen,
              },
            )}
          ></span>
          <span
            className={cn(
              "my-1 block h-0.5 w-4 rounded-full bg-white transition-all duration-300 ease-out",
              {
                "opacity-0": isMobileMenuOpen,
                "opacity-100": !isMobileMenuOpen,
              },
            )}
          ></span>
          <span
            className={cn(
              "block h-0.5 w-[26px] rounded-full bg-white transition-all duration-300 ease-out",
              {
                "-translate-y-2 -rotate-45": isMobileMenuOpen,
                "translate-y-1": !isMobileMenuOpen,
              },
            )}
          ></span>
        </button>
      </li>

      <div
        className={cn(
          "fixed top-0 z-40 h-full max-h-screen w-full bg-app-gray p-8 pt-28 transition-all duration-300 ease-out",
          {
            "translate-x-full": !isMobileMenuOpen,
            "translate-x-0": isMobileMenuOpen,
          },
        )}
      >
        <ul className="text-orange flex flex-col items-center gap-6">
          {menuItems.map((item) => (
            <li key={item.text}>
              <Link
                className="p-2 text-lg leading-7 tracking-[0.05em] text-white transition-all hover:text-[#fe6802]"
                href={item.link}
              >
                {item.text}
              </Link>
            </li>
          ))}

          <li>
            <button
              aria-label="book now"
              className="shadow-[0px 4px 8px 0px rgba(0, 0, 0, 0.15)] rounded-full bg-app-orange px-5 py-3 font-semibold leading-7 text-white transition-all hover:saturate-150 xl:px-7"
            >
              BOOK NOW
            </button>
          </li>

          <li>
            <ul className="mt-4 flex gap-8 text-white">
              {languages.map((language) => (
                <li key={language.text}>
                  <NavigationLink
                    href="/"
                    locale={language.locale}
                    aria-label={`translate into ${language.text}`}
                    className="group flex items-center gap-2"
                  >
                    <Image
                      className="shrink-0"
                      src={language.imgSrc}
                      alt={language.imgAlt}
                      width={16}
                      height={11}
                    />
                    <span className="leading-none transition-all group-hover:text-[#fe6802]">
                      {language.text}
                    </span>
                  </NavigationLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
