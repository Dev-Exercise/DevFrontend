import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "./components/Header/Header";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const SingleStationView = () => {
  const [startingData, setStartingData] = useState(0);
  const [endingData, setEndingData] = useState(0);

  const router = useRouter();
  const myObject = router.query.myObject
    ? JSON.parse(decodeURIComponent(router.query.myObject))
    : null;

  const { Name, Adress } = myObject;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/countStartingStation/${Name}`
        );

        if (!response.ok) {
          throw new Error("Request failed");
        }
        const data = await response.json();
        setStartingData(data.count);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/countEndingStation/${Name}`
        );

        if (!response.ok) {
          throw new Error("Request failed");
        }
        const data = await response.json();
        setEndingData(data.count);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="grid place-items-center h-screen">
        <div className="border px-6 py-8 rounded-lg w-1/2 mx-auto shadow-2xl text-center">
          <div className="text-lg">
            {" "}
            <h1 className="font-bold text-3xl mb-4">{Name} Station View</h1>
            <h1>
              Station Name: <span className="font-semibold">{Name}</span>
            </h1>
            <h1>
              Address Name: <span className="font-semibold">{Adress}</span>
            </h1>
            <h1>
              Number of journeys starting:{" "}
              <span className="font-semibold">{startingData}</span>
            </h1>
            <h1>
              Number of journeys ending:{" "}
              <span className="font-semibold">{endingData}</span>
            </h1>
          </div>
          <Link
            className="flex items-center gap-2 mt-4"
            href="/StationListView"
          >
            {" "}
            <FaArrowLeft className="hover:text-lg" />
            <span className="hover:text-lg"> Back</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleStationView;
