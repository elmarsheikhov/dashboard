import React, { useEffect, useRef } from "react";
import "./Theme.css";
import { ThemeContext } from "../../App";
const mode_settings = [
  {
    id: "light",
    name: "Light",
    background: "light-background",
    class: "theme-mode-light",
  },
  {
    id: "dark",
    name: "Dark",
    background: "dark-background",
    class: "theme-mode-dark",
  },
];

const color_settings = [
  {
    id: "blue",
    name: "Blue",
    background: "blue-color",
    class: "theme-color-blue",
  },
  {
    id: "red",
    name: "Red",
    background: "red-color",
    class: "theme-color-red",
  },
  {
    id: "cyan",
    name: "Cyan",
    background: "cyan-color",
    class: "theme-color-cyan",
  },
  {
    id: "green",
    name: "Green",
    background: "green-color",
    class: "theme-color-green",
  },
  {
    id: "orange",
    name: "Orange",
    background: "orange-color",
    class: "theme-color-orange",
  },
];
function Theme({ isOpen, setIsOpen, setDarkTheme }) {
  const themeStyles = {
    backgroundColor: React.useContext(ThemeContext) ? "#444" : "#fafafa ",
    color: React.useContext(ThemeContext) ? "#fafafa" : "#444",
  };
  const refing = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (refing.current && !refing.current.contains(e.target)) {
        setIsOpen(false);
      }
    });
  }, [refing]);

  const moods = ["White", "Black"];
  const colors = ["Blue", "Red", "Cyan", "Green", "Orange"];

  return (
    <React.Fragment>
      <div
        ref={refing}
        className={`theme ${isOpen ? "open" : ""}`}
        style={themeStyles}
      >
        <div className="theme-header d-flex justify-content-between align-items-center gap-2 ">
          <h4>Theme settings</h4>
          <i
            class="theme_icon bx bx-window-close"
            onClick={() => setIsOpen(false)}
          ></i>
        </div>
        <div className="mt-4">
          <div className="">
            <div>Choose mood</div>
            <ul className="d-flex flex-column gap-3 mt-3 ">
              {moods.map((item, index) => (
                <li
                  className="mood_item"
                  onClick={() => setDarkTheme(item === "Black" ? true : false)}
                >
                  <i class="bx bxs-circle" style={{ color: item }}></i>
                  <span>{item === "White" ? "Light" : "Dark"}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5">
            <div>Choose color</div>
            <ul className=" d-flex mt-3 flex-column gap-3">
              {colors.map((item, index) => (
                <li className="color_item ">
                  <i class="bx bxs-paint-roll" style={{ color: item }}></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Theme;
