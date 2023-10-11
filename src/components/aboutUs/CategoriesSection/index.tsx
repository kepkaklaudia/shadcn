import { useTranslations } from "next-intl";
import CategoriesButtons from "@/components/aboutUs/CategoriesSection/categoriesButtons";
import { heading } from "@/components/ui/classes";

export const CategoriesSection = () => {
  const t = useTranslations("about-us.categoriesSection");

  return (
    <section className="flex flex-col justify-center">
      <h2 className={heading}>{t("Our trailer models")}</h2>
      <h3 className="text-xs max-w-[700px] w-4/5 mx-auto my-[25px] xs:text-base font-medium">
        {t("We offer a variety")}
      </h3>
      <CategoriesButtons />
    </section>
  );
};
