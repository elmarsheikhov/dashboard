import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../layouts/dashboard/Dashboard";
import Customers from "../layouts/customers/Customers";
import Products from "../layouts/product/Products";
import Statistics from "../layouts/settings/Statistics";
import { ThemeContext } from "../App";
function Router() {
  const darkTheme = React.useContext(ThemeContext);
  const themeStyles = {
    color: darkTheme ? "#fafafa" : "#555 ",
    backgroundColor: darkTheme ? "#555 " : "#fafafa",
  };
  const TABS = [
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
  ];
  return (
    <div style={{ ...themeStyles, minHeight: "100vh" }}>
      <Routes>
        <Route path="*" element={<Navigate to="/dashboard" />} />
        {TABS.map((item, key) => (
          <Route exact key={key} path={item.path} element={item.element} />
        ))}
      </Routes>
    </div>
  );
}

export default Router;
