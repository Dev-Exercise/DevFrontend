import React, { useEffect, useState } from "react";
import axios from "axios";
import JourneyListForm from "./JorneyListForm";

const JourneyListView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://journey-backend-7be5.onrender.com/journey-data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        // console.log(data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="p-5">
      {data.length > 0 ? (
        data.map((item) => (
          <JourneyListForm key={item._id} item={item}></JourneyListForm>
        ))
      ) : (
        <h1 className="text-center my-5">Data Loading...</h1>
      )}
    </div>
  );
};

export default JourneyListView;
