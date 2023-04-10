import React, { useState, useEffect } from "react";
import Table from "../components/table/Table";
function Products() {
  const [customerData, setCustomerData] = useState([]);

  const API_LINK = "https://fakestoreapi.com/products";
  const getCustomers = async () => {
    try {
      const response = await fetch(API_LINK);

      if (!response.ok) {
        const msg = `There was an error ${response.status} ${response.statusText}`;
        throw new Error(msg);
      }
      const customers = await response.json();
      setCustomerData(customers);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCustomers();
  }, []);

  const keys =
    customerData.length > 0
      ? Object.keys(customerData[0]).filter((key) => key !== "description")
      : [];
  const headData = keys;
  const bodyData = customerData;

  const renderCustomerBody = (item, index, keys) => (
    <tr key={index}>
      {keys.map((key) => {
        if (key === "image") {
          return (
            <td key={key} className="border p-2">
              <img src={item[key]} alt={item["title"]} width="50" height="50" />
            </td>
          );
        }
        return (
          <td key={key} className="border p-2">
            {typeof item[key] === "object"
              ? JSON.stringify(item[key])
              : item[key]}
          </td>
        );
      })}
    </tr>
  );

  return (
    <div>
      <h2 className="mb-5">Top Products</h2>
      <Table
        headData={headData}
        bodyData={bodyData}
        renderBody={(item, index) => renderCustomerBody(item, index, keys)}
      />
    </div>
  );
}

export default Products;
