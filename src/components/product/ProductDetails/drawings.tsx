import Image from "next/image";
import { useTranslations } from "next-intl";
import { DrawingsProps } from "@/libs/types";

export const Drawings = ({ pathID, profile, front, top }: DrawingsProps) => {
  const t = useTranslations("product.productDetails.drawings");

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.style.display = "none";
  };

  const arePathsEmpty = !profile && !front && !top;

  if (arePathsEmpty) {
    return <p className="mt-[50px] mb-20 mx-auto">{t("No drawings")}</p>;
  }

  return (
    <div className="grid-cols-[1fr] grid-rows-[1fr] w-4/5 gap-[50px] grid mt-0 mb-[100px] mx-auto sm:grid-cols-[1fr_1fr] sm:grid-rows-[1fr_1fr]  ">
      {profile && (
        <Image
          className="col-[1] aspect-[3.9/1] w-full h-auto sm:col-[span_2]"
          src={`/assets/trailers/details/drawings/${pathID}/${profile}.webp`}
          alt="Dimensional drawing"
          width={1200}
          height={307}
          onError={handleImageError}
        />
      )}

      {front && (
        <Image
          className="w-full h-auto aspect-[2.15/1]"
          src={`/assets/trailers/details/drawings/${pathID}/${front}.webp`}
          alt="Dimensional drawing"
          width={600}
          height={280}
          onError={handleImageError}
        />
      )}
      {top && (
        <Image
          className="w-full h-auto aspect-[2.15/1]"
          src={`/assets/trailers/details/drawings/${pathID}/${top}.webp`}
          alt="Dimensional drawing"
          width={600}
          height={280}
          onError={handleImageError}
        />
      )}
    </div>
  );
};
