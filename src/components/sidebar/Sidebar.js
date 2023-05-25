import React from "react";
import "../sidebar/Sidebar.css";
import sidebarlinks from "../../assets/json/sidebar_routes.json";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/seniorlogohr.svg";
import logoDark from "../../assets/images/Logo.png";
function Sidebar({ isPadding, setIsPadding }) {
  // const themestyle = React.useContext(ThemeContext);

  // const [isOpen, setIsOpen] = React.useState(true);

  const [isOpen, setIsOpen] = React.useState(
    localStorage.getItem("sidebarOpen") === "true" || false
  );
  const [isDarkMode, setIsDarkMode] = React.useState(
    localStorage.getItem("themeMode") === "theme-mode-dark" || false
  );
  // console.log(isDarkMode);
  const logoSrc = isDarkMode ? logoDark : logo;
  React.useEffect(() => {
    localStorage.setItem("sidebarOpen", isOpen);
  }, [isOpen]);
  React.useEffect(() => {
    setIsDarkMode(localStorage.getItem("themeMode") === "theme-mode-dark");
  }, []);
  return (
    <div
      className="sidebar-main"
      style={{
        width: isOpen ? "300px" : "80px",
      }}
    >
      <div className="d-flex justify-content-center gap-3 py-5">
        {isOpen && <img className="w-50" src={logoSrc} alt="Logo" />}

        <div
          className="d-flex justify-content-center align-items-center"
          onClick={() => {
            setIsOpen(!isOpen);
            setIsPadding(!isOpen);
          }}
        >
          {/* <img className="d-lg-none" src={logohalf} style={{ width: "32px" }} /> */}
          {isOpen ? (
            <i class="bx bx-menu-alt-right fs-1 menu-button"></i>
          ) : (
            <i class="bx bx-menu fs-1 menu-button "></i>
          )}
        </div>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center">
        {sidebarlinks.map((item, index) => (
          <NavLink
            key={index}
            to={item.route}
            className={`menu-item fw-bold w-75 py-3 d-flex  align-items-center gap-2  ${
              !isOpen ? "justify-content-center" : "justify-content-start"
            }`}
          >
            <i className={`menu-icon ${item.icon}`}></i>
            {isOpen ? <span>{item.display_name}</span> : ""}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
