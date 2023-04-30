import React from "react";
import "./Dropdown.css";

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener("mousedown", (e) => {
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle("active");
    } else {
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active");
      }
    }
  });
};

function Dropdown({
  data,
  renderItems,
  renderUser,
  icon,
  badge,
  renderFooter,
}) {
  const dropdown_toggle_el = React.useRef(null);
  const dropdown_content_el = React.useRef(null);

  clickOutsideRef(dropdown_content_el, dropdown_toggle_el);
  return (
    <div className="dropdown">
      <div ref={dropdown_toggle_el} className="dropdown_toggle">
        {icon ? <i className={`${icon} fs-1`}></i> : null}
        {badge ? <span>{badge}</span> : null}
        {renderUser ? renderUser() : null}
      </div>
      <div ref={dropdown_content_el} className="dropdown_content">
        {data && renderItems
          ? data.map((item, index) => renderItems(item, index))
          : null}
        {renderFooter ? (
          <button className="dropdown_footer btn btn-primary">
            {renderFooter()}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Dropdown;
