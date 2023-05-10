import Papa from "papaparse";
import { useState } from "react";

export default function Form() {
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
    fetch("http://localhost:3001/import-journey", {
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
    fetch("http://localhost:3001/import-station", {
      method: "POST",
      body: formData,
    });
    alert("Request Sent");
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <div>
        <form
          onSubmit={handleJourney}
          className="border rounded-md shadow-lg mb-10 p-5 w-96"
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
          className="border rounded-md shadow-lg p-5 w-96"
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
  );
}
