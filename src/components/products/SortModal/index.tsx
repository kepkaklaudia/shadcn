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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/Button";
import { sortOptions } from "@/components/products/SortModal/sortOptions";

export const SortModal = ({
  showModal,
  setShowModal,
  sortBy,
  setSortBy,
  handleSort,
  setSelectedTags,
}: SortModalProps) => {
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
              size={sortBy.type === type ? "sortModalActive" : "sortModal"}
              variant={sortBy.type === type ? "sortModalActive" : "default"}
              className="xs:text-base text-sm"
              onClick={() => handleButtonClick(type as SortByType)}
            >
              {t(label)}
            </Button>
          ))}
        </div>
        <div className="my-3">
          {sortBy.type && (
            <>
              <RadioGroup className="flex flex-wrap gap-5 justify-center">
                <div className="flex gap-2">
                  <RadioGroupItem
                    value="asc"
                    checked={sortBy.direction === "asc"}
                    onClick={() => handleSort(sortBy.type, "asc")}
                  />
                  <label htmlFor="asc">{t("Ascending")}</label>
                </div>
                <div className="flex gap-2">
                  <RadioGroupItem
                    value="desc"
                    checked={sortBy.direction === "desc"}
                    onClick={() => handleSort(sortBy.type, "desc")}
                  />
                  <label htmlFor="desc">{t("Descending")}</label>
                </div>
              </RadioGroup>
            </>
          )}
        </div>
        <div className="flex justify-end gap-2 w-11/12">
          <Button
            className="h-[30px] bg-grey text-black px-2.5 py-0"
            onClick={resetSortAndURL}
            variant="reset"
          >
            {t("Reset")}
          </Button>
          <Button
            className="h-[30px] px-2.5 py-0"
            onClick={() => setShowModal(false)}
            variant={
              sortBy.direction === "" || sortBy.type === ""
                ? "resetDisabled"
                : "reset"
            }
            disabled={sortBy.direction === "" || sortBy.type === ""}
          >
            {t("Sort")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
