import { useTranslations } from "next-intl";
import { cn } from "@/libs/utils";
import { heading } from "@/components/ui/classes";

export const Heading = ({
  category,
}: {
  category: keyof Messages["products"]["heading"];
}) => {
  const t = useTranslations("products.heading");

  return (
    <div className="w-full border-b-alto border-b border-solid">
      <h2 className={cn(heading, "w-4/5 text-left mx-auto my-5")}>
        {category && t(category)}
      </h2>
    </div>
  );
};
