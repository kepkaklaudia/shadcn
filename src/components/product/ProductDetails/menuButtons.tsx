import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { MenuButtonsProps } from "@/libs/types";

const buttonNames: Array<
  keyof Messages["product"]["productDetails"]["menuButtons"]
> = [
  "Technical specifications",
  "Additional equipment",
  "Dimensional drawings",
  "Downloads",
];

export const MenuButtons = ({
  setActiveSection,
  activeSection,
}: MenuButtonsProps) => {
  const t = useTranslations("product.productDetails.menuButtons");

  const handleButtonClick = (
    section: keyof Messages["product"]["productDetails"]["menuButtons"]
  ) => {
    setActiveSection(section);
  };

  return (
    <div className="grid-cols-[1fr] gap-2.5 grid mx-auto my-[50px] sm:grid-cols-[repeat(2,1fr)] sm:gap-2.5 xl:gap-10 xl:gap-[100px] xl:grid-cols-[repeat(4,1fr)]">
      {buttonNames.map((section) => (
        <Button
          key={section}
          onClick={() => handleButtonClick(section)}
          variant={activeSection === section ? "defaultActive" : "default"}
          size={activeSection === section ? "menuActive" : "default"}
        >
          {t(section)}
        </Button>
      ))}
    </div>
  );
};
