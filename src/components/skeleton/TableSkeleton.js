import React from "react";
import { Skeleton } from "antd";
import "./TableSkeleton.css";
function TableSkeleton() {
  return (
    <div className="each_row">
      <div className="skeleton"></div>
      <div className="skeleton"></div>
      <div className="skeleton"></div>
      <div className="skeleton"></div>
      <div className="skeleton"></div>
    </div>
  );
}

export default TableSkeleton;
