import React from "react";

const JourneyListForm = (item) => {
  //   console.log(item);
  const departureStation = item.item["Departure station name"];
  const returnStation = item.item["Return station name"];
  const coveredDistance = item.item["Covered distance (m)"];
  const duration = item.item["Duration (sec"][")"];
  console.log(departureStation, coveredDistance, returnStation, duration);

  return (
    <div className="border my-5 p-5">
      <h1>Departure Station Name: {departureStation}</h1>
      <p>Return Station Name: {returnStation} </p>
      <p>Covered Distance: {(coveredDistance / 1000).toFixed(2)} Kilometeres</p>
      <p>Duration: {Math.ceil(duration / 60)} minutes</p>
    </div>
  );
};

export default JourneyListForm;
//departure and return stations, covered distance in kilometers and duration in minutes
