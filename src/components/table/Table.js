import React, { useState } from "react";
import "./Table.css";
import { ThemeContext } from "../../App";
function Table({ headData, bodyData, setId }) {
  const darkTheme = React.useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#444" : "#fafafa",
    color: darkTheme ? "#fafafa" : "#444",
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLimit, setSelectedLimit] = useState(10);
  const [itemIndex, setItemIndex] = useState(0);
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
            style={themeStyles}
            className=""
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div>
          <div className="pagination-block d-flex py-2">
            {pageNumbers.map((pageNumber) => (
              <div
                key={pageNumber}
                className={`page-number ${
                  pageNumber === currentPage ? "active" : ""
                } py-2 px-3`}
                onClick={() => handlePageClick(pageNumber)}
              >
                {pageNumber}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-4">
      <table className="table mb-3" style={themeStyles}>
        <thead>
          <tr>
            {headData.map((item, index, headData) => (
              <th key={index} className="head_elements p-3">
                {item}
              </th>
            ))}
            <th className=" p-3 text-center ">Info</th>
          </tr>
        </thead>
        <tbody>
          {slicedData.map((item, index) => (
            <tr key={index}>
              {headData.map((key) => {
                if (key === "image") {
                  return (
                    <td key={key} className="p-3">
                      <img
                        src={item[key]}
                        alt={item["title"]}
                        width="50"
                        height="50"
                      />
                    </td>
                  );
                }
                return (
                  <td key={key} className="p-3 text-center">
                    {typeof item[key] === "object"
                      ? JSON.stringify(item[key])
                      : item[key]}
                  </td>
                );
              })}
              <td className="text-center p-2 ">
                <i
                  className="info-element bx bx-info-circle fs-3 d-flex justify-content-center align-items-center"
                  onClick={() => {
                    setId(index + selectedLimit * (currentPage - 1) + 1);
                    setItemIndex(index + selectedLimit * (currentPage - 1));
                  }}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {renderPagination()}
    </div>
  );
}

export default Table;
