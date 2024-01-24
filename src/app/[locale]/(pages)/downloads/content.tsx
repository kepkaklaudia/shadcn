"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Intro } from "@/components/downloads/Intro";
import { StrokedTitle } from "@/components/downloads/strokedTitle";
import { MotionHover } from "@/components/downloads/motion";

export const Content = () => {
  const t = useTranslations("downloads");
  const paragraph = "font-medium text-xs xs:text-sm md:text-base";

  const image = "w-full h-full max-w-[100px] max-h-[100px]";
  const card =
    "text-xs flex flex-col max-w-[200px] h-full gap-5 no-underline text-black md:text-sm lg:text-base";

  const container =
    "flex justify-evenly w-[70%] gap-5 justify-items-center mx-auto my-20 md:my-[100px]";
  ("flex justify-evenly w-[70%] gap-5 justify-items-center mx-auto my-20 md:my-[100px]");
  ("flex justify-evenly w-[70%] gap-5 justify-items-center mx-auto my-20 md:my-[100px]");

  return (
    <>
      <Intro />
      <StrokedTitle title={"Logo"} />
      <div className={container}>
        <a
          title="Open svg logo"
          target="_blank"
          rel="noopener noreferrer"
          href={`/assets/downloads/logo-svg.svg`}
          className={card}
        >
          <MotionHover>
            <Image
              className={image}
              width={100}
              height={100}
              alt=""
              src={"/assets/downloads/svg.svg"}
            />
          </MotionHover>
          <p className={paragraph}>{t("Logo")}</p>
        </a>
        <a
          title="Open sign book"
          target="_blank"
          rel="noopener noreferrer"
          href={`/assets/downloads/logo-sign-book.pdf`}
          className={card}
        >
          <MotionHover>
            <Image
              className={image}
              width={100}
              height={100}
              alt=""
              src={"/assets/downloads/pdf.svg"}
            />
          </MotionHover>
          <p className={paragraph}>{t("Sign book")}</p>
        </a>
      </div>

      <StrokedTitle title={t("Instructions")} />
      <div className={container}>
        <a
          title="Open sign book"
          target="_blank"
          rel="noopener noreferrer"
          href={`/assets/downloads/instruction-pl.pdf`}
          className={card}
        >
          <MotionHover>
            <Image
              className={image}
              width={100}
              height={100}
              alt=""
              src={"/assets/downloads/pdf.svg"}
            />
          </MotionHover>
          <p className={paragraph}>{t("Instruction PL")}</p>
        </a>
        <a
          title="Open sign book"
          target="_blank"
          rel="noopener noreferrer"
          href={`/assets/downloads/instruction-en.pdf`}
          className={card}
        >
          <MotionHover>
            <Image
              className={image}
              width={100}
              height={100}
              alt=""
              src={"/assets/downloads/pdf.svg"}
            />
          </MotionHover>
          <p className={paragraph}>{t("Instruction EN")}</p>
        </a>
      </div>
      <div className={container}>
        <a
          title="Open sign book"
          target="_blank"
          rel="noopener noreferrer"
          href={`/assets/downloads/instruction-fr.pdf`}
          className={card}
        >
          <MotionHover>
            <Image
              className={image}
              width={100}
              height={100}
              alt=""
              src={"/assets/downloads/pdf.svg"}
            />
          </MotionHover>
          <p className={paragraph}>{t("Instruction FR")}</p>
        </a>
        <a
          title="Open sign book"
          target="_blank"
          rel="noopener noreferrer"
          href={`/assets/downloads/instruction-de.pdf`}
          className={card}
        >
          <MotionHover>
            <Image
              className={image}
              width={100}
              height={100}
              alt=""
              src={"/assets/downloads/pdf.svg"}
            />
          </MotionHover>
          <p className={paragraph}>{t("Instruction DE")}</p>
        </a>
      </div>
    </>
  );
};
