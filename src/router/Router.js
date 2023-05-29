import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../layouts/dashboard/Dashboard";
import Customers from "../layouts/customers/Customers";
import Products from "../layouts/product/Products";
import Statistics from "../layouts/statistics/Statistics";
import Settings from "../layouts/settings/Settings";

function Router() {
  const BASE_PATH = "/admin";

  const TABS = [
    {
      path: "/",
      element: <Navigate to={`${BASE_PATH}`} />,
    },

    {
      path: `${BASE_PATH}/dashboard`,
      element: <Dashboard />,
    },
    {
      path: `${BASE_PATH}/customers`,
      element: <Customers />,
    },
    {
      path: `${BASE_PATH}/products`,
      element: <Products />,
    },
    {
      path: `${BASE_PATH}/statistics`,
      element: <Statistics />,
    },
    {
      path: `${BASE_PATH}/settings`,
      element: <Settings />,
    },
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <Routes>
        <Route path="/" element={<Navigate to={`${BASE_PATH}/dashboard`} />} />
        <Route
          path="/admin"
          element={<Navigate to={`${BASE_PATH}/dashboard`} />}
        />

        {TABS.map((item, key) => (
          <Route exact key={key} path={item.path} element={item.element} />
        ))}
      </Routes>
    </div>
  );
}

export default Router;
