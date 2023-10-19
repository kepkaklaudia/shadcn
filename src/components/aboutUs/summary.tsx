import Image from "next/image";
import { useTranslations } from "next-intl";
import { MotionShuffle } from "@/components/motion/MotionShuffle";

export const Summary = () => {
  const t = useTranslations("about-us.summary");

  return (
    <section
      className="text-sm text-left gap-5 items-center w-4/5 grid mx-auto my-5 grid-cols-[1fr] md:grid-cols-[1fr_1fr] md:m-[50px]
    "
    >
      <MotionShuffle x={"-50vw"}>
        <Image
          className="w-full h-full"
          width={700}
          height={300}
          src="/assets/about-us/trailer3.svg"
          alt=""
        />
      </MotionShuffle>
      <MotionShuffle x={"50vw"}>
        <p>{t("After completing")}</p>
      </MotionShuffle>
    </section>
  );
};
