import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import TableRow from "./components/StationListView/TableRow";
import Header from "./components/Header/Header";
import SimpleMap from "./GoogleMap";

const SingleStationView = () => {
  const [startingData, setStartingData] = useState(0);
  const [endingData, setEndingData] = useState(0);
  const [startingDistance, setStartingDistance] = useState(0);
  const [endingDistance, setEndingDistance] = useState(0);
  const [topFiveReturn, setTopFiveReturn] = useState([]);
  const [topFiveStarting, setTopFiveStarting] = useState([]);

  const router = useRouter();
  const myObject = router.query.myObject
    ? JSON.parse(decodeURIComponent(router.query.myObject))
    : {};

  const { Name = "", Adress = "" } = myObject;
  //--------------------------------- journeys starting from the station -------------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://journey-backend-d8wk.onrender.com/countStartingStation/${Name}`
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

  //--------------------------------- journeys ending from the station -------------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://journey-backend-d8wk.onrender.com/countEndingStation/${Name}`
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

  //--------------------------------- Average Starting Distance -------------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://journey-backend-d8wk.onrender.com/average-distance-starting/${Name}`
        );

        if (!response.ok) {
          throw new Error("Request failed");
        }
        const data = await response.json();
        setStartingDistance(data.averageDistance);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  //--------------------------------- Average Ending Distance -------------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://journey-backend-d8wk.onrender.com/average-distance-ending/${Name}`
        );

        if (!response.ok) {
          throw new Error("Request failed");
        }
        const data = await response.json();
        // console.log(data.averageDistance);
        setEndingDistance(data.averageDistance);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  //-------------------------------   Top Five Return Station -------------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://journey-backend-d8wk.onrender.com/topReturnStations/${Name}`
        );

        if (!response.ok) {
          throw new Error("Request failed");
        }
        const data = await response.json();
        setTopFiveReturn(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  //-------------------------------   Top Five Starting Station -------------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://journey-backend-d8wk.onrender.com/topDepartureStations/${Name}`
        );

        if (!response.ok) {
          throw new Error("Request failed");
        }
        const data = await response.json();
        setTopFiveStarting(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const zoom = 10;
  return (
    <>
      <Header />
      <div>
        <Link
          className="flex items-center gap-2 my-4 pl-10"
          href="/StationListView"
        >
          {" "}
          <FaArrowLeft className="hover:text-lg" />
          <span className="hover:text-lg"> Back</span>
        </Link>
        <h1 className="my-5 mt-10 font-bold text-3xl text-center">
          {Name} Station View
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                  <tr>
                    <th scope="col" className="px-10 py-4 text-lg">
                      Field Name
                    </th>
                    <th scope="col" className="px-10 py-4 text-lg">
                      Field Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow name="Station Name" value={Name} />
                  <TableRow name="Station address" value={Adress} />
                  <TableRow
                    name="Total number of journeys starting from the station"
                    value={startingData}
                  />
                  <TableRow
                    name="Total number of journeys ending at the station"
                    value={endingData}
                  />
                  <TableRow
                    name="The average distance of a journey starting from the station"
                    value={`${(startingDistance / 1000).toFixed(2)} KM`}
                  />
                  <TableRow
                    name="The average distance of a journey ending at the station"
                    value={`${(endingDistance / 1000).toFixed(2)} KM`}
                  />
                  <tr className="border-b dark:border-neutral-500 dark:bg-neutral-700 ">
                    <td className="whitespace-nowrap px-10 py-4 text-[17px]">
                      Top 5 most popular return stations for journeys starting
                      from the station
                    </td>
                    <td className="whitespace-nowrap px-10 py-4 ">
                      {topFiveReturn.map((item, index) => (
                        <p key={index}>
                          {" "}
                          {index + 1} - {item._id}
                        </p>
                      ))}
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500 dark:bg-neutral-700 ">
                    <td className="whitespace-nowrap px-10 py-4 text-[17px]">
                      Top 5 most popular departure stations for journeys ending
                      at the station
                    </td>
                    <td className="whitespace-nowrap px-10 py-4 ">
                      {topFiveStarting.map((item, index) => (
                        <p key={index}>
                          {" "}
                          {index + 1} - {item._id}
                        </p>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center font-bold my-4 text-xl">Map of {Name}</h1>
      <SimpleMap />
    </>
  );
};

export default SingleStationView;
