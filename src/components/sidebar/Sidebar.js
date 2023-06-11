import React from "react";
import "../sidebar/Sidebar.css";
import sidebarlinks from "../../assets/json/sidebar_routes.json";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/seniorlogohr.svg";
import logoDark from "../../assets/images/Logo.png";

function Sidebar({ setIsOpen, isOpen, setIsPadding, isMobile }) {
  const sidebarRef = React.useRef(null);

  const [isDarkMode, setIsDarkMode] = React.useState(
    localStorage.getItem("themeMode") === "theme-mode-dark" || false
  );
  const logoSrc = isDarkMode ? logoDark : logo;

  React.useEffect(() => {
    localStorage.setItem("sidebarOpen", isOpen);
  }, [isOpen]);

  React.useEffect(() => {
    setIsDarkMode(localStorage.getItem("themeMode") === "theme-mode-dark");
  });

  React.useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    });
  }, [sidebarRef]);

  return isMobile ? (
    <div ref={sidebarRef}>
      {!isOpen && (
        <div className="">
          <i
            class="bx bx-menu fs-1 menu_button_inMobile"
            onClick={() => setIsOpen(!isOpen)}
          ></i>
        </div>
      )}
      {isOpen && (
        <div
          className="sidebar_main shadow"
          style={{
            width: "300px",
          }}
        >
          <div className="d-flex justify-content-center gap-3 py-5">
            <img className="logo_brand w-50" src={logoSrc} alt="Logo" />
            <div
              className="d-flex justify-content-center align-items-center"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <i class="bx bx-menu-alt-right fs-1 menu_button"></i>
            </div>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center">
            {sidebarlinks.map((item, index) => (
              <NavLink
                key={index}
                to={`${item.route}`}
                className={`menu_item fw-bold w-75 py-3 d-flex  align-items-center gap-2  ${"justify-content-start"}`}
              >
                <i className={`menu_icon ${item.icon}`}></i>
                <span className="item_display_name">{item.display_name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  ) : (
    <div
      className="sidebar_main"
      style={{
        width: isOpen ? "300px" : "80px",
      }}
    >
      <div className="d-flex justify-content-center gap-3 py-5">
        {isOpen ? (
          <img className="logo_brand w-50" src={logoSrc} alt="Logo" />
        ) : null}

        <div
          className="d-flex justify-content-center align-items-center"
          onClick={() => {
            setIsOpen(!isOpen);
            setIsPadding(!isOpen);
          }}
        >
          {isOpen ? (
            <i class="bx bx-menu-alt-right fs-1 menu_button"></i>
          ) : (
            <i class="bx bx-menu fs-1 menu_button "></i>
          )}
        </div>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center">
        {sidebarlinks.map((item, index) => (
          <NavLink
            key={index}
            to={`${item.route}`}
            className={`menu_item fw-bold w-75 py-3 d-flex  align-items-center gap-2  ${
              !isOpen ? "justify-content-center" : "justify-content-start"
            }`}
          >
            <i className={`menu_icon ${item.icon}`}></i>
            {isOpen ? (
              <span className="item_display_name">{item.display_name}</span>
            ) : (
              ""
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
