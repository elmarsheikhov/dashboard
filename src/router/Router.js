import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../layouts/dashboard/Dashboard";
import Customers from "../layouts/customers/Customers";
import Products from "../layouts/product/Products";
import Statistics from "../layouts/statistics/Statistics";
import Settings from "../layouts/settings/Settings";
function Router() {
  const TABS = [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/customers",
      element: <Customers />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/statistics",
      element: <Statistics />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
  ];
  return (
    <div style={{ minHeight: "100vh" }}>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        {TABS.map((item, key) => (
          <Route exact key={key} path={item.path} element={item.element} />
        ))}
      </Routes>
    </div>
  );
}

export default Router;
