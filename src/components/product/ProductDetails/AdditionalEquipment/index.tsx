import { useTranslations } from "next-intl";
import "./styles.css";

export const AdditionalEquipment = ({ optional }: { optional: string[] }) => {
  const t = useTranslations("product.productDetails.additionalEquipment");

  return (
    <>
      {optional.length > 0 ? (
        <>
          <div className="w-[260px] mt-[50px] mb-[100px] mx-auto bg-white lg:w-[600px] sm:w-[500px]">
            <p className="bg-haze border text-left font-bold m-0 pl-5 p-2.5 border-b-none border-solid border-sky">
              {t("Additional equipment")}
            </p>
            <div className="flex flex-wrap border flex-col sm:flex-row border-solid border-sky">
              {optional.map((item, index) => (
                <div
                  key={index}
                  className="item grid grid-cols-[auto_1fr] gap-[5px] text-left font-semibold content-baseline w-[calc(100%-30px)] sm:w-[calc(50%-30.5px)] text-sm bg-haze pl-5 p-2.5 border-b-sky border-b border-solid last-of-type:border-b-0 odd:bg-white sm:odd:bg-haze odd:border-r odd:border-sky even:hover:bg-mist odd:hover:bg-mist sm:hover:bg-mist last-of-type:border-b-0 before:content-[''] before:flex before:self-start before:h-[15px] before:w-[15px] before:bg-[url('/assets/carouselArrow.svg')] before:bg-contain before:bg-no-repeat before:mt-1
                "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p className="mt-[50px] mb-20 mx-auto">{t("No data")}</p>
      )}
    </>
  );
};
