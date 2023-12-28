import { useTranslations } from "next-intl";
import { HeaderProductProps } from "@/libs/types";
import { cn } from "@/libs/utils";

export const Header = ({ path, name, category }: HeaderProductProps) => {
  const t = useTranslations("products.heading");

  return (
    <div className="flex gap-2.5 items-end w-4/5 flex-wrap m-0 lg:my-[30px]">
      <div
        className={cn(
          "h-[25px] skew-x-[-30deg] shrink-0 self-center mr-[5px] mb-2  w-[25px] md:h-[35px] lg:h-10 lg:w-[35px]",
          path
        )}
      ></div>
      <h2 className="text-3xl font-bold sm:text-[50px] lg:text-6xl">{name}</h2>
      <h2 className="text-lg align-baseline uppercase font-bold sm:text-lg lg:text-xl">
        {t(category)}
      </h2>
    </div>
  );
};
