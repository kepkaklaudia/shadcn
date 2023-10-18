import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MotionHover } from "@/components/motion/motionHover";
import { MotionOpacity } from "@/components/motion/motionOpacity";
import { MotionShuffle } from "@/components/motion/motionShuffle";
import { cn } from "@/libs/utils";
import { heading, homepageWrapper } from "@/components/ui/classes";

export const AboutProduction = () => {
  const t = useTranslations("homepage.aboutProduction");
  const locale = useLocale();

  return (
    <MotionOpacity>
      <section className={cn("lg:mt-[120px] mb-0 ", homepageWrapper)}>
        <MotionHover verticalBox={"-14px"} rotateY={-5} skewY={-0.5}>
          <div className="sm:grid-cols-[auto_1fr] sm:order-none grid-cols-[1fr] order-1 border bg-white grid gap-4 p-4 rounded-[10px] border-solid border-alto">
            <Image
              alt="about"
              width={100}
              height={100}
              src={"/assets/homepage/about-production.webp"}
            />
            <div>
              <h3 className=" text-xl font-medium mb-2">
                {t("A wide selection")}
              </h3>
              <p className=" mb-5 text-sm lg:text-base">
                {t("A wide selection description")}
              </p>
              <Button className="w-fit px-[15px] py-[5px]" asChild>
                <Link href={`/${locale}/products/all`}>
                  {t("Our trailers")}
                </Link>
              </Button>
            </div>
          </div>
        </MotionHover>
        <MotionShuffle x={"50vw"}>
          <h2
            className={cn(
              heading,
              "lg:mt-0 mini:text-[25px] xs:text-3xl mb-5 leading-7 xs:leading-10"
            )}
          >
            {t("How we create")}
          </h2>
          <p className="text-sm lg:text-base">
            {t("How we create description")}
          </p>
        </MotionShuffle>
      </section>
    </MotionOpacity>
  );
};
