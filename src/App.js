import React, { useState, useEffect } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Router from "./router/Router";
import { theme } from "antd";
const ThemeContext = React.createContext();
function App() {
  const [clickedItem, setClickedItem] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(
    localStorage.getItem("sidebarOpen") === "true" || false
  );
  const [isPadding, setIsPadding] = React.useState(isOpen);
  const [themeClass, setThemeClass] = React.useState(null);
  const [colorClass, setColorClass] = React.useState(null);
  const [viewportWidth, setViewportWidth] = React.useState(window.innerWidth);

  const data = { themeClass, colorClass };

  const isMobile = viewportWidth < 1000;

  if (isMobile) {
    if (isPadding) setIsPadding(false);
  } else {
    if (!isPadding && isOpen) setIsPadding(true);
  }

  useEffect(() => {
    setThemeClass(localStorage.getItem("themeMode", "theme-mode-light"));
    setColorClass(localStorage.getItem("colorMode", "theme-mode-light"));
  }, [clickedItem]);

  React.useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log("isPadding:" + isPadding, "isOpen:" + isOpen);
  return (
    <ThemeContext.Provider value={data}>
      <div className={`project_container d-flex ${themeClass} ${colorClass}`}>
        <div className={isMobile && !isOpen ? "child-1-inMobile" : "child-1"}>
          <Sidebar
            isPadding={isPadding}
            setIsPadding={setIsPadding}
            isMobile={isMobile}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
        <div
          className="child-2"
          style={{
            paddingLeft: isPadding ? "340px" : isMobile ? "40px" : "120px",
          }}
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
