import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/Button";
import { StyledModalProps } from "@/libs/types";

export const StyledModal = ({
  show,
  setShow,
  modalItems,
  data,
  isHome,
}: StyledModalProps) => {
  const t = useTranslations("common.contact");
  const router = useRouter();
  const locale = useLocale();

  return (
    <Dialog open={show} onOpenChange={() => setShow(false)}>
      {" "}
      <DialogContent className="grid grid-cols-[1fr] justify-items-center px-0 py-[25px]">
        <DialogHeader className="justify-center items-baseline border-b-2 border-alto w-11/12 pb-3">
          <DialogTitle className="text-xl text-shaft font-bold sm:text-[25px]">
            {t("Thank you")}
          </DialogTitle>
          <p className="text-base text-shaft font-semibold m-0 sm:text-xl">
            {t("The form has been sent")}
          </p>
        </DialogHeader>
        <div className="flex flex-col flex-wrap gap-2.5 mt-[30px] mb-0 w-4/5">
          {modalItems.map(
            (item, index) =>
              data &&
              data[item?.value] && (
                <div key={index} className="flex flex-wrap gap-[5px]">
                  {t(`${item.label as keyof Messages["common"]["contact"]}`)}
                  {": "}
                  <p className="font-bold">{data[item.value]}</p>
                </div>
              )
          )}
          <Button
            className="text-sm self-center text-center mt-[30px] mb-8 px-2.5 py-[5px] xs:text-base"
            onClick={() => {
              setShow(false), isHome ? undefined : router.push(`/${locale}/`);
            }}
          >
            {isHome ? t("Close") : t("Back to home page")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
