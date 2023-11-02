import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "@/libs/utils";
import { MotionShuffle } from "@/components/motion/MotionShuffle";
import { MotionScrollIn } from "@/components/aboutUs/ColoredSection/motion";
import { Stroke } from "@/components/common/stroke";

export const ColoredSection = () => {
  const t = useTranslations("about-us.coloredSection");
  const wrapper =
    "flex flex-col justify-center items-center text-left max-w-[900px] m-[30px] px-2.5 py-5 xs:px-5  xs: m-[50px] sm:px-[50px] sm:py-[30px]";

  return (
    <>
      <section className="flex flex-col items-center w-full bg-greyBackground shadow-coloredSection pt-5 pb-0 px-0 sm:pt-[50px]">
        <div className="grid-cols-[1fr] gap-10 w-full items-center grid xl:grid-cols-[1fr_1fr]">
          <MotionScrollIn>
            <Image
              className="w-[90%] justify-self-start h-auto self-center aspect-[3.8/1] xl:w-full"
              width={900}
              height={237}
              src="/assets/about-us/trailer1.webp"
              alt=""
            />
          </MotionScrollIn>
          <div className={cn(wrapper, "-order-1 xl:order-1")}>
            <MotionShuffle x={"50vw"}>
              <h2 className="text-[25px] font-bold self-start mini:text-3xl lg:text-[35px]">
                {t("Production process")}
              </h2>
              <p className="sm:text-base text-sm mx-auto my-2">
                {t("It starts with")}
              </p>
            </MotionShuffle>
          </div>
        </div>
        <div className="grid-cols-[1fr] gap-10 w-full items-center grid xl:grid-cols-[1fr_1fr]">
          <MotionShuffle x={"-50vw"}>
            <div className={wrapper}>
              <p className="sm:text-base text-sm mx-auto my-2">
                {t("An essential stage")}
              </p>
            </div>
          </MotionShuffle>
          <MotionShuffle x={"50vw"}>
            <Image
              className="w-full h-auto self-center aspect-[2.2/1]"
              width={700}
              height={300}
              src="/assets/about-us/trailer2.svg"
              alt=""
            />
          </MotionShuffle>
        </div>
        <div className="w-full h-auto relative mt-[50px] ">
          <Stroke
            additionalClass="absolute w-full h-auto  bg-alabaster bottom-0 my-0 xs:my-0 sm:my-0 lg:my-0"
            src={"/assets/strokes/black.svg"}
          />
        </div>
      </section>
    </>
  );
};
