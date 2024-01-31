import { TableRowProps } from "@/libs/types";

export const TableRow = ({ label, value }: TableRowProps) => (
  <tr className="hover:bg-mist even:bg-haze even:hover:bg-mist">
    <td
      className="border text-sm min-w-[50px] font-semibold text-left p-2.5 border-solid border-sky"
      scope="row"
    >
      {label}
    </td>
    <td className="text-center border text-sm min-w-[50px] p-2.5 border-solid border-sky">
      {value}
    </td>
  </tr>
);
