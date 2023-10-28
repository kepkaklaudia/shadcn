import React from "react";
import Image from "next/image";
import { PropertiesProps } from "@/libs/types";

export const Properties = ({ title, icon, value }: PropertiesProps) => {
  return (
    <div className="flex flex-col text-shaft font-bold text-xs justify-between">
      <p className="mx-0 my-2.5">{title}</p>
      <div className="flex gap-2.5">
        <Image width={50} height={20} src={icon} alt="" />
        <p className="text-shaft font-bold self-end m-0">
          {value ? value : "-"}
        </p>
      </div>
    </div>
  );
};
