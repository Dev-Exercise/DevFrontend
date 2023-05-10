import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import JourneyListForm from "./JorneyListForm";

const PaginationExample = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  console.log("Current Page is: ", currentPage);
  const [itemsPerPage] = useState(12);
  useEffect(() => {
    fetch("http://localhost:3001/journey-data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="capitalize font-semibold text-red-500 mb-5">
        You are visitng page number {currentPage + 1}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {currentItems.map((item, index) => (
          <JourneyListForm key={item._id} item={item}></JourneyListForm>
        ))}
      </div>
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
  );
};

export default PaginationExample;
