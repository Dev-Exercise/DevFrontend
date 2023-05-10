import { FiUpload } from "react-icons/fi";

const StationForm = () => {
  const [stationFile, setStationFile] = useState(null);

  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    setStationFile(file);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Handle Submit", stationFile);
    const formData = new FormData();
    formData.append("csv", stationFile);
    fetch("http://localhost:3001/import", {
      method: "POST",
      body: formData,
    });

    alert("Request Sent");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="max-w-lg mx-auto flex items-center justify-center mt-9 pt-9 mb-2"
    >
      <h1 className="text-center mr-5">Station List</h1>
      <div className="flex items-center justify-center">
        <label htmlFor="" className="mr-3 cursor-pointer">
          <span className="border-2 border-gray-300 rounded-lg px-4 py-2 flex items-center">
            <FiUpload className="mr-2" /> Choose a CSV file
          </span>
        </label>
        <input
          type="file"
          id="csv-file-station"
          accept=".csv"
          onChange={fileChangeHandler}
          className="hidden"
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

export default StationForm;
