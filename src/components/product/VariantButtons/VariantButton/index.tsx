import { useTranslations } from "next-intl";
import { VariantButtonProps } from "@/libs/types";
import { cn } from "@/libs/utils";
import "./styles.css";

export const VariantButton = ({
  type,
  label,
  setVariant,
  images,
  path,
  buttonType,
}: VariantButtonProps) => {
  const t = useTranslations("product.productDetails.variantButtons");

  return (
    type in images && (
      <button
        onClick={() => setVariant(type)}
        className={cn(
          "text-[10px] p-[5px] border-none lg:text-sm lg:p-2",
          `${path}__${buttonType}`
        )}
      >
        {t(label)}
      </button>
    )
  );
};
