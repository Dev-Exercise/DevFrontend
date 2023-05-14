import React from "react";

const TableRow = ({ name, value }) => {
  return (
    <tr className="border-b dark:border-neutral-500 dark:bg-neutral-700 ">
      <td className="whitespace-nowrap px-10 py-4 text-[17px]">{name}</td>
      <td className="whitespace-nowrap px-10 py-4">{value}</td>
    </tr>
  );
};

export default TableRow;
