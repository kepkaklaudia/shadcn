import { useTranslations } from "next-intl";
import Image from "next/image";
import { Stroke } from "@/components/common/stroke";
import { MotionSpring } from "@/components/downloads/Intro/motion";

export const Intro = () => {
  const t = useTranslations("downloads.intro");

  return (
    <MotionSpring>
      <div className="grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr]  gap-20 lg:gap-2.5 mx-auto  mt-0 mb-20 lg:mt-20 lg:mb-[150px]">
        <Image
          className=" w-4/5 max-w-[650px] max-h-[430px] h-auto justify-self-center aspect-[1.5/1] lg:w-full"
          src={"/assets/downloads/cards.webp"}
          alt=""
          width={800}
          height={526}
        />
        <div className="flex flex-col w-4/5 text-left mx-auto my-0 lg:w-11/12 lg:pr-[100px]">
          <Stroke
            additionalClass="hidden lg:flex translate-x-[-15px] mt-0 mb-[50px] mx-auto"
            src={"/assets/strokes/strokeRight.svg"}
          />
          <p className="mb-4">{t("Please use")}</p>
          <p className="mb-4">{t("All the images")}</p>
        </div>{" "}
      </div>
    </MotionSpring>
  );
};
