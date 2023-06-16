import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagination() {
  const { page, totalPages, handlePageChange } = useContext(AppContext);

  return (
    <div className="py-5 lg:px-40 px-5  bg-[#F4F4F4] flex justify-between fixed bottom-0 w-full">
      <div>
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="bg-[#65A3CB] text-white py-2 px-4 rounded-md mr-2"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="bg-[#65A3CB] text-white py-2 px-4 rounded-md ml-2"
          >
            Next
          </button>
        )}
      </div>
      <div>
        <span className="font-bold">
          Page {page} of {totalPages}
        </span>
      </div>
    </div>
  );
}

export default Pagination;
