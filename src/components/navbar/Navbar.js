import React from "react";
import "./Navbar.css";
import Theme from "../theme/Theme";
import Dropdown from "../dropdown/Dropdown";
import user_menu from "../../assets/json/user_menus.json";
import notification from "../../assets/json/notification.json";
import language_list from "../../assets/json/language_list.json";
import image from "../../assets/images/image.jpg";

function Navbar({ clickedItem, setClickedItem }) {
  const user = {
    name: "Mike Tyson",
    image: image,
  };
  const renderUser = (user) => (
    <div className="d-flex align-items-center gap-3">
      <img className="image" src={image} />
      <h5>{user.name}</h5>
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
    <div className="navbar py-3 mb-4 ">
      <div className="nav-right d-flex justify-content-between w-100 gap-3 p-3">
        {/* Dropdown 1 */}
        <Dropdown
          data={user_menu}
          renderItems={(item, index) => renderUserMenu(item, index)}
          renderUser={() => renderUser(user)}
        />

        <div className="d-flex gap-4 justify-content-center align-items-center">
          {/* Dropdown 2 */}
          <div className="dropdown_item">
            <Dropdown
              data={language_list}
              icon="bx bx-reset"
              renderItems={(item, index) => renderNotificationItem(item, index)}
            />
          </div>
          {/* Dropdown 3*/}
          <div className="dropdown_item">
            <Dropdown
              data={notification}
              icon="bx bx-bell"
              badge="12"
              renderItems={(item, index) => renderNotificationItem(item, index)}
              renderFooter={() => <a>View All</a>}
            />
          </div>

          <div
            className=" px-2 fs-2 d-flex justify-content-center align-items-center dropdown_item"
            style={{ cursor: "pointer" }}
            onClick={() => setIsOpen(true)}
          >
            <i class="bx bx-palette"></i>
          </div>
        </div>
      </div>
      <Theme
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        clickedItem={clickedItem}
        setClickedItem={setClickedItem}
      />
    </div>
  );
}

export default Navbar;
