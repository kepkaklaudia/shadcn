import { TextareaFieldProps } from "@/libs/types";
import { cn } from "@/libs/utils";
import { ErrorParagraph } from "@/components/common/FormFields/errorParagraph";
import { inputStyle } from "@/components/ui/classes";

export const TextareaField = ({
  register,
  errors,
  placeholder,
  fieldName,
  label,
  requiredMessage,
}: TextareaFieldProps) => {
  return (
    <>
      <div className="text-left flex flex-col gap-2.5 max-w-[500px] mx-auto mt-[25px] mb-[40px] relative">
        <label className="text-sm lg:text-base">{label}</label>
        <textarea
          className={cn(
            "h-[100px] resize-none relative text-left lg:h-[150px]",
            inputStyle,
            {
              "border border-solid border-crimson": errors[fieldName],
            }
          )}
          placeholder={placeholder}
          {...register(fieldName, {
            required: requiredMessage ? requiredMessage : false,
          })}
        />
        <ErrorParagraph errors={errors} fieldName={fieldName} />
      </div>
    </>
  );
};
