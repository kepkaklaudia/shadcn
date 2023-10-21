import { StrokeProps } from "@/libs/types";
import { cn } from "@/libs/utils";
import Image from "next/image";

export const Stroke = ({ additionalClass, src }: StrokeProps) => (
  <Image
    className={cn(
      "lg:my-20 sm:my-[50px] xs:my-5 w-full h-auto my-0 mx-auto",
      additionalClass
    )}
    alt="stroke"
    width={1920}
    height={85}
    src={src}
  />
);
