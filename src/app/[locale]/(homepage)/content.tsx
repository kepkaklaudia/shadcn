"use client";

import { useTranslations } from "next-intl";
import { Border } from "@/components/common/border";
import { Title } from "@/components/common/title";
import { AboutProduction } from "@/components/homepage/AboutProduction";
import { AboutUs } from "@/components/homepage/AboutUs";
import { Carousel } from "@/components/homepage/Carousel";
import { CategoriesCarousel } from "@/components/homepage/CategoriesCarousel/categoriesCarousel";
import { CreateTrailers } from "@/components/homepage/CreateTrailers";
import { carouselImages } from "@/app/[locale]/(homepage)/backgroundImages";

export const Content = () => {
  const t = useTranslations("homepage");

  return (
    <>
      <Title
        heading={t("Categories")}
        subheading={t("Choose your ideal trailer")}
      />
      <CategoriesCarousel />
      <CreateTrailers />
      <AboutUs />
      <AboutProduction />
      <section className="w-4/5 mt-[60px] mb-0 mx-auto">
        <Carousel
          className="object-cover max-h-[500px] aspect-[3/1]"
          images={carouselImages}
        />
      </section>
      <Border additionalClass="sm:mt-[120px] mt-[100px]" />
    </>
  );
};
