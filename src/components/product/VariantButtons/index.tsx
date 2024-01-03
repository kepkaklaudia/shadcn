import { VariantButtonsProps } from "@/libs/types";
import { VariantButton } from "@/components/product/VariantButtons/VariantButton";

export const VariantButtons = ({
  path,
  setVariant,
  images,
}: VariantButtonsProps) => {
  return (
    <div className="gap-2.5 flex flex-col lg:gap-4">
      <VariantButton
        type={"galvanized"}
        label={"Galvanized"}
        setVariant={setVariant}
        images={images}
        path={path}
        buttonType={"first"}
      />
      <VariantButton
        type={"powdered"}
        label={"Powder-coated"}
        setVariant={setVariant}
        images={images}
        path={path}
        buttonType={"second"}
      />
      <VariantButton
        type={"filled"}
        label={"With filling"}
        setVariant={setVariant}
        images={images}
        path={path}
        buttonType={"third"}
      />
    </div>
  );
};
