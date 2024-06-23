import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import imgPaymentApplePay from "/public/images/payment-apple-pay.svg";
import imgPaymentGooglePay from "/public/images/payment-google-pay.svg";
import imgPaymentMastercard from "/public/images/payment-mastercard.svg";
import imgPaymentMobilePay from "/public/images/payment-mobile-pay.svg";
import imgPaymentVisa from "/public/images/payment-visa.svg";

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

export const Footer = () => {
  const t = useTranslations("footer");
  const tGeneral = useTranslations("general");

  const companyMenu = [
    { text: t("about_us"), link: "#" },
    { text: t("services"), link: "#" },
    { text: t("car_fleet"), link: "#" },
    { text: t("chauffeurs"), link: "#" },
    { text: t("careers"), link: "#" },
  ];

  const informationMenu = [
    { text: t("contact"), link: "#" },
    { text: t("faq"), link: "#" },
    { text: t("booking"), link: "#" },
    { text: t("terms_and_conditions"), link: "#" },
    { text: t("privacy_policy"), link: "#" },
  ];

  return (
    <>
      <footer className="bg-app-gray">
        <div className="px-default mx-auto grid max-w-section gap-16 py-20 text-center text-white md:grid-cols-2 md:text-left lg:grid-cols-4 lg:gap-4">
          <div className="flex flex-col items-center justify-center md:block">
            <Heading>{t("contact")}</Heading>

            <div className="space-y-2 text-left">
              <div className="flex items-start gap-3">
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_66_67)">
                    <path
                      d="M6.74062 15.6C8.34375 13.5938 12 8.73125 12 6C12 2.6875 9.3125 0 6 0C2.6875 0 0 2.6875 0 6C0 8.73125 3.65625 13.5938 5.25938 15.6C5.64375 16.0781 6.35625 16.0781 6.74062 15.6ZM6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_66_67">
                      <rect width="12" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-sm leading-normal">
                  Nordic Xpress Limousine Service
                  <br />
                  Søvangsvej 1
                  <br />
                  DK-2650 Hvidovre
                  <br />
                  VAT DK: 43823981
                </span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_66_71)">
                    <path
                      d="M10.8469 0.768966C11.0875 0.187716 11.7219 -0.121659 12.3281 0.0439663L15.0781 0.793966C15.6219 0.943966 16 1.43772 16 2.00022C16 9.73147 9.73125 16.0002 2 16.0002C1.4375 16.0002 0.943749 15.6221 0.79375 15.0783L0.0437498 12.3283C-0.121876 11.7221 0.1875 11.0877 0.76875 10.8471L3.76875 9.59709C4.27812 9.38459 4.86875 9.53147 5.21562 9.95959L6.47812 11.5002C8.67812 10.4596 10.4594 8.67834 11.5 6.47834L9.95937 5.21897C9.53125 4.86897 9.38438 4.28147 9.59688 3.77209L10.8469 0.772091V0.768966Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_66_71">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="matrix(-1 0 0 1 16 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <Link href="tel:+4570603011">
                  <span className="text-sm leading-normal">
                    {tGeneral("customer_service")}: +45 70603011
                  </span>
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 1.5C1.725 1.5 1.5 1.725 1.5 2V2.69063L6.89062 7.11563C7.5375 7.64688 8.46562 7.64688 9.1125 7.11563L14.5 2.69063V2C14.5 1.725 14.275 1.5 14 1.5H2ZM1.5 4.63125V10C1.5 10.275 1.725 10.5 2 10.5H14C14.275 10.5 14.5 10.275 14.5 10V4.63125L10.0625 8.275C8.8625 9.25937 7.13438 9.25937 5.9375 8.275L1.5 4.63125ZM0 2C0 0.896875 0.896875 0 2 0H14C15.1031 0 16 0.896875 16 2V10C16 11.1031 15.1031 12 14 12H2C0.896875 12 0 11.1031 0 10V2Z"
                    fill="white"
                  />
                </svg>

                <Link href="mailto:Contact@nordiexpresslimousine.dk">
                  <span className="text-sm leading-normal">
                    Contact@nordiexpresslimousine.dk
                  </span>
                </Link>
              </div>
            </div>

            <ul className="flex items-center gap-2 mt-4">
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
          </div>

          <div>
            <Heading>{t("company")}</Heading>

            <ul className="space-y-2">
              {companyMenu.map((menu) => (
                <li key={menu.text}>
                  <Link
                    className="transition-all hover:text-app-orange"
                    href={menu.link}
                  >
                    {menu.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Heading>{t("information")}</Heading>

            <ul className="space-y-2">
              {informationMenu.map((menu) => (
                <li key={menu.text}>
                  <Link
                    className="transition-all hover:text-app-orange"
                    href={menu.link}
                  >
                    {menu.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <Heading>{t("accepted_payment")}</Heading>

              <div className="flex flex-wrap justify-center gap-[3px] md:justify-start">
                <Image
                  src={imgPaymentVisa}
                  alt="logo of Visa"
                  className="w-12 rounded-md"
                />
                <Image
                  src={imgPaymentMastercard}
                  alt="logo of Mastercard"
                  className="w-12 rounded-md"
                />

                <Image
                  src={imgPaymentMobilePay}
                  alt="logo of Mobile Pay"
                  className="w-12 rounded-md"
                />
                <Image
                  src={imgPaymentApplePay}
                  alt="logo of Apple Pay"
                  className="w-12 rounded-md"
                />
                <Image
                  src={imgPaymentGooglePay}
                  alt="logo of Google Pay"
                  className="w-12 rounded-md"
                />
              </div>
            </div>

            <div>
              <Heading>{t("subscribe")}</Heading>

              <div className="mx-auto flex max-w-[350px] gap-2 md:mx-0">
                <input
                  className="grow rounded-full bg-white p-4 text-black"
                  placeholder={t("your_email")}
                ></input>
                <button
                  type="submit"
                  aria-label="submit"
                  className="flex aspect-square size-14 h-full shrink-0 items-center justify-center rounded-full bg-app-orange"
                >
                  <svg
                    className="w-8"
                    width="10"
                    height="15"
                    viewBox="0 0 10 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.91211 7.06592V6.07764C6.91211 5.62646 7.4707 5.39014 7.79297 5.7124L9.64062 7.58154C9.85547 7.7749 9.85547 8.09717 9.64062 8.29053L7.79297 10.1597C7.4707 10.4819 6.91211 10.2456 6.91211 9.79443V8.78467H0.445312C0.294922 8.78467 0.1875 8.67725 0.1875 8.52686V7.32373C0.1875 7.19482 0.294922 7.06592 0.445312 7.06592H6.91211Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-black py-6">
        <div className="px-default mx-auto flex max-w-section flex-col items-center justify-between gap-4 lg:flex-row">
          <span className="text-center text-app-gray lg:text-left">
            © 2024 Copyright Nordic Xpress Limousine Service. All Rights
            Reserved
          </span>

          <div className="flex items-center gap-2">
            <svg
              className="h-6 lg:h-8"
              viewBox="0 0 155 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M139.5 0.5L142.98 11.2102H154.241L145.131 17.8295L148.611 28.5398L139.5 21.9205L130.389 28.5398L133.869 17.8295L124.759 11.2102H136.02L139.5 0.5Z"
                fill="#5B5B5B"
              />
              <path
                d="M15.5 0.5L18.98 11.2102H30.2414L21.1307 17.8295L24.6107 28.5398L15.5 21.9205L6.38933 28.5398L9.8693 17.8295L0.758624 11.2102H12.02L15.5 0.5Z"
                fill="#F56504"
              />
              <path
                d="M46.5 0.5L49.98 11.2102H61.2414L52.1307 17.8295L55.6107 28.5398L46.5 21.9205L37.3893 28.5398L40.8693 17.8295L31.7586 11.2102H43.02L46.5 0.5Z"
                fill="#F56504"
              />
              <path
                d="M78 0.5L81.5922 11.2102H93.2169L83.8123 17.8295L87.4046 28.5398L78 21.9205L68.5954 28.5398L72.1877 17.8295L62.7831 11.2102H74.4078L78 0.5Z"
                fill="#F56504"
              />
              <path
                d="M109.5 0.5L112.98 11.2102H124.241L115.131 17.8295L118.611 28.5398L109.5 21.9205L100.389 28.5398L103.869 17.8295L94.7586 11.2102H106.02L109.5 0.5Z"
                fill="#F56504"
              />
              <path
                d="M139 0.5V11.195V20.9979V21.8901L130.348 28.5L133.652 17.805L125 11.195H135.695L139 0.5Z"
                fill="#F56504"
              />
              <path
                d="M139 0.5V11.195V20.9979V21.8901L130.348 28.5L133.652 17.805L125 11.195H135.695L139 0.5Z"
                fill="#F56504"
              />
            </svg>

            <span className="text-app-orange">
              4.8 stars based on 4279 reviews{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const Heading = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-5 text-lg leading-6">{children}</p>
);
