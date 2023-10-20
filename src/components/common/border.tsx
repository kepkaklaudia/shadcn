import { BorderProps } from "@/libs/types";
import { cn } from "@/libs/utils";

export const Border = ({ additionalClass }: BorderProps) => (
  <div className={cn("w-full h-auto border-t border-alto", additionalClass)} />
);
