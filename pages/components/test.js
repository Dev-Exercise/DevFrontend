import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import JourneyListForm from "./JourneyListView/JorneyListForm";

const PaginationExample = () => {
  const [data, setData] = useState([]); // The fetched data
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(10); // Number of items to display per page

  // Simulated data fetching
  //   useEffect(() => {
  //     // Fetch your data here or replace it with your actual API call
  //     const fetchData = async () => {
  //       // Simulating API response delay
  //       await new Promise((resolve) => setTimeout(resolve, 1000));

  //       // Mock data
  //       const mockData = Array.from(
  //         { length: 100 },
  //         (_, index) => `Item ${index + 1}`
  //       );

  //       setData(mockData);
  //     };

  //     fetchData();
  //   }, []);

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

  // Calculate the indexes of the current page's data
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Pagination Example</h1>
      {currentItems.map((item, index) => (
        <JourneyListForm key={item._id} item={item}></JourneyListForm>
      ))}
      <ReactPaginate
        pageCount={Math.ceil(data.length / itemsPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        previousLabel="Previous"
        nextLabel="Next"
        breakLabel="..."
        onPageChange={handlePageChange}
        containerClassName="flex space-x-2"
        pageClassName="rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 cursor-pointer"
        activeClassName="bg-blue-500 text-white"
        previousClassName="rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 cursor-pointer"
        nextClassName="rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 cursor-pointer"
        breakClassName="rounded-full w-8 h-8 flex items-center justify-center bg-gray-200"
        forcePage={currentPage} // Set the current page as the active page
        disableInitialCallback // Disable initial callback to prevent unnecessary re-rendering
      />
    </div>
  );
};

export default PaginationExample;
