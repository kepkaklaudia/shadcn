import { Controller } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxFieldProps } from "@/libs/types";
import { ErrorParagraph } from "@/components/common/FormFields/errorParagraph";

export const CheckboxField = ({
  label,
  fieldName,
  errors,
  requiredMessage,
  control,
  onClick,
}: CheckboxFieldProps) => {
  return (
    <div className="relative text-left gap-2.5 w-full sm:w-4/5 mx-auto flex my-6">
      <Controller
        control={control}
        name={fieldName}
        key={fieldName}
        defaultValue={false}
        rules={{ required: requiredMessage ? requiredMessage : false }}
        render={({ field: { onChange, value, ref } }) => (
          <Checkbox
            onCheckedChange={onChange}
            ref={ref}
            onClick={onClick}
            checked={value}
          >
            {fieldName}
          </Checkbox>
        )}
      />
      <label htmlFor={fieldName} className="text-xs lg:text-sm font-normal">
        {label}
      </label>
      <ErrorParagraph
        className="-bottom-4 right-[12%] lg:right-[2%]"
        errors={errors}
        fieldName={fieldName}
      />
    </div>
  );
};
