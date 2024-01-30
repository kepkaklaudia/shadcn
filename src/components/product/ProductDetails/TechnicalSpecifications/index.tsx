import { useTranslations } from "next-intl";
import { Container } from "@/components/product/ProductDetails/TechnicalSpecifications/container";
import { TableRow } from "@/components/product/ProductDetails/TechnicalSpecifications/tableRow";
import { TechnicalSpecificationsProps } from "@/libs/types";

export const TechnicalSpecifications = ({
  specification,
}: TechnicalSpecificationsProps) => {
  const t = useTranslations("product.productDetails.technicalSpecifications");

  const rows = [
    { label: t("Gross vehicle weight [kg]"), value: specification.gvw },
    { label: t("Load capacity [kg]"), value: specification.load },
    { label: t("Loading area dimension [mm]"), value: specification.area },
    { label: t("Curb weight [kg]"), value: specification.weight },
    {
      label: `${t("External dimensions")} ${t("length x width x height [mm]")}`,
      value: specification.dimensions,
    },
    { label: t("Number of axles"), value: specification.axles },
    { label: t("Type of axles"), value: specification.axlesType },
    { label: t("Type of wheels"), value: specification.wheels },
  ];

  return (
    <Container>
      <thead></thead>
      <tbody>
        {rows.map((row) => (
          <TableRow
            key={row.label}
            label={row.label}
            value={`${row.value ? row.value : "-"}`}
          />
        ))}
      </tbody>
    </Container>
  );
};
