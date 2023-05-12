import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const SingleStation = (props) => {
  const router = useRouter();

  //   console.log(props.item, "fromxs");
  const Item = props.item;

  const objectString = encodeURIComponent(JSON.stringify(Item));

  return (
    <div className="bg-gray-200 p-2">
      <Link
        className="hover:text-green-600 hover:font-bold"
        href={`/SingleStationView?myObject=${objectString}`}
      >
        <span>{props.item.Name}</span>
      </Link>
    </div>
  );
};

export default SingleStation;
