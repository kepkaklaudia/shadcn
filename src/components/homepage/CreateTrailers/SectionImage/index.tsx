"use client";

import Image from "next/image";
import { MotionSpring } from "@/components/motion/MotionSpring";

export const SectionImage = () => {
  return (
    <MotionSpring>
      <Image
        className="w-full h-auto aspect-[3/1] mx-0 my-[50px]"
        src={"/assets/homepage/trailerBottom.webp"}
        width={1920}
        height={640}
        alt="trailer-bottom"
      />
    </MotionSpring>
  );
};
