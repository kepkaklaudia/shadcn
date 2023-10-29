import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { DetailsProps } from "@/libs/types";
import { Properties } from "@/components/products/TrailerDetail/Details/properties";

export const Details = ({ product }: DetailsProps) => {
  const t = useTranslations("products.trailerDetail");
  const locale = useLocale();

  const properties = [
    {
      title: t("GVW [kg]"),
      icon: `/assets/products/${locale === "pl" ? "dmc" : "gvw"}.svg`,
      value: product.gvw,
    },
    {
      title: t("HEIGHT [mm]"),
      icon: "/assets/products/height.svg",
      value: product.height,
    },
    {
      title: t("WIDTH [mm]"),
      icon: "/assets/products/width.svg",
      value: product.width,
    },
  ];

  const data = [
    {
      tag: t("Loading area"),
      value:
        product.widthArea && product.lengthArea
          ? `${product.widthArea}\u00A0x\u00A0${product.lengthArea}`
          : "-",
      unit: "mm",
    },
    { tag: t("Length"), value: product.length, unit: "mm" },
    { tag: t("Curb weight"), value: product.curbWeight, unit: "kg" },
  ];

  return (
    <div className="border bg-white text-left p-4 rounded-md border-solid border-alto">
      <h3 className="font-medium lg:text-xl text-lg">
        {t("Properties of")} {product.name}
      </h3>
      <div className="flex justify-between w-[90%] flex-wrap gap-2.5 mt-2.5 mb-5 mx-auto">
        {properties.map((property, index) => (
          <Properties
            key={index}
            title={property.title}
            icon={property.icon}
            value={property.value}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-2.5 justify-start mt-3.5">
        {data.map((item, index) => (
          <div
            className="bg-shaft text-white text-xs flex gap-[3px] px-[5px] py-px lg:text-sm"
            key={index}
          >
            {item.tag} {item.value ? item.value : "-"}
            <span className="text-[10px] mt-auto mb-px lg:mb-0.5 mb-px">
              [{item.unit}]
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
