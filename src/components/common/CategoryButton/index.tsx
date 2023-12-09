"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import "./styles.css";
import { cn } from "@/libs/utils";
import { CategoryButtonProps } from "@/libs/types";

export const CategoryButton = ({
  category,
  titleKey,
  activeCategory,
  additionalLinkClass,
  additionalBackgroundClass,
  boxShadow,
}: CategoryButtonProps) => {
  const locale = useLocale();
  const t = useTranslations("common.categories");

  const whileHover = {
    scale: 1.01,
    boxShadow: boxShadow,

    transition: {
      type: "spring",
      damping: 50,
      stiffness: 300,
    },
  };

  return (
    <Link
      href={`/${locale}/products/${category}`}
      className={cn(
        "text-white no-underline rounded-2xl p-0 relative flex items-center justify-center flex-col  tracking-wider",
        additionalLinkClass
      )}
    >
      <motion.div
        whileHover={activeCategory ? "" : whileHover}
        className={cn(
          "bg-no-repeat bg-cover rounded-2xl flex items-end w-full justify-center",
          additionalBackgroundClass,
         (activeCategory
            ? `${category}__active`
            : `${category}__background`)
        )}
      >
        <div className="lg:text-base lg:h-[70px] sm:text-sm text-xs h-[60px] w-full m-0 uppercase font-bold pb-1 flex items-center justify-center">
          <p className="m-0 px-2.5 py-0 text-center">{t(titleKey)}</p>
        </div>
      </motion.div>
    </Link>
  );
};
