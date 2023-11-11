import { cn } from "@/libs/utils";
import { ContactDataItemProps } from "@/libs/types";
import { linkStyle } from "@/components/ui/classes";

export const ContactDataItem = ({
  title,
  firstParagraph,
  secondParagraph,
  firstLink,
  firstHref,
  secondLink,
  secondHref,
}: ContactDataItemProps) => {
  return (
    <div>
      <h2 className="text-sm font-semibold underline underline-offset-4 mb-5 sm:text-base">
        {title}
      </h2>
      <div className="text-xs flex flex-col items-start gap-2 sm:text-sm">
        {firstParagraph && <p className="m-0">{firstParagraph}</p>}
        {secondParagraph && <p className="m-0">{secondParagraph}</p>}
        <a
          className={cn(
            linkStyle,
            "hover:after:bg-black text-xs xs:text-xs sm:text-sm"
          )}
          href={firstHref}
        >
          {firstLink}
        </a>
        {secondLink && secondHref && (
          <a
            className={cn(
              linkStyle,
              "hover:after:bg-black text-xs xs:text-xs sm:text-sm"
            )}
            href={secondHref}
          >
            {secondLink}
          </a>
        )}
      </div>
    </div>
  );
};
