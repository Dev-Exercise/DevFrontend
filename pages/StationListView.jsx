import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ReactPaginate from "react-paginate";
import SingleStation from "./components/StationListView/SingleStation";

const StationListView = () => {
  const [data, setData] = useState([]);
  //   console.log(data);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  //   console.log(search);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const [itemsPerPage] = useState(20);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://journey-backend-d8wk.onrender.com/station-data?search=${search}`
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
  }, [search]);

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
            <h1 className="font-bold text-lg mb-3">Search For Station Here</h1>
            <input
              type="text"
              placeholder="Search Here"
              className=" px-4 w-80 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
          {currentItems.map((item, index) => (
            <SingleStation key={index} item={item}></SingleStation>
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

export default StationListView;
