import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NextPageProps } from "@/lib/types";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const FAQ = ({ params: { locale } }: NextPageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("faq");

  return (
    <main>
      <section className="relative bg-gray-800 py-32">
        <div className="px-default mx-auto max-w-section">
          <h1 className="text-h1 relative z-10 font-bold text-white">
            {t("heading")}
          </h1>
        </div>

        <div className="absolute left-0 top-0 z-0 h-full w-full bg-[#00000080]"></div>
      </section>

      <section className="px-default mx-auto max-w-section py-16 lg:py-20">
        <p className="leading-relaxed">{t("description")}</p>

        <Accordion
          type="single"
          className="mx-auto mt-12 max-w-4xl space-y-4"
          collapsible
        >
          {Array.from({ length: 22 }).map((_x, index) => {
            const heading = t(`items.${index}.heading`);
            return (
              <AccordionItem key={heading} value={heading}>
                <AccordionTrigger className="text-left">
                  {heading}
                </AccordionTrigger>
                <AccordionContent>
                  {t(`items.${index}.description`)}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>
    </main>
  );
};

export default FAQ;
