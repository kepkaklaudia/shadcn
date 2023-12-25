import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TrailerDetailProps } from "@/libs/types";
import { Header } from "@/components/products/TrailerDetail/header";
import { Details } from "@/components/products/TrailerDetail/Details";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const TrailerDetailGrid = ({ products }: TrailerDetailProps) => {
  const locale = useLocale();
  const t = useTranslations("products.trailerDetail");

  const [versions, setVersions] = useState(() =>
    products.map(() => t("Galvanized"))
  );

  const [isImageError, setIsImageError] = useState<boolean[]>([]);

  const updateVersion = (index: number, newVersion: string) => {
    setVersions((prevVersions) => {
      const updatedVersions = [...prevVersions];
      updatedVersions[index] = newVersion;
      return updatedVersions;
    });
  };

  const handleImageError = (index: number) => {
    setIsImageError((prevErrors) => {
      const updatedErrors = [...prevErrors];
      updatedErrors[index] = true;
      return updatedErrors;
    });
  };
  const image =
    "w-[calc(100%-20px)] h-auto max-w-[550px] aspect-[1.8/1] border bg-white max-h-[300px] p-2.5 rounded-md border-solid border-alto";
  return (
    <div className="grid  grid-cols-[1fr] w-4/5 items-start mt-[50px] mb-20 sm:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] sm:mb-[100px]">
      {products.length === 0 ? (
        <p className="justify-self-start">Brak produktów</p>
      ) : (
        products.map((product, index) => (
          <React.Fragment key={index}>
            <div
              className="flex flex-col w-[calc(100%-40px)] lg:w-[calc(100%-60px)] xl:w-[calc(100%-80px)] 
            h-[calc(100%-40px)] lg:h-[calc(100%-60px)] xl:h-[calc(100%-80px)] border p-5 border-solid border-alto lg:p-[30px] xl:p-10"
            >
              <Header
                isGrid
                path={product.path}
                name={product.name}
                category={t(product.category)}
              />
              <div className="grid grid-cols-[1fr] gap-5">
                <Link href={`/${locale}/product/${product.pathID}`}>
                  {isImageError[index] ? (
                    <Image
                      className={image}
                      width={960}
                      height={540}
                      alt="no-trailer"
                      src={`/assets/noTrailer.svg`}
                    />
                  ) : (
                    <Image
                      className={image}
                      width={960}
                      height={540}
                      alt={`${product.family}`}
                      src={`/assets/trailers/list/images/${product.family}/${
                        versions[index] === t("Galvanized")
                          ? "galvanized"
                          : "powdered"
                      }.webp`}
                      onError={() => handleImageError(index)}
                    />
                  )}
                </Link>

                <div className="flex flex-col justify-between gap-[30px] text-sm lg:text-base">
                  <Details product={product} />
                  <div className="bg-shaft text-white mx-0 my-[15px] px-0 py-0.5">
                    {t("Available versions")}
                  </div>

                  <RadioGroup
                    className="flex flex-wrap gap-5 justify-center"
                    defaultValue={t("Galvanized")}
                  >
                    <div className="text-left font-medium flex flex-nowrap gap-[5px] items-center">
                      <RadioGroupItem
                        onClick={() => updateVersion(index, t("Galvanized"))}
                        checked={versions[index] === t("Galvanized")}
                        value={t("Galvanized")}
                        id={t("Galvanized")}
                      />
                      <label htmlFor={t("Galvanized")}>{t("Galvanized")}</label>
                    </div>
                    <div className="text-left font-medium flex flex-nowrap gap-[5px] items-center">
                      <RadioGroupItem
                        onClick={() => updateVersion(index, t("Powder-coated"))}
                        checked={versions[index] === t("Powder-coated")}
                        value={t("Powder-coated")}
                        id={t("Powder-coated")}
                      />
                      <label htmlFor={t("Powder-coated")}>
                        {t("Powder-coated")}
                      </label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <Button
                className="self-center grid-cols-[1fr] gap-[25px] w-[180px] no-underline mx-0 my-[25px]"
                asChild
              >
                <Link href={`/${locale}/product/${product.pathID}`}>
                  {t("More information")}
                </Link>
              </Button>
            </div>
          </React.Fragment>
        ))
      )}
    </div>
  );
};
