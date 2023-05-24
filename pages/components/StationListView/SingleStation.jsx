import Link from "next/link";
import React from "react";

const SingleStation = (props) => {
  const item = props.item;

  if (!item || !item.Name) {
    return null;
  }

  const objectString = encodeURIComponent(JSON.stringify(item));

  return (
    <div className="bg-gray-200 p-2">
      <Link
        className="hover:text-green-600 hover:font-bold"
        href={`/SingleStationView?myObject=${objectString}`}
      >
        <span>{item.Name}</span>
      </Link>
    </div>
  );
};

export default SingleStation;
