import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Link as NavigationLink } from "../navigation";

import { HeaderMobile } from "./header-mobile";

const languages = [
  {
    imgSrc: "/images/icon-us.png",
    imgAlt: "flag of US",
    text: "English",
    locale: "en",
  },
  {
    imgSrc: "/images/icon-dansk.png",
    imgAlt: "flag of Denmark",
    text: "Dansk",
    locale: "da",
  },
];

const contacts = [
  {
    text: "Kundeservice: +45 70603011",
    link: "tel:+4570603011",
    icon: (
      <svg
        className="shrink-0"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8469 0.768753C11.0875 0.187503 11.7219 -0.121872 12.3281 0.0437527L15.0781 0.793753C15.6219 0.943753 16 1.4375 16 2C16 9.73125 9.73125 16 2 16C1.4375 16 0.943749 15.6219 0.79375 15.0781L0.0437498 12.3281C-0.121876 11.7219 0.1875 11.0875 0.76875 10.8469L3.76875 9.59688C4.27812 9.38438 4.86875 9.53125 5.21562 9.95938L6.47812 11.5C8.67812 10.4594 10.4594 8.67813 11.5 6.47813L9.95937 5.21875C9.53125 4.86875 9.38438 4.28125 9.59688 3.77188L10.8469 0.771878V0.768753Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    text: "Contact@nordiexpresslimousine.dk",
    link: "mailto:Contact@nordiexpresslimousine.dk",
    icon: (
      <svg
        className="shrink-0"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 3.5C1.725 3.5 1.5 3.725 1.5 4V4.69063L6.89062 9.11563C7.5375 9.64688 8.46562 9.64688 9.1125 9.11563L14.5 4.69063V4C14.5 3.725 14.275 3.5 14 3.5H2ZM1.5 6.63125V12C1.5 12.275 1.725 12.5 2 12.5H14C14.275 12.5 14.5 12.275 14.5 12V6.63125L10.0625 10.275C8.8625 11.2594 7.13438 11.2594 5.9375 10.275L1.5 6.63125ZM0 4C0 2.89688 0.896875 2 2 2H14C15.1031 2 16 2.89688 16 4V12C16 13.1031 15.1031 14 14 14H2C0.896875 14 0 13.1031 0 12V4Z"
          fill="white"
        />
      </svg>
    ),
  },
];

const socialMedias = [
  {
    link: "https://www.facebook.com/profile.php?id=61556833815560",
    label: "Facebook",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="30" rx="3" fill="#3B5998" />
        <path
          d="M18.3839 15.625H16.3331V21.75H13.5988V15.625H11.3566V13.1094H13.5988V11.168C13.5988 8.98047 14.9113 7.75 16.9073 7.75C17.8644 7.75 18.8761 7.94141 18.8761 7.94141V10.1016H17.755C16.6613 10.1016 16.3331 10.7578 16.3331 11.4688V13.1094H18.7667L18.3839 15.625Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    link: "https://www.linkedin.com/company/nordic-xpress-limousine-service",
    label: "LinkedIn",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="30" rx="3" fill="#0077B5" />
        <path
          d="M11.9894 20H9.44641V11.8242H11.9894V20ZM10.7042 10.7305C9.91125 10.7305 9.255 10.0469 9.255 9.22656C9.255 8.43359 9.91125 7.77734 10.7042 7.77734C11.5245 7.77734 12.1808 8.43359 12.1808 9.22656C12.1808 10.0469 11.5245 10.7305 10.7042 10.7305ZM21.4777 20H18.962V16.0352C18.962 15.0781 18.9347 13.875 17.6222 13.875C16.3097 13.875 16.1183 14.8867 16.1183 15.9531V20H13.5753V11.8242H16.0089V12.9453H16.0363C16.3917 12.3164 17.212 11.6328 18.4425 11.6328C21.0128 11.6328 21.505 13.3281 21.505 15.5156V20H21.4777Z"
          fill="white"
        />
      </svg>
    ),
  },
];

export const Header = ({ locale }: { locale: string }) => {
  const t = useTranslations("header");

  const menuItems = [
    {
      text: t("home"),
      link: "/",
    },
    {
      text: t("about_us"),
      link: "/about-us",
    },
    {
      text: t("services"),
      link: "",
    },
    {
      text: t("car_fleet"),
      link: "",
    },
    {
      text: t("chauffeurs"),
      link: "",
    },
    {
      text: t("faq"),
      link: "",
    },
    {
      text: t("contact"),
      link: "",
    },
  ];

  return (
    <>
      <nav className="hidden bg-black py-4 text-white md:block">
        <div className="px-default mx-auto flex max-w-section items-center gap-6">
          <ul className="flex grow gap-6">
            {contacts.map((contact) => (
              <li key={contact.text}>
                <Link href={contact.link} className="flex items-center gap-3">
                  {contact.icon}
                  <span className="text-xs">{contact.text}</span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-1">
            {socialMedias.map((socialMedia) => (
              <li key={socialMedia.label}>
                <Link
                  href={socialMedia.link}
                  aria-label={socialMedia.label}
                  target="_blank"
                  className="transition-all hover:saturate-150"
                >
                  {socialMedia.icon}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-3">
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
                  <span className="text-xs leading-none transition-all group-hover:text-[#fe6802]">
                    {language.text}
                  </span>
                </NavigationLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <nav className="sticky top-0 z-[41] bg-app-gray py-4 text-white">
        <div className="px-default mx-auto flex max-w-section items-center justify-between gap-6">
          <NavigationLink href="/" locale={locale}>
            <Image
              src="/images/site-logo.png"
              alt="site logo"
              width={176}
              height={60}
              className="w-[125px] sm:w-[150px] md:w-[176px]"
            />
          </NavigationLink>

          <ul className="text-orange flex items-center gap-2 xl:gap-3">
            {menuItems.map((item) => (
              <li key={item.text} className="hidden lg:block">
                <NavigationLink
                  className="p-2 text-sm leading-7 tracking-[0.05em] transition-all hover:text-[#fe6802]"
                  href={item.link}
                  locale={locale}
                >
                  {item.text}
                </NavigationLink>
              </li>
            ))}

            <HeaderMobile menuItems={menuItems} languages={languages} />
          </ul>
        </div>
      </nav>
    </>
  );
};
