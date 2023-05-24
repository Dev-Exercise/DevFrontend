import Papa from "papaparse";
import { useState } from "react";
import Header from "./components/Header/Header";
import NewJourney from "./components/NewJourney/NewJourney";

export default function Import() {
  const [jouneryFile, setJourneyFile] = useState(null);
  const [stationFile, setStationFile] = useState(null);

  const handleFileChange1 = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    setJourneyFile(file);

    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     const csvData = reader.result;
    //     const parsedData = Papa.parse(csvData, { header: true }).data;

    //     // Do something with the parsed data from file 1
    //     console.log("File 1 data:", parsedData);
    //   };
    //   reader.readAsText(file);
    // }
  };

  const handleFileChange2 = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    setStationFile(file);
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     const csvData = reader.result;
    //     const parsedData = Papa.parse(csvData, { header: true }).data;

    //     // Do something with the parsed data from file 2
    //     console.log("File 2 data:", parsedData);
    //   };
    //   reader.readAsText(file);
    // }
  };

  const handleJourney = (e) => {
    e.preventDefault();
    // console.log(jouneryFile);

    const formData = new FormData();
    formData.append("csv", jouneryFile);
    fetch("https://journey-backend-d8wk.onrender.com/import-journey", {
      method: "POST",
      body: formData,
    });

    alert("Request Sent");
  };

  const handleStation = (e) => {
    e.preventDefault();
    // console.log(stationFile);

    const formData = new FormData();
    formData.append("csv", stationFile);
    fetch("https://journey-backend-d8wk.onrender.com/import-station", {
      method: "POST",
      body: formData,
    });
    alert("Request Sent");
  };

  return (
    <>
      <Header />
      <main className="flex justify-around gap-10">
        <NewJourney />

        <div className="flex gap-5 mt-10">
          <form
            onSubmit={handleJourney}
            className="border rounded-md shadow-lg mb-10 p-5 w-96 h-48"
          >
            <label
              htmlFor="file1"
              className="mb-2 block text-lg font-medium text-gray-700"
            >
              Journey List:
            </label>
            <input
              type="file"
              id="file1"
              accept=".csv"
              onChange={handleFileChange1}
              className="mb-4"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>

          <form
            onSubmit={handleStation}
            className="border rounded-md shadow-lg p-5 w-96 h-48"
          >
            <label
              htmlFor="file2"
              className="mb-2 block text-lg font-medium text-gray-700"
            >
              Station List:
            </label>
            <input
              type="file"
              id="file2"
              accept=".csv"
              onChange={handleFileChange2}
              className="mb-4"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
