import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { categories } from "@/components/common/CategoryButton/categoriesData";
import { CategoryButton } from "@/components/common/CategoryButton";
import { Button } from "@/components/ui/Button/";

const CategoriesButtons = ({
  category: pageCategory,
}: {
  category: string;
}) => {
  const t = useTranslations("products.categoriesButtons");

  return (
    <>
      <div className="grid-cols-[repeat(2,auto)] gap-3.5 py-12 mt-[-60px] md:grid-cols-[repeat(4,auto)] md:mt-[-120px] lg:mt-0 md:py-[100px] xs:gap-[30px]  lg:mt-[-110px] mx-auto w-full bg-alabaster relative grid grid-cols-md:[repeat(4,auto)] justify-center overflow-hidden mx-auto my-0 buttons before:bg-[url('/assets/products/categoriesBackground.webp')] before:content-[''] before:bg-cover before:bg-center before:absolute before:w-[calc(100%_+_20px)] before:h-full before:blur-[5px] before:-left-2.5 before:top-0 before:bg-transparent before:bg-blend-color before:shadow-products">
        {categories.map((category, index) => (
          <CategoryButton
            boxShadow="12px 12px 10px rgba(0, 0, 0, 0.4)"
            key={index}
            category={category.path}
            titleKey={category.titleKey}
            activeCategory={pageCategory === category.path}
            additionalBackgroundClass="h-40 xs:h-[180px] sm:h-[200px] lg:h-60"
            additionalLinkClass="w-[120px] xs:w-[135px] sm:w-[150px] lg:w-[180px]"
          />
        ))}
      </div>
      <Button asChild>
        <Link href="/products/all">{t("Show all")}</Link>
      </Button>
    </>
  );
};

export default CategoriesButtons;
