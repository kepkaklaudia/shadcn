"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/libs/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import "./styles.css";
import { CarouselProps } from "@/libs/types";

export const Carousel = ({ images, className, priority }: CarouselProps) => {
  const settings = {
    slidesPerView: 1,
    centeredSlides: true,
    pagination: {
      clickable: true,
    },
    speed: 3000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    modules: [Keyboard, Autoplay, Pagination],
    className: "swiper",
  };

  return (
    <div className="w-full h-auto max-h-screen">
      <Swiper {...settings}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              key={index}
              className={cn(
                "w-[101%] h-auto max-h-screen aspect-[1.8/1]",
                className
              )}
              alt="background"
              width={1920}
              height={1080}
              src={image}
              priority={priority}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
