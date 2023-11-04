import { useTranslations } from "next-intl";
import { cn } from "@/libs/utils";
import { TagsProps } from "@/libs/types";
import { linkStyle } from "@/components/ui/classes";

export const Tags = ({ handleTagClick, tags, selectedTags }: TagsProps) => {
  const t = useTranslations("products.tags");

  return (
    <div className="max-w-full text-left text-sm xl:text-base lg:max-w-[70%]">
      <p className="mb-2">{t("Tags")}</p>
      <div className="flex flex-wrap gap-y-2.5 gap-x-[5px] m-0">
        {tags.map((tag) => (
          <p
            key={tag}
            onClick={() =>
              handleTagClick(tag as keyof Messages["products"]["tags"])
            }
            className={cn(
              linkStyle,
              selectedTags.includes(tag) ? "text-black" : "text-blackOpacity",
              "w-auto  transition-colors duration-300 m-0 hover:after:bg-black hover:text-black"
            )}
          >
            {t(tag as keyof Messages["products"]["tags"])}
          </p>
        ))}
      </div>
    </div>
  );
};
