import React, { useEffect, useRef } from "react";
import "./Theme.css";
import "../../assets/css/theme.css";
import "../../assets/css/index.css";
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

function Theme({ isOpen, setIsOpen, clickedItem, setClickedItem }) {
  const [currMode, setCurrMode] = React.useState("light");
  const [currColor, setCurrColor] = React.useState("blue");
  const setMode = (mode) => {
    setCurrMode(mode.id);
    localStorage.setItem("themeMode", mode.class);
  };
  const setColor = (color) => {
    setCurrColor(color.id);
    localStorage.setItem("colorMode", color.class);
  };
  React.useEffect(() => {
    const themeClass = mode_settings.find(
      (e) => e.class === localStorage.getItem("themeMode", "theme-mode-light")
    );
    const colorClass = color_settings.find(
      (e) => e.class === localStorage.getItem("colorMode", "theme-mode-light")
    );

    if (themeClass !== undefined) setCurrMode(themeClass.id);

    if (colorClass !== undefined) setCurrColor(colorClass.id);
  }, []);

  const refing = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (refing.current && !refing.current.contains(e.target)) {
        setIsOpen(false);
      }
    });
  }, [refing]);

  return (
    <React.Fragment>
      <div ref={refing} className={`theme ${isOpen ? "open" : ""}`}>
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
              {mode_settings.map((item, index) => (
                <li
                  className="mood_item"
                  onClick={() => (setMode(item), setClickedItem(!clickedItem))}
                >
                  <i
                    className="bx bxs-circle"
                    style={{ color: item.id === "light" ? "white" : "black" }}
                  ></i>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5">
            <div>Choose color</div>
            <ul className=" d-flex mt-3 flex-column gap-3">
              {color_settings.map((item, index) => (
                <li
                  className="color_item"
                  onClick={() => (setColor(item), setClickedItem(!clickedItem))}
                >
                  <i
                    className={`bx bxs-paint-roll`}
                    style={{ color: `${item.id}` }}
                  ></i>

                  <span>{item.name}</span>
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
