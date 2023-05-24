import React, { useState } from "react";
import axios from "axios";

const NewJourney = () => {
  const [journeyData, setJourneyData] = useState({
    Departure: "",
    Return: "",
    "Departure station id": "",
    "Departure station name": "",
    "Return station id": "",
    "Return station name": "",
    "Covered distance (m)": "",
    "Duration (sec)": "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJourneyData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://journey-backend-d8wk.onrender.com/newJourney",
        journeyData
      );
      alert("Journey saved successfully");
    } catch (error) {
      console.error("An error occurred while saving the journey:", error);
    }
  };

  return (
    <div className="mt-10">
      <h1 className="font-semibold text-xl mb-4">Create a New Journey</h1>
      <form onSubmit={handleSubmit} className="max-w-sm">
        <div className="mb-4">
          <label className="block mb-2">
            Departure:
            <input
              type="date"
              name="Departure"
              value={journeyData.Departure}
              onChange={handleChange}
              className="border border-gray-400 px-2 py-1 w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Return:
            <input
              type="date"
              name="Return"
              value={journeyData.Return}
              onChange={handleChange}
              className="border border-gray-400 px-2 py-1 w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Departure station ID:
            <input
              type="number"
              name="Departure station id"
              value={journeyData["Departure station id"]}
              onChange={handleChange}
              className="border border-gray-400 px-2 py-1 w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Departure station name:
            <input
              type="text"
              name="Departure station name"
              value={journeyData["Departure station name"]}
              onChange={handleChange}
              className="border border-gray-400 px-2 py-1 w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Return station ID:
            <input
              type="number"
              name="Return station id"
              value={journeyData["Return station id"]}
              onChange={handleChange}
              className="border border-gray-400 px-2 py-1 w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Return station name:
            <input
              type="text"
              name="Return station name"
              value={journeyData["Return station name"]}
              onChange={handleChange}
              className="border border-gray-400 px-2 py-1 w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Covered distance ( m):
            <input
              type="number"
              name="Covered distance (m)"
              value={journeyData["Covered distance (m)"]}
              onChange={handleChange}
              className="border border-gray-400 px-2 py-1 w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Duration (sec):
            <input
              type="number"
              name="Duration (sec)"
              value={journeyData["Duration (sec)"]}
              onChange={handleChange}
              className="border border-gray-400 px-2 py-1 w-full"
            />
          </label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-900 transition text-white px-4 py-2 rounded w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewJourney;
