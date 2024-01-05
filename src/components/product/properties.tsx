import { PropertiesProductProps } from "@/libs/types";
import { useTranslations } from "next-intl";

export const Properties = ({ standard }: PropertiesProductProps) => {
  const t = useTranslations("product.properties");

  return (
    <div>
      {standard.length > 0 ? (
        <div className="text-sm bg-white border text-left pb-2.5 p-5 rounded-md border-solid border-alto sm:max-w-none max-w-[700px] w-4/5 sm:w-auto  mt-[30px] mb-0 mx-auto xs:mr-[50px]">
          <p className="text-lg font-medium uppercase mb-[5px] sm:text-xl sm:mb-0">
            {t("Properties")}
          </p>
          <ul className="w-fit list-none pl-2.5">
            {standard.map((item: string, index: number) => (
              <li
                className="grid grid-cols-[auto_1fr] items-center before:content-[''] before:flex before:self-start before:h-[15px] before:w-[15px] before:bg-[url('/assets/carouselArrow.svg')] before:bg-contain before:bg-no-repeat before:mt-1"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
