import { useTranslations } from "next-intl";
import { cn } from "@/libs/utils";
import { TagsProps } from "@/libs/types";
import { linkStyle } from "@/components/ui/classes";

export const Tags = ({ handleTagClick, tags, selectedTags }: TagsProps) => {
  const t = useTranslations("products.tags");

  return (
    <div className="max-w-full text-left text-sm xl:text-base lg:max-w-[70%]">
      <p>{t("Tags")}</p>
      <div className="flex flex-wrap gap-y-2.5 gap-x-[5px] m-0">
        {tags.map((tag) => (
          <p
            key={tag}
            onClick={() =>
              handleTagClick(tag as keyof Messages["products"]["tags"])
            }
            className={cn(
              selectedTags.includes(tag)
                ? "font-medium"
                : linkStyle &&
                    "w-auto text-blackOpacity transition-colors duration-300 m-0"
            )}
          >
            {t(tag as keyof Messages["products"]["tags"])}
          </p>
        ))}
      </div>
    </div>
  );
};
