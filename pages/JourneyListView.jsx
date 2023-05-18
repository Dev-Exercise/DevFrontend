import React, { useMemo, useEffect, useState } from "react";
import MaterialReactTable from "material-react-table";

import Header from "./components/Header/Header";

const PaginationExample = () => {
  const [data, setData] = useState([]);
  console.log(data[0]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "Departure station name",
        header: "Departure station name",
      },
      {
        accessorKey: "Return station name",
        header: "Return station name",
      },
      {
        accessorKey: "Covered distance (m)",
        header: "Covered Distance (KM)",
      },
      {
        accessorKey: "Duration (sec",
        header: "Duration (Minute)",
      },
    ],
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/journey-data`);

        if (!response.ok) {
          throw new Error("Request failed");
        }
        const data = await response.json();
        setData(data);
        // console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <MaterialReactTable columns={columns} data={data} />
    </>
  );
};

export default PaginationExample;
