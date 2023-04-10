import React, { useState, useContext } from "react";
import "../assets/css/general.css";
import customer_list from "../assets/json/customers-list.json";
import "../assets/css/general.css";
import Table from "../components/table/Table";
const keys = Object.keys(customer_list[0]);
const headData = keys;
const bodyData = customer_list;

const renderCustomerBody = (item, index, keys) => (
  <tr key={index}>
    {keys.map((key) => (
      <td key={key} className="border p-2">
        {item[key]}
      </td>
    ))}
  </tr>
);
function Customers() {
  return (
    <div>
      <h2 className="mb-5">Top Customers</h2>
      <Table
        headData={headData}
        bodyData={bodyData}
        renderBody={(item, index) => renderCustomerBody(item, index, keys)}
      />
    </div>
  );
}

export default Customers;
