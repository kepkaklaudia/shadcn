import { FeatureProps } from "@/libs/types";
import Image from "next/image";

export const Feature = ({
  title,
  description,
  firstTag,
  secondTag,
  src,
}: FeatureProps) => {
  return (
    <div className="grid-cols-[1fr] gap-4 border bg-white grid p-4 rounded-[10px] border-solid border-alto sm:grid-cols-[auto_1fr]">
      <Image
        className="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px]"
        alt="about"
        width={100}
        height={100}
        src={src}
      />
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mb-2">{description}</p>
        <div className="flex flex-wrap gap-2.5">
          <div className="bg-shaft text-white text-xs px-1 py-0.5">
            {firstTag}
          </div>
          <div className="bg-shaft text-white text-xs px-1 py-0.5">
            {secondTag}
          </div>
        </div>
      </div>
    </div>
  );
};
