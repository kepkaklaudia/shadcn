import { Stroke } from "@/components/common/stroke";
import { MotionOpacity } from "@/components/motion/MotionOpacity";
import { MotionShuffle } from "@/components/motion/MotionShuffle";

export const StrokedTitle = ({ title }: { title: string }) => {
  return (
    <>
      <div className="grid grid-cols-[1fr] items-center gap-2.5 sm:grid-cols-[repeat(3,1fr)]">
        <MotionShuffle x={-500}>
          <Stroke
            additionalClass="hidden sm:flex mx-auto my-[25px] lg:my-[50px]"
            src={"/assets/strokes/strokeLeft.svg"}
          />
        </MotionShuffle>
        <MotionOpacity>
          <h2 className="text-xl font-bold m-0 xs:text-[25px] lg:text-[28px] xl:text-[35px]">
            {title}
          </h2>
        </MotionOpacity>
        <MotionShuffle x={500}>
          <Stroke
            additionalClass="hidden sm:flex mx-auto my-[25px] lg:my-[50px]"
            src={"/assets/strokes/strokeRight.svg"}
          />
        </MotionShuffle>
      </div>
    </>
  );
};
