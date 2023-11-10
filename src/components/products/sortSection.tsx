"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { SortByDirection, SortByType, SortSectionProps } from "@/libs/types";
import { cn } from "@/libs/utils";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const SortSection = ({
  sortBy,
  setSortBy,
  handleSort,
  setShowModal,
}: SortSectionProps) => {
  const [show, setShow] = useState(false);
  const [showArea, setShowArea] = useState(false);
  const t = useTranslations("products.sortSection");
  const router = useRouter();
  const pathname = usePathname();

  const handleCheckboxChange = (type: SortByType) => {
    setShow(type === "gvw" ? !show : false);
    setShowArea(type === "loadArea" ? !showArea : false);

    setSortBy((prevSortBy) => ({
      type: type === "gvw" ? "gvw" : "loadArea",
      direction: prevSortBy.type === type ? prevSortBy.direction : "",
    }));
  };

  const handleRadioChange = (type: SortByType, direction: SortByDirection) => {
    handleSort(type, direction);
    setShow(false);
    setShowArea(false);
  };

  const resetURL = () => {
    router.push(pathname);
  };

  const resetSortAndURL = () => {
    handleSort("", "");
    setShowArea(false);
    setShow(false);
    resetURL();
  };

  return (
    <div className="gap-5 sm:gap-0 grid grid-cols-[1fr] items-baseline justify-center place-items-center sm:grid-cols-[auto_auto] sm:justify-end">
      <div className="grid grid-cols-[auto_auto] gap-[35px] text-sm">
        <div className="relative">
          <div className="flex gap-2">
            <Checkbox
              onCheckedChange={() => handleCheckboxChange("gvw")}
              className="text-left"
              checked={
                show ||
                (!show &&
                  sortBy.type === "gvw" &&
                  (sortBy.direction === "asc" || sortBy.direction === "desc"))
              }
            />
            <p className="text-left"> {t("GVW")}</p>
          </div>
          <div className={cn("hidden", show && "block absolute mt-[10px]")}>
            <RadioGroup className="flex flex-col mt-2 justify-left">
              <div className="flex gap-2">
                <RadioGroupItem
                  value="asc"
                  checked={sortBy.type === "gvw" && sortBy.direction === "asc"}
                  onClick={() => handleRadioChange("gvw", "asc")}
                />
                <label htmlFor="asc">{t("Ascending")}</label>
              </div>
              <div className="flex gap-2">
                <RadioGroupItem
                  value="desc"
                  onClick={() => handleRadioChange("gvw", "desc")}
                  checked={sortBy.type === "gvw" && sortBy.direction === "desc"}
                />
                <label htmlFor="desc">{t("Descending")}</label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="relative">
          <div className="flex gap-2">
            <Checkbox
              onCheckedChange={() => handleCheckboxChange("loadArea")}
              className="text-left"
              checked={
                showArea ||
                (!showArea &&
                  sortBy.type === "loadArea" &&
                  (sortBy.direction === "asc" || sortBy.direction === "desc"))
              }
            />
            <p className="text-left">{t("Load area")}</p>
          </div>
          <div className={cn("hidden", showArea && "block absolute mt-[10px]")}>
            <RadioGroup className="flex flex-col mt-2 justify-left">
              <div className="flex gap-2">
                <RadioGroupItem
                  value="asc"
                  checked={
                    sortBy.type === "loadArea" && sortBy.direction === "asc"
                  }
                  onClick={() => handleRadioChange("loadArea", "asc")}
                />
                <label htmlFor="asc">{t("Ascending")}</label>
              </div>
              <div className="flex gap-2">
                <RadioGroupItem
                  value="desc"
                  onClick={() => handleRadioChange("loadArea", "desc")}
                  checked={
                    sortBy.type === "loadArea" && sortBy.direction === "desc"
                  }
                />
                <label htmlFor="desc">{t("Descending")}</label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap flex-col gap-2.5 mt-[70px] sm:mt-0">
        <Button
          onClick={() => {
            setShowModal(true);
            resetSortAndURL();
          }}
          className="justify-self-center sm:justify-self-end mx-[25px]"
          size="sort"
        >
          {t("More options")}
        </Button>
        <Button
          onClick={resetSortAndURL}
          variant="reset"
          size="sort"
          className="justify-self-center sm:justify-self-end mx-[25px]"
        >
          {t("Reset")}
        </Button>
      </div>
    </div>
  );
};
