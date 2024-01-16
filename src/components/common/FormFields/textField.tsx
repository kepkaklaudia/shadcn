import { TextFieldProps } from "@/libs/types";
import { cn } from "@/libs/utils";
import { ErrorParagraph } from "@/components/common/FormFields/errorParagraph";
import { inputStyle } from "@/components/ui/classes";

export const TextField = ({
  register,
  errors,
  label,
  type,
  placeholder,
  fieldName,
  requiredMessage,
  validateFunction,
  minLength,
}: TextFieldProps) => {
  return (
    <div className="text-left flex flex-col gap-2.5 max-w-[500px] mx-auto my-[25px] relative">
      <label className="text-sm lg:text-base md:mb-3">{label}</label>
      <input
        className={cn(inputStyle, {
          "border border-solid border-crimson": errors[fieldName],
        })}
        placeholder={placeholder}
        type={type}
        {...register(fieldName, {
          required: requiredMessage,
          minLength: minLength,
          validate: validateFunction,
        })}
      />
      <ErrorParagraph errors={errors} fieldName={fieldName} />
    </div>
  );
};
