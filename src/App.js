import React, { useState, useEffect } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Router from "./router/Router";
import { theme } from "antd";
const ThemeContext = React.createContext();
function App() {
  const [clickedItem, setClickedItem] = React.useState(false);
  const [isPadding, setIsPadding] = React.useState(true);
  const [themeClass, setThemeClass] = React.useState(null);
  const [colorClass, setColorClass] = React.useState(null);
  useEffect(() => {
    setThemeClass(localStorage.getItem("themeMode", "theme-mode-light"));
    setColorClass(localStorage.getItem("colorMode", "theme-mode-light"));
  }, [clickedItem]);
  return (
    <ThemeContext.Provider value={(themeClass, colorClass)}>
      <div className={`d-flex ${themeClass} ${colorClass}`}>
        <div className="child-1">
          <Sidebar isPadding={isPadding} setIsPadding={setIsPadding} />
        </div>
        <div
          className="child-2"
          style={{ paddingLeft: isPadding ? "340px" : "120px" }}
        >
          <Navbar clickedItem={clickedItem} setClickedItem={setClickedItem} />
          <Router />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
export { ThemeContext };
export default App;
