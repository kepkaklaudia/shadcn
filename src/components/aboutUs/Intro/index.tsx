import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  MotionAppear,
  MotionScrollOut,
} from "@/components/aboutUs/Intro/motion";
import { cn } from "@/libs/utils";
import { heading } from "@/components/ui/classes";

export const Intro = () => {
  const t = useTranslations("about-us.intro");

  return (
    <section className="text-sm xs:text-base gap-5 items-center max-w-[1920px] w-full grid grid-cols-[1fr] text-left mx-auto my-5 sm:-mt-5 sm:mb-[25px] lg:m-[50px]">
      <div className="flex flex-col justify-self-center gap-5 w-4/5 mx-auto ">
        <MotionAppear
          firstItem={
            <MotionScrollOut>
              <Image
                className="w-full text-center float-right lg:w-[500px] lg:h-auto xl:w-[600px] 2xl:w-auto"
                width={700}
                height={150}
                src="/assets/about-us/trailer.svg"
                alt=""
              />
            </MotionScrollOut>
          }
          secondItem={
            <h2 className={cn(heading, "mb-2")}>
              {t("Get to know Balhanger")}
            </h2>
          }
          thirdItem={<p className="w-full md:w-4/5 ">{t("As a producer")}</p>}
        />
      </div>
    </section>
  );
};
