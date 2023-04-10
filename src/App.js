import React, { useState, useEffect } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Router from "./router/Router";
const ThemeContext = React.createContext();
function App() {
  //state true halinda dark mode olur.
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", darkTheme ? "dark" : "light");
  }, [darkTheme]);

  const themeStyles = {
    backgroundColor: darkTheme ? "#555" : "#fafafa ",
    color: darkTheme ? "#fafafa" : "#555",
  };
  const [isPadding, setIsPadding] = React.useState(true);
  return (
    <ThemeContext.Provider value={darkTheme}>
      <div className="d-flex" style={themeStyles}>
        <div className="child-1">
          <Sidebar isPadding={isPadding} setIsPadding={setIsPadding} />
        </div>
        <div
          className="child-2"
          style={{ paddingLeft: isPadding ? "340px" : "120px" }}
        >
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Router />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };

export default App;
