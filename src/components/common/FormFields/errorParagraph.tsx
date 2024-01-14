import { ErrorParagraphProps } from "@/libs/types";
import { cn } from "@/libs/utils";

export const ErrorParagraph = ({
  errors,
  fieldName,
  className,
}: ErrorParagraphProps) => {
  return (
    <>
      {errors[fieldName] && (
        <p
          className={cn(
            "lg:text-sm text-xs absolute text-crimson -bottom-6",
            className
          )}
        >
          {`${errors[fieldName]?.message}`}
        </p>
      )}
    </>
  );
};
