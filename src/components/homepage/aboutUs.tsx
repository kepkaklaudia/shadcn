import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { MotionOpacity } from "@/components/motion/motionOpacity";
import { MotionHover } from "@/components/motion/motionHover";
import { MotionShuffle } from "@/components/motion/motionShuffle";
import { Border } from "@/components/common/border";
import { cn } from "@/libs/utils";
import { heading, homepageWrapper } from "@/components/ui/classes";

export const AboutUs = () => {
  const t = useTranslations("homepage.aboutUs");
  const locale = useLocale();

  return (
    <MotionOpacity>
      <section className={homepageWrapper}>
        <MotionShuffle x={"-50vw"}>
          <h2
            className={cn(
              heading,
              "lg:mt-0 mini:text-[25px] xs:text-3xl mb-5 leading-7 xs:leading-10"
            )}
          >
            {t("About us")}
          </h2>
          <p className="text-sm lg:text-base">{t("About us description")}</p>
        </MotionShuffle>
        <MotionHover verticalBox={"14px"} rotateY={5} skewY={0.5}>
          <div className="sm:grid-cols-[auto_1fr] grid-cols-[1fr] order-1 border bg-white grid gap-4 p-4 rounded-[10px] border-solid border-accent">
            <Image
              alt="about"
              width={100}
              height={100}
              src={"/assets/homepage/about-us.webp"}
            />
            <div>
              <h3 className="text-xl">{t("Why us")}</h3>
              <p className="text-sm lg:text-base mb-5">
                {t("Why us description")}
              </p>
              <Button className="px-[15px] py-[5px] w-fit" asChild>
                <Link href={`/${locale}/about-us`}>{t("About us")}</Link>
              </Button>
            </div>
          </div>
        </MotionHover>
      </section>
      <Border additionalClass="mt-[60px]" />
    </MotionOpacity>
  );
};
