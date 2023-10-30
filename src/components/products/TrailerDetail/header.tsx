import { HeaderProps } from "@/libs/types";
import { cn } from "@/libs/utils";

export const Header = ({ path, name, category, isGrid }: HeaderProps) => (
  <div
    className={cn(
      "flex flex-wrap gap-2.5 items-baseline mx-0 ",
      isGrid ? "my-[15px]" : "my-[30px]"
    )}
  >
    <div
      className={cn(
        "h-[25px] skew-x-[-30deg] shrink-0 self-center mr-[5px] mb-2 w-[25px] lg:w-[35px] md:h-[35px] lg:h-10",
        path
      )}
    ></div>
    <h2 className="font-bold text-[25px]">{name}</h2>
    <h2 className="text-[15px] align-baseline uppercase font-bold">
      {category}
    </h2>
  </div>
);
