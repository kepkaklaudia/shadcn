import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { TrailerDetaiProps } from "@/libs/types";
import { Border } from "@/components/common/border";
import { Button } from "@/components/ui/Button";
import { Details } from "@/components/products/TrailerDetail/Details";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Header } from "@/components/products/TrailerDetail/header";

export const TrailerDetailList = ({ products }: TrailerDetaiProps) => {
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

  const handleImageLoad = (index: number) => {
    setIsImageError((prevErrors) => {
      const updatedErrors = [...prevErrors];
      updatedErrors[index] = false;
      return updatedErrors;
    });
  };

  useEffect(() => {
    setIsImageError(Array(products.length).fill(false));
  }, [versions]);

  const image =
    "w-[calc(100%-20px)] h-auto aspect-[1.8/1] max-w-[550px] border bg-white max-h-[300px] flex items-center justify-center p-2.5 rounded-md border-solid border-alto";
  return (
    <div className="flex flex-col w-4/5 items-start mt-[50px] mb-20 sm:mb-[100px]">
      {products.length === 0 ? (
        <p className="justify-self-start">Brak produktów</p>
      ) : (
        products.map((product, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col w-full mx-auto my-5">
              <Header
                path={product.path}
                name={product.name}
                category={t(product.category)}
              />
              <div className="grid-cols-[1fr] grid gap-[25px] xs:grid-cols-[0.8fr] md:grid-cols-[0.8fr_1fr] lg:grid-cols-[1fr_0.8fr] place-content-center xs:gap-[50px] xl:gap-[100px]">
                <Link href={`/${locale}/product/${product.pathID}`}>
                  {isImageError[index] ? (
                    <div className={image}>
                      <Image
                        className="w-6/12 h-auto aspect-[1.8/1]"
                        width={960}
                        height={540}
                        alt="no-trailer"
                        src={`/assets/noTrailer.svg`}
                      />
                    </div>
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
                      onLoad={() => handleImageLoad(index)}
                    />
                  )}
                </Link>
                <div className="text-sm flex flex-col justify-between gap-[30px] lg:text-base">
                  <Details product={product} />
                  <div className=" bg-shaft text-white mx-0 my-[15px] px-0 py-0.5">
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
                className="self-center md:self-end grid-cols-[1fr] gap-[25px] w-[180px] no-underline mx-0 my-[25px]"
                asChild
              >
                <Link href={`/${locale}/product/${product.pathID}`}>
                  {t("More information")}
                </Link>
              </Button>
            </div>
            <Border additionalClass="w-[120%] self-center" />
          </React.Fragment>
        ))
      )}
    </div>
  );
};
