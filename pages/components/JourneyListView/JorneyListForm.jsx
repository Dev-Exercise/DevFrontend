import React from "react";

const JourneyListForm = (item) => {
  const departureStation = item.item["Departure station name"];
  const returnStation = item.item["Return station name"];
  const coveredDistance = item.item["Covered distance (m)"];
  const duration = item.item["Duration (sec"][")"];

  return (
    <div className="border p-5 shadow-lg rounded-lg">
      <h1>Departure Station Name: {departureStation}</h1>
      <p>Return Station Name: {returnStation} </p>
      <p>Covered Distance: {(coveredDistance / 1000).toFixed(2)} Kilometeres</p>
      <p>Duration: {Math.ceil(duration / 60)} minutes</p>
    </div>
  );
};

export default JourneyListForm;
