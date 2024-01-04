import { cn } from "@/libs/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import "./styles.css";
import { TagsProductProps } from "@/libs/types";

export const Tags = ({ path, tags, locale }: TagsProductProps) => {
  const t = useTranslations("product.tags");

  return (
    <div className=" text-[10px] mr-5 sm:text-base sm:mr-0 max-w-[500px] text-left">
      {tags && t("Tags")}
      <div className="flex flex-wrap gap-2.5 justify-start mt-3.5">
        {Array.isArray(tags)
          ? tags.map(
              (tag: keyof Messages["product"]["tags"], index: number) => (
                <Link
                  href={`/${locale}/products/all?tag=${tag}`}
                  className={cn(
                    "text-xs no-underline text-black m-0 px-[5px] py-px",
                    path
                  )}
                  key={index}
                >
                  {t(tag)}
                </Link>
              )
            )
          : ""}
      </div>
    </div>
  );
};
