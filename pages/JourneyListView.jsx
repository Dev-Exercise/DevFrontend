import React, { useState, useEffect, useMemo } from "react";
import ReactPaginate from "react-paginate";
import JourneyListForm from "./components/JourneyListView/JorneyListForm";
import Header from "./components/Header/Header";

const PaginationExample = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  console.log(search);

  // dropdown start

  const [filter, setFilter] = useState("");
  const [duration, setDuration] = useState(" ");
  const [distance, setDistance] = useState(" ");

  const handleOptionChange = (option) => {
    setFilter(option);
    switch (option) {
      case "option1":
        setDuration(600);
        break;
      case "option2":
        setDistance(2000);
        break;
      default:
        // Default action
        break;
    }
  };

  // dropdown end

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const [itemsPerPage] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/journey-data?search=${search}&distance=${distance}&duration=${duration}`
        );

        if (!response.ok) {
          throw new Error("Request failed");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [search, duration, distance]);

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between">
          <div className="my-4">
            <h1 className="font-bold text-lg mb-3">
              Search For Departure Station Name Here
            </h1>
            <input
              type="text"
              placeholder="Search Here"
              className=" px-4 w-80 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleSearch}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="dropdown" className="mr-2 text-gray-700">
              Select an option:
            </label>
            <select
              id="dropdown"
              value={filter}
              onChange={(e) => handleOptionChange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            >
              <option value="">-- Select --</option>
              <option value="option1">Duration Greater Than 10 Minutes</option>
              <option value="option2">
                Covered Distance Greater Than 2 KM
              </option>
            </select>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          {currentItems.map((item, index) => (
            <JourneyListForm key={item._id} item={item}></JourneyListForm>
          ))}
        </div>
        <h1 className="capitalize font-bold text-red-500 mb-5">
          You are visitng page number {currentPage + 1}
        </h1>
        <ReactPaginate
          pageCount={Math.ceil(data.length / itemsPerPage)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          previousLabel="Prev"
          nextLabel="Next"
          breakLabel="..."
          onPageChange={handlePageChange}
          containerClassName="flex space-x-8"
          pageClassName="rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 cursor-pointer"
          activeClassName="bg-blue-500 text-red-500 font-semibold	"
          previousClassName="rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 cursor-pointer text-[14px]"
          nextClassName="rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 cursor-pointer text-[14px]"
          breakClassName="rounded-full w-8 h-8 flex items-center justify-center bg-gray-200"
          forcePage={currentPage}
          disableInitialCallback
        />
      </div>
    </>
  );
};

export default PaginationExample;
