import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

const CsvForm = () => {
  const [csvFile, setCsvFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCsvFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission of csvFile here, e.g. by sending it to a server
    console.log(csvFile);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto flex items-center justify-center h-screen"
    >
      <div className="flex items-center justify-center">
        <label htmlFor="csv-file" className="mr-3 cursor-pointer">
          <span className="border-2 border-gray-300 rounded-lg px-4 py-2 flex items-center">
            <FiUpload className="mr-2" /> Choose a CSV file
          </span>
        </label>
        <input
          type="file"
          id="csv-file"
          accept=".csv"
          onChange={handleFileChange}
          className="hidden"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CsvForm;
