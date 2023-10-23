import { MotionOpacity } from "@/components/motion/motionOpacity";
import { TitleProps } from "@/libs/types";

export const Title = ({ heading, subheading }: TitleProps) => {
  return (
    <MotionOpacity>
      <h2 className="lg:text-4xl xs:text-3xl text-2xl font-bold mt-12">
        {heading}
      </h2>
      <h3 className="lg:text-lg text-sm mx-auto my-2.5 font-medium">
        {subheading}
      </h3>
    </MotionOpacity>
  );
};
