import { useTranslations } from "next-intl";
import CategoriesButtons from "@/components/aboutUs/CategoriesSection/categoriesButtons";

export const CategoriesSection = () => {
  const t = useTranslations("about-us.categoriesSection");

  return (
    <section>
      <h2 className="text-[25px] font-bold mt-[50px] mini:text-3xl lg:text-[35px]">
        {t("Our trailer models")}
      </h2>
      <h3 className="text-xs max-w-[700px] w-4/5 mx-auto my-[25px] xs:text-base font-medium">
        {t("We offer a variety")}
      </h3>
      <CategoriesButtons />
    </section>
  );
};
