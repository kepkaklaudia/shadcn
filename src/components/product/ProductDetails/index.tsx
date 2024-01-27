"use client";

import { useState } from "react";
import { ProductDetailsProps } from "@/libs/types";
import { TechnicalSpecifications } from "@/components/product/ProductDetails/TechnicalSpecifications";
import { AdditionalEquipment } from "@/components/product/ProductDetails/AdditionalEquipment";
import { MotionContent } from "@/components/product/ProductDetails/motionContent";
import { Drawings } from "@/components/product/ProductDetails/drawings";
import { Downloads } from "@/components/product/ProductDetails/downloads";
import { MenuButtons } from "@/components/product/ProductDetails/menuButtons";

export const ProductDetails = ({
  specification,
  optional,
  pathID,
  pdfGalvanized,
  pdfPowdered,
  drawings,
}: ProductDetailsProps) => {
  const [activeSection, setActiveSection] = useState(
    "Technical specifications"
  );

  let content: JSX.Element | null = null;
  switch (activeSection) {
    case "Technical specifications":
      content = <TechnicalSpecifications specification={specification} />;
      break;
    case "Additional equipment":
      content = <AdditionalEquipment optional={optional} />;
      break;
    case "Dimensional drawings":
      content = (
        <Drawings
          pathID={pathID}
          profile={drawings.profile}
          front={drawings.front}
          top={drawings.top}
        />
      );
      break;
    case "Downloads":
      content = (
        <Downloads pdfGalvanized={pdfGalvanized} pdfPowdered={pdfPowdered} />
      );
      break;
    default:
      content = null;
  }

  return (
    <div className="flex justify-center w-full flex-col flex-wrap border-t-alto border-t border-solid">
      <MenuButtons
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <MotionContent ownKey={activeSection}>{content}</MotionContent>
    </div>
  );
};
