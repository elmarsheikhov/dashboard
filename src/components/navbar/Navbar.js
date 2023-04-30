import React from "react";
import "./Navbar.css";
import Theme from "../theme/Theme";
import Dropdown from "../dropdown/Dropdown";
import user_menu from "../../assets/json/user_menus.json";
import notification from "../../assets/json/notification.json";
import catImage from "../../assets/images/cat-img.jpg";

function Navbar({ darkTheme, setDarkTheme }) {
  const user = {
    name: "Elmar Sheikhov",
    image: catImage,
  };
  const renderUser = (user) => (
    <div className="d-flex align-items-center gap-3">
      <img src={catImage} width={60} style={{ borderRadius: "35%" }} />
      <div>{user.name}</div>
    </div>
  );
  const renderUserMenu = (item, index) => (
    <div
      key={index}
      className="user_menu_item"
      // style={{ cursor: "pointer" }}
    >
      <i className={`${item.icon} fs-4`}></i>
      <span>{item.content}</span>
    </div>
  );
  const renderNotificationItem = (item, index) => (
    <div key={index} className="notification_menu_item ">
      <i className={`${item.icon} fs-4`}></i>
      <span>{item.content}</span>
    </div>
  );

  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="py-3 mb-4 d-flex justify-content-between align-items-center">
      <div className="parent">
        <input
          className="navbar-input py-2 px-3 "
          placeholder="Search here..."
        />
        <i class="search-icon bx bx-search-alt"></i>
      </div>
      <div className="nav-right d-flex gap-3 p-3">
        {/* Dropdown 1 */}
        <div>
          <Dropdown
            data={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
            renderUser={() => renderUser(user)}
          />
        </div>

        {/* Dropdown 2 */}
        <div>
          <Dropdown
            data={notification}
            icon="bx bx-bell"
            badge="12"
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <a>View All</a>}
          />
        </div>

        <div
          className="px-2 fs-2 d-flex justify-content-center align-items-center"
          style={{ cursor: "pointer" }}
          onClick={() => setIsOpen(true)}
        >
          <i class="bx bx-palette"></i>
        </div>
      </div>

      <Theme
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
      />
    </div>
  );
}

export default Navbar;
