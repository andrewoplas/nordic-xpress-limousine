import { Button } from "@/components/ui/button";
import { getSiteName } from "@/lib/helper";
import { NextPageProps } from "@/lib/types";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import backgroundImg from "/public/images/about-us-bg.webp";
import Head from "next/head";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "about",
  });

  return { title: `${t("heading")} - ${getSiteName()}` };
}

const AboutUs = ({ params: { locale } }: NextPageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("about");
  const tGeneral = useTranslations("general");

  return (
    <>
      <Head>
        <link
          rel="alternate"
          href="https://www.nordicxpresslimousine.dk/en/homepage/"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://www.nordicxpresslimousine.dk/da/forside/"
          hrefLang="da"
        />
        <link
          rel="alternate"
          href="https://www.nordicxpresslimousine.dk/"
          hrefLang="x-default"
        />
      </Head>
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
        </section>

        <section className="px-default mx-auto flex max-w-section flex-col items-center justify-center gap-3 pb-16 lg:pb-20">
          <h2 className="text-center text-xl">{t("cta_heading")}</h2>
          <Button>{tGeneral("contact_us")}</Button>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
