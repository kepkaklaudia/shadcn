import { useTranslations } from "next-intl";
import Image from "next/image";
import { ViewSelectorProps } from "@/libs/types";
import { cn } from "@/libs/utils";

export const ViewSelector = ({ handleViewChange, view }: ViewSelectorProps) => {
  const t = useTranslations("products.viewSelector");

  const image =
    "cursor-pointer transition-opacity duration-300 opacity-40 hover:opacity-100";

  return (
    <div className="text-sm text-left xl:text-base">
      <p>{t("View")}</p>
      <div className="flex flex-wrap gap-2.5 m-0">
        <Image
          onClick={() => handleViewChange("list")}
          className={cn(image, view === "list" && "opacity-100")}
          src={"/assets/products/list.svg"}
          width={30}
          height={30}
          alt="list"
        />{" "}
        <Image
          onClick={() => handleViewChange("grid")}
          className={cn(image, view === "grid" && "opacity-100")}
          src={"/assets/products/grid.svg"}
          width={30}
          height={30}
          alt="grid"
        />
      </div>
    </div>
  );
};
