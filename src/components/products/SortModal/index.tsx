"use client";

import React from "react";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SortByType, SortModalProps } from "@/libs/types";
import { sortOptions } from "./sortOptions";
import { RadioGroupItem } from "@radix-ui/react-radio-group";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/Button";
import { cn } from "@/libs/utils";

export const SortModal: React.FC<SortModalProps> = ({
  showModal,
  setShowModal,
  sortBy,
  setSortBy,
  handleSort,
  setSelectedTags,
}) => {
  const t = useTranslations("products.sortModal");
  const pathname = usePathname();
  const router = useRouter();

  const handleButtonClick = (type: SortByType) => {
    setSortBy((prevSortBy) => ({
      type,
      direction: sortBy.type === type ? prevSortBy.direction : "",
    }));
  };

  const resetURL = () => {
    router.push(pathname);
  };

  const resetSortAndURL = () => {
    handleSort("", "");
    setSelectedTags([]);
    resetURL();
  };

  return (
    <Dialog open={showModal} onOpenChange={() => setShowModal(false)}>
      <DialogContent className="grid grid-cols-[1fr] justify-items-center px-0 py-[25px]">
        <DialogHeader className=" border-b-2 border-alto w-11/12 pb-3">
          <DialogTitle className="md:text-lg text-base font-medium text-left">
            {t("Sort by")}
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-[1fr_1fr] gap-4">
          {sortOptions.map(({ type, label }) => (
            <Button
              key={type}
              className={cn(
                "xs:w-[130px] xs:text-base w-[100px] text-sm",
                sortBy.type === type &&
                  "bg-white text-black font-medium text-center flex flex items-center justify-center p-1.5 border-shaft border-4 border-solid"
              )}
              onClick={() => handleButtonClick(type as SortByType)}
            >
              {t(label)}
            </Button>
          ))}
        </div>
        <div className="">
          {sortBy.type && (
            <>
              <RadioGroup className="flex flex-wrap gap-5 justify-center">
                <div className="">
                  <RadioGroupItem
                    value="asc"
                    checked={sortBy.direction === "asc"}
                    onChange={() => handleSort(sortBy.type, "asc")}
                  />
                  <label htmlFor="asc">{t("Ascending")}</label>
                </div>
                <div className="">
                  <RadioGroupItem
                    value="desc"
                    checked={sortBy.direction === "desc"}
                    onChange={() => handleSort(sortBy.type, "desc")}
                  />
                  <label htmlFor="desc">{t("Descending")}</label>
                </div>
              </RadioGroup>
            </>
          )}
        </div>
        <Button
          className="h-[30px] bg-grey text-black px-2.5 py-0"
          onClick={resetSortAndURL}
        >
          {t("Reset")}
        </Button>
        <Button
          className={`${
            sortBy.direction === "" || sortBy.type === ""
              ? "h-[30px] bg-grey text-black font-medium cursor-not-allowed px-2.5 py-0 border-none              "
              : "h-[30px] px-2.5 py-0"
          }`}
          onClick={() => setShowModal(false)}
          disabled={sortBy.direction === "" || sortBy.type === ""}
        >
          {t("Sort")}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
