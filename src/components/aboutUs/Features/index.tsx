import { useTranslations } from "next-intl";
import { Feature } from "@/components/aboutUs/Features/feature";
import { MotionHover } from "@/components/motion/motionHover";
import { MotionShuffle } from "@/components/motion/motionShuffle";
import { cn } from "@/libs/utils";
import { heading } from "@/components/ui/classes";

export const Features = () => {
  const t = useTranslations("about-us.features");

  return (
    <section className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] text-sm w-4/5 text-left items-center xs:text-base gap-[50px] mx-auto my-[50px] lg:gap-20 lg:mt-[25px] lg:mb-[100px]">
      <div className="flex flex-col gap-10">
        <MotionHover verticalBox={"-14px"} rotateY={-5} skewY={-0.5}>
          <Feature
            title={t("High quality")}
            description={t("Our trailers")}
            firstTag={t("Safety")}
            secondTag={t("Functionality")}
            src={"/assets/about-us/high-quality.webp"}
          />
        </MotionHover>
        <MotionHover verticalBox={"-14px"} rotateY={-5} skewY={-0.5}>
          <Feature
            title={t("Innovative solutions")}
            description={t("We introduce")}
            firstTag={t("Technology")}
            secondTag={t("Innovation")}
            src={"/assets/about-us/innovative.webp"}
          />
        </MotionHover>
        <MotionHover verticalBox={"-14px"} rotateY={-5} skewY={-0.5}>
          <Feature
            title={t("Customized")}
            description={t("We offer")}
            firstTag={t("Versatility")}
            secondTag={t("Customization")}
            src={"/assets/about-us/customized.webp"}
          />
        </MotionHover>
      </div>
      <MotionShuffle x={"50vw"}>
        <h2 className={cn(heading, "leading-normal mb-3")}>
          {t("Why choose")}
        </h2>
        <p>{t("As a new producer")}</p>
      </MotionShuffle>
    </section>
  );
};
