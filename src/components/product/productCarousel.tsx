"use client";

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { ProductCarouselProps } from "@/libs/types";

export const ProductCarousel = ({
  family,
  variant,
  url,
}: ProductCarouselProps) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    if (slider1.current && slider2.current) {
      setNav1(slider1.current);
      setNav2(slider2.current);
    }
  }, []);

  const settings = {
    arrows: true,
    focusOnSelect: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    asNavFor: nav1,
    ref: slider2,
    className: "productCarousel",
  };

  return (
    <>
      <div className="flex flex-col gap-2.5 w-[90%] h-full -ml-2.5">
        <div className="max-w-[717px] w-full h-auto">
          <Slider arrows={false} asNavFor={nav2} ref={slider1}>
            {url[variant].map((image, index) => (
              <div key={index}>
                <div className="max-w-[717px] h-full aspect-[1.8/1] mx-2.5">
                  <InnerImageZoom
                    className="w-full max-w-[717px] border bg-white h-full aspect-[1.8/1] rounded-md border-solid border-alto"
                    src={`/assets/trailers/details/images/${family}/${variant}/${image}.webp`}
                    zoomType="hover"
                    zoomPreload={true}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="max-w-[352px] xs:w-full h-auto w-4/5">
          <Slider {...settings}>
            {url[variant].map((image, index) => (
              <div key={index}>
                <div className="border bg-white h-full aspect-[1.8/1] mx-2.5 rounded-md border-solid border-alto">
                  <Image
                    className="w-full border bg-white h-full aspect-[1.8/1] rounded-md border-solid border-alto"
                    src={`/assets/trailers/details/images/${family}/${variant}/${image}.webp`}
                    width={174}
                    height={92}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>{" "}
      </div>
    </>
  );
};
