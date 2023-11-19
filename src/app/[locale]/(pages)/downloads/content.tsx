"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Intro } from "@/components/downloads/Intro";
import { StrokedTitle } from "@/components/downloads/strokedTitle";
import { MotionHover } from "@/components/downloads/motion";

export const Content = () => {
  const t = useTranslations("downloads");

  return (
    <>
      <Intro />
      <StrokedTitle title={"Logo"} />
      <div className="flex justify-evenly w-[70%] gap-5 justify-items-center mx-auto my-20 md:my-[100px]">
        <a
          title="Open svg logo"
          target="_blank"
          rel="noopener noreferrer"
          href={`/assets/downloads/logo-svg.svg`}
          className="text-xs flex flex-col max-w-[200px] h-full gap-5 no-underline text-black md:text-sm lg:text-base"
        >
          <MotionHover>
            <Image
              className="w-full h-full max-w-[100px] max-h-[100px]"
              width={100}
              height={100}
              alt=""
              src={"/assets/downloads/svg.svg"}
            />
          </MotionHover>
          <p className="font-medium text-xs xs:text-sm md:text-base">
            {t("Logo")}
          </p>
        </a>
        <a
          title="Open sign book"
          target="_blank"
          rel="noopener noreferrer"
          href={`/assets/downloads/logo-sign-book.pdf`}
          className="text-xs flex flex-col max-w-[200px] h-full gap-5 no-underline text-black md:text-sm lg:text-base"
        >
          <MotionHover>
            <Image
              className="w-full h-full max-w-[100px] max-h-[100px]"
              width={100}
              height={100}
              alt=""
              src={"/assets/downloads/pdf.svg"}
            />
          </MotionHover>
          <p className="font-medium text-xs xs:text-sm md:text-base">
            {t("Sign book")}
          </p>
        </a>
      </div>
    </>
  );
};
