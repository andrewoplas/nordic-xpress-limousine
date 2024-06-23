import { getAlternatesMetadata, getSiteName } from "@/lib/helper";
import { pathnames } from "@/lib/i18n/pathnames";
import { NextPageProps } from "@/lib/types";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";
import backgroundImg from "/public/images/calling.jpg";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "contact",
  });

  return {
    title: `${t("heading")} - ${getSiteName()}`,
    ...getAlternatesMetadata(pathnames["/contact"]),
  };
}

const Contact = ({ params: { locale } }: NextPageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("contact");

  return (
    <>
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
          {t.rich("content", {
            h2: (chunks) => (
              <h2 className="text-h3 mb-4 mt-10 font-bold first:!mt-0 lg:mt-14">
                {chunks}
              </h2>
            ),
            p: (chunks) => <p className="mb-4 leading-relaxed">{chunks}</p>,
          })}

          <div className="space-y-2 text-left">
            <div className="flex items-start gap-3">
              <svg
                className="mt-1"
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_66_67)">
                  <path
                    d="M6.74062 15.6C8.34375 13.5938 12 8.73125 12 6C12 2.6875 9.3125 0 6 0C2.6875 0 0 2.6875 0 6C0 8.73125 3.65625 13.5938 5.25938 15.6C5.64375 16.0781 6.35625 16.0781 6.74062 15.6ZM6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z"
                    fill="#fe6802"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_66_67">
                    <rect width="12" height="16" fill="#fe6802" />
                  </clipPath>
                </defs>
              </svg>
              <span className="leading-relaxed">
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
                    fill="#fe6802"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_66_71">
                    <rect
                      width="16"
                      height="16"
                      fill="#fe6802"
                      transform="matrix(-1 0 0 1 16 0)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <Link href="tel:+4570603011">
                <span className="leading-relaxed">+45 70603011</span>
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
                  fill="#fe6802"
                />
              </svg>

              <Link href="mailto:Contact@nordiexpresslimousine.dk">
                <span className="leading-relaxed">
                  Contact@nordiexpresslimousine.dk
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
