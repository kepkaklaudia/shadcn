"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const Content = () => {
  const t = useTranslations("notFound");
  const locale = useLocale();

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 404, { duration: 1 });

    return animation.stop;
  }, [count]);

  return (
    <>
      <div>
        <motion.h1 className="font-semibold text-8xl">{rounded}</motion.h1>
      </div>
      <h2 className="mt-[50px] font-medium text-2xl lg:text-3xl mb-2">
        {t("Page not found")}
      </h2>
      <Button className="mt-[30px] w-fit font-normal" asChild>
        <Link href={`/${locale}/`}>{t("Back to main page")}</Link>
      </Button>
    </>
  );
};
