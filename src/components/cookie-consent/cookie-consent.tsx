"use client";

import Image from "next/image";
import { useEffect } from "react";
import { run, showPreferences } from "vanilla-cookieconsent";
import { Button } from "../ui/button";
import pluginConfig from "./cookie-consent-config";
import iconCookie from "/public/fa-icons/cookie-bite-solid.svg";

export const CookieConsentComponent = () => {
  useEffect(() => {
    run(pluginConfig);
  }, []);

  return (
    <Button
      onClick={showPreferences}
      size="icon"
      className="fixed bottom-5 left-5 size-[60px]"
    >
      <Image
        src={iconCookie}
        alt="cookie icon"
        width={1}
        height={1}
        className="size-8 w-auto lg:size-8"
      />
    </Button>
  );
};
