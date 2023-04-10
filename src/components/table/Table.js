import React, { useState } from "react";
import "./Table.css";

function Table({ headData, bodyData, renderBody }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLimit, setSelectedLimit] = useState(5);

  const itemsPerPage = Number(selectedLimit);
  const totalPages = Math.ceil(bodyData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  if (endIndex > bodyData.length) {
    endIndex = bodyData.length;
  }
  const slicedData = bodyData.slice(startIndex, endIndex);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="pagination d-flex justify-content-between align-items-center">
        <div className="limit fs-5">
          <select
            name="limit"
            value={selectedLimit}
            onChange={(event) => setSelectedLimit(event.target.value)}
            className="border"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>

        <div className="d-flex">
          {pageNumbers.map((pageNumber) => (
            <div
              key={pageNumber}
              className={`page-number ${
                pageNumber === currentPage ? "active" : ""
              } border py-2 px-3`}
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </div>
          ))}
        </div>
      </div>
    );
  };
  const renderTableHead = (item, index) => (
    <th key={index} className="border px-3 py-2">
      {item}
    </th>
  );
  return (
    <div className="mb-5">
      <table className="customer_table text-center mb-3">
        <thead>
          <tr className="">
            {headData.map((item, index) => renderTableHead(item, index))}
          </tr>
        </thead>
        <tbody className="">
          {slicedData.map((item, index) => renderBody(item, index))}
        </tbody>
      </table>

      {renderPagination()}
    </div>
  );
}

export default Table;
