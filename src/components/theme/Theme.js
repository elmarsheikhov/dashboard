import React, { useEffect, useRef } from "react";
import "./Theme.css";
import { ThemeContext } from "../../App";
function Theme({ isOpen, setIsOpen, darkTheme, setDarkTheme }) {
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

  const colors = ["Blue", "Red", "Cyan", "Green", "Orange"];

  return (
    <React.Fragment>
      {!!isOpen && (
        <div ref={refing} className="theme p-3" style={themeStyles}>
          <div className="theme-header d-flex justify-content-between align-items-center gap-2 ">
            <h4>Theme settings</h4>
            <i
              class="theme-icon bx bx-window-close fs-3"
              onClick={() => setIsOpen(false)}
            ></i>
          </div>
          <div className="theme-body mt-4">
            <div className="choose-mood">
              <div>Choose mood</div>
              <ul className="mt-3 d-flex flex-column gap-3">
                <li
                  className="mood-item py-2"
                  onClick={() => setDarkTheme(false)}
                >
                  <i class="bx bxs-circle" style={{ color: "white" }}></i>
                  <span>Light</span>
                </li>

                <li
                  className="mood-item py-2"
                  onClick={() => setDarkTheme(true)}
                >
                  <i class="bx bxs-circle" style={{ color: "black" }}></i>
                  <span>Dark</span>
                </li>
              </ul>
            </div>
            <div className="choose-color mt-5">
              <div>Choose color</div>
              <ul className="mt-3 d-flex flex-column gap-3">
                {colors.map((item, index) => (
                  <li className="color-item py-2">
                    <i class="bx bxs-paint-roll" style={{ color: item }}></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Theme;
