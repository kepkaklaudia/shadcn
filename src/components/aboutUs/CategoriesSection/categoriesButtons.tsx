"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { CategoryButton } from "@/components/common/CategoryButton";
import { categories } from "@/components/common/CategoryButton/categoriesData";

const CategoriesButtons = () => {
  const t = useTranslations("products.categoriesButtons");

  return (
    <div className="grid-cols-[repeat(2,auto)] gap-[15px] grid justify-center relative bg-alabaster w-full overflow-hidden mx-auto my-12 sm:my-16 lg:my-24 xs:gap-[30px] md:grid-cols-[repeat(4,auto)]  ">
      {categories.map((category, index) => (
        <CategoryButton
          boxShadow="12px 12px 10px rgba(0, 0, 0, 0.2)"
          key={index}
          titleKey={category.titleKey}
          category={category.path}
          additionalBackgroundClass="lg:h-[240px] sm:h-[200px] xs:h-[180px] h-[160px]"
          additionalLinkClass="w-[120px] xs:w-[135px] sm:w-[150px] lg:w-[180px]"
        />
      ))}
    </div>
  );
};

export default CategoriesButtons;
