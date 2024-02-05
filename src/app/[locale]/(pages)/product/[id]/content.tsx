"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Loader } from "@/components/common/Loader";
import { Header } from "@/components/product/header";
import { Stroke } from "@/components/common/stroke";
import { VariantButtons } from "@/components/product/VariantButtons";
import { ProductCarousel } from "@/components/product/productCarousel";
import { Tags } from "@/components/product/Tags";
import { Properties } from "@/components/product/properties";
import { ProductDetails } from "@/components/product/ProductDetails";
import useProductData from "@/app/[locale]/(pages)/product/[id]/useProductData";

export const Content = ({ id }: { id: string }) => {
  const locale = useLocale();

  const t = useTranslations("product");

  const [variant, setVariant] = useState("galvanized");

  if (typeof window !== "undefined") {
    localStorage.setItem("scrollState", "auto");
  }

  const { data, isLoading, error, isPaused } = useProductData({
    locale,
    id,
  });

  if (isPaused) {
    return (
      <p>
        {t("Data couldn't be downloaded")}
        <br />
        {t("Check your internet connection")}
      </p>
    );
  }

  if (isLoading && !data) {
    return <Loader />;
  }

  if (error) {
    return (
      <p>
        {t("Data couldn't be downloaded")}
        <br />
        {t("Please try again later")}
      </p>
    );
  }

  if (!data) {
    return <p>{t("Data is not available")}</p>;
  }

  const {
    specification,
    optional,
    data: productData,
    images,
    standard,
    drawings,
  } = data;

  return (
    <>
      <Header
        path={productData.path}
        name={productData.name}
        category={productData.path as keyof Messages["products"]["heading"]}
      />
      <Stroke
        src={`/assets/strokes/${productData.path}Stroke.svg`}
        additionalClass="mx-auto xs:my-[50px] my-[25px]"
      />
      <div className="flex flex-wrap xl:flex-nowrap mx-0 my-[25px] xl:mb-[50px] w-full xl:w-auto xl:flex-row">
        <div className="flex flex-row w-full xl:w-auto">
          <VariantButtons
            path={productData.path}
            images={images}
            setVariant={setVariant}
          />
          <div className="w-4/5 gap-[30px] overflow-hidden flex flex-col lg:w-auto xl:w-[90%]">
            <ProductCarousel
              family={productData.family}
              variant={variant}
              url={images}
            />
            <Tags
              path={productData.path}
              tags={productData.tags}
              locale={locale}
            />
          </div>
        </div>
        <Properties standard={standard} />
      </div>
      <ProductDetails
        specification={specification}
        optional={optional}
        pathID={productData.pathID}
        pdfGalvanized={productData.pdfGalvanized}
        pdfPowdered={productData.pdfPowdered}
        drawings={drawings}
      />
    </>
  );
};
