"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import { nanoid } from "nanoid";
import { CategoryButton } from "@/components/common/CategoryButton";
import { categories } from "@/components/common/CategoryButton/categoriesData";

export const CategoriesCarousel = () => {
  const settings = {
    effect: "coverflow",
    grabCursor: true,
    spaceBetween: 5,
    slidesPerView: 4,
    centeredSlides: true,
    speed: 2500,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    loop: true,
    coverflowEffect: {
      rotate: 25,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    breakpoints: {
      1800: {
        slidesPerView: 3.5,
        spaceBetween: 270,
      },
      1700: {
        slidesPerView: 3.5,
        spaceBetween: 220,
      },
      1600: {
        slidesPerView: 3.5,
        spaceBetween: 200,
      },
      1500: {
        slidesPerView: 3.5,
        spaceBetween: 170,
      },
      1400: {
        slidesPerView: 3.5,
        spaceBetween: 150,
      },
      1300: {
        slidesPerView: 3.5,
        spaceBetween: 120,
      },
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 100,
      },
      1100: {
        slidesPerView: 3.5,
        spaceBetween: 85,
      },
      992: {
        slidesPerView: 3.5,
        spaceBetween: 60,
      },
      850: {
        slidesPerView: 3.5,
        spaceBetween: 45,
      },
      767: {
        slidesPerView: 3.5,
        spaceBetween: 35,
      },
      700: {
        slidesPerView: 3.5,
        spaceBetween: 45,
      },
      650: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      620: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      420: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      340: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
    modules: [EffectCoverflow, Keyboard, Autoplay],
    className: "swiper",
  };

  return (
    <>
      <div className="md:mx-auto md:my-[50px] w-full h-auto max-w-[1920px] mt-[50px] mb-0 mx-auto">
        <Swiper {...settings}>
          {[...Array(3)].map((_, index) => (
            <React.Fragment key={nanoid()}>
              {categories.map((category, categoryIndex) => (
                <SwiperSlide key={nanoid()}>
                  <CategoryButton
                    boxShadow="12px 12px 10px rgba(0, 0, 0, 0.2)"
                    titleKey={category.titleKey}
                    category={category.path}
                    additionalBackgroundClass="2xl:h-[400px] xl:h-[350px] lg:h-[300px] md:h-[260px] sm:h-[220px] xs:h-[200px] h-[200px]"
                    additionalLinkClass="w-auto xs:w-auto sm:w-auto lg:w-auto"
                  />
                </SwiperSlide>
              ))}
            </React.Fragment>
          ))}
        </Swiper>
      </div>
    </>
  );
};
